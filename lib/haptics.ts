import { Platform, Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';

function runAndroidVibration(pattern: number | number[]): void {
  if (Platform.OS !== 'android') return;
  try {
    Vibration.vibrate(pattern);
  } catch {
    // ignore
  }
}

export function triggerTapHaptic(enabled: boolean = true): void {
  if (Platform.OS === 'web') return;

  if (enabled) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
    if (Platform.OS === 'ios') {
      Haptics.selectionAsync().catch(() => {});
    }
    runAndroidVibration(45);
  } else {
    runAndroidVibration(12);
  }
}

export function triggerSuccessHaptic(enabled: boolean = true): void {
  if (Platform.OS === 'web') return;

  if (enabled) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    runAndroidVibration([0, 60, 80, 60]);
  } else {
    runAndroidVibration([0, 30]);
  }
}
