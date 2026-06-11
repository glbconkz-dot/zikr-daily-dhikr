import { CustomTasbih, TasbihSession, TasbihStoredStats, TasbihDayEntry } from '@/types';
import { persistGet, persistSet } from '@/lib/persistent-storage';

const KEYS = {
  CUSTOM: 'zikr_custom_tasbih',
  SESSIONS: 'zikr_tasbih_sessions',
  STATS: 'zikr_tasbih_stats',
};

async function storageGet(key: string): Promise<string | null> {
  return persistGet(key);
}

async function storageSet(key: string, value: string): Promise<void> {
  await persistSet(key, value);
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) ?? fallback;
  } catch {
    return fallback;
  }
}

function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ── Custom tasbih list ────────────────────────────────────

export async function getCustomTasbihList(): Promise<CustomTasbih[]> {
  const raw = await storageGet(KEYS.CUSTOM);
  const list = safeParse<CustomTasbih[]>(raw, []);
  return list
    .filter((t) => t?.id && t?.name)
    .sort((a, b) => {
      const aTime = a.lastUsedAt ?? a.updatedAt;
      const bTime = b.lastUsedAt ?? b.updatedAt;
      return new Date(bTime).getTime() - new Date(aTime).getTime();
    });
}

export async function getCustomTasbih(id: string): Promise<CustomTasbih | null> {
  const list = await getCustomTasbihList();
  return list.find((t) => t.id === id) ?? null;
}

export async function createCustomTasbih(
  name: string,
  targetCount: number | null
): Promise<CustomTasbih> {
  const trimmed = name.trim();
  const now = new Date().toISOString();
  const entry: CustomTasbih = {
    id: `tasbih_${Date.now()}`,
    name: trimmed,
    targetCount: targetCount && targetCount > 0 ? targetCount : null,
    createdAt: now,
    updatedAt: now,
    lastUsedAt: now,
  };
  const list = await getCustomTasbihList();
  list.unshift(entry);
  await storageSet(KEYS.CUSTOM, JSON.stringify(list));
  return entry;
}

export async function deleteCustomTasbih(id: string): Promise<void> {
  const list = await getCustomTasbihList();
  await storageSet(KEYS.CUSTOM, JSON.stringify(list.filter((t) => t.id !== id)));
  const sessions = await getTasbihSessions();
  await storageSet(
    KEYS.SESSIONS,
    JSON.stringify(sessions.filter((s) => s.tasbihId !== id))
  );
}

export async function touchCustomTasbih(id: string): Promise<void> {
  const list = await getCustomTasbihList();
  const idx = list.findIndex((t) => t.id === id);
  if (idx < 0) return;
  list[idx] = { ...list[idx], lastUsedAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  await storageSet(KEYS.CUSTOM, JSON.stringify(list));
}

// ── Sessions ──────────────────────────────────────────────

export async function getTasbihSessions(): Promise<TasbihSession[]> {
  const raw = await storageGet(KEYS.SESSIONS);
  return safeParse<TasbihSession[]>(raw, []).filter((s) => s?.tasbihId);
}

export async function getTasbihSession(tasbihId: string): Promise<TasbihSession | null> {
  const sessions = await getTasbihSessions();
  return sessions.find((s) => s.tasbihId === tasbihId) ?? null;
}

export async function upsertTasbihSession(session: TasbihSession): Promise<void> {
  const sessions = await getTasbihSessions();
  const idx = sessions.findIndex((s) => s.tasbihId === session.tasbihId);
  const updated = { ...session, lastUpdated: new Date().toISOString() };
  if (idx >= 0) {
    sessions[idx] = { ...sessions[idx], ...updated };
  } else {
    sessions.push(updated);
  }
  await storageSet(KEYS.SESSIONS, JSON.stringify(sessions));
  await touchCustomTasbih(session.tasbihId);
}

// ── Stats ─────────────────────────────────────────────────

export async function getTasbihStats(): Promise<TasbihStoredStats> {
  const raw = await storageGet(KEYS.STATS);
  return safeParse<TasbihStoredStats>(raw, {});
}

function ensureTasbihDay(
  stats: TasbihStoredStats,
  date: string,
  tasbihId: string
): TasbihDayEntry {
  if (!stats[date]) stats[date] = {};
  if (!stats[date][tasbihId]) stats[date][tasbihId] = { count: 0, completions: 0 };
  return stats[date][tasbihId];
}

export async function recordTasbihCount(
  tasbihId: string,
  amount: number,
  completed: boolean
): Promise<TasbihStoredStats> {
  const stats = await getTasbihStats();
  const day = ensureTasbihDay(stats, todayKey(), tasbihId);
  day.count += amount;
  if (completed) day.completions += 1;
  await storageSet(KEYS.STATS, JSON.stringify(stats));
  return stats;
}

export interface TasbihAggregated {
  today: number;
  week: number;
  month: number;
  allTime: number;
}

export interface TasbihUsageItem {
  tasbihId: string;
  name: string;
  count: number;
}

export function aggregateTasbihStats(
  stats: TasbihStoredStats,
  tasbihList: CustomTasbih[]
): TasbihAggregated {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(now);
  monthAgo.setDate(monthAgo.getDate() - 30);
  const today = todayKey();

  const result: TasbihAggregated = { today: 0, week: 0, month: 0, allTime: 0 };

  for (const [date, entries] of Object.entries(stats)) {
    const d = new Date(date + 'T12:00:00');
    let dayTotal = 0;
    for (const entry of Object.values(entries)) {
      dayTotal += entry.count ?? 0;
    }
    result.allTime += dayTotal;
    if (date === today) result.today = dayTotal;
    if (d >= weekAgo) result.week += dayTotal;
    if (d >= monthAgo) result.month += dayTotal;
  }

  return result;
}

export function getMostUsedTasbih(
  stats: TasbihStoredStats,
  tasbihList: CustomTasbih[],
  period: 'today' | 'week' | 'month' | 'allTime'
): TasbihUsageItem[] {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthAgo = new Date(now);
  monthAgo.setDate(monthAgo.getDate() - 30);
  const today = todayKey();

  const totals: Record<string, number> = {};

  for (const [date, entries] of Object.entries(stats)) {
    const d = new Date(date + 'T12:00:00');
    const inPeriod =
      period === 'allTime' ||
      (period === 'today' && date === today) ||
      (period === 'week' && d >= weekAgo) ||
      (period === 'month' && d >= monthAgo);
    if (!inPeriod) continue;
    for (const [tasbihId, entry] of Object.entries(entries)) {
      totals[tasbihId] = (totals[tasbihId] ?? 0) + (entry.count ?? 0);
    }
  }

  const nameMap = Object.fromEntries(tasbihList.map((t) => [t.id, t.name]));

  return Object.entries(totals)
    .map(([tasbihId, count]) => ({
      tasbihId,
      name: nameMap[tasbihId] ?? tasbihId,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}
