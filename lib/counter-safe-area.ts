import { Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { SPACING } from '@/constants/theme';

/** Extra spacing below status bar / notch (12–20px). */
export const COUNTER_HEADER_EXTRA = 16;

export const COUNTER_MIN_TOUCH = 52;

/** Fixed Y offset for back/reset — below iPhone clock/status bar. */
export const COUNTER_BUTTON_TOP = 60;

export const COUNTER_BUTTON_SIDE = 20;

export const COUNTER_BUTTON_Z = 100;

/** Space reserved under absolute header buttons for title row. */
export const COUNTER_TITLE_TOP = COUNTER_BUTTON_TOP + COUNTER_MIN_TOUCH + 8;

export function getCounterTopPadding(insetsTop: number): number {
  const systemBar =
    Platform.OS === 'ios'
      ? Constants.statusBarHeight ?? 47
      : StatusBar.currentHeight ?? 28;

  return Math.max(insetsTop, systemBar) + COUNTER_HEADER_EXTRA;
}

export function getCounterBottomPadding(insetsBottom: number): number {
  return Math.max(insetsBottom, SPACING.md);
}
