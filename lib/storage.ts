import AsyncStorage from '@react-native-async-storage/async-storage';
import { DhikrSession, ProgramProgress } from '@/types';
import {
  persistGet,
  persistSet,
  persistRemove,
  preloadStorageKeys,
  persistGetSync,
} from '@/lib/persistent-storage';

const KEYS = {
  SESSIONS: 'zikr_sessions',
  PROGRAMS: 'zikr_programs',
  FAVORITES: 'zikr_favorites',
  STATS: 'zikr_stats',
  PREMIUM: 'zikr_premium',
  HAPTICS: 'zikr_haptics',
  LANGUAGE: 'app_language',
};

// ── Safe storage (AsyncStorage + web localStorage fallback) ──

async function storageGet(key: string): Promise<string | null> {
  return persistGet(key);
}

async function storageSet(key: string, value: string): Promise<boolean> {
  return persistSet(key, value);
}

const LEGACY_KEY_MAP: Record<string, string> = {
  niya_premium: KEYS.PREMIUM,
  niya_haptics: KEYS.HAPTICS,
  niya_stats: KEYS.STATS,
  niya_sessions: KEYS.SESSIONS,
  niya_programs: KEYS.PROGRAMS,
  niya_favorites: KEYS.FAVORITES,
};

export async function initializeStorage(): Promise<void> {
  for (const [oldKey, newKey] of Object.entries(LEGACY_KEY_MAP)) {
    try {
      const legacy = await AsyncStorage.getItem(oldKey);
      if (legacy === null) continue;
      const current = await persistGet(newKey);
      if (current === null) {
        await persistSet(newKey, legacy);
      }
    } catch {
      // ignore migration errors
    }
  }

  await preloadStorageKeys([
    ...Object.values(KEYS),
    'zikr_custom_tasbih',
    'zikr_tasbih_sessions',
    'zikr_tasbih_stats',
  ]);
}

async function storageRemove(key: string): Promise<void> {
  await persistRemove(key);
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function normalizeSessions(data: unknown): DhikrSession[] {
  if (!Array.isArray(data)) return [];
  return data.filter(
    (s): s is DhikrSession =>
      s !== null &&
      typeof s === 'object' &&
      typeof (s as DhikrSession).id === 'string' &&
      typeof (s as DhikrSession).dhikr_id === 'string' &&
      typeof (s as DhikrSession).current_count === 'number'
  );
}

function normalizeStringArray(data: unknown): string[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item): item is string => typeof item === 'string');
}

function normalizeProgramProgress(data: unknown): ProgramProgress[] {
  if (!Array.isArray(data)) return [];
  return data
    .filter(
      (p): p is ProgramProgress =>
        p !== null &&
        typeof p === 'object' &&
        typeof (p as ProgramProgress).program_id === 'string'
    )
    .map((p) => ({
      ...p,
      id: p.id ?? `prog_${p.program_id}`,
      current_day: typeof p.current_day === 'number' ? p.current_day : 1,
      completed_days: Array.isArray(p.completed_days)
        ? p.completed_days.filter((d): d is number => typeof d === 'number')
        : [],
      enrolled_at: p.enrolled_at ?? new Date().toISOString(),
      last_updated: p.last_updated ?? new Date().toISOString(),
    }));
}

function normalizeStats(data: unknown): StoredStats {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
  const result: StoredStats = {};
  for (const [date, value] of Object.entries(data as Record<string, unknown>)) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
    const entry = value as Record<string, unknown>;
    result[date] = {
      count: typeof entry.count === 'number' ? entry.count : 0,
      completed: typeof entry.completed === 'number' ? entry.completed : 0,
      time_seconds: typeof entry.time_seconds === 'number' ? entry.time_seconds : 0,
    };
  }
  return result;
}

// ── Language ──────────────────────────────────────────────

export async function getStoredLanguage(): Promise<string | null> {
  try {
    return await storageGet(KEYS.LANGUAGE);
  } catch {
    return null;
  }
}

export async function setStoredLanguage(lang: string): Promise<void> {
  try {
    await storageSet(KEYS.LANGUAGE, lang);
  } catch {
    // ignore
  }
}

export async function hasSelectedLanguage(): Promise<boolean> {
  try {
    const value = await storageGet(KEYS.LANGUAGE);
    return value !== null;
  } catch {
    return false;
  }
}

// ── Sessions ──────────────────────────────────────────────

