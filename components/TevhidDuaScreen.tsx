import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import {
  getCounterBottomPadding,
  COUNTER_BUTTON_TOP,
  COUNTER_BUTTON_SIDE,
  COUNTER_BUTTON_Z,
  COUNTER_MIN_TOUCH,
  COUNTER_TITLE_TOP,
} from '@/lib/counter-safe-area';
import { useLanguage } from '@/context/LanguageContext';
import { TEVHID_DUA_ARABIC } from '@/lib/tevhid-dua';
import { ArrowLeft, CheckCircle } from 'lucide-react-native';

interface Props {
  onClose: () => void;
}

export default function TevhidDuaScreen({ onClose }: Props) {
  const { t } = useLanguage();
  const insets = useSafeAreaInsets();
  const bottomPadding = getCounterBottomPadding(insets.bottom);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      handleClose();
      return true;
    });
    return () => sub.remove();
  }, [handleClose]);

  return (
    <LinearGradient colors={[COLORS.green, COLORS.bgDeep, '#0A1A10']} style={styles.container}>
      <SafeAreaView style={[styles.safe, { paddingBottom: bottomPadding }]} edges={[]}>
        <TouchableOpacity
          onPress={handleClose}
          style={styles.backButton}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={t('tesbih_back')}
        >
          <ArrowLeft size={24} color="rgba(250,247,242,0.9)" strokeWidth={2} />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleRow}>
            <Text style={styles.title}>{t('tesbih_tevhid_title')}</Text>
            <Text style={styles.subtitle}>{t('tesbih_tevhid_screen_sub')}</Text>
          </View>

          <View style={styles.duaCard}>
            <Text style={styles.arabicText}>{TEVHID_DUA_ARABIC}</Text>
            <View style={styles.divider} />
            <Text style={styles.transliteration}>{t('tesbih_tevhid_translit')}</Text>
            <View style={styles.divider} />
            <Text style={styles.meaningLabel}>{t('meaning')}</Text>
            <Text style={styles.meaningText}>{t('tesbih_tevhid_meaning')}</Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.doneBtn} onPress={handleClose} activeOpacity={0.85}>
          <CheckCircle size={20} color={COLORS.cream} strokeWidth={2} />
          <Text style={styles.doneBtnText}>{t('tesbih_tevhid_done')}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1, position: 'relative' },
  backButton: {
    position: 'absolute',
    top: COUNTER_BUTTON_TOP,
    left: COUNTER_BUTTON_SIDE,
    zIndex: COUNTER_BUTTON_Z,
    width: COUNTER_MIN_TOUCH,
    height: COUNTER_MIN_TOUCH,
    borderRadius: COUNTER_MIN_TOUCH / 2,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(250,247,242,0.25)',
  },
  scrollContent: {
    paddingTop: COUNTER_TITLE_TOP + COUNTER_MIN_TOUCH,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  titleRow: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
    paddingHorizontal: COUNTER_MIN_TOUCH,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 26,
    color: COLORS.cream,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: 'rgba(250,247,242,0.75)',
    textAlign: 'center',
    marginTop: SPACING.xs,
    lineHeight: 20,
  },
  duaCard: {
    backgroundColor: 'rgba(250,247,242,0.08)',
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    borderColor: 'rgba(250,247,242,0.18)',
    padding: SPACING.lg,
  },
  arabicText: {
    fontFamily: FONTS.sans,
    fontSize: 26,
    color: COLORS.cream,
    textAlign: 'center',
    lineHeight: 44,
    writingDirection: 'rtl',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(250,247,242,0.15)',
    marginVertical: SPACING.md,
  },
  transliteration: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: 'rgba(250,247,242,0.9)',
    textAlign: 'center',
    lineHeight: 26,
    fontStyle: 'italic',
  },
  meaningLabel: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 12,
    color: COLORS.goldLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
  meaningText: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: 'rgba(250,247,242,0.85)',
    textAlign: 'center',
    lineHeight: 26,
  },
  doneBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.lg,
    paddingVertical: 16,
  },
  doneBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 16,
    color: COLORS.cream,
  },
});
