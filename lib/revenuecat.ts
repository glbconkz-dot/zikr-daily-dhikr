import { Platform } from 'react-native';
import Purchases, {
  CustomerInfo,
  LOG_LEVEL,
  PURCHASES_ERROR_CODE,
  PurchasesError,
  PurchasesPackage,
} from 'react-native-purchases';
import {
  FALLBACK_MONTHLY_PRICE,
  FALLBACK_YEARLY_PRICE,
  PREMIUM_ENTITLEMENT_ID,
  PRODUCT_MONTHLY_ID,
  PRODUCT_YEARLY_ID,
} from '@/lib/premium-config';

export type PurchaseErrorCode =
  | 'cancelled'
  | 'failed'
  | 'network'
  | 'restore_failed'
  | 'no_products'
  | 'not_available';

export type SubscriptionPlan = 'monthly' | 'yearly';

export type PlanOffering = {
  package: PurchasesPackage;
  priceString: string;
  productId: string;
};

export type SubscriptionOffering = {
  monthly: PlanOffering | null;
  yearly: PlanOffering | null;
};

let configured = false;
let listenerAttached = false;

export function isNativeStoreSupported(): boolean {
  return Platform.OS === 'ios' || Platform.OS === 'android';
}

export function hasPremiumEntitlement(info: CustomerInfo): boolean {
  return info.entitlements.active[PREMIUM_ENTITLEMENT_ID] !== undefined;
}

function getApiKey(): string | null {
  if (Platform.OS === 'ios') {
    return process.env.EXPO_PUBLIC_REVENUECAT_IOS_API_KEY ?? null;
  }
  if (Platform.OS === 'android') {
    return process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY ?? null;
  }
  return null;
}

export function isRevenueCatConfigured(): boolean {
  return configured;
}

export async function initializeRevenueCat(): Promise<boolean> {
  if (!isNativeStoreSupported() || configured) return configured;

  const apiKey = getApiKey();
  if (!apiKey) {
    if (__DEV__) {
      console.warn('[RevenueCat] Missing API key for', Platform.OS);
    }
    return false;
  }

  Purchases.setLogLevel(__DEV__ ? LOG_LEVEL.DEBUG : LOG_LEVEL.ERROR);
  await Purchases.configure({ apiKey });
  configured = true;
  return true;
}

function findPackageByProductId(
  packages: PurchasesPackage[],
  productId: string
): PurchasesPackage | undefined {
  return packages.find((pkg) => pkg.product.identifier === productId);
}

function toPlanOffering(pkg: PurchasesPackage): PlanOffering {
  return {
    package: pkg,
    priceString: pkg.product.priceString,
    productId: pkg.product.identifier,
  };
}

export async function getSubscriptionOffering(): Promise<SubscriptionOffering> {
  if (!isNativeStoreSupported()) {
    return { monthly: null, yearly: null };
  }

  await initializeRevenueCat();
  if (!configured) {
    return { monthly: null, yearly: null };
  }

  const offerings = await Purchases.getOfferings();
  const current = offerings.current;
  if (!current) {
    return { monthly: null, yearly: null };
  }

  const packages = current.availablePackages;
  const monthlyPkg =
    findPackageByProductId(packages, PRODUCT_MONTHLY_ID) ?? current.monthly ?? null;
  const yearlyPkg =
    findPackageByProductId(packages, PRODUCT_YEARLY_ID) ?? current.annual ?? null;

  return {
    monthly: monthlyPkg ? toPlanOffering(monthlyPkg) : null,
    yearly: yearlyPkg ? toPlanOffering(yearlyPkg) : null,
  };
}

export async function fetchCustomerInfo(): Promise<CustomerInfo | null> {
  if (!isNativeStoreSupported()) return null;
  await initializeRevenueCat();
  if (!configured) return null;
  return Purchases.getCustomerInfo();
}

export async function fetchPremiumStatus(): Promise<boolean> {
  const info = await fetchCustomerInfo();
  return info ? hasPremiumEntitlement(info) : false;
}

export function mapPurchaseError(error: unknown): PurchaseErrorCode {
  if (!isNativeStoreSupported()) return 'not_available';

  const purchasesError = error as PurchasesError;
  if (purchasesError?.userCancelled) return 'cancelled';

  const code = purchasesError?.code;
  if (
    code === PURCHASES_ERROR_CODE.NETWORK_ERROR ||
    code === PURCHASES_ERROR_CODE.OFFLINE_CONNECTION_ERROR
  ) {
    return 'network';
  }
  if (
    code === PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR ||
    code === PURCHASES_ERROR_CODE.PURCHASE_NOT_ALLOWED_ERROR ||
    code === PURCHASES_ERROR_CODE.CONFIGURATION_ERROR
  ) {
    return 'no_products';
  }
  if (code === PURCHASES_ERROR_CODE.PURCHASE_INVALID_ERROR) {
    return 'failed';
  }

  return 'failed';
}

export async function purchasePlan(plan: SubscriptionPlan): Promise<CustomerInfo> {
  if (!isNativeStoreSupported()) {
    throw { code: 'not_available' };
  }

  await initializeRevenueCat();
  if (!configured) {
    throw { code: 'not_available' };
  }

  const offering = await getSubscriptionOffering();
  const selected = plan === 'monthly' ? offering.monthly : offering.yearly;
  if (!selected) {
    throw { code: PURCHASES_ERROR_CODE.PRODUCT_NOT_AVAILABLE_FOR_PURCHASE_ERROR };
  }

  const { customerInfo } = await Purchases.purchasePackage(selected.package);
  return customerInfo;
}

export async function restorePurchases(): Promise<CustomerInfo> {
  if (!isNativeStoreSupported()) {
    throw { code: 'not_available' };
  }

  await initializeRevenueCat();
  if (!configured) {
    throw { code: 'not_available' };
  }

  return Purchases.restorePurchases();
}

export function attachCustomerInfoListener(
  onUpdate: (info: CustomerInfo) => void
): void {
  if (!isNativeStoreSupported() || listenerAttached) return;
  listenerAttached = true;
  Purchases.addCustomerInfoUpdateListener(onUpdate);
}

export function getFallbackPrice(plan: SubscriptionPlan): string {
  return plan === 'monthly' ? FALLBACK_MONTHLY_PRICE : FALLBACK_YEARLY_PRICE;
}