export async function getSessions(): Promise<DhikrSession[]> {
  try {
    const raw = await storageGet(KEYS.SESSIONS);
    return normalizeSessions(safeParse(raw, []));
  } catch {
    return [];
  }
}

export async function getSession(dhikrId: string): Promise<DhikrSession | null> {
  try {
    const sessions = await getSessions();
    return sessions.find((s) => s.dhikr_id === dhikrId) ?? null;
  } catch {
    return null;
  }
}

export async function upsertSession(session: DhikrSession): Promise<void> {
  try {
    const sessions = await getSessions();
    const idx = sessions.findIndex((s) => s.dhikr_id === session.dhikr_id);
    const updated: DhikrSession = {
      ...session,
      last_updated: new Date().toISOString(),
    };
    if (idx >= 0) {
      sessions[idx] = { ...sessions[idx], ...updated };
    } else {
      sessions.push(updated);
    }
    await storageSet(KEYS.SESSIONS, JSON.stringify(sessions));
  } catch {
    // ignore
  }
}

export async function deleteSession(dhikrId: string): Promise<void> {
  try {
    const sessions = await getSessions();
    const filtered = sessions.filter((s) => s.dhikr_id !== dhikrId);
    await storageSet(KEYS.SESSIONS, JSON.stringify(filtered));
  } catch {
    // ignore
  }
}

export async function getActiveSessions(): Promise<DhikrSession[]> {
  try {
    const sessions = await getSessions();
    return sessions.filter((s) => !s.completed && s.current_count > 0);
  } catch {
    return [];
  }
}

// ── Programs ──────────────────────────────────────────────

export async function getProgramsProgress(): Promise<ProgramProgress[]> {
  try {
    const raw = await storageGet(KEYS.PROGRAMS);
    return normalizeProgramProgress(safeParse(raw, []));
  } catch {
    return [];
  }
}

export async function getProgramProgress(programId: string): Promise<ProgramProgress | null> {
  try {
    const programs = await getProgramsProgress();
    return programs.find((p) => p.program_id === programId) ?? null;
  } catch {
    return null;
  }
}

export async function upsertProgramProgress(progress: ProgramProgress): Promise<void> {
  try {
    const programs = await getProgramsProgress();
    const idx = programs.findIndex((p) => p.program_id === progress.program_id);
    const updated = { ...progress, last_updated: new Date().toISOString() };
    if (idx >= 0) {
      programs[idx] = { ...programs[idx], ...updated };
    } else {
      programs.push(updated);
    }
    await storageSet(KEYS.PROGRAMS, JSON.stringify(programs));
  } catch {
    // ignore
  }
}

export async function enrollProgram(programId: string): Promise<ProgramProgress> {
  const existing = await getProgramProgress(programId);
  if (existing) return existing;

  const progress: ProgramProgress = {
    id: `local_${programId}`,
    program_id: programId,
    current_day: 1,
    completed_days: [],
    enrolled_at: new Date().toISOString(),
    last_updated: new Date().toISOString(),
  };
  await upsertProgramProgress(progress);
  return progress;
}

export async function markProgramDayComplete(
  programId: string,
  dayNumber: number,
  durationDays: number
): Promise<ProgramProgress | null> {
  try {
    let progress = await getProgramProgress(programId);
    if (!progress) {
      progress = await enrollProgram(programId);
    }

    const completed = progress.completed_days.includes(dayNumber)
      ? progress.completed_days
      : [...progress.completed_days, dayNumber].sort((a, b) => a - b);

    const nextDay = Math.min(dayNumber + 1, durationDays);
    const updated: ProgramProgress = {
      ...progress,
      completed_days: completed,
      current_day: nextDay,
      last_updated: new Date().toISOString(),
    };
    await upsertProgramProgress(updated);
    return updated;
  } catch {
    return null;
  }
}

// ── Favorites ─────────────────────────────────────────────

export async function getFavorites(): Promise<string[]> {
  try {
    const raw = await storageGet(KEYS.FAVORITES);
    return normalizeStringArray(safeParse(raw, []));
  } catch {
    return [];
  }
}

export async function toggleFavorite(dhikrId: string): Promise<boolean> {
  try {
    const favs = await getFavorites();
    const isFav = favs.includes(dhikrId);
    const updated = isFav ? favs.filter((id) => id !== dhikrId) : [...favs, dhikrId];
    await storageSet(KEYS.FAVORITES, JSON.stringify(updated));
    return !isFav;
  } catch {
    return false;
  }
}

// ── Stats ─────────────────────────────────────────────────

export interface DayStats {
  count: number;
  completed: number;
  time_seconds: number;
}

