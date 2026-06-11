import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import { Quote } from 'lucide-react-native';

interface Props {
  text: string;
  source: string;
  arabic?: string;
}

export default function InspirationCard({ text, source, arabic }: Props) {
  return (
    <LinearGradient
      colors={[COLORS.green, COLORS.bgDeep]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.quoteIcon}>
        <Quote size={16} color={COLORS.gold} strokeWidth={1.5} />
      </View>

      {arabic && (
        <Text style={styles.arabic}>{arabic}</Text>
      )}

      <Text style={styles.text}>{text}</Text>
      <Text style={styles.source}>{source}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    minHeight: 160,
    justifyContent: 'center',
  },
  quoteIcon: {
    marginBottom: SPACING.md,
  },
  arabic: {
    fontFamily: FONTS.sans,
    fontSize: 18,
    color: COLORS.goldLight,
    textAlign: 'right',
    lineHeight: 28,
    marginBottom: SPACING.md,
    writingDirection: 'rtl',
  },
  text: {
    fontFamily: FONTS.serifItalic,
    fontSize: 20,
    color: COLORS.cream,
    lineHeight: 30,
    marginBottom: SPACING.sm,
  },
  source: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.gold,
    letterSpacing: 0.3,
  },
});
