import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ActivityIndicator,
  Alert,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { useApp } from '@/context/AppContext';
import {
  getFallbackPrice,
  getSubscriptionOffering,
  isNativeStoreSupported,
  PurchaseErrorCode,
  SubscriptionPlan,
} from '@/lib/revenuecat';
import { Crown, CheckCircle, CloudUpload, BarChart3, Infinity, Sparkles, Lock } from 'lucide-react-native';
import { useTabBarScrollPadding } from '@/lib/tab-bar';
import { ENABLE_PREMIUM_TEST_TOGGLE } from '@/lib/premium-config';

export default function PremiumScreen() {
  const { t } = useLanguage();
  const tabBarPadding = useTabBarScrollPadding();
  const { premium, purchaseSubscription, restorePremiumPurchases, togglePremium } = useApp();
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>('yearly');
  const [monthlyPrice, setMonthlyPrice] = useState(getFallbackPrice('monthly'));
  const [yearlyPrice, setYearlyPrice] = useState(getFallbackPrice('yearly'));
  const [loadingOfferings, setLoadingOfferings] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [restoring, setRestoring] = useState(false);

  const loadOfferings = useCallback(async () => {
    setLoadingOfferings(true);
    try {
      const offering = await getSubscriptionOffering();
      if (offering.monthly) setMonthlyPrice(offering.monthly.priceString);
      if (offering.yearly) setYearlyPrice(offering.yearly.priceString);
    } finally {
      setLoadingOfferings(false);
    }
  }, []);

  useEffect(() => {
    void loadOfferings();
  }, [loadOfferings]);

  const getErrorMessage = (code: PurchaseErrorCode) => {
    switch (code) {
      case 'cancelled':
        return t('purchase_cancelled');
      case 'network':
        return t('purchase_network_error');
      case 'no_products':
        return t('purchase_no_products');
      case 'not_available':
        return t('purchase_not_available');
      case 'restore_failed':
        return t('premium_restore_failed');
      default:
        return t('purchase_failed');
    }
  };

  const handleSubscribe = async () => {
    if (premium || purchasing) return;

    if (ENABLE_PREMIUM_TEST_TOGGLE) {
      await togglePremium(true);
      return;
    }

    if (!isNativeStoreSupported()) {
      if (__DEV__) {
        await togglePremium(true);
        return;
      }
      Alert.alert(t('premium_title'), t('purchase_not_available'));
      return;
    }

    setPurchasing(true);
    const error = await purchaseSubscription(selectedPlan);
    setPurchasing(false);

    if (error && error !== 'cancelled') {
      Alert.alert(t('premium_title'), getErrorMessage(error));
    }
  };

  const handleRestore = async () => {
    if (restoring) return;

    if (!isNativeStoreSupported()) {
      Alert.alert(t('premium_title'), t('purchase_not_available'));
      return;
    }

    setRestoring(true);
    const { restored, error } = await restorePremiumPurchases();
    setRestoring(false);

    if (error) {
      Alert.alert(t('premium_title'), getErrorMessage(error));
      return;
    }

    Alert.alert(
      t('premium_title'),
      restored ? t('premium_restore_success') : t('premium_restore_none')
    );
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
    id: SubscriptionPlan;
    labelKey: string;
    price: string;
    periodKey: string;
    tag: string | null;
    discountKey: string | null;
  }[] = [
    {
      id: 'monthly',
      labelKey: 'plan_monthly_premium',
      price: monthlyPrice,
      periodKey: 'per_month',
      tag: null,
      discountKey: null,
    },
    {
      id: 'yearly',
      labelKey: 'plan_yearly_premium',
      price: yearlyPrice,
      periodKey: 'per_year',
      tag: 'best_value',
      discountKey: 'save_44',
    },
  ];

  const selectedPrice = selectedPlan === 'monthly' ? monthlyPrice : yearlyPrice;
  const busy = purchasing || restoring || loadingOfferings;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: tabBarPadding }]}
      >
        <LinearGradient
          colors={[COLORS.green, COLORS.bgDeep, '#071510']}
          style={styles.hero}
        >
          <View style={styles.crownWrapper}>
            <Crown size={40} color={COLORS.gold} strokeWidth={1.5} />
          </View>
          <Text style={styles.heroTitle}>{t('premium_title')}</Text>
          {premium && (
            <View style={styles.activeBadge}>
              <CheckCircle size={14} color={COLORS.bgDeep} strokeWidth={2.5} />
              <Text style={styles.activeBadgeText}>{t('premium_active')}</Text>
            </View>
          )}
          <Text style={styles.heroSubtitle}>{t('premium_subtitle')}</Text>
          <Text style={styles.heroArabic}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
        </LinearGradient>

        {ENABLE_PREMIUM_TEST_TOGGLE && (
          <View style={[styles.testCard, SHADOW.sm]}>
            <View style={styles.testCardRow}>
              <View style={styles.testCardText}>
                <Text style={styles.testCardTitle}>{t('settings_premium_test')}</Text>
                <Text style={styles.testCardDesc}>{t('settings_premium_test_desc')}</Text>
              </View>
              <Switch
                value={premium}
                onValueChange={(value) => void togglePremium(value)}
                trackColor={{ false: COLORS.border, true: COLORS.green + '99' }}
                thumbColor={premium ? COLORS.gold : COLORS.bgCard}
                ios_backgroundColor={COLORS.border}
              />
            </View>
            <Text style={[styles.testCardStatus, premium && styles.testCardStatusOn]}>
              {premium ? t('premium_active') : t('premium_inactive')}
            </Text>
          </View>
        )}

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('choose_plan')}</Text>
          {loadingOfferings ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator color={COLORS.green} />
              <Text style={styles.loadingText}>{t('premium_loading')}</Text>
            </View>
          ) : (
            <View style={styles.planList}>
              {PLANS.map((plan) => (
                <TouchableOpacity
                  key={plan.id}
                  style={[styles.planCard, selectedPlan === plan.id && styles.planCardActive]}
                  onPress={() => setSelectedPlan(plan.id)}
                  activeOpacity={0.85}
                  disabled={busy}
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
          )}
        </View>

        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={[styles.ctaBtn, (busy || premium) && styles.ctaBtnDisabled]}
            activeOpacity={0.88}
            onPress={handleSubscribe}
            disabled={busy || premium}
          >
            <LinearGradient
              colors={premium ? [COLORS.gold, COLORS.goldDark] : [COLORS.green, COLORS.greenMid]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaGradient}
            >
              {purchasing ? (
                <ActivityIndicator color={COLORS.cream} />
              ) : (
                <Crown size={18} color={premium ? COLORS.bgDeep : COLORS.gold} strokeWidth={1.8} />
              )}
              <Text style={styles.ctaBtnText}>
                {premium
                  ? t('premium_subscribed')
                  : `${t('premium_subscribe_btn')} — ${selectedPrice}`}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.restoreBtn}
            onPress={handleRestore}
            disabled={busy}
            activeOpacity={0.8}
          >
            {restoring ? (
              <ActivityIndicator color={COLORS.textMuted} size="small" />
            ) : (
              <Text style={styles.restoreBtnText}>{t('premium_restore')}</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.ctaNote}>{t('free_trial')}</Text>

          <View style={styles.trustRow}>
            <Text style={styles.trustText}>🔒 {t('secure_payment')}</Text>
            <Text style={styles.trustText}>✦ {t('no_hidden_fees')}</Text>
            <Text style={styles.trustText}>♻ {t('auto_renew')}</Text>
          </View>
        </View>

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
  testCard: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: COLORS.gold + '55',
  },
  testCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.md,
  },
  testCardText: { flex: 1 },
  testCardTitle: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 15,
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  testCardDesc: {
    fontFamily: FONTS.sans,
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 17,
  },
  testCardStatus: {
    marginTop: SPACING.sm,
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: COLORS.textMuted,
  },
  testCardStatusOn: {
    color: COLORS.green,
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
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    paddingVertical: SPACING.lg,
    justifyContent: 'center',
  },
  loadingText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
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
  ctaBtnDisabled: {
    opacity: 0.85,
  },
  ctaGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: SPACING.sm,
    minHeight: 56,
  },
  ctaBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.cream,
    letterSpacing: 0.3,
    flexShrink: 1,
    textAlign: 'center',
  },
  restoreBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    minHeight: 44,
  },
  restoreBtnText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 14,
    color: COLORS.textSecondary,
    textDecorationLine: 'underline',
  },
  ctaNote: {
    fontFamily: FONTS.sans,
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.xs,
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
