import React, { useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, router } from 'expo-router';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage, getDhikrTitle } from '@/context/LanguageContext';
import { useTabBarScrollPadding } from '@/lib/tab-bar';
import { formatDuration } from '@/lib/storage';
import { getMostUsedTasbih } from '@/lib/tasbih-storage';
import { getMostUsedDhikrFromSessions, mergeMostUsed } from '@/lib/stats-helpers';
import { isDhikrLocked } from '@/lib/premium';
import StatCard from '@/components/StatCard';
import { TrendingUp, Calendar, Clock, Award, ChevronRight, Lock } from 'lucide-react-native';

type Period = 'today' | 'week' | 'month' | 'allTime';

export default function StatisticsScreen() {
  const {
    loading,
    aggregated,
    sessions,
    dhikrList,
    customTasbih,
    tasbihStats,
    tasbihAggregated,
    refreshStats,
    refreshSessions,
    refreshTasbihStats,
    refreshCustomTasbih,
    premium,
    refreshPremium,
  } = useApp();
  const { t, language } = useLanguage();
  const tabBarPadding = useTabBarScrollPadding();
  const [period, setPeriod] = useState<Period>('today');

  useFocusEffect(
    useCallback(() => {
      refreshStats();
      refreshSessions();
      refreshTasbihStats();
      refreshCustomTasbih();
      refreshPremium();
    }, [refreshStats, refreshSessions, refreshTasbihStats, refreshCustomTasbih, refreshPremium])
  );

  const handleSessionPress = useCallback(
    (session: (typeof sessions)[number], dhikr: (typeof dhikrList)[number] | undefined) => {
      if (session.completed || !dhikr) return;
      if (!premium) {
        router.push('/(tabs)/premium');
        return;
      }
      if (isDhikrLocked(dhikr, premium)) {
        router.push('/(tabs)/premium');
        return;
      }
      router.push(`/dhikr/${dhikr.id}`);
    },
    [premium]
  );

  const PERIODS: { key: Period; label: string }[] = [
    { key: 'today', label: t('today') },
    { key: 'week', label: t('this_week') },
    { key: 'month', label: t('this_month') },
    { key: 'allTime', label: t('all_time') },
  ];

  const dhikrData = aggregated[period] ?? { count: 0, completed: 0, time_seconds: 0 };
  const tasbihPeriodCount = tasbihAggregated[period] ?? 0;
  const periodTotal = dhikrData.count + tasbihPeriodCount;
  const totalDhikrCount = aggregated.allTime.count + tasbihAggregated.allTime;

  const completedSessions = sessions.filter((s) => s.completed).length;
  const activeSessions = sessions.filter((s) => !s.completed && s.current_count > 0).length;
  const completedGoals = aggregated.allTime.completed;

  const mostUsedDhikr = useMemo(
    () =>
      getMostUsedDhikrFromSessions(sessions, dhikrList, (d) => getDhikrTitle(d, language)),
    [sessions, dhikrList, language]
  );
  const mostUsedTasbih = getMostUsedTasbih(tasbihStats, customTasbih, period);
  const mostUsedCombined = useMemo(
    () =>
      mergeMostUsed([
        ...mostUsedDhikr,
        ...mostUsedTasbih.map((item) => ({
          id: item.tasbihId,
          name: item.name,
          count: item.count,
        })),
      ]),
    [mostUsedDhikr, mostUsedTasbih]
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.green} />
        <Text style={styles.loadingText}>{t('programs_loading')}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: tabBarPadding }]}
      >
        <View style={styles.header}>
          <Text style={styles.pageTitle}>{t('your_journey')}</Text>
          <Text style={styles.pageSubtitle}>{t('track_progress')}</Text>
        </View>

        <LinearGradient
          colors={[COLORS.green, COLORS.bgDeep]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.heroCard, SHADOW.lg]}
        >
          <View style={styles.heroTop}>
            <TrendingUp size={20} color={COLORS.gold} strokeWidth={1.8} />
            <Text style={styles.heroLabel}>{t('total_dhikr')}</Text>
          </View>
          <Text style={styles.heroValue}>{totalDhikrCount.toLocaleString()}</Text>
          <Text style={styles.heroSub}>{t('across_sessions')}</Text>
        </LinearGradient>

        <View style={styles.periodTabs}>
          {PERIODS.map((p) => (
            <TouchableOpacity
              key={p.key}
              style={[styles.periodTab, period === p.key && styles.periodTabActive]}
              onPress={() => setPeriod(p.key)}
            >
              <Text style={[styles.periodTabText, period === p.key && styles.periodTabTextActive]}>
                {p.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.statsGrid}>
          <StatCard value={periodTotal.toLocaleString()} label={t('dhikr_count')} accent />
          <StatCard
            value={dhikrData.completed}
            label={t('goals_completed')}
            subLabel={t('sessions_label')}
          />
        </View>

        <View style={styles.statsGrid}>
          <StatCard value={completedSessions} label={t('sessions_completed')} />
          <StatCard value={formatDuration(dhikrData.time_seconds, t)} label={t('total_time')} />
        </View>

        <View style={styles.statsGrid}>
          <StatCard value={tasbihPeriodCount.toLocaleString()} label={t('tesbih_total')} />
          <StatCard
            value={(aggregated.today.count + tasbihAggregated.today).toLocaleString()}
            label={t('today')}
          />
        </View>

        {mostUsedCombined.length > 0 && (
          <View style={[styles.mostUsedCard, SHADOW.sm]}>
            <Text style={styles.mostUsedLabel}>{t('most_used_dhikr')}</Text>
            {mostUsedCombined.map((item) => (
              <View key={item.id} style={styles.mostUsedRow}>
                <Text style={styles.mostUsedName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.mostUsedCount}>{item.count}</Text>
              </View>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>{t('all_time_summary')}</Text>
        <View style={styles.summaryGrid}>
          <View style={[styles.summaryCard, SHADOW.sm]}>
            <View style={[styles.summaryIcon, { backgroundColor: COLORS.green + '15' }]}>
              <Award size={18} color={COLORS.green} strokeWidth={1.8} />
            </View>
            <Text style={styles.summaryValue}>{completedSessions}</Text>
            <Text style={styles.summaryLabel}>{t('sessions_completed')}</Text>
          </View>
          <View style={[styles.summaryCard, SHADOW.sm]}>
            <View style={[styles.summaryIcon, { backgroundColor: COLORS.gold + '15' }]}>
              <Clock size={18} color={COLORS.gold} strokeWidth={1.8} />
            </View>
            <Text style={styles.summaryValue}>{activeSessions}</Text>
            <Text style={styles.summaryLabel}>{t('active_sessions')}</Text>
          </View>
          <View style={[styles.summaryCard, SHADOW.sm]}>
            <View style={[styles.summaryIcon, { backgroundColor: '#5B8FA815' }]}>
              <Calendar size={18} color="#5B8FA8" strokeWidth={1.8} />
            </View>
            <Text style={styles.summaryValue}>{completedGoals}</Text>
            <Text style={styles.summaryLabel}>{t('goals_completed')}</Text>
          </View>
          <View style={[styles.summaryCard, SHADOW.sm]}>
            <View style={[styles.summaryIcon, { backgroundColor: '#7BA05B15' }]}>
              <TrendingUp size={18} color="#7BA05B" strokeWidth={1.8} />
            </View>
            <Text style={styles.summaryValue}>
              {formatDuration(aggregated.allTime.time_seconds, t)}
            </Text>
            <Text style={styles.summaryLabel}>{t('total_time')}</Text>
          </View>
        </View>

        {sessions.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>{t('recent_sessions')}</Text>
            {!premium && (
              <Text style={styles.sessionHint}>{t('stats_session_premium_hint')}</Text>
            )}
            <View style={styles.sessionList}>
              {sessions
                .slice(-5)
                .reverse()
                .map((session) => {
                  const prog = Math.min(session.current_count / session.target_count, 1);
                  const dhikr = dhikrList.find((d) => d.id === session.dhikr_id);
                  const isIncomplete = !session.completed;
                  const canResume = isIncomplete && !!dhikr;

                  const content = (
                    <>
                      <View style={styles.sessionLeft}>
                        <View
                          style={[
                            styles.sessionDot,
                            { backgroundColor: session.completed ? COLORS.green : COLORS.gold },
                          ]}
                        />
                        <View style={styles.sessionInfo}>
                          <Text style={styles.sessionDhikrId} numberOfLines={1}>
                            {dhikr ? getDhikrTitle(dhikr, language) : session.dhikr_id}
                          </Text>
                          <Text style={styles.sessionDate}>
                            {new Date(session.last_updated).toLocaleDateString()}
                          </Text>
                          {canResume && premium && (
                            <Text style={styles.sessionTapHint}>{t('stats_tap_resume')}</Text>
                          )}
                        </View>
                      </View>
                      <View style={styles.sessionRight}>
                        <Text style={styles.sessionCount}>
                          {session.current_count}/{session.target_count}
                        </Text>
                        <View style={styles.sessionBar}>
                          <View
                            style={[styles.sessionFill, { width: `${prog * 100}%` as `${number}%` }]}
                          />
                        </View>
                        {canResume && (
                          premium ? (
                            <ChevronRight size={16} color={COLORS.gold} strokeWidth={2} />
                          ) : (
                            <Lock size={14} color={COLORS.textMuted} strokeWidth={2} />
                          )
                        )}
                      </View>
                    </>
                  );

                  if (!canResume) {
                    return (
                      <View
                        key={session.id}
                        style={[styles.sessionItem, styles.sessionItemStatic, SHADOW.sm]}
                      >
                        {content}
                      </View>
                    );
                  }

                  return (
                    <TouchableOpacity
                      key={session.id}
                      style={[
                        styles.sessionItem,
                        premium ? styles.sessionItemTappable : styles.sessionItemLocked,
                        SHADOW.sm,
                      ]}
                      onPress={() => handleSessionPress(session, dhikr)}
                      activeOpacity={0.7}
                    >
                      {content}
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        )}

        <View style={{ height: SPACING.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: SPACING.md },
  centered: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
  },
  loadingText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? SPACING.xl : SPACING.md,
    paddingBottom: SPACING.lg,
  },
  pageTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 28,
    color: COLORS.textPrimary,
  },
  pageSubtitle: {
    fontFamily: FONTS.serifItalic,
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },
  heroCard: {
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    marginBottom: SPACING.lg,
  },
  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  heroLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: 'rgba(250,247,242,0.75)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  heroValue: {
    fontFamily: FONTS.serifBold,
    fontSize: 52,
    color: COLORS.cream,
    lineHeight: 58,
  },
  heroSub: {
    fontFamily: FONTS.sans,
    fontSize: 12,
    color: 'rgba(250,247,242,0.55)',
    marginTop: 4,
  },
  periodTabs: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: 4,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  periodTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: RADIUS.md,
  },
  periodTabActive: {
    backgroundColor: COLORS.green,
  },
  periodTabText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 11,
    color: COLORS.textMuted,
  },
  periodTabTextActive: {
    color: COLORS.cream,
    fontFamily: FONTS.sansSemiBold,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    marginTop: SPACING.md,
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  summaryCard: {
    width: '47.5%',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  summaryIcon: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  summaryValue: {
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.textPrimary,
  },
  summaryLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 2,
    lineHeight: 16,
  },
  sessionList: { gap: SPACING.sm },
  sessionHint: {
    fontFamily: FONTS.sans,
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: -SPACING.sm,
    marginBottom: SPACING.md,
    lineHeight: 18,
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'space-between',
  },
  sessionItemStatic: {
    opacity: 0.92,
  },
  sessionItemTappable: {
    borderColor: COLORS.gold + '55',
  },
  sessionItemLocked: {
    borderColor: COLORS.border,
  },
  sessionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    flex: 1,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  sessionDhikrId: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  sessionDate: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    color: COLORS.textMuted,
  },
  sessionTapHint: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    color: COLORS.gold,
    marginTop: 2,
  },
  sessionRight: {
    alignItems: 'flex-end',
    gap: 4,
    marginLeft: SPACING.sm,
  },
  sessionCount: {
    fontFamily: FONTS.sansBold,
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  sessionBar: {
    width: 60,
    height: 3,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  sessionFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 2,
  },
  mostUsedCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  mostUsedLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 12,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
  },
  mostUsedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.xs,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  mostUsedName: {
    flex: 1,
    fontFamily: FONTS.sansMedium,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginRight: SPACING.sm,
  },
  mostUsedCount: {
    fontFamily: FONTS.sansBold,
    fontSize: 14,
    color: COLORS.green,
  },
});
