import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import { router } from 'expo-router';
import Constants from 'expo-constants';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import { useLanguage, Language } from '@/context/LanguageContext';
import { useApp } from '@/context/AppContext';
import { LANGUAGE_OPTIONS } from '@/lib/languages';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react-native';
import { triggerTapHaptic } from '@/lib/haptics';

const PRIVACY_URL = 'https://zikr.app/privacy';
const TERMS_URL = 'https://zikr.app/terms';

export default function SettingsScreen() {
  const { language, setLanguage, t } = useLanguage();
  const { premium, hapticsEnabled, togglePremium, toggleHaptics } = useApp();
  const [selected, setSelected] = useState<Language>(language);
  const [premiumOn, setPremiumOn] = useState(premium);
  const [hapticsOn, setHapticsOn] = useState(hapticsEnabled);

  useEffect(() => {
    setPremiumOn(premium);
  }, [premium]);

  useEffect(() => {
    setHapticsOn(hapticsEnabled);
  }, [hapticsEnabled]);

  const handleHapticsToggle = () => {
    const next = !hapticsOn;
    setHapticsOn(next);
    triggerTapHaptic(next);
    void toggleHaptics(next);
  };

  const handlePremiumToggle = () => {
    const next = !premiumOn;
    setPremiumOn(next);
    triggerTapHaptic(true);
    void togglePremium(next);
  };

  const appVersion = Constants.expoConfig?.version ?? '1.0.0';

  const handleSelect = async (code: Language) => {
    setSelected(code);
    await setLanguage(code);
  };

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={22} color={COLORS.textPrimary} strokeWidth={2} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('settings_title')}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>{t('settings_app')}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('settings_language')}</Text>
          <Text style={styles.cardDesc}>{t('settings_language_desc')}</Text>

          <View style={styles.options}>
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = selected === opt.code;
              return (
                <TouchableOpacity
                  key={opt.code}
                  style={[styles.option, isSelected && styles.optionActive]}
                  onPress={() => handleSelect(opt.code)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.flag}>{opt.flag}</Text>
                  <Text style={[styles.optionLabel, isSelected && styles.optionLabelActive]}>
                    {opt.label}
                  </Text>
                  {isSelected && <CheckCircle size={20} color={COLORS.green} strokeWidth={2} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('settings_haptics')}</Text>
          <Text style={styles.cardDesc}>{t('settings_haptics_desc')}</Text>
          <View style={styles.rowItem}>
            <Text style={styles.rowLabel}>
              {hapticsOn ? t('settings_haptics_on') : t('settings_haptics_off')}
            </Text>
            <TouchableOpacity
              style={[styles.premiumToggle, hapticsOn && styles.premiumToggleOn]}
              onPress={handleHapticsToggle}
            >
              <Text style={[styles.premiumToggleText, hapticsOn && styles.premiumToggleTextOn]}>
                {hapticsOn ? t('settings_haptics_on') : t('settings_haptics_off')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t('settings_premium_test')}</Text>
          <Text style={styles.cardDesc}>{t('settings_premium_test_desc')}</Text>
          <View style={styles.rowItem}>
            <Text style={styles.rowLabel}>
              {premiumOn ? t('premium_active') : t('premium_inactive')}
            </Text>
            <TouchableOpacity
              style={[styles.premiumToggle, premiumOn && styles.premiumToggleOn]}
              onPress={handlePremiumToggle}
            >
              <Text style={[styles.premiumToggleText, premiumOn && styles.premiumToggleTextOn]}>
                {premiumOn ? t('premium_test_lock') : t('premium_test_unlock')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowItem}>
            <Text style={styles.rowLabel}>{t('settings_version')}</Text>
            <Text style={styles.rowValue}>{appVersion}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink(PRIVACY_URL)}>
            <Text style={styles.linkLabel}>{t('settings_privacy')}</Text>
            <ExternalLink size={18} color={COLORS.textMuted} strokeWidth={2} />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink(TERMS_URL)}>
            <Text style={styles.linkLabel}>{t('settings_terms')}</Text>
            <ExternalLink size={18} color={COLORS.textMuted} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <Text style={styles.notice}>{t('free_limit_notice')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  headerTitle: {
    flex: 1,
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  headerSpacer: { width: 44 },
  content: { padding: SPACING.md },
  sectionLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 12,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: SPACING.sm,
  },
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  cardTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  cardDesc: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: SPACING.md,
  },
  options: { gap: SPACING.sm },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    padding: SPACING.md,
    borderRadius: RADIUS.lg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    backgroundColor: COLORS.bg,
  },
  optionActive: {
    borderColor: COLORS.green,
    backgroundColor: COLORS.green + '08',
  },
  flag: { fontSize: 24 },
  optionLabel: {
    flex: 1,
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  optionLabelActive: { color: COLORS.green },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  rowValue: {
    fontFamily: FONTS.sans,
    fontSize: 15,
    color: COLORS.textMuted,
  },
  premiumToggle: {
    backgroundColor: COLORS.bg,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
  },
  premiumToggleOn: {
    backgroundColor: COLORS.gold + '20',
    borderColor: COLORS.gold,
  },
  premiumToggleText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 12,
    color: COLORS.goldDark,
  },
  premiumToggleTextOn: {
    color: COLORS.green,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.sm,
  },
  linkLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.xs,
  },
  notice: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: SPACING.md,
  },
});
