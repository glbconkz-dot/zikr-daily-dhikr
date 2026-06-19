import { Language } from '@/types';

const NAMAZ_ZIKR_TITLES: Record<string, Record<Language, string>> = {
  builtin_subhanallah: {
    tr: 'Sübhanallah',
    en: 'Subhanallah',
    ar: 'سُبْحَانَ اللَّهِ',
    ru: 'Субханаллах',
    kk: 'Субханаллах',
  },
  builtin_elhamdulillah: {
    tr: 'Elhamdülillah',
    en: 'Alhamdulillah',
    ar: 'الْحَمْدُ لِلَّهِ',
    ru: 'Альхамдулиллях',
    kk: 'Әлхамдулиллах',
  },
  builtin_allahu_ekber: {
    tr: 'Allahu ekber',
    en: 'Allahu Akbar',
    ar: 'اللَّهُ أَكْبَرُ',
    ru: 'Аллаху акбар',
    kk: 'Аллаху акбар',
  },
};

export function getNamazTasbihTitle(tasbihId: string, language: Language, fallback = ''): string {
  return NAMAZ_ZIKR_TITLES[tasbihId]?.[language] ?? fallback;
}

export function isNamazZikrTasbihId(id: string): boolean {
  return id in NAMAZ_ZIKR_TITLES;
}
