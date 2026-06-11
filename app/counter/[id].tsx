import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Platform,
  Dimensions,
  BackHandler,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage, getDhikrTitle } from '@/context/LanguageContext';
import {
  upsertSession,
  recordCount,
  recordCompletion,
  recordSessionTime,
} from '@/lib/storage';
import { CATEGORY_MAP } from '@/data/categories';
import { ArrowLeft, RotateCcw, CheckCircle } from 'lucide-react-native';
import { triggerTapHaptic, triggerSuccessHaptic } from '@/lib/haptics';
import { isDhikrLocked } from '@/lib/premium';
import { DhikrSession } from '@/types';

const { width: W } = Dimensions.get('window');

export default function CounterScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { dhikrList, sessions, premium, hapticsEnabled, refreshSessions, refreshStats, applyStats } = useApp();
  const { t, language } = useLanguage();

  const dhikr = dhikrList.find((d) => d.id === id);
  const existingSession = sessions.find((s) => s.dhikr_id === id);

  const [count, setCount] = useState(existingSession?.current_count ?? 0);
  const [completed, setCompleted] = useState(existingSession?.completed ?? false);

  const countRef = useRef(count);
  const completedRef = useRef(completed);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rippleAnim = useRef(new Animated.Value(0)).current;
  const completedAnim = useRef(new Animated.Value(0)).current;
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSaving = useRef(false);

  countRef.current = count;
  completedRef.current = completed;

  const isLocked = dhikr ? isDhikrLocked(dhikr, premium) : false;

  useEffect(() => {
    if (dhikr && isLocked) {
      router.replace('/(tabs)/premium');
    }
  }, [dhikr, isLocked]);

  const category = dhikr ? CATEGORY_MAP[dhikr.category] : null;
  const target = dhikr?.target_count ?? 33;
  const progress = Math.min(count / target, 1);

  const saveSession = useCallback(
    async (currentCount: number, isCompleted: boolean) => {
      if (!id || !dhikr || isSaving.current) return;
      isSaving.current = true;
      try {
        const session: DhikrSession = {
          id: existingSession?.id ?? `local_${id}`,
          dhikr_id: id,
          current_count: currentCount,
          target_count: target,
          completed: isCompleted,
          started_at: existingSession?.started_at ?? new Date().toISOString(),
          last_updated: new Date().toISOString(),
        };
        await upsertSession(session);
        await refreshSessions();
      } catch {
        // ignore
      } finally {
        isSaving.current = false;
      }
    },
    [id, dhikr, target, existingSession, refreshSessions]
  );

  const flushSave = useCallback(async () => {
    if (saveTimeout.current) {
      clearTimeout(saveTimeout.current);
      saveTimeout.current = null;
    }
    await saveSession(countRef.current, completedRef.current);
    await refreshStats();
  }, [saveSession, refreshStats]);

  const handleClose = useCallback(async () => {
    await flushSave();
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace(`/dhikr/${id}`);
    }
  }, [flushSave, id]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      handleClose();
      return true;
    });
    return () => sub.remove();
  }, [handleClose]);

  useEffect(() => {
    return () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveSession(countRef.current, completedRef.current).catch(() => {});
    };
  }, [saveSession]);

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

    const isNowComplete = newCount >= target;
    if (isNowComplete && !completed) {
      setCompleted(true);
      triggerSuccessHaptic(hapticsEnabled);
      Animated.spring(completedAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 60,
        friction: 8,
      }).start();

      try {
        const startedAt = existingSession?.started_at ?? new Date().toISOString();
        const durationSec = Math.max(
          1,
          Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000)
        );
        await recordCompletion();
        const statsWithTime = await recordSessionTime(durationSec);
        applyStats(statsWithTime);
      } catch {
        // ignore
      }
    }

    try {
      const updatedStats = await recordCount(1);
      applyStats(updatedStats);
    } catch {
      // ignore
    }

    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      saveSession(newCount, isNowComplete);
    }, 300);
  };

  const handleReset = async () => {
    setCount(0);
    setCompleted(false);
    completedAnim.setValue(0);
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    await saveSession(0, false);
    await refreshSessions();
  };

  if (!dhikr || isLocked) {
    return (
      <LinearGradient colors={[COLORS.green, COLORS.bgDeep]} style={styles.container}>
        <SafeAreaView style={[styles.safe, { alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.cream }}>
            {!dhikr ? t('dhikr_not_found') : t('locked_dhikr_premium')}
          </Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  const rippleScale = rippleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.5] });
  const rippleOpacity = rippleAnim.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.3, 0.15, 0] });
  const completedScale = completedAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

  const gradientColors = category
    ? (category.gradient as [string, string])
    : ([COLORS.green, COLORS.bgDeep] as [string, string]);

  return (
    <LinearGradient colors={[gradientColors[0], gradientColors[1], '#0A1A10']} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn} activeOpacity={0.7}>
            <ArrowLeft size={24} color="rgba(250,247,242,0.9)" strokeWidth={2} />
          </TouchableOpacity>
          <Text style={styles.dhikrTitle} numberOfLines={2}>{getDhikrTitle(dhikr, language)}</Text>
          <TouchableOpacity onPress={handleReset} style={styles.resetBtn} activeOpacity={0.7}>
            <RotateCcw size={22} color="rgba(250,247,242,0.8)" strokeWidth={1.8} />
          </TouchableOpacity>
        </View>

        <View style={styles.arabicSection}>
          <Text style={styles.arabicText}>{dhikr.arabic_text}</Text>
          <Text style={styles.transliteration}>{dhikr.transliteration}</Text>
        </View>

        <View style={styles.progressRing}>
          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressArc,
                {
                  borderColor: COLORS.goldLight,
                  borderRightColor: progress >= 0.25 ? COLORS.goldLight : 'transparent',
                  borderBottomColor: progress >= 0.5 ? COLORS.goldLight : 'transparent',
                  borderLeftColor: progress >= 0.75 ? COLORS.goldLight : 'transparent',
                  transform: [{ rotate: '-135deg' }],
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.counterSection}>
          <Text style={styles.countDisplay}>{count}</Text>
          <Text style={styles.targetDisplay}>{t('of')} {target}</Text>
        </View>

        <View style={styles.tapArea}>
          <Animated.View
            style={[
              styles.tapRipple,
              { transform: [{ scale: rippleScale }], opacity: rippleOpacity },
            ]}
          />
          <Animated.View style={[styles.tapBtn, { transform: [{ scale: pulseAnim }] }]}>
            <TouchableOpacity
              onPressIn={() => triggerTapHaptic(hapticsEnabled)}
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

        <View style={styles.bottomProgress}>
          <View style={styles.progressBarTrack}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${progress * 100}%` as `${number}%` },
              ]}
            />
          </View>
          <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const TAP_SIZE = Math.min(W * 0.62, 260);

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
    borderWidth: 1,
    borderColor: 'rgba(250,247,242,0.2)',
  },
  dhikrTitle: {
    flex: 1,
    fontFamily: FONTS.serif,
    fontSize: 20,
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
  arabicSection: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.md,
    alignItems: 'center',
  },
  arabicText: {
    fontFamily: FONTS.sans,
    fontSize: 28,
    color: COLORS.cream,
    textAlign: 'center',
    lineHeight: 48,
    writingDirection: 'rtl',
    opacity: 0.95,
  },
  transliteration: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 22,
    color: COLORS.cream,
    textAlign: 'center',
    marginTop: SPACING.sm,
    lineHeight: 32,
    letterSpacing: 0.3,
  },
  progressRing: {
    alignItems: 'center',
    marginBottom: -30,
  },
  progressTrack: {
    width: TAP_SIZE + 40,
    height: TAP_SIZE + 40,
    position: 'absolute',
    top: -20,
  },
  progressArc: {
    width: TAP_SIZE + 40,
    height: TAP_SIZE + 40,
    borderRadius: (TAP_SIZE + 40) / 2,
    borderWidth: 3,
    borderColor: 'rgba(250,247,242,0.15)',
  },
  counterSection: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
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
    letterSpacing: 0.5,
  },
  tapArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
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
    overflow: 'hidden',
  },
  tapBtnInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    textTransform: 'uppercase',
  },
  completedBanner: {
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
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
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.gold,
    borderRadius: 4,
  },
  progressText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: 'rgba(250,247,242,0.8)',
    minWidth: 44,
    textAlign: 'right',
  },
});
