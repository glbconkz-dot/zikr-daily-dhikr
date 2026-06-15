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
  attachCustomerInfoListener,
  fetchPremiumStatus,
  hasPremiumEntitlement,
  initializeRevenueCat,
  isNativeStoreSupported,
  mapPurchaseError,
  purchasePlan,
  restorePurchases,
  SubscriptionPlan,
  PurchaseErrorCode,
} from '@/lib/revenuecat';
import { ENABLE_PREMIUM_TEST_TOGGLE } from '@/lib/premium-config';
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
  /** Dev-only manual premium toggle (Expo Go / local testing). */
  togglePremium: (enabled: boolean) => Promise<void>;
  purchaseSubscription: (plan: SubscriptionPlan) => Promise<PurchaseErrorCode | null>;
  restorePremiumPurchases: () => Promise<{ restored: boolean; error: PurchaseErrorCode | null }>;
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

  const applyPremiumStatus = useCallback(async (active: boolean) => {
    setPremiumState(active);
    await setPremium(active);
  }, []);

  const syncPremiumFromStore = useCallback(async () => {
    if (ENABLE_PREMIUM_TEST_TOGGLE) {
      const cached = await isPremium();
      setPremiumState(cached);
      if (!isNativeStoreSupported()) return;
      try {
        await initializeRevenueCat();
        const active = await fetchPremiumStatus();
        if (active) await applyPremiumStatus(true);
      } catch {
        // Keep manual test toggle from cache.
      }
      return;
    }

    if (isNativeStoreSupported()) {
      try {
        await initializeRevenueCat();
        const active = await fetchPremiumStatus();
        await applyPremiumStatus(active);
        return;
      } catch {
        const cached = await isPremium();
        setPremiumState(cached);
        return;
      }
    }

    if (__DEV__) {
      const cached = await isPremium();
      setPremiumState(cached);
      return;
    }

    await applyPremiumStatus(false);
  }, [applyPremiumStatus]);

  const refreshPremium = useCallback(async () => {
    if (Date.now() - lastPremiumToggleAt.current < 3000) return;
    await syncPremiumFromStore();
  }, [syncPremiumFromStore]);

  const togglePremium = useCallback(async (enabled: boolean) => {
    if (!ENABLE_PREMIUM_TEST_TOGGLE) return;
    lastPremiumToggleAt.current = Date.now();
    await applyPremiumStatus(enabled);
  }, [applyPremiumStatus]);

  const purchaseSubscription = useCallback(async (plan: SubscriptionPlan) => {
    try {
      const info = await purchasePlan(plan);
      lastPremiumToggleAt.current = Date.now();
      await applyPremiumStatus(hasPremiumEntitlement(info));
      return null;
    } catch (error) {
      return mapPurchaseError(error);
    }
  }, [applyPremiumStatus]);

  const restorePremiumPurchases = useCallback(async () => {
    try {
      const info = await restorePurchases();
      const active = hasPremiumEntitlement(info);
      lastPremiumToggleAt.current = Date.now();
      await applyPremiumStatus(active);
      return { restored: active, error: null };
    } catch (error) {
      const code = mapPurchaseError(error);
      return { restored: false, error: code === 'cancelled' ? 'restore_failed' : code };
    }
  }, [applyPremiumStatus]);

  const toggleHaptics = useCallback(async (enabled: boolean) => {
    lastHapticsToggleAt.current = Date.now();
    setHapticsEnabledState(enabled);
    await setHapticsEnabled(enabled);
  }, []);

  const refreshAll = useCallback(async () => {
    try {
      const [s, f, pp, st, cachedPremium, haptics, ct, ts, tstats] = await Promise.all([
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
      setPremiumState(cachedPremium);
      setHapticsEnabledState(haptics);
      setCustomTasbih(ct);
      setTasbihSessions(ts);
      setTasbihStats(tstats);
      setError(null);
      await syncPremiumFromStore();
    } catch {
      setError('error_load_data');
    }
  }, [syncPremiumFromStore]);

  useEffect(() => {
    if (!isNativeStoreSupported()) return;

    void initializeRevenueCat();
    attachCustomerInfoListener((info) => {
      void applyPremiumStatus(hasPremiumEntitlement(info));
    });
  }, [applyPremiumStatus]);

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
        purchaseSubscription,
        restorePremiumPurchases,
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
