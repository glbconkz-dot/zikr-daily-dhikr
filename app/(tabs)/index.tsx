import React, { useMemo, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES, getInspirations } from '@/data/categories';
import DhikrCard from '@/components/DhikrCard';
import CategoryCard from '@/components/CategoryCard';
import InspirationCard from '@/components/InspirationCard';
import { Settings, Sparkles } from 'lucide-react-native';
import { isDhikrLocked, isProgramLocked, isPremiumDhikrContent } from '@/lib/premium';
import { getProgramTitle, getProgramDescription } from '@/data/programs-i18n';
import ProgramCard from '@/components/ProgramCard';

export default function HomeScreen() {
  const {
    dhikrList,
    programs,
    programsProgress,
    sessions,
    favorites,
    premium,
    refreshSessions,
    refreshStats,
    refreshProgramsProgress,
    refreshPremium,
  } = useApp();
  const { t, language } = useLanguage();

  useFocusEffect(
    useCallback(() => {
      refreshSessions();
      refreshStats();
      refreshProgramsProgress();
      refreshPremium();
    }, [refreshSessions, refreshStats, refreshProgramsProgress, refreshPremium])
  );

  const activeSessions = useMemo(
    () => sessions.filter((s) => !s.completed && s.current_count > 0),
    [sessions]
  );

  const todayInspiration = useMemo(() => {
    const inspirations = getInspirations(language);
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    );
    return inspirations[dayOfYear % inspirations.length];
  }, [language]);

  const featuredCategories = CATEGORIES.slice(0, 4);

  const getSessionForDhikr = (dhikrId: string) =>
    sessions.find((s) => s.dhikr_id === dhikrId);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>بِسْمِ اللَّهِ</Text>
            <Text style={styles.appName}>ZIKR</Text>
            <Text style={styles.appSubtitle}>{t('app_subtitle')}</Text>
            <Text style={styles.tagline}>{t('home_tagline')}</Text>
          </View>
          <TouchableOpacity
            style={styles.notifBtn}
            onPress={() => router.push('/settings')}
          >
            <Settings size={20} color={COLORS.textSecondary} strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        {/* Daily Inspiration */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Sparkles size={14} color={COLORS.gold} strokeWidth={1.8} />
            <Text style={styles.sectionTitle}>{t('home_daily_inspiration')}</Text>
          </View>
          <InspirationCard
            text={todayInspiration.text}
            source={todayInspiration.source}
            arabic={todayInspiration.arabic}
          />
        </View>

        {/* Continue Dhikr */}
        {activeSessions.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{t('home_continue_dhikr')}</Text>
              <Text style={styles.sectionCount}>{activeSessions.length}</Text>
            </View>
            <View style={styles.cardList}>
              {activeSessions.slice(0, 3).map((session) => {
                const dhikr = dhikrList.find((d) => d.id === session.dhikr_id);
                if (!dhikr) return null;
                return (
                  <DhikrCard
                    key={session.dhikr_id}
                    dhikr={dhikr}
                    currentCount={session.current_count}
                    isFavorite={favorites.includes(dhikr.id)}
                    showProgress
                    variant="resume"
                    isPremiumContent={isPremiumDhikrContent(dhikr)}
                    onPress={() => router.push(`/dhikr/${dhikr.id}`)}
                  />
                );
              })}
            </View>
          </View>
        )}

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t('home_categories')}</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/categories')}>
              <Text style={styles.seeAll}>{t('home_see_all')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryGrid}>
            {featuredCategories.map((cat) => {
              const count = dhikrList.filter((d) => d.category === cat.id).length;
              return (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  count={count}
                  onPress={() =>
                    router.push({ pathname: '/(tabs)/categories', params: { cat: cat.id } })
                  }
                />
              );
            })}
          </View>
        </View>

        {/* Featured Programs */}
        {programs.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{t('home_featured_programs')}</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/programs')}>
                <Text style={styles.seeAll}>{t('home_see_all')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardList}>
              {programs.slice(0, 2).map((program) => {
                const progProgress = programsProgress.find((p) => p.program_id === program.id);
                const locked = isProgramLocked(program.premium, premium);
                return (
                  <ProgramCard
                    key={program.id}
                    title={getProgramTitle(program.id, language)}
                    description={getProgramDescription(program.id, language)}
                    durationDays={program.duration_days}
                    category={program.category}
                    progress={progProgress}
                    locked={locked}
                    isPremiumContent={program.premium}
                    onPress={() =>
                      locked
                        ? router.push('/(tabs)/premium')
                        : router.push(`/program/${program.id}`)
                    }
                  />
                );
              })}
            </View>
          </View>
        )}

        {/* All Dhikr */}
        {dhikrList.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{t('all_dhikr')}</Text>
              <TouchableOpacity onPress={() => router.push('/(tabs)/categories')}>
                <Text style={styles.seeAll}>{t('home_see_all')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardList}>
              {dhikrList.slice(0, 4).map((dhikr) => {
                const session = getSessionForDhikr(dhikr.id);
                const isLocked = isDhikrLocked(dhikr, premium);
                return (
                  <DhikrCard
                    key={dhikr.id}
                    dhikr={dhikr}
                    currentCount={session?.current_count ?? 0}
                    isFavorite={favorites.includes(dhikr.id)}
                    showProgress={!!session}
                    locked={isLocked}
                    isPremiumContent={isPremiumDhikrContent(dhikr)}
                    onPress={() =>
                      isLocked
                        ? router.push('/(tabs)/premium')
                        : router.push(`/dhikr/${dhikr.id}`)
                    }
                  />
                );
              })}
            </View>
          </View>
        )}

        <View style={styles.bottomPad} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: SPACING.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: Platform.OS === 'android' ? SPACING.xl : SPACING.md,
    paddingBottom: SPACING.lg,
  },
  greeting: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: COLORS.gold,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  appName: {
    fontFamily: FONTS.serifBold,
    fontSize: 36,
    color: COLORS.green,
    lineHeight: 40,
    letterSpacing: 4,
  },
  appSubtitle: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.gold,
    letterSpacing: 0.3,
    marginTop: 2,
  },
  tagline: {
    fontFamily: FONTS.serifItalic,
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? SPACING.xl : SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
    gap: SPACING.xs,
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
  },
  sectionCount: {
    fontFamily: FONTS.sansBold,
    fontSize: 11,
    color: COLORS.cream,
    backgroundColor: COLORS.green,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: RADIUS.full,
  },
  seeAll: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.gold,
    letterSpacing: 0.3,
  },
  categoryGrid: {
    flexDirection: 'row',
    gap: SPACING.sm,
    flexWrap: 'wrap',
  },
  cardList: {
    gap: SPACING.sm,
  },
  bottomPad: {
    height: SPACING.xl,
  },
});
