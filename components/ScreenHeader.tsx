import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '@/constants/theme';
import { ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';

interface Props {
  title?: string;
  rightElement?: React.ReactNode;
  transparent?: boolean;
  light?: boolean;
  onBack?: () => void;
}

export default function ScreenHeader({
  title,
  rightElement,
  transparent = false,
  light = false,
  onBack,
}: Props) {
  const textColor = light ? COLORS.cream : COLORS.textPrimary;
  const iconColor = light ? COLORS.cream : COLORS.textPrimary;

  return (
    <SafeAreaView style={[styles.safe, transparent && styles.transparent]}>
      <StatusBar
        barStyle={light ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onBack ?? (() => router.back())}
          style={styles.backBtn}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <ArrowLeft size={22} color={iconColor} strokeWidth={1.8} />
        </TouchableOpacity>

        {title && (
          <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
            {title}
          </Text>
        )}

        <View style={styles.right}>{rightElement}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.bg,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    minHeight: 52,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontFamily: FONTS.serif,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: SPACING.sm,
  },
  right: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
