import Constants from 'expo-constants';

/**
 * App Store Review Mode
 * ---------------------
 * Grants full Premium access without purchase so Apple reviewers can test
 * locked zikir, programs, statistics, and subscriptions UI.
 *
 * Activation:
 * 1. Build with EXPO_PUBLIC_APP_REVIEW_MODE=true (see eas.json appStoreReview profile)
 * 2. OR hidden gesture: tap the crown icon on Premium screen 5 times within 3 seconds
 *
 * Do NOT enable appReviewMode in public production builds after approval.
 */

let sessionUnlocked = false;

export function isReviewModeEnvEnabled(): boolean {
  if (process.env.EXPO_PUBLIC_APP_REVIEW_MODE === 'true') return true;
  const extra = Constants.expoConfig?.extra as { appReviewMode?: boolean } | undefined;
  return extra?.appReviewMode === true;
}

/** Session-only unlock via hidden reviewer gesture. */
export function unlockAppReviewMode(): void {
  sessionUnlocked = true;
}

export function isAppReviewModeActive(): boolean {
  return isReviewModeEnvEnabled() || sessionUnlocked;
}

/** Premium is granted when Review Mode is active — no IAP required. */
export function shouldGrantReviewPremium(): boolean {
  return isAppReviewModeActive();
}

const REVIEW_TAP_WINDOW_MS = 3000;
const REVIEW_TAP_COUNT = 5;
let reviewTapCount = 0;
let reviewTapWindowStart = 0;

/** Returns true when the hidden reviewer gesture completes. */
export function registerReviewModeTap(): boolean {
  const now = Date.now();
  if (now - reviewTapWindowStart > REVIEW_TAP_WINDOW_MS) {
    reviewTapWindowStart = now;
    reviewTapCount = 0;
  }
  reviewTapCount += 1;
  if (reviewTapCount >= REVIEW_TAP_COUNT) {
    reviewTapCount = 0;
    reviewTapWindowStart = 0;
    unlockAppReviewMode();
    return true;
  }
  return false;
}
