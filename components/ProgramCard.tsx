import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { ProgramProgress } from '@/types';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react-native';
import PremiumBadge from '@/components/PremiumBadge';

interface Props {
  title: string;
  description: string;
  durationDays: number;
  category?: string;
  progress?: ProgramProgress;
  onPress: () => void;
  locked?: boolean;
  isPremiumContent?: boolean;
}

export default function ProgramCard({
  title,
  description,
  durationDays,
  category = 'rizq',
  progress,
  onPress,
  locked,
  isPremiumContent = false,
}: Props) {
  const { t } = useLanguage();
  const completedDays = progress?.completed_days.length ?? 0;
  const percentage = Math.round((completedDays / durationDays) * 100);
  const isStarted = completedDays > 0 || !!progress;

  const GRADIENT_MAP: Record<string, [string, string]> = {
    rizq: ['#C9A84C', '#9A7830'],
    healing: ['#7BA05B', '#4A7A3A'],
    peace: ['#5B8FA8', '#3A6A80'],
    salawat: ['#2D5A3D', '#1A3A2A'],
    protection: ['#1A3A2A', '#0D2018'],
  };

  const gradient = GRADIENT_MAP[category] ?? ['#1A3A2A', '#0D2018'];

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.88} style={[styles.wrapper, SHADOW.md]}>
      <LinearGradient colors={gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
        {isPremiumContent && (
          <PremiumBadge style={styles.premiumBadgePos} compact />
        )}
        {locked && <View style={styles.lockedBackdrop} pointerEvents="none" />}
        {locked && (
          <View style={styles.lockOverlay}>
            <Lock size={14} color={COLORS.cream} strokeWidth={2} />
            <Text style={styles.lockText}>{t('premium_label')}</Text>
          </View>
        )}

        <View style={styles.header}>
          <View style={styles.daysBadge}>
            <Text style={styles.daysNum}>{durationDays}</Text>
            <Text style={styles.daysLabel}>{t('days_label')}</Text>
          </View>
          {isStarted ? (
            <View style={styles.progressCircle}>
              <Text style={styles.progressPct}>{percentage}%</Text>
            </View>
          ) : (
            <PlayCircle size={28} color="rgba(250,247,242,0.7)" />
          )}
        </View>

        <Text style={[styles.title, locked && styles.lockedTextDim]}>{title}</Text>
        <Text style={[styles.desc, locked && styles.lockedTextDim]} numberOfLines={2}>
          {description}
        </Text>

        {isStarted && (
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${percentage}%` as `${number}%` }]} />
          </View>
        )}

        <View style={styles.footer}>
          <View style={styles.statusRow}>
            {isStarted ? (
              <>
                <CheckCircle size={13} color="rgba(250,247,242,0.8)" />
                <Text style={styles.statusText}>
                  {completedDays}/{durationDays} {t('days_complete')}
                </Text>
              </>
            ) : (
              <Text style={styles.statusText}>{t('tap_to_begin')}</Text>
            )}
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: { borderRadius: RADIUS.xl },
  card: {
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    minHeight: 200,
    overflow: 'hidden',
  },
  lockedBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 35, 24, 0.82)',
    zIndex: 1,
    borderRadius: RADIUS.xl,
  },
  lockedTextDim: {
    opacity: 0.35,
  },
  premiumBadgePos: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    zIndex: 2,
  },
  lockOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -14 }],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(15, 35, 24, 0.92)',
    borderRadius: RADIUS.full,
    paddingHorizontal: 14,
    paddingVertical: 8,
    zIndex: 3,
    borderWidth: 1,
    borderColor: COLORS.gold + '50',
  },
  lockText: {
    fontFamily: FONTS.sansBold,
    fontSize: 10,
    color: COLORS.cream,
    letterSpacing: 0.3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  daysBadge: {
    backgroundColor: 'rgba(250,247,242,0.15)',
    borderRadius: RADIUS.md,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  daysNum: {
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.cream,
    lineHeight: 26,
  },
  daysLabel: {
    fontFamily: FONTS.sans,
    fontSize: 9,
    color: 'rgba(250,247,242,0.7)',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  progressCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(250,247,242,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(250,247,242,0.4)',
  },
  progressPct: {
    fontFamily: FONTS.sansBold,
    fontSize: 12,
    color: COLORS.cream,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 22,
    color: COLORS.cream,
    lineHeight: 28,
    marginBottom: SPACING.xs,
  },
  desc: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: 'rgba(250,247,242,0.72)',
    lineHeight: 19,
    marginBottom: SPACING.md,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(250,247,242,0.2)',
    borderRadius: 2,
    marginBottom: SPACING.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.goldLight,
    borderRadius: 2,
  },
  footer: { marginTop: SPACING.xs },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: 'rgba(250,247,242,0.75)',
  },
});
