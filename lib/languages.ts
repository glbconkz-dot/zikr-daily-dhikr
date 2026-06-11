import { Language } from '@/types';

export const LANGUAGE_OPTIONS: { code: Language; label: string; flag: string }[] = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'kk', label: 'Қазақша', flag: '🇰🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export const SUPPORTED_LANGUAGES: Language[] = LANGUAGE_OPTIONS.map((o) => o.code);
