import { Language } from '@/types';

export type TransliterationI18nEntry = Partial<Record<Exclude<Language, 'tr' | 'ar'>, string>>;

/** Manual transliterations for long duas / surahs (overrides auto-conversion). */
export const DHIKR_TRANSLITERATION_I18N: Record<string, TransliterationI18nEntry> = {
  korunma_001: {
    en: "Allahu la ilaha illa huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi idhnih, ya'lamu ma bayna aydeehim wa ma khalfahum, wa la yuhituna bi shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa huwal-'Aliyyul-'Azim.",
    ru: "Аллаху ля иляха илля хуваль-Хайюль-Кайюм, ля та'хузуху синатун ва ля навм, ляху ма фис-самавати ва ма филь-ард, ман зал-лязи яшфе'у 'индаху илля би идних, я'ляму ма байна айдихим ва ма халфахум, ва ля юхитуна би шай'ин мин 'ильмихи илля бима ша', васи'а курсийюхус-самавати валь-ард, ва ля я'удуху хифзухума, ва хуваль-'Алийюль-'Азим.",
    kk: "Аллаху ла иляха илла хувель-Хайюль-Кайюм, ла та'хузуху синатун жә ла навм, ляху ма фис-самавати жә ма филь-ард, ман зал-лязи яшфе'у 'индаху илла би идних, я'ляму ма байна айдихим жә ма халфахум, жә ля юхитуна би шай'ин мин 'ильмихи илла бима ша', васи'а курсийюхус-самавати жәль-ард, жә ля я'удуху хифзухума, жә хувель-'Алийюль-'Азим.",
  },
  korunma_002: {
    en: "Qul a'udhu bi rabbil-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharri an-naffathati fil-'uqad, wa min sharri hasidin idha hasad.",
    ru: "Куль а'узу би раббиль-фаляк, мин шарри ма халак, ва мин шарри гасикин иза вакаб, ва мин шарри ан-наффасати фил-'укад, ва мин шарри хасидин иза хасад.",
    kk: "Куль а'узу би раббиль-фаляқ, мин шарри ма халақ, жә мин шарри ғасиқин иза вақаб, жә мин шарри ан-наффасати филь-'уқад, жә мин шарри хасидин иза хасад.",
  },
  korunma_003: {
    en: "Qul a'udhu bi rabbin-nas, malikin-nas, ilahin-nas, min sharril-waswasil-khannas, alladhi yuwaswisu fi sudurin-nas, minal-jinnati wan-nas.",
    ru: "Куль а'узу би раббин-нас, маликин-нас, иляхин-нас, мин шарриль-васвасиль-ханнас, ал-лязи ювасвису фи судурин-нас, миналь-джиннати ван-нас.",
    kk: "Куль а'узу би раббин-нас, маликин-нас, иляхин-нас, мин шарриль-васвасиль-ханнас, ал-лязи ювасвису фи судурин-нас, миналь-жиннати жән-нас.",
  },
  korunma_004: {
    en: "Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa huwas-Sami'ul-'Alim.",
    ru: "Бисмилляхил-лязи ля ядурру ма'асмихи шай'un фил-арди ва ля фис-самаи ва хувас-Сами'уль-'Алим.",
    kk: "Бисмилляхил-лязи ла ядурру ма'асмихи шай'un филь-арди жә ла фис-самаи жә хувас-Сами'уль-'Әлим.",
  },
  korunma_005: {
    en: "A'udhu bi kalimatillahit-tammati min sharri ma khalaq.",
    ru: "А'узу би калиматилляхит-таммати мин шарри ма халак.",
    kk: "А'узу би калиматиллаһит-таммати мин шарри ма халақ.",
  },
  riziq_003: {
    en: "Allahumma barik lana fima razaqtana wa qina 'adhaban-nar.",
    ru: "Аллахумма барик лана фима разактана ва кина 'азабан-нар.",
    kk: "Аллахумма бәрік лана фима разақтана жә қина 'азабан-нар.",
  },
  riziq_004: {
    en: "Allahummakfini bihalalika 'an haramika wa aghnini bifadlika 'amman siwak.",
    ru: "Аллахуммакфини бихалалика 'ан харамика ва агнини бифадлика 'амман сивак.",
    kk: "Аллахуммакфини бихалалика 'ан харамика жә ағнини бифадлика 'амман сивак.",
  },
  riziq_005: {
    en: "Hasbiyallahu la ilaha illa huwa 'alayhi tawakkaltu wa huwa rabbul-'arshil-'azim.",
    ru: "Хасбийаллаху ля иляха илля хува 'алейхи таваккалту ва хува раббуль-'аршиль-'азим.",
    kk: "Хасбийаллаху ла иляха илла хува 'алейхи таваккалту жә хува раббуль-'аршиль-'азим.",
  },
  sifa_002: {
    en: "Allahumma Rabban-nas, adhibil-ba's, ishfi antash-Shafi.",
    ru: "Аллахумма Раббан-нас, азхибиль-бас, ишфи анташ-Шафи.",
    kk: "Аллахумма Раббан-нас, азхибиль-бас, ишфи анташ-Шафи.",
  },
  sifa_003: {
    en: "Bismillah. A'udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir.",
    ru: "Бисмиллях. А'узу билляхи ва кудратихи мин шарри ма ажиду ва ухадир.",
    kk: "Бисмиллях. А'узу биллаһи жә қудратихи мин шарри ма ажиду жә ухадир.",
  },
  huzur_001: {
    en: "Hasbunallahu wa ni'mal-wakil.",
    ru: "Хасбуналлаху ва ни'mаль-вакиль.",
    kk: "Хасбуналлаху жә ни'mаль-вакиль.",
  },
  huzur_002: {
    en: "La hawla wa la quwwata illa billah.",
    ru: "Ля хауля ва ля куввата илля биллях.",
    kk: "Ла хауля жә ла қуввата илла биллаһ.",
  },
  huzur_006: {
    en: "Allahumma inni a'udhu bika minal-hammi wal-hazan wal-'ajzi wal-kasal.",
    ru: "Аллахумма инни а'узу бика миналь-хамми валь-хазан валь-'адзи валь-касал.",
    kk: "Аллахумма инни а'узу бика миналь-хамми жәль-хазан жәль-'адзи жәль-касал.",
  },
  salavat_002: {
    en: "Allahumma salli 'ala sayyidina Muhammadin wa 'ala ali sayyidina Muhammad.",
    ru: "Аллахумма салли 'аля саййидина Мухаммадин ва 'аля али саййидина Мухаммад.",
    kk: "Аллахумма салли 'аля саййидина Мухаммадин жә 'аля али саййидина Мухаммад.",
  },
  salavat_003: {
    en: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim.",
    ru: "Аллахумма салли 'аля Мухаммадин ва 'аля али Мухаммадин кама салляйта 'аля Ибрахима ва 'аля али Ибрахим.",
    kk: "Аллахумма салли 'аля Мухаммадин жә 'аля али Мухаммадин кама салляйта 'аля Ибрахима жә 'аля али Ибрахим.",
  },
};
