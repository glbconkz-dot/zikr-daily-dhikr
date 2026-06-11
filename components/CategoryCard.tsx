import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { CategoryInfo } from '@/types';
import {
  Coins,
  Heart,
  Wind,
  Shield,
  Star,
  Sparkles,
  Users,
  Briefcase,
} from 'lucide-react-native';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>> = {
  Coins,
  Heart,
  Wind,
  Shield,
  Star,
  Sparkles,
  Users,
  Briefcase,
};

interface Props {
  category: CategoryInfo;
  count?: number;
  onPress: () => void;
}

export default function CategoryCard({ category, count, onPress }: Props) {
  const { t } = useLanguage();
  const IconComponent = ICON_MAP[category.icon] ?? Star;

  const getCategoryLabel = (catId: string): string => {
    const keyMap: Record<string, string> = {
      'riziq-bereket': 'cat_rizq',
      'sifa': 'cat_healing',
      'huzur-sukunet': 'cat_peace',
      'korunma': 'cat_protection',
      'salavatlar': 'cat_salawat',
      'esmaul-husna': 'cat_asma',
      'kismet-ask-iliskiler': 'cat_relationships',
      'ev-is-hayirli-kapilar': 'cat_opportunities',
    };
    return t(keyMap[catId] ?? catId);
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.wrapper}>
      <LinearGradient
        colors={category.gradient as [string, string]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.iconWrapper}>
          <IconComponent size={22} color="rgba(250,247,242,0.9)" strokeWidth={1.5} />
        </View>
        <Text style={styles.label} numberOfLines={2}>
          {getCategoryLabel(category.id)}
        </Text>
        {count !== undefined && (
          <View style={styles.countBadge}>
            <Text style={styles.countText}>{count}</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    ...SHADOW.md,
  },
  card: {
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    minHeight: 130,
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: 'rgba(250,247,242,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  label: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 13,
    color: COLORS.cream,
    lineHeight: 18,
    flex: 1,
  },
  labelAr: {
    fontFamily: FONTS.sans,
    fontSize: 10,
    color: 'rgba(250,247,242,0.65)',
    marginTop: 2,
  },
  countBadge: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    backgroundColor: 'rgba(250,247,242,0.2)',
    borderRadius: RADIUS.full,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  countText: {
    fontFamily: FONTS.sansBold,
    fontSize: 10,
    color: COLORS.cream,
  },
});
