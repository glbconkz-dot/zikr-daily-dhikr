/** Shared legal URLs for in-app disclosure (App Store Guideline 3.1.2). */
export const PRIVACY_POLICY_URL = 'https://zikr.app/privacy';

/** Apple standard EULA — required link for iOS subscription apps. */
export const APPLE_EULA_URL =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

/** Custom terms page (non-iOS fallback). */
export const TERMS_OF_USE_URL = 'https://zikr.app/terms';

export function getTermsOfUseUrl(platform: 'ios' | 'android' | 'web' | string): string {
  return platform === 'ios' ? APPLE_EULA_URL : TERMS_OF_USE_URL;
}

export function getSubscriptionManagementUrl(platform: 'ios' | 'android' | string): string {
  return platform === 'ios'
    ? 'https://apps.apple.com/account/subscriptions'
    : 'https://play.google.com/store/account/subscriptions';
}
