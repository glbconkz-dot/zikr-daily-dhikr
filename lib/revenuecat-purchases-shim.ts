/**
 * Expo Go shim — react-native-purchases is not available in Expo Go.
 * EAS/production builds use the real package (see metro.config.js).
 */

export const LOG_LEVEL = {
  DEBUG: 'DEBUG',
  ERROR: 'ERROR',
} as const;

export const PURCHASES_ERROR_CODE = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  OFFLINE_CONNECTION_ERROR: 'OFFLINE_CONNECTION_ERROR',
  PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR: 'PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR',
  PURCHASE_NOT_ALLOWED_ERROR: 'PURCHASE_NOT_ALLOWED_ERROR',
  CONFIGURATION_ERROR: 'CONFIGURATION_ERROR',
  PURCHASE_INVALID_ERROR: 'PURCHASE_INVALID_ERROR',
} as const;

export type CustomerInfo = {
  entitlements: { active: Record<string, unknown> };
};

export type PurchasesPackage = {
  product: { identifier: string; priceString: string };
};

export type PurchasesError = {
  userCancelled?: boolean;
  code?: string;
};

const emptyCustomerInfo = (): CustomerInfo => ({
  entitlements: { active: {} },
});

const Purchases = {
  setLogLevel: (_level: string) => {},
  configure: async (_opts: { apiKey: string }) => {},
  getOfferings: async () => ({ current: null as null | { availablePackages: PurchasesPackage[]; monthly?: PurchasesPackage; annual?: PurchasesPackage } }),
  getCustomerInfo: async () => emptyCustomerInfo(),
  purchasePackage: async (_pkg: PurchasesPackage) => {
    throw { code: PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR };
  },
  restorePurchases: async () => emptyCustomerInfo(),
  addCustomerInfoUpdateListener: (_listener: (info: CustomerInfo) => void) => {},
};

export default Purchases;
