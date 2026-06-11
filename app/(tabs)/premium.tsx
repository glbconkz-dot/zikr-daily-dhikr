import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { useApp } from '@/context/AppContext';
import { Crown, CheckCircle, CloudUpload, BarChart3, Infinity, Sparkles, Lock } from 'lucide-react-native';

export default function PremiumScreen() {
  const { t } = useLanguage();
  const { premium, togglePremium } = useApp();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [premiumOn, setPremiumOn] = useState(premium);

  useEffect(() => {
    setPremiumOn(premium);
  }, [premium]);

  const handlePremiumToggle = () => {
    const next = !premiumOn;
    setPremiumOn(next);
    void togglePremium(next);
  };

  const FEATURES = [
    {
      icon: Infinity,
      titleKey: 'feat_unlimited_dhikr',
      descKey: 'feat_unlimited_dhikr_desc',
      color: COLORS.green,
    },
    {
      icon: Sparkles,
      titleKey: 'feat_unlimited_programs',
      descKey: 'feat_unlimited_programs_desc',
      color: COLORS.gold,
    },
    {
      icon: CloudUpload,
      titleKey: 'feat_cloud_backup',
      descKey: 'feat_cloud_backup_desc',
      color: '#5B8FA8',
    },
    {
      icon: BarChart3,
      titleKey: 'feat_stats',
      descKey: 'feat_stats_desc',
      color: '#7BA05B',
    },
  ];

  const PLANS: {
    id: 'monthly' | 'yearly';
    labelKey: string;
    price: string;
    periodKey: string;
    tag: string | null;
    discountKey: string | null;
  }[] = [
    {
      id: 'monthly',
      labelKey: 'plan_monthly_premium',
      price: '$2.99',
      periodKey: 'per_month',
      tag: null,
      discountKey: null,
    },
    {
      id: 'yearly',
      labelKey: 'plan_yearly_premium',
      price: '$19.99',
      periodKey: 'per_year',
      tag: 'best_value',
      discountKey: 'save_44',
    },
  ];

  const getPlanPrice = () => {
    const plan = PLANS.find((p) => p.id === selectedPlan);
    return plan ? `${t(plan.labelKey)} ${plan.price}` : '';
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Hero */}
        <LinearGradient
          colors={[COLORS.green, COLORS.bgDeep, '#071510']}
          style={styles.hero}
        >
          <View style={styles.crownWrapper}>
            <Crown size={40} color={COLORS.gold} strokeWidth={1.5} />
          </View>
          <Text style={styles.heroTitle}>{t('premium_title')}</Text>
          {premiumOn && (
            <View style={styles.activeBadge}>
              <CheckCircle size={14} color={COLORS.bgDeep} strokeWidth={2.5} />
              <Text style={styles.activeBadgeText}>{t('premium_active')}</Text>
            </View>
          )}
          <Text style={styles.heroSubtitle}>{t('premium_subtitle')}</Text>
          <Text style={styles.heroArabic}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        </LinearGradient>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('what_you_get')}</Text>
          <View style={styles.featureList}>
            {FEATURES.map((feat) => {
              const IconComp = feat.icon;
              return (
                <View key={feat.titleKey} style={[styles.featureCard, SHADOW.sm]}>
                  <View style={[styles.featureIcon, { backgroundColor: feat.color + '15' }]}>
                    <IconComp size={20} color={feat.color} strokeWidth={1.8} />
                  </View>
                  <View style={styles.featureText}>
                    <Text style={styles.featureTitle}>{t(feat.titleKey)}</Text>
                    <Text style={styles.featureDesc}>{t(feat.descKey)}</Text>
                  </View>
                  <CheckCircle size={18} color={COLORS.green} strokeWidth={2} />
                </View>
              );
            })}
          </View>
        </View>

        {/* Plans */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('choose_plan')}</Text>
          <View style={styles.planList}>
            {PLANS.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[styles.planCard, selectedPlan === plan.id && styles.planCardActive]}
                onPress={() => setSelectedPlan(plan.id)}
                activeOpacity={0.85}
              >
                <View style={styles.planLeft}>
                  {plan.tag && (
                    <View style={styles.planTag}>
                      <Text style={styles.planTagText}>{t(plan.tag)}</Text>
                    </View>
                  )}
                  <Text style={[styles.planLabel, selectedPlan === plan.id && styles.planLabelActive]}>
                    {t(plan.labelKey)}
                  </Text>
                  {plan.discountKey && (
                    <View style={styles.discountBadge}>
                      <Text style={styles.discountText}>{t(plan.discountKey)}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.planRight}>
                  <Text style={[styles.planPrice, selectedPlan === plan.id && styles.planPriceActive]}>
                    {plan.price}
                  </Text>
                  <Text style={[styles.planPeriod, selectedPlan === plan.id && styles.planPeriodActive]}>
                    {t(plan.periodKey)}
                  </Text>
                </View>
                {selectedPlan === plan.id && (
                  <View style={styles.planCheck}>
                    <CheckCircle size={20} color={COLORS.green} strokeWidth={2.5} />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CTA */}
        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={styles.ctaBtn}
            activeOpacity={0.88}
            onPress={handlePremiumToggle}
          >
            <LinearGradient
              colors={premiumOn ? [COLORS.gold, COLORS.goldDark] : [COLORS.green, COLORS.greenMid]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaGradient}
            >
              <Crown size={18} color={premiumOn ? COLORS.bgDeep : COLORS.gold} strokeWidth={1.8} />
              <Text style={styles.ctaBtnText}>
                {premiumOn
                  ? t('premium_test_lock')
                  : `${t('premium_test_unlock')} — ${getPlanPrice()}`}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.ctaNote}>{t('free_trial')}</Text>

          <View style={styles.trustRow}>
            <Text style={styles.trustText}>🔒 {t('secure_payment')}</Text>
            <Text style={styles.trustText}>✦ {t('no_hidden_fees')}</Text>
            <Text style={styles.trustText}>♻ {t('auto_renew')}</Text>
          </View>
        </View>

        {/* Locked content preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('locked_preview')}</Text>
          <View style={styles.lockedGrid}>
            {[t('locked_item_1'), t('feat_stats'), t('locked_item_2'), t('locked_item_3')].map(
              (item) => (
                <View key={item} style={[styles.lockedItem, SHADOW.sm]}>
                  <Lock size={14} color={COLORS.textMuted} strokeWidth={1.8} />
                  <Text style={styles.lockedItemText}>{item}</Text>
                </View>
              )
            )}
          </View>
        </View>

        <View style={{ height: SPACING.xxl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1 },
  content: {},
  hero: {
    paddingTop: Platform.OS === 'android' ? SPACING.xxl : SPACING.xl,
    paddingBottom: SPACING.xxl,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  crownWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(201,168,76,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: 'rgba(201,168,76,0.3)',
  },
  heroTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 34,
    color: COLORS.cream,
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },
  activeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.full,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: SPACING.sm,
  },
  activeBadgeText: {
    fontFamily: FONTS.sansBold,
    fontSize: 12,
    color: COLORS.bgDeep,
    letterSpacing: 0.3,
  },
  heroSubtitle: {
    fontFamily: FONTS.serifItalic,
    fontSize: 15,
    color: 'rgba(250,247,242,0.72)',
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: SPACING.lg,
  },
  heroArabic: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.gold,
    letterSpacing: 0.5,
    opacity: 0.8,
  },
  section: {
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.xl,
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 22,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  featureList: { gap: SPACING.sm },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    gap: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: { flex: 1 },
  featureTitle: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 14,
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  featureDesc: {
    fontFamily: FONTS.sans,
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 17,
  },
  planList: {
    gap: SPACING.sm,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    position: 'relative',
  },
  planCardActive: {
    borderColor: COLORS.green,
    backgroundColor: COLORS.green + '08',
  },
  planLeft: {
    flex: 1,
    gap: 4,
  },
  planTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.full,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 2,
  },
  planTagText: {
    fontFamily: FONTS.sansBold,
    fontSize: 9,
    color: COLORS.bgDeep,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  planLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 15,
    color: COLORS.textPrimary,
  },
  planLabelActive: { color: COLORS.green },
  discountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.gold + '20',
    borderRadius: RADIUS.full,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountText: {
    fontFamily: FONTS.sansBold,
    fontSize: 10,
    color: COLORS.goldDark,
  },
  planRight: {
    alignItems: 'flex-end',
    marginRight: SPACING.xl,
  },
  planPrice: {
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.textPrimary,
    lineHeight: 26,
  },
  planPriceActive: { color: COLORS.green },
  planPeriod: {
    fontFamily: FONTS.sans,
    fontSize: 11,
    color: COLORS.textMuted,
  },
  planPeriodActive: { color: COLORS.textSecondary },
  planCheck: {
    position: 'absolute',
    right: SPACING.md,
    top: '50%',
    marginTop: -10,
  },
  ctaSection: {
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.xl,
  },
  ctaBtn: {
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    ...SHADOW.md,
  },
  ctaGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: SPACING.sm,
  },
  ctaBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.cream,
    letterSpacing: 0.3,
    flexShrink: 1,
    textAlign: 'center',
  },
  ctaNote: {
    fontFamily: FONTS.sans,
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.sm,
    lineHeight: 16,
  },
  trustRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.md,
    marginTop: SPACING.sm,
    flexWrap: 'wrap',
  },
  trustText: {
    fontFamily: FONTS.sans,
    fontSize: 11,
    color: COLORS.textMuted,
  },
  lockedGrid: {
    gap: SPACING.sm,
  },
  lockedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    opacity: 0.75,
  },
  lockedItemText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: COLORS.textMuted,
  },
});
