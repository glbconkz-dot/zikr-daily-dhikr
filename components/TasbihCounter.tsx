import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage } from '@/context/LanguageContext';
import { upsertTasbihSession, recordTasbihCount } from '@/lib/tasbih-storage';
import { triggerTapHaptic, triggerSuccessHaptic } from '@/lib/haptics';
import { CustomTasbih, TasbihSession } from '@/types';
import { ArrowLeft, RotateCcw, CheckCircle } from 'lucide-react-native';

const { width: W } = Dimensions.get('window');
const TAP_SIZE = Math.min(W * 0.62, 260);

interface Props {
  tasbih: CustomTasbih;
  onClose: () => void;
}

export default function TasbihCounter({ tasbih, onClose }: Props) {
  const { tasbihSessions, refreshTasbihSessions, refreshTasbihStats, applyTasbihStats } = useApp();
  const { t } = useLanguage();

  const existingSession = tasbihSessions.find((s) => s.tasbihId === tasbih.id);
  const [count, setCount] = useState(existingSession?.currentCount ?? 0);
  const [completed, setCompleted] = useState(existingSession?.completed ?? false);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const completedAnim = useRef(new Animated.Value(0)).current;
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hasTarget = tasbih.targetCount != null && tasbih.targetCount > 0;
  const target = hasTarget ? tasbih.targetCount! : null;
  const progress = hasTarget && target ? Math.min(count / target, 1) : 0;

  const saveSession = useCallback(
    async (currentCount: number, isCompleted: boolean) => {
      const session: TasbihSession = {
        id: existingSession?.id ?? `ts_${tasbih.id}`,
        tasbihId: tasbih.id,
        currentCount,
        targetCount: tasbih.targetCount,
        completed: isCompleted,
        startedAt: existingSession?.startedAt ?? new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };
      await upsertTasbihSession(session);
      await refreshTasbihSessions();
    },
    [tasbih, existingSession, refreshTasbihSessions]
  );

  const triggerPulse = () => {
    Animated.sequence([
      Animated.timing(pulseAnim, { toValue: 0.93, duration: 80, useNativeDriver: true }),
      Animated.timing(pulseAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
    Animated.sequence([
      Animated.timing(rippleAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.timing(rippleAnim, { toValue: 0, duration: 0, useNativeDriver: true }),
    ]).start();
  };

  const handleTap = async () => {
    if (completed) return;
    const newCount = count + 1;
    setCount(newCount);
    triggerPulse();

    const isNowComplete = hasTarget && target != null && newCount >= target;
    if (isNowComplete && !completed) {
      setCompleted(true);
      triggerSuccessHaptic(true);
      Animated.spring(completedAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 60,
        friction: 8,
      }).start();
    }

    try {
      const tasbihStats = await recordTasbihCount(tasbih.id, 1, !!isNowComplete);
      applyTasbihStats(tasbihStats);
      await refreshTasbihStats();
    } catch {
      // ignore
    }

    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => saveSession(newCount, !!isNowComplete), 300);
  };

  const handleClose = async () => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    await saveSession(count, completed);
    onClose();
  };

  const handleReset = async () => {
    setCount(0);
    setCompleted(false);
    completedAnim.setValue(0);
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    await saveSession(0, false);
  };

  const rippleScale = rippleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] });
  const rippleOpacity = rippleAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.3, 0.15, 0] });
  const completedScale = completedAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

  return (
    <LinearGradient colors={[COLORS.green, COLORS.bgDeep, '#0A1A10']} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
            <ArrowLeft size={24} color="rgba(250,247,242,0.9)" strokeWidth={2} />
          </TouchableOpacity>
          <Text style={styles.title} numberOfLines={2}>
            {tasbih.name}
          </Text>
          <TouchableOpacity onPress={handleReset} style={styles.resetBtn}>
            <RotateCcw size={22} color="rgba(250,247,242,0.8)" strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        <View style={styles.counterSection}>
          <Text style={styles.countDisplay}>{count}</Text>
          {hasTarget ? (
            <Text style={styles.targetDisplay}>
              {t('of')} {target}
            </Text>
          ) : (
            <Text style={styles.targetDisplay}>{t('tesbih_no_target')}</Text>
          )}
        </View>

        <View style={styles.tapArea}>
          <Animated.View
            style={[styles.tapRipple, { transform: [{ scale: rippleScale }], opacity: rippleOpacity }]}
          />
          <Animated.View style={[styles.tapBtn, { transform: [{ scale: pulseAnim }] }]}>
            <TouchableOpacity
              onPressIn={() => triggerTapHaptic(true)}
              onPress={handleTap}
              style={styles.tapBtnInner}
              activeOpacity={1}
              disabled={completed}
            >
              {completed ? (
                <Animated.View style={{ transform: [{ scale: completedScale }] }}>
                  <CheckCircle size={56} color={COLORS.goldLight} strokeWidth={1.5} />
                </Animated.View>
              ) : (
                <>
                  <Text style={styles.tapLabel}>{t('tap_label')}</Text>
                  <Text style={styles.tapSubLabel}>{t('tap_sublabel')}</Text>
                </>
              )}
            </TouchableOpacity>
          </Animated.View>
        </View>

        {completed && (
          <Animated.View style={[styles.completedBanner, { opacity: completedAnim }]}>
            <Text style={styles.completedText}>{t('completed_msg')}</Text>
            <Text style={styles.completedSub}>{t('completed_sub')}</Text>
          </Animated.View>
        )}

        {hasTarget && (
          <View style={styles.bottomProgress}>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${progress * 100}%` as `${number}%` }]} />
            </View>
            <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
  },
  closeBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontFamily: FONTS.serif,
    fontSize: 22,
    color: COLORS.cream,
    textAlign: 'center',
    paddingHorizontal: SPACING.xs,
  },
  resetBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(250,247,242,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterSection: { alignItems: 'center', marginVertical: SPACING.xl },
  countDisplay: {
    fontFamily: FONTS.serifBold,
    fontSize: 88,
    color: COLORS.cream,
    lineHeight: 96,
  },
  targetDisplay: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 20,
    color: 'rgba(250,247,242,0.85)',
  },
  tapArea: { alignItems: 'center', justifyContent: 'center', flex: 1, position: 'relative' },
  tapRipple: {
    position: 'absolute',
    width: TAP_SIZE,
    height: TAP_SIZE,
    borderRadius: TAP_SIZE / 2,
    backgroundColor: COLORS.goldLight,
  },
  tapBtn: {
    width: TAP_SIZE,
    height: TAP_SIZE,
    borderRadius: TAP_SIZE / 2,
    backgroundColor: 'rgba(250,247,242,0.12)',
    borderWidth: 2,
    borderColor: 'rgba(250,247,242,0.25)',
  },
  tapBtnInner: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tapLabel: {
    fontFamily: FONTS.serifBold,
    fontSize: 34,
    color: COLORS.cream,
    letterSpacing: 4,
  },
  tapSubLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 15,
    color: 'rgba(250,247,242,0.8)',
    letterSpacing: 2,
    marginTop: 4,
  },
  completedBanner: { alignItems: 'center', paddingVertical: SPACING.md },
  completedText: {
    fontFamily: FONTS.serifBold,
    fontSize: 26,
    color: COLORS.goldLight,
  },
  completedSub: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: 'rgba(250,247,242,0.75)',
    marginTop: 4,
  },
  bottomProgress: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  progressBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(250,247,242,0.15)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: { height: '100%', backgroundColor: COLORS.gold, borderRadius: 4 },
  progressText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: 'rgba(250,247,242,0.8)',
    minWidth: 44,
    textAlign: 'right',
  },
});
