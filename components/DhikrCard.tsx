import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { Dhikr } from '@/types';
import { CATEGORY_MAP } from '@/data/categories';
import { useLanguage, getDhikrTitle, getDhikrTransliteration } from '@/context/LanguageContext';
import { Heart, Play, RotateCcw, Lock } from 'lucide-react-native';
import PremiumBadge from '@/components/PremiumBadge';

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

interface Props {
  dhikr: Dhikr;
  currentCount?: number;
  isFavorite?: boolean;
  onPress: () => void;
  onFavorite?: () => void;
  showProgress?: boolean;
  variant?: 'default' | 'compact' | 'resume';
  locked?: boolean;
  isPremiumContent?: boolean;
}

export default function DhikrCard({
  dhikr,
  currentCount = 0,
  isFavorite = false,
  onPress,
  onFavorite,
  showProgress = false,
  variant = 'default',
  locked = false,
  isPremiumContent = false,
}: Props) {
  const { t, language } = useLanguage();
  const category = CATEGORY_MAP[dhikr.category];
  const progress = dhikr.target_count > 0 ? Math.min(currentCount / dhikr.target_count, 1) : 0;
  const isResume = variant === 'resume' && currentCount > 0;

  const categoryLabel = CAT_KEY_MAP[dhikr.category]
    ? t(CAT_KEY_MAP[dhikr.category])
    : (category?.label ?? dhikr.category);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={locked ? 0.95 : 0.85} style={[styles.card, SHADOW.sm]}>
      {isPremiumContent && <PremiumBadge style={styles.premiumBadge} compact />}

      {/* Category tag */}
      <View style={[styles.categoryTag, { backgroundColor: (category?.color ?? COLORS.green) + '18' }]}>
        <View style={[styles.categoryDot, { backgroundColor: category?.color ?? COLORS.green }]} />
        <Text style={[styles.categoryLabel, { color: category?.color ?? COLORS.green }]}>
          {categoryLabel}
        </Text>
      </View>

      {/* Title */}
      <Text style={styles.title} numberOfLines={variant === 'compact' ? 1 : 2}>
        {getDhikrTitle(dhikr, language)}
      </Text>

      {/* Arabic text */}
      <Text style={[styles.arabic, locked && styles.blurredText]} numberOfLines={3}>
        {dhikr.arabic_text}
      </Text>
      {getDhikrTransliteration(dhikr, language).length > 0 && (
        <Text style={[styles.transliteration, locked && styles.blurredText]} numberOfLines={2}>
          {getDhikrTransliteration(dhikr, language)}
        </Text>
      )}

      {/* Progress bar */}
      {showProgress && currentCount > 0 && !locked && (
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
          </View>
          <Text style={styles.progressLabel}>
            {currentCount}/{dhikr.target_count}
          </Text>
        </View>
      )}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.targetBadge}>
          <Text style={styles.targetText}>×{dhikr.target_count}</Text>
        </View>
        <View style={styles.actions}>
          {!locked && onFavorite && (
            <TouchableOpacity onPress={onFavorite} style={styles.iconBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Heart
                size={16}
                color={isFavorite ? COLORS.gold : COLORS.textMuted}
                fill={isFavorite ? COLORS.gold : 'none'}
              />
            </TouchableOpacity>
          )}
          <View style={[styles.playBtn, isResume && styles.resumeBtn, locked && styles.lockedBtn]}>
            {locked ? (
              <Lock size={14} color={COLORS.cream} strokeWidth={2} />
            ) : isResume ? (
              <RotateCcw size={14} color={COLORS.cream} strokeWidth={2} />
            ) : (
              <Play size={14} color={COLORS.cream} fill={COLORS.cream} strokeWidth={0} />
            )}
          </View>
        </View>
      </View>

      {/* Premium locked overlay */}
      {locked && (
        <View style={styles.lockedOverlay}>
          <View style={styles.lockedContent}>
            <Lock size={18} color={COLORS.gold} strokeWidth={1.8} />
            <Text style={styles.lockedLabel}>{t('premium_label')}</Text>
          </View>
        </View>
      )}

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  categoryTag: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: RADIUS.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: SPACING.sm,
    gap: 5,
  },
  categoryDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
  },
  categoryLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 10,
    letterSpacing: 0.3,
  },
  title: {
    fontFamily: FONTS.serif,
    fontSize: 18,
    color: COLORS.textPrimary,
    lineHeight: 24,
    marginBottom: SPACING.xs,
  },
  arabic: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'right',
    lineHeight: 26,
    marginBottom: SPACING.xs,
    writingDirection: 'rtl',
  },
  transliteration: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 17,
    color: COLORS.textPrimary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: SPACING.sm,
  },
  blurredText: {
    opacity: 0.15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  progressTrack: {
    flex: 1,
    height: 3,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 2,
  },
  progressLabel: {
    fontFamily: FONTS.sansMedium,
    fontSize: 10,
    color: COLORS.textMuted,
    minWidth: 40,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.xs,
  },
  targetBadge: {
    backgroundColor: COLORS.green + '12',
    borderRadius: RADIUS.full,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  targetText: {
    fontFamily: FONTS.sansBold,
    fontSize: 11,
    color: COLORS.green,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  iconBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtn: {
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumeBtn: {
    backgroundColor: COLORS.gold,
  },
  lockedBtn: {
    backgroundColor: COLORS.textMuted,
  },
  lockedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15,35,24,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.lg,
    zIndex: 1,
  },
  lockedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: 'rgba(15,35,24,0.85)',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.gold + '50',
  },
  lockedLabel: {
    fontFamily: FONTS.sansBold,
    fontSize: 13,
    color: COLORS.gold,
    letterSpacing: 0.5,
  },
  premiumBadge: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    zIndex: 10,
  },
});
