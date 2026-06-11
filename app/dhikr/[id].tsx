import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { toggleFavorite } from '@/lib/storage';
import {
  useLanguage,
  getDhikrTitle,
  getDhikrMeaning,
  getDhikrExplanation,
} from '@/context/LanguageContext';
import { isDhikrLocked, isPremiumDhikrContent } from '@/lib/premium';
import PremiumBadge from '@/components/PremiumBadge';
import { CATEGORY_MAP } from '@/data/categories';
import { Heart, BookOpen, Play, RotateCcw, ArrowLeft, Lock } from 'lucide-react-native';

const CAT_KEY_MAP: Record<string, string> = {
  'riziq-bereket': 'cat_rizq',
  'sifa': 'cat_healing',
  'huzur-sukunet': 'cat_peace',
  'korunma': 'cat_protection',
  'salavatlar': 'cat_salawat',
  'esmaul-husna': 'cat_asma',
  'kismet-ask-iliskiler': 'cat_relationships',
  'ev-is-hayirli-kapilar': 'cat_opportunities',
};

export default function DhikrDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dhikrList, sessions, favorites, premium, refreshFavorites } = useApp();
  const { language, t } = useLanguage();

  const dhikr = dhikrList.find((d) => d.id === id);
  const session = sessions.find((s) => s.dhikr_id === id);
  const isFavorite = favorites.includes(id ?? '');
  const category = dhikr ? CATEGORY_MAP[dhikr.category] : null;
  const isLocked = dhikr ? isDhikrLocked(dhikr, premium) : false;
  const showPremiumBadge = dhikr ? isPremiumDhikrContent(dhikr) : false;

  useEffect(() => {
    if (dhikr && isLocked) {
      router.replace('/(tabs)/premium');
    }
  }, [dhikr, isLocked]);

  const [showMeaning, setShowMeaning] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleFavorite = async () => {
    if (!id) return;
    await toggleFavorite(id);
    await refreshFavorites();
  };

  const hasProgress = session && !session.completed && session.current_count > 0;
  const progress = dhikr && session ? session.current_count / dhikr.target_count : 0;

  if (!dhikr) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.simpleHeader}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backBtnSimple}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <ArrowLeft size={22} color={COLORS.textPrimary} strokeWidth={1.8} />
          </TouchableOpacity>
        </View>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>{t('dhikr_not_found')}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[category?.gradient[0] ?? COLORS.green, category?.gradient[1] ?? COLORS.bgDeep]}
        style={styles.heroGradient}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backBtn}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <ArrowLeft size={22} color={COLORS.cream} strokeWidth={1.8} />
            </TouchableOpacity>
            <View style={styles.headerSpacer} />
            <TouchableOpacity
              onPress={handleFavorite}
              style={styles.favoriteBtn}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Heart
                size={22}
                color={isFavorite ? COLORS.goldLight : 'rgba(250,247,242,0.7)'}
                fill={isFavorite ? COLORS.goldLight : 'none'}
                strokeWidth={1.8}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.heroContent}>
            {showPremiumBadge && <PremiumBadge style={styles.heroPremiumBadge} />}
            {category && (
              <View style={styles.catTag}>
                <Text style={styles.catTagText}>
                  {dhikr && CAT_KEY_MAP[dhikr.category] ? t(CAT_KEY_MAP[dhikr.category]) : ''}
                </Text>
              </View>
            )}
            <Text style={styles.heroTitle}>{getDhikrTitle(dhikr, language)}</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Arapça metin — büyük ve ortalı */}
        <View style={[styles.arabicCard, SHADOW.md]}>
          <Text style={styles.arabicText}>{dhikr.arabic_text}</Text>
          <View style={styles.divider} />
          <Text style={styles.transliteration}>{dhikr.transliteration}</Text>
        </View>

        <TouchableOpacity
          style={styles.expandSection}
          onPress={() => setShowMeaning(!showMeaning)}
          activeOpacity={0.8}
        >
          <View style={styles.expandHeader}>
            <View style={styles.expandIcon}>
              <BookOpen size={16} color={COLORS.green} strokeWidth={1.8} />
            </View>
            <Text style={styles.expandTitle}>{t('meaning')}</Text>
            <Text style={styles.expandChevron}>{showMeaning ? '−' : '+'}</Text>
          </View>
          {showMeaning && (
            <Text style={styles.expandBody}>{getDhikrMeaning(dhikr, language)}</Text>
          )}
        </TouchableOpacity>

        {getDhikrExplanation(dhikr, language).length > 0 && (
          <TouchableOpacity
            style={styles.expandSection}
            onPress={() => setShowExplanation(!showExplanation)}
            activeOpacity={0.8}
          >
            <View style={styles.expandHeader}>
              <View style={[styles.expandIcon, { backgroundColor: COLORS.gold + '15' }]}>
                <BookOpen size={16} color={COLORS.gold} strokeWidth={1.8} />
              </View>
              <Text style={styles.expandTitle}>{t('explanation')}</Text>
              <Text style={styles.expandChevron}>{showExplanation ? '−' : '+'}</Text>
            </View>
            {showExplanation && (
              <Text style={styles.expandBody}>{getDhikrExplanation(dhikr, language)}</Text>
            )}
          </TouchableOpacity>
        )}

        {hasProgress && (
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>{t('session_progress')}</Text>
              <Text style={styles.progressCount}>
                {session!.current_count} / {dhikr.target_count}
              </Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${Math.min(progress * 100, 100)}%` as any }]} />
            </View>
          </View>
        )}

        <View style={styles.targetInfo}>
          <Text style={styles.targetLabel}>{t('target_count')}</Text>
          <Text style={styles.targetValue}>×{dhikr.target_count}</Text>
        </View>

        {/* CTA */}
        {isLocked ? (
          <View style={styles.lockedBlock}>
            <Lock size={20} color={COLORS.gold} strokeWidth={1.8} />
            <Text style={styles.lockedText}>{t('locked_dhikr_premium')}</Text>
            <TouchableOpacity
              style={styles.upgradeBtn}
              onPress={() => router.push('/(tabs)/premium')}
            >
              <Text style={styles.upgradeBtnText}>{t('premium_upgrade_btn')}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.ctaRow}>
            <TouchableOpacity
              style={styles.ctaBtn}
              onPress={() => router.push(`/counter/${dhikr.id}`)}
              activeOpacity={0.85}
            >
              {hasProgress ? (
                <>
                  <RotateCcw size={18} color={COLORS.cream} strokeWidth={2} />
                  <Text style={styles.ctaBtnText}>{t('resume')}</Text>
                </>
              ) : (
                <>
                  <Play size={18} color={COLORS.cream} fill={COLORS.cream} strokeWidth={0} />
                  <Text style={styles.ctaBtnText}>{t('start_dhikr')}</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: SPACING.xxl }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  safe: { flex: 1, backgroundColor: COLORS.bg },
  heroGradient: { paddingBottom: SPACING.xl },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    minHeight: 52,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(250,247,242,0.2)',
  },
  headerSpacer: { flex: 1 },
  favoriteBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(250,247,242,0.2)',
  },
  simpleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  backBtnSimple: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  heroContent: { paddingHorizontal: SPACING.md, paddingBottom: SPACING.lg },
  heroPremiumBadge: { alignSelf: 'center', marginBottom: SPACING.sm },
  catTag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(250,247,242,0.18)',
    borderRadius: RADIUS.full,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: SPACING.sm,
  },
  catTagText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 11,
    color: COLORS.cream,
    letterSpacing: 0.3,
  },
  heroTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 32,
    color: COLORS.cream,
    lineHeight: 38,
  },
  scroll: { flex: 1 },
  arabicCard: {
    margin: SPACING.md,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
  },
  arabicText: {
    fontFamily: FONTS.sans,
    fontSize: 34,
    color: COLORS.green,
    textAlign: 'center',
    lineHeight: 56,
    writingDirection: 'rtl',
    marginBottom: SPACING.md,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
    width: '80%',
  },
  transliteration: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 28,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: 0.3,
  },
  expandSection: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  expandHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  expandIcon: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.green + '12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandTitle: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 15,
    color: COLORS.textPrimary,
    flex: 1,
  },
  expandChevron: {
    fontFamily: FONTS.sansBold,
    fontSize: 18,
    color: COLORS.textMuted,
    width: 24,
    textAlign: 'center',
  },
  expandBody: {
    fontFamily: FONTS.sans,
    fontSize: 18,
    color: COLORS.textPrimary,
    lineHeight: 28,
    marginTop: SPACING.md,
  },
  progressSection: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  progressLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  progressCount: {
    fontFamily: FONTS.sansBold,
    fontSize: 13,
    color: COLORS.gold,
  },
  progressTrack: {
    height: 10,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 3,
  },
  targetInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    backgroundColor: COLORS.green + '0A',
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.green + '20',
  },
  targetLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 15,
    color: COLORS.textSecondary,
  },
  targetValue: {
    fontFamily: FONTS.serifBold,
    fontSize: 28,
    color: COLORS.green,
  },
  ctaRow: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
  },
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.lg,
    paddingVertical: 16,
    gap: SPACING.sm,
    backgroundColor: COLORS.green,
  },
  ctaBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 16,
    color: COLORS.cream,
    letterSpacing: 0.3,
  },
  lockedBlock: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    backgroundColor: COLORS.gold + '10',
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.gold + '30',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  lockedText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  upgradeBtn: {
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.xl,
    paddingVertical: 12,
    marginTop: SPACING.sm,
  },
  upgradeBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.bgDark,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    fontFamily: FONTS.serif,
    fontSize: 18,
    color: COLORS.textMuted,
  },
});
