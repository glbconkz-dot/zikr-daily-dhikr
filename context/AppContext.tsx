import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from 'react';
import { DHIKR_LIST } from '@/data/dhikr';
import { PROGRAM_LIST } from '@/data/programs';
import {
  getSessions,
  getFavorites,
  getProgramsProgress,
  getStats,
  aggregateStats,
  isPremium,
  setPremium,
  isHapticsEnabled,
  setHapticsEnabled,
  initializeStorage,
  StoredStats,
  DayStats,
} from '@/lib/storage';
import {
  getCustomTasbihList,
  getTasbihSessions,
  getTasbihStats,
  aggregateTasbihStats,
  TasbihAggregated,
} from '@/lib/tasbih-storage';
import { CustomTasbih, Dhikr, DhikrSession, ProgramProgress, TasbihSession, TasbihStoredStats } from '@/types';
import { ProgramDefinition } from '@/data/programs';

interface AppState {
  dhikrList: Dhikr[];
  programs: ProgramDefinition[];
  sessions: DhikrSession[];
  favorites: string[];
  programsProgress: ProgramProgress[];
  stats: StoredStats;
  aggregated: ReturnType<typeof aggregateStats>;
  premium: boolean;
  hapticsEnabled: boolean;
  customTasbih: CustomTasbih[];
  tasbihSessions: TasbihSession[];
  tasbihStats: TasbihStoredStats;
  tasbihAggregated: TasbihAggregated;
  loading: boolean;
  error: string | null;
  refreshSessions: () => Promise<void>;
  refreshFavorites: () => Promise<void>;
  refreshStats: () => Promise<void>;
  refreshProgramsProgress: () => Promise<void>;
  refreshCustomTasbih: () => Promise<void>;
  refreshTasbihSessions: () => Promise<void>;
  refreshTasbihStats: () => Promise<void>;
  applyTasbihStats: (stats: TasbihStoredStats) => void;
  refreshAll: () => Promise<void>;
  refreshPremium: () => Promise<void>;
  togglePremium: (enabled: boolean) => Promise<void>;
  toggleHaptics: (enabled: boolean) => Promise<void>;
  applyStats: (stats: StoredStats) => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [dhikrList] = useState<Dhikr[]>(DHIKR_LIST);
  const [programs] = useState<ProgramDefinition[]>(PROGRAM_LIST);
  const [sessions, setSessions] = useState<DhikrSession[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [programsProgress, setProgramsProgress] = useState<ProgramProgress[]>([]);
  const [stats, setStats] = useState<StoredStats>({});
  const [premium, setPremiumState] = useState(false);
  const [hapticsEnabled, setHapticsEnabledState] = useState(true);
  const [customTasbih, setCustomTasbih] = useState<CustomTasbih[]>([]);
  const [tasbihSessions, setTasbihSessions] = useState<TasbihSession[]>([]);
  const [tasbihStats, setTasbihStats] = useState<TasbihStoredStats>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lastPremiumToggleAt = useRef(0);
  const lastHapticsToggleAt = useRef(0);

  const aggregated = aggregateStats(stats);
  const tasbihAggregated = aggregateTasbihStats(tasbihStats, customTasbih);

  const applyStats = useCallback((next: StoredStats) => {
    setStats(next);
  }, []);

  const refreshSessions = useCallback(async () => {
    try {
      const s = await getSessions();
      setSessions(s);
    } catch {
      setSessions([]);
    }
  }, []);

  const refreshFavorites = useCallback(async () => {
    try {
      const f = await getFavorites();
      setFavorites(f);
    } catch {
      setFavorites([]);
    }
  }, []);

  const mergeStoredStats = useCallback((prev: StoredStats, stored: StoredStats): StoredStats => {
    const merged: StoredStats = { ...stored };
    for (const [date, data] of Object.entries(prev)) {
      const storedDay = merged[date];
      const prevDay = data as DayStats;
      if (!storedDay) {
        if (prevDay.count > 0 || prevDay.completed > 0 || prevDay.time_seconds > 0) {
          merged[date] = prevDay;
        }
        continue;
      }
      merged[date] = {
        count: Math.max(storedDay.count, prevDay.count),
        completed: Math.max(storedDay.completed, prevDay.completed),
        time_seconds: Math.max(storedDay.time_seconds, prevDay.time_seconds),
      };
    }
    return merged;
  }, []);

  const refreshStats = useCallback(async () => {
    try {
      const s = await getStats();
      setStats((prev) => mergeStoredStats(prev, s));
    } catch {
      // keep in-memory stats on read failure
    }
  }, [mergeStoredStats]);

  const refreshProgramsProgress = useCallback(async () => {
    try {
      const pp = await getProgramsProgress();
      setProgramsProgress(pp);
    } catch {
      setProgramsProgress([]);
    }
  }, []);

  const refreshCustomTasbih = useCallback(async () => {
    try {
      setCustomTasbih(await getCustomTasbihList());
    } catch {
      setCustomTasbih([]);
    }
  }, []);

  const refreshTasbihSessions = useCallback(async () => {
    try {
      setTasbihSessions(await getTasbihSessions());
    } catch {
      setTasbihSessions([]);
    }
  }, []);

  const refreshTasbihStats = useCallback(async () => {
    try {
      setTasbihStats(await getTasbihStats());
    } catch {
      setTasbihStats({});
    }
  }, []);

  const applyTasbihStats = useCallback((next: TasbihStoredStats) => {
    setTasbihStats(next);
  }, []);

  const refreshPremium = useCallback(async () => {
    if (Date.now() - lastPremiumToggleAt.current < 3000) return;
    try {
      const prem = await isPremium();
      setPremiumState(prem);
    } catch {
      setPremiumState(false);
    }
  }, []);

  const togglePremium = useCallback(async (enabled: boolean) => {
    lastPremiumToggleAt.current = Date.now();
    setPremiumState(enabled);
    await setPremium(enabled);
  }, []);

  const toggleHaptics = useCallback(async (enabled: boolean) => {
    lastHapticsToggleAt.current = Date.now();
    setHapticsEnabledState(enabled);
    await setHapticsEnabled(enabled);
  }, []);

  const refreshAll = useCallback(async () => {
    try {
      const [s, f, pp, st, prem, haptics, ct, ts, tstats] = await Promise.all([
        getSessions(),
        getFavorites(),
        getProgramsProgress(),
        getStats(),
        isPremium(),
        isHapticsEnabled(),
        getCustomTasbihList(),
        getTasbihSessions(),
        getTasbihStats(),
      ]);
      setSessions(s);
      setFavorites(f);
      setProgramsProgress(pp);
      setStats(st);
      setPremiumState(prem);
      setHapticsEnabledState(haptics);
      setCustomTasbih(ct);
      setTasbihSessions(ts);
      setTasbihStats(tstats);
      setError(null);
    } catch {
      setError('error_load_data');
    }
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        await initializeStorage();
        await refreshAll();
      } catch {
        setError('error_load_data');
      } finally {
        setLoading(false);
      }
    })();
  }, [refreshAll]);

  return (
    <AppContext.Provider
      value={{
        dhikrList,
        programs,
        sessions,
        favorites,
        programsProgress,
        stats,
        aggregated,
        premium,
        hapticsEnabled,
        customTasbih,
        tasbihSessions,
        tasbihStats,
        tasbihAggregated,
        loading,
        error,
        refreshSessions,
        refreshFavorites,
        refreshStats,
        refreshProgramsProgress,
        refreshCustomTasbih,
        refreshTasbihSessions,
        refreshTasbihStats,
        applyTasbihStats,
        refreshAll,
        refreshPremium,
        togglePremium,
        toggleHaptics,
        applyStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
