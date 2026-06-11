import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';

interface Props {
  value: number | string;
  label: string;
  subLabel?: string;
  accent?: boolean;
}

export default function StatCard({ value, label, subLabel, accent = false }: Props) {
  return (
    <View style={[styles.card, accent && styles.accentCard]}>
      <Text style={[styles.value, accent && styles.accentValue]}>{value}</Text>
      <Text style={[styles.label, accent && styles.accentLabel]}>{label}</Text>
      {subLabel && (
        <Text style={[styles.subLabel, accent && styles.accentSubLabel]}>{subLabel}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  accentCard: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  value: {
    fontFamily: FONTS.serifBold,
    fontSize: 32,
    color: COLORS.textPrimary,
    lineHeight: 38,
  },
  accentValue: {
    color: COLORS.goldLight,
  },
  label: {
    fontFamily: FONTS.sansMedium,
    fontSize: 11,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 4,
    textAlign: 'center',
  },
  accentLabel: {
    color: 'rgba(250,247,242,0.7)',
  },
  subLabel: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  accentSubLabel: {
    color: 'rgba(250,247,242,0.5)',
  },
});
