import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { router, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage, getDhikrTitle, getDhikrTransliteration } from '@/context/LanguageContext';
import { getProgramTitle, getProgramDescription } from '@/data/programs-i18n';
import { PROGRAM_MAP } from '@/data/programs';
import { enrollProgram, markProgramDayComplete } from '@/lib/storage';
import { isDhikrLocked, isProgramLocked } from '@/lib/premium';
import PremiumBadge from '@/components/PremiumBadge';
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  Lock,
  ChevronRight,
} from 'lucide-react-native';

const GRADIENT_MAP: Record<string, [string, string]> = {
  rizq: ['#C9A84C', '#9A7830'],
  healing: ['#7BA05B', '#4A7A3A'],
  peace: ['#5B8FA8', '#3A6A80'],
};

export default function ProgramDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dhikrList, sessions, programsProgress, premium, refreshProgramsProgress, refreshSessions } =
    useApp();
  const { t, language } = useLanguage();

  const program = id ? PROGRAM_MAP[id] : undefined;
  const progress = programsProgress.find((p) => p.program_id === id);
  const [selectedDay, setSelectedDay] = useState(progress?.current_day ?? 1);
  const isLocked = program ? isProgramLocked(program.premium, premium) : false;

  useEffect(() => {
    if (program && isLocked) {
      router.replace('/(tabs)/premium');
    }
  }, [program, isLocked]);

  useFocusEffect(
    useCallback(() => {
      refreshProgramsProgress();
      refreshSessions();
    }, [refreshProgramsProgress, refreshSessions])
  );

  useEffect(() => {
    if (progress?.current_day) {
      setSelectedDay(progress.current_day);
    }
  }, [progress?.current_day]);

  const completedDays = progress?.completed_days ?? [];
  const completedCount = completedDays.length;
  const percentage = program
    ? Math.round((completedCount / program.duration_days) * 100)
    : 0;

  const handleEnroll = async () => {
    if (!id) return;
    await enrollProgram(id);
    await refreshProgramsProgress();
  };

  const handleMarkDayComplete = async (dayNumber: number) => {
    if (!id || !program) return;
    await markProgramDayComplete(id, dayNumber, program.duration_days);
    await refreshProgramsProgress();
    if (dayNumber < program.duration_days) {
      setSelectedDay(dayNumber + 1);
    }
  };

  const isDhikrDone = (dhikrId: string) => {
    const session = sessions.find((s) => s.dhikr_id === dhikrId);
    return session?.completed === true;
  };

  const canCompleteDay = (dayNumber: number) => {
    const assignment = program?.days.find((d) => d.day_number === dayNumber);
    if (!assignment) return false;
    return assignment.dhikr_ids.every((dhikrId) => isDhikrDone(dhikrId));
  };

  if (!program) {
    return (
      <SafeAreaView style={styles.safe}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={22} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.notFound}>{t('program_not_found')}</Text>
      </SafeAreaView>
    );
  }

  const gradient = GRADIENT_MAP[program.category] ?? [COLORS.green, COLORS.bgDeep];
  const dayAssignment = program.days.find((d) => d.day_number === selectedDay);
  const isDayCompleted = completedDays.includes(selectedDay);

  return (
    <View style={styles.container}>
      <LinearGradient colors={gradient} style={styles.hero}>
        <SafeAreaView>
          <View style={styles.heroHeader}>
            <TouchableOpacity onPress={() => router.back()} style={styles.heroBack}>
              <ArrowLeft size={22} color={COLORS.cream} strokeWidth={2} />
            </TouchableOpacity>
          </View>
          <View style={styles.heroBody}>
            {program.premium && <PremiumBadge style={styles.heroPremiumBadge} />}
            <Text style={styles.heroTitle}>{getProgramTitle(program.id, language)}</Text>
            <Text style={styles.heroDesc}>{getProgramDescription(program.id, language)}</Text>
            <View style={styles.heroStats}>
              <Text style={styles.heroStatValue}>{percentage}%</Text>
              <Text style={styles.heroStatLabel}>{t('overall_progress')}</Text>
            </View>
            <View style={styles.heroProgressTrack}>
              <View style={[styles.heroProgressFill, { width: `${percentage}%` as `${number}%` }]} />
            </View>
            <Text style={styles.heroSubStat}>
              {completedCount}/{program.duration_days} {t('days_complete')}
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {!progress && (
          <TouchableOpacity style={styles.enrollBtn} onPress={handleEnroll} activeOpacity={0.88}>
            <Text style={styles.enrollBtnText}>{t('begin_program')}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.sectionTitle}>{t('daily_tracker')}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dayPills}>
          {program.days.map((day) => {
            const done = completedDays.includes(day.day_number);
            const active = selectedDay === day.day_number;
            return (
              <TouchableOpacity
                key={day.day_number}
                style={[styles.dayPill, active && styles.dayPillActive, done && styles.dayPillDone]}
                onPress={() => setSelectedDay(day.day_number)}
              >
                {done ? (
                  <CheckCircle size={14} color={COLORS.cream} />
                ) : (
                  <Circle size={14} color={active ? COLORS.cream : COLORS.textMuted} />
                )}
                <Text style={[styles.dayPillText, active && styles.dayPillTextActive]}>
                  {t('day_label')} {day.day_number}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={[styles.dayCard, SHADOW.sm]}>
          <View style={styles.dayCardHeader}>
            <Text style={styles.dayCardTitle}>
              {t('day_label')} {selectedDay}
            </Text>
            {isDayCompleted && (
              <View style={styles.doneBadge}>
                <CheckCircle size={14} color={COLORS.green} />
                <Text style={styles.doneBadgeText}>{t('day_completed')}</Text>
              </View>
            )}
          </View>

          <Text style={styles.assignedLabel}>{t('assigned_dhikr')}</Text>
          {dayAssignment?.dhikr_ids.map((dhikrId) => {
            const dhikr = dhikrList.find((d) => d.id === dhikrId);
            if (!dhikr) return null;
            const done = isDhikrDone(dhikrId);
            const locked = isDhikrLocked(dhikr, premium);
            return (
              <TouchableOpacity
                key={dhikrId}
                style={styles.dhikrRow}
                onPress={() => {
                  if (locked) {
                    router.push('/(tabs)/premium');
                  } else {
                    router.push(`/dhikr/${dhikrId}`);
                  }
                }}
                activeOpacity={0.85}
              >
                <View style={styles.dhikrRowLeft}>
                  {done ? (
                    <CheckCircle size={18} color={COLORS.green} />
                  ) : locked ? (
                    <Lock size={18} color={COLORS.gold} />
                  ) : (
                    <Circle size={18} color={COLORS.textMuted} />
                  )}
                  <View style={styles.dhikrRowText}>
                    <Text style={styles.dhikrRowTitle}>{getDhikrTitle(dhikr, language)}</Text>
                    <Text style={styles.dhikrRowSub} numberOfLines={1}>
                      {getDhikrTransliteration(dhikr, language)}
                    </Text>
                  </View>
                </View>
                <ChevronRight size={18} color={COLORS.textMuted} />
              </TouchableOpacity>
            );
          })}

          {progress && !isDayCompleted && (
            <TouchableOpacity
              style={[
                styles.completeDayBtn,
                !canCompleteDay(selectedDay) && styles.completeDayBtnDisabled,
              ]}
              onPress={() => handleMarkDayComplete(selectedDay)}
              disabled={!canCompleteDay(selectedDay)}
              activeOpacity={0.88}
            >
              <Text style={styles.completeDayBtnText}>{t('mark_day_complete')}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: SPACING.xxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  safe: { flex: 1, backgroundColor: COLORS.bg },
  backBtn: { padding: SPACING.md },
  notFound: {
    fontFamily: FONTS.serif,
    fontSize: 18,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xl,
  },
  hero: { paddingBottom: SPACING.xl },
  heroHeader: { paddingHorizontal: SPACING.md, paddingTop: SPACING.sm },
  heroBack: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBody: { paddingHorizontal: SPACING.md, paddingTop: SPACING.md },
  heroPremiumBadge: { alignSelf: 'flex-start', marginBottom: SPACING.sm },
  heroTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 28,
    color: COLORS.cream,
    lineHeight: 34,
    marginBottom: SPACING.sm,
  },
  heroDesc: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: 'rgba(250,247,242,0.8)',
    lineHeight: 22,
    marginBottom: SPACING.lg,
  },
  heroStats: { flexDirection: 'row', alignItems: 'baseline', gap: SPACING.sm, marginBottom: SPACING.sm },
  heroStatValue: {
    fontFamily: FONTS.serifBold,
    fontSize: 36,
    color: COLORS.goldLight,
  },
  heroStatLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: 'rgba(250,247,242,0.75)',
  },
  heroProgressTrack: {
    height: 8,
    backgroundColor: 'rgba(250,247,242,0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: SPACING.xs,
  },
  heroProgressFill: {
    height: '100%',
    backgroundColor: COLORS.goldLight,
    borderRadius: 4,
  },
  heroSubStat: {
    fontFamily: FONTS.sans,
    fontSize: 12,
    color: 'rgba(250,247,242,0.65)',
  },
  scroll: { flex: 1 },
  scrollContent: { padding: SPACING.md },
  enrollBtn: {
    backgroundColor: COLORS.green,
    borderRadius: RADIUS.lg,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  enrollBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 16,
    color: COLORS.cream,
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  dayPills: { marginBottom: SPACING.lg },
  dayPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  dayPillActive: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  dayPillDone: {
    backgroundColor: COLORS.green + '20',
    borderColor: COLORS.green,
  },
  dayPillText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  dayPillTextActive: { color: COLORS.cream },
  dayCard: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  dayCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  dayCardTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.textPrimary,
  },
  doneBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.green + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: RADIUS.full,
  },
  doneBadgeText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 11,
    color: COLORS.green,
  },
  assignedLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dhikrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  dhikrRowLeft: { flexDirection: 'row', alignItems: 'center', gap: SPACING.sm, flex: 1 },
  dhikrRowText: { flex: 1 },
  dhikrRowTitle: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 15,
    color: COLORS.textPrimary,
  },
  dhikrRowSub: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  completeDayBtn: {
    marginTop: SPACING.md,
    backgroundColor: COLORS.green,
    borderRadius: RADIUS.lg,
    paddingVertical: 14,
    alignItems: 'center',
  },
  completeDayBtnDisabled: {
    backgroundColor: COLORS.textMuted,
    opacity: 0.5,
  },
  completeDayBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.cream,
  },
});
