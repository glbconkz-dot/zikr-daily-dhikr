import React, { useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { useApp } from '@/context/AppContext';
import { getProgramTitle, getProgramDescription } from '@/data/programs-i18n';
import { isProgramLocked } from '@/lib/premium';
import ProgramCard from '@/components/ProgramCard';

export default function ProgramsScreen() {
  const { t, language } = useLanguage();
  const { programs, programsProgress, premium, refreshProgramsProgress, refreshPremium } = useApp();

  useFocusEffect(
    useCallback(() => {
      refreshProgramsProgress();
      refreshPremium();
    }, [refreshProgramsProgress, refreshPremium])
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.pageTitle}>{t('spiritual_programs')}</Text>
          <Text style={styles.pageSubtitle}>{t('programs_subtitle')}</Text>
        </View>

        <View style={styles.list}>
          {programs.map((program) => {
            const progress = programsProgress.find((p) => p.program_id === program.id);
            const locked = isProgramLocked(program.premium, premium);
            return (
              <ProgramCard
                key={program.id}
                title={getProgramTitle(program.id, language)}
                description={getProgramDescription(program.id, language)}
                durationDays={program.duration_days}
                category={program.category}
                progress={progress}
                locked={locked}
                isPremiumContent={program.premium}
                onPress={() => {
                  if (locked) {
                    router.push('/(tabs)/premium');
                  } else {
                    router.push(`/program/${program.id}`);
                  }
                }}
              />
            );
          })}
        </View>

        <View style={{ height: SPACING.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: SPACING.md },
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
  list: { gap: SPACING.md },
});
