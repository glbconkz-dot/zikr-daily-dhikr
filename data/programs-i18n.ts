import { Language } from '@/types';

export type ProgramI18n = {
  title: string;
  description: string;
};

export const PROGRAMS_I18N: Record<string, Record<Language, ProgramI18n>> = {
  prog_abundance_21: {
    tr: {
      title: '21 Günlük Bereket Programı',
      description:
        'Rızık, şükür ve tevekkül üzerine 21 günlük yapılandırılmış bir zikir yolculuğu. Her gün bereket kapılarını açan özel zikirler.',
    },
    en: {
      title: '21-Day Abundance Program',
      description:
        'A structured 21-day dhikr journey on provision, gratitude, and reliance on Allah. Each day features dhikr that opens the doors of barakah.',
    },
    ru: {
      title: '21-дневная программа изобилия',
      description:
        'Структурированное 21-дневное путешествие зикра о уделе, благодарности и уповании на Аллаха. Каждый день — особые зикры благодати.',
    },
    ar: {
      title: 'برنامج البركة لمدة 21 يوماً',
      description:
        'رحلة ذكر منظمة لمدة 21 يوماً حول الرزق والشكر والتوكل على الله. كل يوم يتضمن أذكاراً تفتح أبواب البركة.',
    },
    kk: {
      title: '21 күндік береке бағдарламасы',
      description:
        'Ризық, шүкіршілік және Аллаға сенім бойынша 21 күндік құрылымды зікір жолы. Әр күн береке есіктерін ашатын арнайы зікірлер.',
    },
  },
  prog_healing_14: {
    tr: {
      title: '14 Günlük Şifa Yolculuğu',
      description:
        'Şifa duaları, şükür ve teslimiyetle bedensel, duygusal ve manevi şifa için 14 günlük nazik bir program.',
    },
    en: {
      title: '14-Day Healing Journey',
      description:
        'A gentle 14-day program of healing duas, gratitude, and surrender for physical, emotional, and spiritual healing.',
    },
    ru: {
      title: '14-дневное путешествие исцеления',
      description:
        'Мягкая 14-дневная программа целительных дуа, благодарности и смирения для телесного, душевного и духовного исцеления.',
    },
    ar: {
      title: 'رحلة الشفاء لمدة 14 يوماً',
      description:
        'برنامج لطيف لمدة 14 يوماً من أدعية الشفاء والشكر والتسليم للشفاء الجسدي والعاطفي والروحي.',
    },
    kk: {
      title: '14 күндік шипа жолы',
      description:
        'Дене, эмоциялық және рухани шипа үшін шипа дұғалары, шүкіршілік және тапсыру бойынша 14 күндік жұмсақ бағдарлама.',
    },
  },
  prog_serenity_7: {
    tr: {
      title: '7 Günlük Huzur Programı',
      description:
        'Zihni sakinleştiren, kaygıyı hafifleten ve Allah\'ın sükûnetine yeniden bağlanan 7 günlük odaklı zikir programı.',
    },
    en: {
      title: '7-Day Serenity Reset',
      description:
        'Seven days of focused peace-seeking dhikr to quiet the mind, calm anxiety, and reconnect with Allah\'s tranquility.',
    },
    ru: {
      title: '7-дневная программа покоя',
      description:
        'Семь дней сосредоточенного зикра для умиротворения ума, снятия тревоги и возвращения к безмятежности Аллаха.',
    },
    ar: {
      title: 'برنامج السكينة لمدة 7 أيام',
      description:
        'سبعة أيام من الذكر المركز على السكينة لتهدئة الذهن وطمأنة القلب والعودة إلى سكينة الله.',
    },
    kk: {
      title: '7 күндік тыныштық бағдарламасы',
      description:
        'Ақылды тыныштандыру, мазасыздықты жеңілдету және Алланың тыныштығына қайта қосылу үшін 7 күндік зікір бағдарламасы.',
    },
  },
  prog_gratitude_21: {
    tr: { title: '21 Günlük Şükür Programı', description: '21 gün boyunca şükür, niyet ve tefekkür odaklı zikir yolculuğu.' },
    en: { title: '21-Day Gratitude Program', description: 'Twenty-one days of shukr-focused dhikr and reflection.' },
    ru: { title: '21-дневная программа благодарности', description: '21 день зикра благодарности и размышления.' },
    ar: { title: 'برنامج الشكر لمدة 21 يوماً', description: '21 يوماً من الذكر والتأمل حول الشكر.' },
    kk: { title: '21 күндік шүкір бағдарламасы', description: '21 күн шүкір мен ой толғауға бағытталған зікір.' },
  },
  prog_asma_30: {
    tr: { title: '30 Günlük Esma Programı', description: 'Esmaül Hüsna üzerine 30 günlük derin manevi yolculuk.' },
    en: { title: '30-Day Asma Program', description: 'A month-long journey through the Beautiful Names of Allah.' },
    ru: { title: '30-дневная программа имён Аллаха', description: 'Месячное путешествие по прекрасным именам Аллаха.' },
    ar: { title: 'برنامج الأسماء لمدة 30 يوماً', description: 'رحلة شهرية في أسماء الله الحسنى.' },
    kk: { title: '30 күндік Есма бағдарламасы', description: 'Алланың әдемі есімдері бойынша 30 күндік жол.' },
  },
  prog_salawat_40: {
    tr: { title: '40 Günlük Salavat Programı', description: '40 gün salavat ve salavat duaları ile manevi yakınlık.' },
    en: { title: '40-Day Salawat Program', description: 'Forty days of salawat upon the Prophet ﷺ.' },
    ru: { title: '40-дневная программа салавата', description: '40 дней салавата Пророку ﷺ.' },
    ar: { title: 'برنامج الصلاة على النبي لمدة 40 يوماً', description: '40 يوماً من الصلاة على النبي ﷺ.' },
    kk: { title: '40 күндік салават бағдарламасы', description: 'Пайғамбарға ﷺ 40 күн салават.' },
  },
  prog_discipline_40: {
    tr: { title: '40 Günlük Manevi Disiplin Programı', description: '40 gün niyet, tefekkür ve istikrarlı zikir disiplini.' },
    en: { title: '40-Day Spiritual Discipline Program', description: 'A structured 40-day path of intention and consistent dhikr.' },
    ru: { title: '40-дневная программа духовной дисциплины', description: '40 дней намерения и постоянного зикра.' },
    ar: { title: 'برنامج الانضباط الروحي لمدة 40 يوماً', description: '40 يوماً من النية والذكر المستمر.' },
    kk: { title: '40 күндік рухани тәртіп бағдарламасы', description: '40 күн ниет пен тұрақты зікір.' },
  },
  prog_protection_14: {
    tr: {
      title: '14 Günlük Korunma Programı',
      description: 'Ayetel Kürsi, Muavvizeteyn ve korunma dualarıyla 14 günlük manevi korunma yolculuğu.',
    },
    en: {
      title: '14-Day Protection Program',
      description: 'Fourteen days of Ayat al-Kursi, Muawwidhatain, and protection duas.',
    },
    ru: {
      title: '14-дневная программа защиты',
      description: '14 дней Аятуль-Курси, Муаввизатайн и защитных дуа.',
    },
    ar: {
      title: 'برنامج الحماية لمدة 14 يوماً',
      description: '14 يوماً من آية الكرسي والمعوذتين وأدعية الحماية.',
    },
    kk: {
      title: '14 күндік қорғану бағдарламасы',
      description: 'Аят әл-Күрсі, Муаввизатайн және қорғану дұғаларымен 14 күн.',
    },
  },
  prog_morning_evening_21: {
    tr: {
      title: '21 Günlük Sabah-Akşam Zikirleri',
      description: '21 gün sabah ve akşam zikirleriyle istikrarlı manevi korunma ve bereket.',
    },
    en: {
      title: '21-Day Morning & Evening Adhkar',
      description: 'Twenty-one days of morning and evening remembrance for protection and barakah.',
    },
    ru: {
      title: '21-дневная программа утренних и вечерних зикров',
      description: '21 день утреннего и вечернего поминания для защиты и благодати.',
    },
    ar: {
      title: 'برنامج أذكار الصباح والمساء لمدة 21 يوماً',
      description: '21 يوماً من أذكار الصباح والمساء للحماية والبركة.',
    },
    kk: {
      title: '21 күндік таңертең-кеш зікірлері',
      description: '21 күн таңертең және кеш зікірлерімен қорғану және береке.',
    },
  },
  prog_love_harmony_14: {
    tr: {
      title: '14 Günlük Sevgi ve Huzur Programı',
      description: 'Aile huzuru, gönül birliği ve hayırlı ilişkiler için 14 günlük dua ve zikir programı.',
    },
    en: {
      title: '14-Day Love & Harmony Program',
      description: 'Fourteen days of duas for family harmony and righteous relationships.',
    },
    ru: {
      title: '14-дневная программа любви и гармонии',
      description: '14 дней дуа для семейного мира и праведных отношений.',
    },
    ar: {
      title: 'برنامج المحبة والسكينة لمدة 14 يوماً',
      description: '14 يوماً من الأدعية للوئام الأسري والعلاقات الطيبة.',
    },
    kk: {
      title: '14 күндік махаббат пен тыныштық бағдарламасы',
      description: 'Отбасы тыныштығы мен жақсы қарым-қатынас үшін 14 күн дұға мен зікір.',
    },
  },
  prog_opportunities_21: {
    tr: {
      title: '21 Günlük Hayırlı Kapılar Programı',
      description: 'İş, ev ve hayırlı fırsatlar için 21 günlük dua ve zikir yolculuğu.',
    },
    en: {
      title: '21-Day Open Doors Program',
      description: 'Twenty-one days of duas for work, home, and righteous opportunities.',
    },
    ru: {
      title: '21-дневная программа благих возможностей',
      description: '21 день дуа для работы, дома и праведных возможностей.',
    },
    ar: {
      title: 'برنامج الأبواب الطيبة لمدة 21 يوماً',
      description: '21 يوماً من الأدعية للعمل والبيت والفرص الطيبة.',
    },
    kk: {
      title: '21 күндік жақсы есіктер бағдарламасы',
      description: 'Жұмыс, үй және жақсы мүмкіндіктер үшін 21 күн дұға мен зікір.',
    },
  },
  prog_forgiveness_10: {
    tr: {
      title: '10 Günlük Af ve Tövbe Programı',
      description: 'İstiğfar, af ve gönül yumuşaklığı için 10 günlük odaklı zikir programı.',
    },
    en: {
      title: '10-Day Forgiveness & Tawbah',
      description: 'Ten days focused on istighfar, forgiveness, and softening the heart.',
    },
    ru: {
      title: '10-дневная программа прощения и покаяния',
      description: '10 дней истигфара, прощения и смягчения сердца.',
    },
    ar: {
      title: 'برنامج المغفرة والتوبة لمدة 10 أيام',
      description: '10 أيام من الاستغفار والمغفرة ولين القلب.',
    },
    kk: {
      title: '10 күндік кешірім және тәубе бағдарламасы',
      description: '10 күн истигфар, кешірім және жүрек жұмсартуға бағытталған зікір.',
    },
  },
  prog_patience_14: {
    tr: {
      title: '14 Günlük Sabır Programı',
      description: 'Hayatın sınavlarında sabır, dinginlik ve iç güç için 14 günlük zikir yolculuğu.',
    },
    en: {
      title: '14-Day Patience & Sabr Program',
      description: 'Fourteen days of dhikr for patience, inner strength, and calm.',
    },
    ru: {
      title: '14-дневная программа терпения',
      description: '14 дней зикра для терпения, внутренней силы и спокойствия.',
    },
    ar: {
      title: 'برنامج الصبر لمدة 14 يوماً',
      description: '14 يوماً من الذكر للصبر والقوة الداخلية والسكينة.',
    },
    kk: {
      title: '14 күндік сабыр бағдарламасы',
      description: 'Сабыр, ішкі күш және тыныштық үшін 14 күн зікір жолы.',
    },
  },
};

export function getProgramTitle(programId: string, language: Language): string {
  return PROGRAMS_I18N[programId]?.[language]?.title ?? '';
}

export function getProgramDescription(programId: string, language: Language): string {
  return PROGRAMS_I18N[programId]?.[language]?.description ?? '';
}
