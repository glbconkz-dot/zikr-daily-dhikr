import { Dhikr } from '@/types';

/** Free users cannot access dhikr marked premium in data. */
export function isDhikrLocked(dhikr: Dhikr, hasPremium: boolean): boolean {
  if (hasPremium) return false;
  return dhikr.premium === true;
}

export function isProgramLocked(programPremium: boolean, hasPremium: boolean): boolean {
  if (!programPremium) return false;
  return !hasPremium;
}

/** Badge shown on all premium-tier dhikr. */
export function isPremiumDhikrContent(dhikr: Dhikr): boolean {
  return dhikr.premium === true;
}