export interface StoredStats {
  [date: string]: DayStats;
}

function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function ensureDay(stats: StoredStats, date: string): DayStats {
  if (!stats[date]) {
    stats[date] = { count: 0, completed: 0, time_seconds: 0 };
  }
  if (typeof stats[date].time_seconds !== 'number') {
    stats[date].time_seconds = 0;
  }
  return stats[date];
}

export async function getStats(): Promise<StoredStats> {
  try {
    const raw = await storageGet(KEYS.STATS);
    return normalizeStats(safeParse(raw, {}));
  } catch {
    return {};
  }
}

async function saveStats(stats: StoredStats): Promise<StoredStats> {
  await storageSet(KEYS.STATS, JSON.stringify(stats));
  return stats;
}

export async function recordCount(amount: number): Promise<StoredStats> {
  try {
    const stats = await getStats();
    const day = ensureDay(stats, todayKey());
    day.count += amount;
    return await saveStats(stats);
  } catch {
    return await getStats();
  }
}

export async function recordCompletion(): Promise<StoredStats> {
  try {
    const stats = await getStats();
    const day = ensureDay(stats, todayKey());
    day.completed += 1;
    return await saveStats(stats);
  } catch {
    return await getStats();
  }
}

export async function recordSessionTime(seconds: number): Promise<StoredStats> {
  try {
    if (seconds <= 0) return await getStats();
    const stats = await getStats();
    const day = ensureDay(stats, todayKey());
    day.time_seconds += seconds;
    return await saveStats(stats);
  } catch {
    return await getStats();
  }
}

export interface AggregatedStats {
  today: DayStats;
  week: DayStats;
  month: DayStats;
  allTime: DayStats;
}

const emptyDay = (): DayStats => ({ count: 0, completed: 0, time_seconds: 0 });

export function aggregateStats(stats: StoredStats): AggregatedStats {
  const today = todayKey();
  const now = new Date();

  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);

  const monthAgo = new Date(now);
  monthAgo.setDate(monthAgo.getDate() - 30);

  const result: AggregatedStats = {
    today: emptyDay(),
    week: emptyDay(),
    month: emptyDay(),
    allTime: emptyDay(),
  };

  for (const [date, data] of Object.entries(stats)) {
    const d = new Date(date + 'T12:00:00');
    const entry: DayStats = {
      count: data.count ?? 0,
      completed: data.completed ?? 0,
      time_seconds: data.time_seconds ?? 0,
    };

    result.allTime.count += entry.count;
    result.allTime.completed += entry.completed;
    result.allTime.time_seconds += entry.time_seconds;

    if (date === today) {
      result.today = { ...entry };
    }
    if (d >= weekAgo) {
      result.week.count += entry.count;
      result.week.completed += entry.completed;
      result.week.time_seconds += entry.time_seconds;
    }
    if (d >= monthAgo) {
      result.month.count += entry.count;
      result.month.completed += entry.completed;
      result.month.time_seconds += entry.time_seconds;
    }
  }

  return result;
}

export function formatDuration(seconds: number, t: (key: string) => string): string {
  if (seconds < 60) return `${seconds} ${t('time_seconds')}`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} ${t('time_minutes')}`;
  const hours = Math.floor(minutes / 60);
  const rem = minutes % 60;
  return rem > 0
    ? `${hours} ${t('time_hours')} ${rem} ${t('time_minutes')}`
    : `${hours} ${t('time_hours')}`;
}

// ── Premium ───────────────────────────────────────────────

export function isPremiumSync(): boolean {
  return persistGetSync(KEYS.PREMIUM) === 'true';
}

export async function isPremium(): Promise<boolean> {
  try {
    const raw = await storageGet(KEYS.PREMIUM);
    return raw === 'true';
  } catch {
    return isPremiumSync();
  }
}

export async function setPremium(enabled: boolean): Promise<boolean> {
  try {
    return await storageSet(KEYS.PREMIUM, enabled ? 'true' : 'false');
  } catch {
    return false;
  }
}

// ── Haptics ───────────────────────────────────────────────

export async function isHapticsEnabled(): Promise<boolean> {
  try {
    const raw = await storageGet(KEYS.HAPTICS);
    return raw !== 'false';
  } catch {
    return true;
  }
}

export async function setHapticsEnabled(enabled: boolean): Promise<boolean> {
  try {
    return await storageSet(KEYS.HAPTICS, enabled ? 'true' : 'false');
  } catch {
    return false;
  }
}
