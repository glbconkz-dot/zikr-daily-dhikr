import { Dhikr, Language } from '@/types';
import { DHIKR_TRANSLITERATION_I18N } from '@/data/dhikr-transliteration-i18n';
import {
  isShortEsmaTransliteration,
  toEnTransliteration,
  toKkTransliteration,
  toRuTransliteration,
} from '@/lib/transliteration-convert';

export function getDhikrTransliterationTr(dhikr: Dhikr): string {
  return dhikr.transliteration_tr ?? dhikr.transliteration ?? '';
}

export function getDhikrTransliteration(dhikr: Dhikr, language: Language): string {
  if (language === 'ar') return '';

  const tr = getDhikrTransliterationTr(dhikr);
  const i18n = DHIKR_TRANSLITERATION_I18N[dhikr.id];
  const shortEsma = isShortEsmaTransliteration(tr);

  switch (language) {
    case 'tr':
      return tr;
    case 'en': {
      const stored = dhikr.transliteration_en ?? i18n?.en;
      if (stored) return stored;
      if (shortEsma && dhikr.titleEn) return dhikr.titleEn;
      return toEnTransliteration(tr);
    }
    case 'ru': {
      const stored = dhikr.transliteration_ru ?? i18n?.ru;
      if (stored) return stored;
      if (shortEsma && dhikr.titleRu) return dhikr.titleRu;
      return toRuTransliteration(tr);
    }
    case 'kk': {
      const stored = dhikr.transliteration_kk ?? i18n?.kk;
      if (stored) return stored;
      if (shortEsma && dhikr.titleRu) {
        return dhikr.titleRu.replace(/ак\b/g, 'ақ').replace(/ек\b/g, 'ек').replace(/ик\b/g, 'ик');
      }
      return toKkTransliteration(tr);
    }
    default:
      return tr;
  }
}
