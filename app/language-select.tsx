import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage, Language, getTranslation } from '@/context/LanguageContext';
import { LANGUAGE_OPTIONS } from '@/lib/languages';
import { CheckCircle } from 'lucide-react-native';

export default function LanguageSelectScreen() {
  const { language, setLanguage } = useLanguage();
  const [selected, setSelected] = useState<Language>(language);

  const handleContinue = async () => {
    await setLanguage(selected);
    router.replace('/(tabs)');
  };

  return (
    <LinearGradient
      colors={[COLORS.green, COLORS.bgDeep, '#071510']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.arabicTitle}>بِسْمِ اللَّهِ</Text>
            <Text style={styles.appName}>ZIKR</Text>
            <Text style={styles.appSubtitle}>{getTranslation(selected, 'app_subtitle')}</Text>
            <View style={styles.dividerLine} />
            <Text style={styles.title}>{getTranslation(selected, 'select_language')}</Text>
            <Text style={styles.subtitle}>{getTranslation(selected, 'select_language_desc')}</Text>
          </View>

          <View style={styles.options}>
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = selected === opt.code;
              return (
                <TouchableOpacity
                  key={opt.code}
                  style={[styles.option, isSelected && styles.optionActive]}
                  onPress={() => setSelected(opt.code)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.flag}>{opt.flag}</Text>
                  <View style={styles.optionText}>
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelActive]}>
                      {opt.label}
                    </Text>
                  </View>
                  {isSelected && (
                    <CheckCircle size={22} color={COLORS.gold} strokeWidth={2} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.continueBtn}
            onPress={handleContinue}
            activeOpacity={0.88}
          >
            <Text style={styles.continueBtnText}>{getTranslation(selected, 'continue')}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bgDeep },
  safe: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  arabicTitle: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: COLORS.gold,
    letterSpacing: 1,
    marginBottom: SPACING.sm,
    opacity: 0.8,
  },
  appName: {
    fontFamily: FONTS.serifBold,
    fontSize: 52,
    color: COLORS.cream,
    letterSpacing: 8,
    lineHeight: 58,
  },
  appSubtitle: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: 'rgba(250,247,242,0.65)',
    letterSpacing: 0.5,
    marginTop: SPACING.xs,
    textAlign: 'center',
  },
  dividerLine: {
    width: 40,
    height: 1,
    backgroundColor: COLORS.gold,
    opacity: 0.5,
    marginVertical: SPACING.lg,
  },
  title: {
    fontFamily: FONTS.sansMedium,
    fontSize: 18,
    color: 'rgba(250,247,242,0.85)',
    textAlign: 'center',
    letterSpacing: 0.3,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: FONTS.serifItalic,
    fontSize: 15,
    color: 'rgba(250,247,242,0.6)',
    textAlign: 'center',
    marginTop: SPACING.xs,
  },
  options: {
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(250,247,242,0.08)',
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    gap: SPACING.md,
    borderWidth: 1.5,
    borderColor: 'rgba(250,247,242,0.15)',
  },
  optionActive: {
    backgroundColor: 'rgba(201,168,76,0.12)',
    borderColor: COLORS.gold,
  },
  flag: {
    fontSize: 28,
  },
  optionText: { flex: 1 },
  optionLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 17,
    color: 'rgba(250,247,242,0.85)',
  },
  optionLabelActive: {
    color: COLORS.cream,
  },
  continueBtn: {
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.lg,
    paddingVertical: 18,
    alignItems: 'center',
    ...SHADOW.md,
  },
  continueBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 16,
    color: COLORS.bgDeep,
    letterSpacing: 0.5,
  },
});
