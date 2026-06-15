import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/** Visible tab bar content height (icons + labels), excluding system inset. */
export const TAB_BAR_CONTENT_HEIGHT = 56;

/** Minimum clearance when Android reports no navigation inset (e.g. 3-button nav on Samsung). */
const ANDROID_FALLBACK_NAV_INSET = 48;

export function getTabBarBottomInset(insets: { bottom: number }): number {
  if (Platform.OS === 'android') {
    if (insets.bottom > 0) return Math.max(insets.bottom, 12);
    return ANDROID_FALLBACK_NAV_INSET;
  }
  return Math.max(insets.bottom, 8);
}

export function getTabBarHeight(insets: { bottom: number }): number {
  return TAB_BAR_CONTENT_HEIGHT + getTabBarBottomInset(insets);
}

/** Extra bottom padding for tab screen scroll content. */
export function useTabBarScrollPadding(): number {
  const insets = useSafeAreaInsets();
  return getTabBarHeight(insets) + 12;
}
