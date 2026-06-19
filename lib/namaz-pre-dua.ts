export const ISTIGFAR_ARABIC =
  'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ';

export const SELAM_ARABIC =
  'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ';

export const SALAVAT_ARABIC = 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ';

export interface NamazPreDuaItem {
  id: 'istigfar' | 'selam' | 'salavat';
  count: number;
  arabic: string;
  titleKey: string;
  translitKey: string;
  meaningKey: string;
}

export const NAMAZ_PRE_DUAS: NamazPreDuaItem[] = [
  {
    id: 'istigfar',
    count: 3,
    arabic: ISTIGFAR_ARABIC,
    titleKey: 'namaz_istigfar_title',
    translitKey: 'namaz_istigfar_translit',
    meaningKey: 'namaz_istigfar_meaning',
  },
  {
    id: 'selam',
    count: 1,
    arabic: SELAM_ARABIC,
    titleKey: 'namaz_selam_title',
    translitKey: 'namaz_selam_translit',
    meaningKey: 'namaz_selam_meaning',
  },
  {
    id: 'salavat',
    count: 1,
    arabic: SALAVAT_ARABIC,
    titleKey: 'namaz_salavat_title',
    translitKey: 'namaz_salavat_translit',
    meaningKey: 'namaz_salavat_meaning',
  },
];
