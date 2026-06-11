import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, FONTS, RADIUS } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  style?: ViewStyle;
  compact?: boolean;
}

export default function PremiumBadge({ style, compact = false }: Props) {
  const { t } = useLanguage();
  return (
    <View style={[styles.badge, compact && styles.badgeCompact, style]}>
      <Text style={[styles.text, compact && styles.textCompact]}>⭐ {t('premium_label')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gold,
    borderRadius: RADIUS.full,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 10,
  },
  badgeCompact: {
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  text: {
    fontFamily: FONTS.sansBold,
    fontSize: 10,
    color: COLORS.bgDeep,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  textCompact: {
    fontSize: 9,
  },
});
