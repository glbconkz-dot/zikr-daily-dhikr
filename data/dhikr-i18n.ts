import { Language } from '@/types';

export type DhikrI18nEntry = { meaning: string; explanation: string };

export const DHIKR_I18N: Record<string, Record<Language, DhikrI18nEntry>> = {
  'esma_001': {
    tr: { meaning: 'Ey dunyada butun varliklara merhamet eden Allah.', explanation: 'Manevi yakinlik ve rahmet talebi niyetiyle, dunyevi garanti yuklemeden okunabilir.' },
    en: { meaning: 'O Allah, the Most Merciful to all creation.', explanation: 'May be recited humbly for mercy and spiritual closeness.' },
    ru: { meaning: 'О Аллах, Милостивый ко всему творению.', explanation: 'Можно читать смиренно, прося милость и духовную близость.' },
    ar: { meaning: 'يا الله الرحمن، الواسع الرحمة.', explanation: 'يُقرأ بتواضع طلبًا للرحمة والقرب من الله.' },
    kk: { meaning: 'Барлық жаратылысқа мейірімді Алла.', explanation: 'Бұл есім рухани тыныштық пен мейірім ниетімен оқылады.' },
  },
  'esma_002': {
    tr: { meaning: 'Ey sonsuz merhamet sahibi Allah.', explanation: 'Manevi yakinlik ve merhamet niyetiyle, dunyevi garanti yuklemeden okunabilir.' },
    en: { meaning: 'O Allah, the Especially Merciful.', explanation: 'May be recited humbly for mercy and spiritual softness.' },
    ru: { meaning: 'О Аллах, Милосердный.', explanation: 'Можно читать смиренно для милости и мягкости сердца.' },
    ar: { meaning: 'يا الله الرحيم، صاحب الرحمة الخاصة.', explanation: 'يُقرأ بتواضع طلبًا للرحمة ولين القلب.' },
    kk: { meaning: 'Шексіз мейірім иесі Алла.', explanation: 'Бұл есім мейірім және жүрек жұмсақтығы ниетімен оқылады.' },
  },
  'esma_003': {
    tr: { meaning: 'Ey her seyin hakiki sahibi ve hukumdari olan Allah.', explanation: 'Sorumluluk bilinci ve adalet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Sovereign King.', explanation: 'May be recited for humility and trust in Allah\'s decree.' },
    ru: { meaning: 'О Аллах, Царь и Владыка.', explanation: 'Можно читать для смирения и упования на предопределение Аллаха.' },
    ar: { meaning: 'يا الله الملك، المالك الحق.', explanation: 'يُقرأ للتواضع والثقة بقضاء الله.' },
    kk: { meaning: 'Барлық нәрсенің Иесі Алла.', explanation: 'Бұл есім жауапкершілік және тәуекел ниетімен оқылады.' },
  },
  'esma_004': {
    tr: { meaning: 'Ey her turlu eksiklikten uzak olan Allah.', explanation: 'Kalp temizligi ve arinma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Holy.', explanation: 'May be recited for inner purification and sincerity.' },
    ru: { meaning: 'О Аллах, Пресвятой.', explanation: 'Можно читать для очищения сердца и искренности.' },
    ar: { meaning: 'يا الله القدوس، المنزه عن كل نقص.', explanation: 'يُقرأ لطهارة القلب والإخلاص.' },
    kk: { meaning: 'Барлық кемшіліктен пәк Алла.', explanation: 'Бұл есім жүрек тазалығы ниетімен оқылады.' },
  },
  'esma_005': {
    tr: { meaning: 'Ey esenlik ve guven veren Allah.', explanation: 'Ic huzur ve sükunet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Source of Peace.', explanation: 'May be recited for calmness and peace of heart.' },
    ru: { meaning: 'О Аллах, Источник мира.', explanation: 'Можно читать для спокойствия и мира в сердце.' },
    ar: { meaning: 'يا الله السلام، مصدر السكينة.', explanation: 'يُقرأ للسكينة وطمأنينة القلب.' },
    kk: { meaning: 'Есендік пен тыныштық беруші Алла.', explanation: 'Бұл есім жүрек тыныштығы үшін оқылады.' },
  },
  'esma_006': {
    tr: { meaning: 'Ey guven veren, iman nurunu artiran Allah.', explanation: 'Iman tazeleme ve guven niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Giver of Faith and Security.', explanation: 'May be recited for trust, faith, and inner steadiness.' },
    ru: { meaning: 'О Аллах, Дарующий веру и безопасность.', explanation: 'Можно читать для укрепления веры и внутренней устойчивости.' },
    ar: { meaning: 'يا الله المؤمن، مانح الإيمان والأمان.', explanation: 'يُقرأ لزيادة الإيمان والثبات الداخلي.' },
    kk: { meaning: 'Иман мен амандық беруші Алла.', explanation: 'Бұл есім иман және сенімділік ниетімен оқылады.' },
  },
  'esma_007': {
    tr: { meaning: 'Ey her seyi gozeten ve koruyan Allah.', explanation: 'Korunma ve emniyet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Protector and Overseer.', explanation: 'May be recited for protection and reliance on Allah.' },
    ru: { meaning: 'О Аллах, Хранитель и Наблюдающий.', explanation: 'Можно читать для защиты и упования на Аллаха.' },
    ar: { meaning: 'يا الله المهيمن، الحافظ الرقيب.', explanation: 'يُقرأ للحفظ والتوكل على الله.' },
    kk: { meaning: 'Барлығын бақылаушы әрі қорғаушы Алла.', explanation: 'Бұл есім қорғаныс және тәуекел ниетімен оқылады.' },
  },
  'esma_008': {
    tr: { meaning: 'Ey mutlak guc ve izzet sahibi Allah.', explanation: 'Onur, sabir ve direnc niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Almighty.', explanation: 'May be recited for strength with humility.' },
    ru: { meaning: 'О Аллах, Могущественный.', explanation: 'Можно читать для силы вместе со смирением.' },
    ar: { meaning: 'يا الله العزيز، صاحب العزة.', explanation: 'يُقرأ لطلب القوة مع التواضع.' },
    kk: { meaning: 'Қуат пен ұлықтық иесі Алла.', explanation: 'Бұл есім сабырлы қуат ниетімен оқылады.' },
  },
  'esma_009': {
    tr: { meaning: 'Ey diledigini yapan, kirik gonulleri onaran Allah.', explanation: 'Zor zamanlarda toparlanma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Restorer and Compeller.', explanation: 'May be recited for healing and resilience.' },
    ru: { meaning: 'О Аллах, Исправляющий и Покоряющий.', explanation: 'Можно читать для исцеления и стойкости.' },
    ar: { meaning: 'يا الله الجبار، جابر القلوب.', explanation: 'يُقرأ لجبر القلب والثبات.' },
    kk: { meaning: 'Жаралы жүректі жөндеуші Алла.', explanation: 'Бұл есім жүрекке медет ниетімен оқылады.' },
  },
  'esma_010': {
    tr: { meaning: 'Ey buyukluk ve yucelik sahibi Allah.', explanation: 'Kulluk bilinci ve tevazu niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Supremely Great.', explanation: 'May be recited to remember Allah\'s greatness.' },
    ru: { meaning: 'О Аллах, Превознесенный.', explanation: 'Можно читать, помня о величии Аллаха.' },
    ar: { meaning: 'يا الله المتكبر، العظيم الجليل.', explanation: 'يُقرأ تذكّرًا لعظمة الله.' },
    kk: { meaning: 'Ұлылық иесі Алла.', explanation: 'Бұл есім тәубе мен тәуазу ниетімен оқылады.' },
  },
  'esma_011': {
    tr: { meaning: 'Ey her seyi yaratan Allah.', explanation: 'Sukur ve tefekkur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Creator.', explanation: 'May be recited for gratitude and reflection.' },
    ru: { meaning: 'О Аллах, Творец.', explanation: 'Можно читать для благодарности и размышления.' },
    ar: { meaning: 'يا الله الخالق، خالق كل شيء.', explanation: 'يُقرأ للشكر والتفكر.' },
    kk: { meaning: 'Барлық нәрсені жаратушы Алла.', explanation: 'Бұл есім шүкір және ой толғау ниетімен оқылады.' },
  },
  'esma_012': {
    tr: { meaning: 'Ey kusursuz yaratan Allah.', explanation: 'Kalbi duzene ve dengeye yoneltme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Evolver and Fashioner.', explanation: 'May be recited for order, balance, and gratitude.' },
    ru: { meaning: 'О Аллах, Создающий без изъяна.', explanation: 'Можно читать для порядка, равновесия и благодарности.' },
    ar: { meaning: 'يا الله البارئ، مبدع الخلق.', explanation: 'يُقرأ لطلب التوازن والنظام.' },
    kk: { meaning: 'Мінсіз жаратушы Алла.', explanation: 'Бұл есім тәртіп пен береке ниетімен оқылады.' },
  },
  'esma_013': {
    tr: { meaning: 'Ey her seye sekil veren Allah.', explanation: 'Hikmetli bakis ve sukur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Shaper of all forms.', explanation: 'May be recited for appreciation of divine wisdom.' },
    ru: { meaning: 'О Аллах, Придающий форму.', explanation: 'Можно читать для осознания Божественной мудрости.' },
    ar: { meaning: 'يا الله المصور، مصوّر الخلق.', explanation: 'يُقرأ لتأمل حكمة الله في الخلق.' },
    kk: { meaning: 'Әр нәрсеге бейне беруші Алла.', explanation: 'Бұл есім даналықты сезіну ниетімен оқылады.' },
  },
  'esma_014': {
    tr: { meaning: 'Ey cok bagislayan Allah.', explanation: 'Af ve tevbe niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Ever-Forgiving.', explanation: 'May be recited with repentance and hope.' },
    ru: { meaning: 'О Аллах, Многократно Прощающий.', explanation: 'Можно читать с покаянием и надеждой.' },
    ar: { meaning: 'يا الله الغفار، كثير المغفرة.', explanation: 'يُقرأ بالتوبة ورجاء المغفرة.' },
    kk: { meaning: 'Көп кешіруші Алла.', explanation: 'Бұл есім тәубе және үміт ниетімен оқылады.' },
  },
  'esma_015': {
    tr: { meaning: 'Ey her seye galip olan Allah.', explanation: 'Nefisle mucadele ve sebat niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Dominant.', explanation: 'May be recited for steadfastness and self-discipline.' },
    ru: { meaning: 'О Аллах, Всепокоряющий.', explanation: 'Можно читать для стойкости и самодисциплины.' },
    ar: { meaning: 'يا الله القهار، الغالب على كل شيء.', explanation: 'يُقرأ للثبات ومجاهدة النفس.' },
    kk: { meaning: 'Барлық нәрсеге үстем Алла.', explanation: 'Бұл есім табандылық ниетімен оқылады.' },
  },
  'esma_016': {
    tr: { meaning: 'Ey karsiliksiz veren, bol ihsan sahibi Allah.', explanation: 'Lutuf ve hayir talebi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Bestower.', explanation: 'May be recited for gratitude and lawful blessings.' },
    ru: { meaning: 'О Аллах, Щедро Дарующий.', explanation: 'Можно читать для благодарности и благого удела.' },
    ar: { meaning: 'يا الله الوهاب، كثير العطاء.', explanation: 'يُقرأ للشكر وطلب العطاء الحلال.' },
    kk: { meaning: 'Қарымсыз беруші Алла.', explanation: 'Бұл есім береке және шүкір ниетімен оқылады.' },
  },
  'esma_017': {
    tr: { meaning: 'Ey rizik veren Allah.', explanation: 'Helal rizik ve kanaat niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Provider.', explanation: 'May be recited for lawful sustenance and contentment.' },
    ru: { meaning: 'О Аллах, Дарующий удел.', explanation: 'Можно читать для халяльного удела и довольства.' },
    ar: { meaning: 'يا الله الرزاق، رازق الخلق.', explanation: 'يُقرأ لطلب الرزق الحلال والقناعة.' },
    kk: { meaning: 'Ризық беруші Алла.', explanation: 'Бұл есім адал ризық ниетімен оқылады.' },
  },
  'esma_018': {
    tr: { meaning: 'Ey kapilari acan Allah.', explanation: 'Hayirli kapilarin acilmasi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Opener.', explanation: 'May be recited for ease and beneficial openings.' },
    ru: { meaning: 'О Аллах, Открывающий.', explanation: 'Можно читать для облегчения и благих возможностей.' },
    ar: { meaning: 'يا الله الفتاح، فاتح الأبواب.', explanation: 'يُقرأ لطلب التيسير وفتح الأبواب.' },
    kk: { meaning: 'Есіктерді ашушы Алла.', explanation: 'Бұл есім істердің жеңілдігі үшін оқылады.' },
  },
  'esma_019': {
    tr: { meaning: 'Ey her seyi bilen Allah.', explanation: 'Dogruyu arama ve hikmet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Knowing.', explanation: 'May be recited for clarity and sound judgment.' },
    ru: { meaning: 'О Аллах, Всезнающий.', explanation: 'Можно читать для ясности и верного решения.' },
    ar: { meaning: 'يا الله العليم، عالم كل شيء.', explanation: 'يُقرأ لطلب البصيرة وحسن القرار.' },
    kk: { meaning: 'Барлығын толық білуші Алла.', explanation: 'Бұл есім түсінік пен даналық үшін оқылады.' },
  },
  'esma_020': {
    tr: { meaning: 'Ey dilediginde daraltan Allah.', explanation: 'Sabir ve teslimiyet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Withholder.', explanation: 'May be recited for patience during hardship.' },
    ru: { meaning: 'О Аллах, Сдерживающий.', explanation: 'Можно читать для терпения в трудностях.' },
    ar: { meaning: 'يا الله القابض، القابض بحكمته.', explanation: 'يُقرأ للصبر عند الضيق.' },
    kk: { meaning: 'Даналықпен тарылтушы Алла.', explanation: 'Бұл есім сабыр мен төзім үшін оқылады.' },
  },
  'esma_021': {
    tr: { meaning: 'Ey dilediginde genisleten Allah.', explanation: 'Ferahlik ve bereket niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Expander.', explanation: 'May be recited for relief and abundance.' },
    ru: { meaning: 'О Аллах, Расширяющий.', explanation: 'Можно читать для облегчения и достатка.' },
    ar: { meaning: 'يا الله الباسط، الباسط للرزق.', explanation: 'يُقرأ للفرج والسعة.' },
    kk: { meaning: 'Кеңейтуші Алла.', explanation: 'Бұл есім кеңшілік пен береке үшін оқылады.' },
  },
  'esma_022': {
    tr: { meaning: 'Ey diledigini alcaltan Allah.', explanation: 'Nefsi terbiye ve tevazu niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Abaser.', explanation: 'May be recited for humility and self-correction.' },
    ru: { meaning: 'О Аллах, Унижающий по справедливости.', explanation: 'Можно читать для смирения и исправления себя.' },
    ar: { meaning: 'يا الله الخافض، الخافض بحكمته.', explanation: 'يُقرأ للتواضع وإصلاح النفس.' },
    kk: { meaning: 'Әділдікпен төмендетуші Алла.', explanation: 'Бұл есім тәуазу үшін оқылады.' },
  },
  'esma_023': {
    tr: { meaning: 'Ey diledigini yukselten Allah.', explanation: 'Manevi yukselis niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Exalter.', explanation: 'May be recited for uprightness and honor through faith.' },
    ru: { meaning: 'О Аллах, Возвышающий.', explanation: 'Можно читать для возвышения через веру и праведность.' },
    ar: { meaning: 'يا الله الرافع، الرافع لعباده.', explanation: 'يُقرأ لطلب الرفعة بالإيمان.' },
    kk: { meaning: 'Көтеруші Алла.', explanation: 'Бұл есім иманмен өрлеу үшін оқылады.' },
  },
  'esma_024': {
    tr: { meaning: 'Ey izzet veren Allah.', explanation: 'Onur ve vakar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Giver of Honor.', explanation: 'May be recited for dignity with humility.' },
    ru: { meaning: 'О Аллах, Дарующий честь.', explanation: 'Можно читать для достоинства и смирения.' },
    ar: { meaning: 'يا الله المعز، معزّ من يشاء.', explanation: 'يُقرأ للعزة مع التواضع.' },
    kk: { meaning: 'Құрмет беруші Алла.', explanation: 'Бұл есім абырой мен кішіпейілдік үшін оқылады.' },
  },
  'esma_025': {
    tr: { meaning: 'Ey diledigini zillete dusuren Allah.', explanation: 'Adaletin tecellisini hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Humiliator of arrogance.', explanation: 'May be recited to avoid arrogance.' },
    ru: { meaning: 'О Аллах, Унижающий высокомерных.', explanation: 'Можно читать, чтобы уберечься от гордыни.' },
    ar: { meaning: 'يا الله المذل، المذل للمتكبرين.', explanation: 'يُقرأ للسلامة من الكبر.' },
    kk: { meaning: 'Тәкаппарды төмендетуші Алла.', explanation: 'Бұл есім менмендіктен сақтану үшін оқылады.' },
  },
  'esma_026': {
    tr: { meaning: 'Ey her seyi isiten Allah.', explanation: 'Dua ve yakaris niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Hearing.', explanation: 'May be recited while making sincere supplication.' },
    ru: { meaning: 'О Аллах, Всеслышащий.', explanation: 'Можно читать в искренней мольбе.' },
    ar: { meaning: 'يا الله السميع، السامع لكل شيء.', explanation: 'يُقرأ مع الدعاء الصادق.' },
    kk: { meaning: 'Барлығын естуші Алла.', explanation: 'Бұл есім шынайы дұғада оқылады.' },
  },
  'esma_027': {
    tr: { meaning: 'Ey her seyi goren Allah.', explanation: 'Ihlas ve dogruluk niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Seeing.', explanation: 'May be recited to strengthen sincerity.' },
    ru: { meaning: 'О Аллах, Всевидящий.', explanation: 'Можно читать для укрепления искренности.' },
    ar: { meaning: 'يا الله البصير، المبصر لكل شيء.', explanation: 'يُقرأ لتقوية الإخلاص.' },
    kk: { meaning: 'Барлығын көруші Алла.', explanation: 'Бұл есім ықылас үшін оқылады.' },
  },
  'esma_028': {
    tr: { meaning: 'Ey hukmu mutlak olan Allah.', explanation: 'Adalet ve dogru karar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Judge.', explanation: 'May be recited for justice and right judgment.' },
    ru: { meaning: 'О Аллах, Судия.', explanation: 'Можно читать для справедливого решения.' },
    ar: { meaning: 'يا الله الحكم، الحاكم بالحق.', explanation: 'يُقرأ لطلب العدل وصواب الحكم.' },
    kk: { meaning: 'Әділ үкім иесі Алла.', explanation: 'Бұл есім әділ шешім үшін оқылады.' },
  },
  'esma_029': {
    tr: { meaning: 'Ey mutlak adalet sahibi Allah.', explanation: 'Adil olma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Utterly Just.', explanation: 'May be recited for fairness and moral balance.' },
    ru: { meaning: 'О Аллах, Совершенно Справедливый.', explanation: 'Можно читать для справедливости и нравственного равновесия.' },
    ar: { meaning: 'يا الله العدل، صاحب العدل المطلق.', explanation: 'يُقرأ للعدل والاتزان الأخلاقي.' },
    kk: { meaning: 'Абсолютті әділ Алла.', explanation: 'Бұл есім әділдік үшін оқылады.' },
  },
  'esma_030': {
    tr: { meaning: 'Ey kullarina lutufla muamele eden Allah.', explanation: 'Incelik ve kolaylik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Gentle and Subtle.', explanation: 'May be recited for gentleness and ease.' },
    ru: { meaning: 'О Аллах, Тонкий и Милостивый.', explanation: 'Можно читать для мягкости и облегчения.' },
    ar: { meaning: 'يا الله اللطيف، اللطيف بعباده.', explanation: 'يُقرأ للطف والتيسير.' },
    kk: { meaning: 'Нәзік мейірімді Алла.', explanation: 'Бұл есім жұмсақтық үшін оқылады.' },
  },
  'esma_031': {
    tr: { meaning: 'Ey her seyden haberdar olan Allah.', explanation: 'Farkindalik ve dogru niyet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Aware.', explanation: 'May be recited for awareness and sincerity.' },
    ru: { meaning: 'О Аллах, Всеведущий о сокровенном.', explanation: 'Можно читать для осознанности и искренности.' },
    ar: { meaning: 'يا الله الخبير، العليم بخفايا الأمور.', explanation: 'يُقرأ للوعي والإخلاص.' },
    kk: { meaning: 'Барлық істен хабардар Алла.', explanation: 'Бұл есім шынайылық үшін оқылады.' },
  },
  'esma_032': {
    tr: { meaning: 'Ey yumusak huylu, aceleci olmayan Allah.', explanation: 'Sabir ve ofke kontrolu niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Forbearing.', explanation: 'May be recited for patience and restraint.' },
    ru: { meaning: 'О Аллах, Кроткий и Терпеливый.', explanation: 'Можно читать для терпения и самообладания.' },
    ar: { meaning: 'يا الله الحليم، المتأني الرحيم.', explanation: 'يُقرأ للصبر وكظم الغيظ.' },
    kk: { meaning: 'Сабырлы, байсалды Алла.', explanation: 'Бұл есім сабыр үшін оқылады.' },
  },
  'esma_033': {
    tr: { meaning: 'Ey buyukluk sahibi Allah.', explanation: 'Allahin azametini hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Magnificent.', explanation: 'May be recited to remember divine majesty.' },
    ru: { meaning: 'О Аллах, Великий.', explanation: 'Можно читать, помня о величии Аллаха.' },
    ar: { meaning: 'يا الله العظيم، عظيم الشأن.', explanation: 'يُقرأ تذكّرًا لعظمة الله.' },
    kk: { meaning: 'Ұлы Алла.', explanation: 'Бұл есім ұлықтықты сезіну үшін оқылады.' },
  },
  'esma_034': {
    tr: { meaning: 'Ey cok bagislayan Allah.', explanation: 'Bagislanma ve umut niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Forgiving.', explanation: 'May be recited with repentance and hope in mercy.' },
    ru: { meaning: 'О Аллах, Всепрощающий.', explanation: 'Можно читать с покаянием и надеждой на милость.' },
    ar: { meaning: 'يا الله الغفور، واسع المغفرة.', explanation: 'يُقرأ مع التوبة ورجاء الرحمة.' },
    kk: { meaning: 'Кешірімі кең Алла.', explanation: 'Бұл есім кешірім тілеу ниетімен оқылады.' },
  },
  'esma_035': {
    tr: { meaning: 'Ey az amele cok mukafat veren Allah.', explanation: 'Sukur bilinci niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Appreciative.', explanation: 'May be recited to deepen gratitude.' },
    ru: { meaning: 'О Аллах, Вознаграждающий за малое большим.', explanation: 'Можно читать для углубления благодарности.' },
    ar: { meaning: 'يا الله الشكور، المثيب على الطاعة.', explanation: 'يُقرأ لتعميق الشكر.' },
    kk: { meaning: 'Шүкірді бағалаушы Алла.', explanation: 'Бұл есім шүкір санасын арттыру үшін оқылады.' },
  },
  'esma_036': {
    tr: { meaning: 'Ey cok yuce olan Allah.', explanation: 'Manevi yucelis niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most High.', explanation: 'May be recited for spiritual elevation.' },
    ru: { meaning: 'О Аллах, Всевышний.', explanation: 'Можно читать для духовного возвышения.' },
    ar: { meaning: 'يا الله العلي، المتعالي.', explanation: 'يُقرأ للارتقاء الروحي.' },
    kk: { meaning: 'Өте жоғары Алла.', explanation: 'Бұл есім рухани өрлеу үшін оқылады.' },
  },
  'esma_037': {
    tr: { meaning: 'Ey buyuk olan Allah.', explanation: 'Tevazu ve kulluk bilinci niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Great.', explanation: 'May be recited to remember humility before Allah.' },
    ru: { meaning: 'О Аллах, Великий и Превосходящий.', explanation: 'Можно читать для смирения перед Аллахом.' },
    ar: { meaning: 'يا الله الكبير، الكبير المتعال.', explanation: 'يُقرأ للتواضع أمام الله.' },
    kk: { meaning: 'Ұлы әрі асқақ Алла.', explanation: 'Бұл есім кішіпейілдік үшін оқылады.' },
  },
  'esma_038': {
    tr: { meaning: 'Ey koruyan ve muhafaza eden Allah.', explanation: 'Korunma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Preserver.', explanation: 'May be recited for protection and safety.' },
    ru: { meaning: 'О Аллах, Хранитель.', explanation: 'Можно читать для защиты и безопасности.' },
    ar: { meaning: 'يا الله الحفيظ، الحافظ لعباده.', explanation: 'يُقرأ للحفظ والسلامة.' },
    kk: { meaning: 'Қорғаушы Алла.', explanation: 'Бұл есім амандық үшін оқылады.' },
  },
  'esma_039': {
    tr: { meaning: 'Ey rizaiklandiran ve guc veren Allah.', explanation: 'Ruhen ve bedenen kuvvet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Sustainer.', explanation: 'May be recited for sustenance and strength.' },
    ru: { meaning: 'О Аллах, Поддерживающий пропитанием.', explanation: 'Можно читать для поддержки и силы.' },
    ar: { meaning: 'يا الله المقيت، الممدّ بالقوت.', explanation: 'يُقرأ لطلب القوت والقوة.' },
    kk: { meaning: 'Қуат пен қорек беруші Алла.', explanation: 'Бұл есім қуат пен ризық үшін оқылады.' },
  },
  'esma_040': {
    tr: { meaning: 'Ey hesap goren ve kuluna yeten Allah.', explanation: 'Hesap gununu hatirlama ve sorumluluk niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Reckoner and Sufficient.', explanation: 'May be recited for accountability and integrity.' },
    ru: { meaning: 'О Аллах, Достаточный и Считающий.', explanation: 'Можно читать для ответственности и честности.' },
    ar: { meaning: 'يا الله الحسيب، الكافي والمحاسب.', explanation: 'يُقرأ للمحاسبة وحسن السلوك.' },
    kk: { meaning: 'Есеп алушы әрі жетуші Алла.', explanation: 'Бұл есім жауапкершілік үшін оқылады.' },
  },
  'esma_041': {
    tr: { meaning: 'Ey ululuk sahibi Allah.', explanation: 'Allahin celalini tefekkur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Majestic.', explanation: 'May be recited to honor divine majesty.' },
    ru: { meaning: 'О Аллах, Величественный.', explanation: 'Можно читать для почитания величия Аллаха.' },
    ar: { meaning: 'يا الله الجليل، ذو الجلال.', explanation: 'يُقرأ تعظيمًا لجلال الله.' },
    kk: { meaning: 'Ұлылық иесі Алла.', explanation: 'Бұл есім ұлықтықты ұлықтау үшін оқылады.' },
  },
  'esma_042': {
    tr: { meaning: 'Ey comert ve ikram sahibi Allah.', explanation: 'Lutuf ve kolaylik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Generous.', explanation: 'May be recited for gratitude and noble character.' },
    ru: { meaning: 'О Аллах, Щедрейший.', explanation: 'Можно читать для благодарности и благонравия.' },
    ar: { meaning: 'يا الله الكريم، صاحب الجود.', explanation: 'يُقرأ للشكر والتحلي بالكرم.' },
    kk: { meaning: 'Жомарт Алла.', explanation: 'Бұл есім жомарттық пен шүкір үшін оқылады.' },
  },
  'esma_043': {
    tr: { meaning: 'Ey her seyi gozeten Allah.', explanation: 'Takva ve dikkat niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Watchful.', explanation: 'May be recited for mindfulness and God-consciousness.' },
    ru: { meaning: 'О Аллах, Наблюдающий.', explanation: 'Можно читать для богобоязненности и осознанности.' },
    ar: { meaning: 'يا الله الرقيب، الرقيب على كل شيء.', explanation: 'يُقرأ للمراقبة والتقوى.' },
    kk: { meaning: 'Бақылаушы Алла.', explanation: 'Бұл есім тақуалық үшін оқылады.' },
  },
  'esma_044': {
    tr: { meaning: 'Ey dualara cevap veren Allah.', explanation: 'Samimi dua niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Responder to prayers.', explanation: 'May be recited with sincere supplication.' },
    ru: { meaning: 'О Аллах, Отвечающий на мольбы.', explanation: 'Можно читать с искренней мольбой.' },
    ar: { meaning: 'يا الله المجيب، مجيب الدعوات.', explanation: 'يُقرأ مع الدعاء الصادق.' },
    kk: { meaning: 'Дұғаға жауап беруші Алла.', explanation: 'Бұл есім шынайы дұғада оқылады.' },
  },
  'esma_045': {
    tr: { meaning: 'Ey ilmi ve rahmeti genis olan Allah.', explanation: 'Gonul genisligi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Encompassing.', explanation: 'May be recited for spaciousness of heart.' },
    ru: { meaning: 'О Аллах, Всеобъемлющий.', explanation: 'Можно читать для широты сердца.' },
    ar: { meaning: 'يا الله الواسع، واسع الرحمة.', explanation: 'يُقرأ لسعة الصدر.' },
    kk: { meaning: 'Рақымы кең Алла.', explanation: 'Бұл есім кең жүрек үшін оқылады.' },
  },
  'esma_046': {
    tr: { meaning: 'Ey hikmet sahibi Allah.', explanation: 'Hikmetli kararlar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Wise.', explanation: 'May be recited for wisdom and sound choices.' },
    ru: { meaning: 'О Аллах, Премудрый.', explanation: 'Можно читать для мудрости и верного выбора.' },
    ar: { meaning: 'يا الله الحكيم، صاحب الحكمة.', explanation: 'يُقرأ لطلب الحكمة وحسن الاختيار.' },
    kk: { meaning: 'Даналық иесі Алла.', explanation: 'Бұл есім даналық үшін оқылады.' },
  },
  'esma_047': {
    tr: { meaning: 'Ey seven ve sevilen Allah.', explanation: 'Muhabbet ve merhamet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Loving.', explanation: 'May be recited for compassion and loving character.' },
    ru: { meaning: 'О Аллах, Любящий.', explanation: 'Можно читать для сострадания и доброты.' },
    ar: { meaning: 'يا الله الودود، كثير المحبة.', explanation: 'يُقرأ للمحبة والرحمة.' },
    kk: { meaning: 'Сүйіспеншілік иесі Алла.', explanation: 'Бұл есім мейірім үшін оқылады.' },
  },
  'esma_048': {
    tr: { meaning: 'Ey san ve yucelik sahibi Allah.', explanation: 'Allahin sanini anma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Glorious.', explanation: 'May be recited to remember divine glory.' },
    ru: { meaning: 'О Аллах, Славный.', explanation: 'Можно читать, вспоминая славу Аллаха.' },
    ar: { meaning: 'يا الله المجيد، ذو المجد.', explanation: 'يُقرأ تعظيمًا لمجد الله.' },
    kk: { meaning: 'Даңқ иесі Алла.', explanation: 'Бұл есім ұлық даңқ үшін оқылады.' },
  },
  'esma_049': {
    tr: { meaning: 'Ey oluleri dirilten Allah.', explanation: 'Ahireti hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Resurrector.', explanation: 'May be recited with awareness of the Hereafter.' },
    ru: { meaning: 'О Аллах, Воскрешающий.', explanation: 'Можно читать с поминанием Ахирата.' },
    ar: { meaning: 'يا الله الباعث، باعث الخلق.', explanation: 'يُقرأ تذكّرًا للآخرة.' },
    kk: { meaning: 'Тірілтуші Алла.', explanation: 'Бұл есім ақыретті еске алу үшін оқылады.' },
  },
  'esma_050': {
    tr: { meaning: 'Ey her seye sahit olan Allah.', explanation: 'Dogruluk ve ihlas niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Witness.', explanation: 'May be recited for honesty and sincerity.' },
    ru: { meaning: 'О Аллах, Свидетель.', explanation: 'Можно читать для правдивости и искренности.' },
    ar: { meaning: 'يا الله الشهيد، الشاهد على كل شيء.', explanation: 'يُقرأ للصدق والإخلاص.' },
    kk: { meaning: 'Куә Алла.', explanation: 'Бұл есім шыншылдық үшін оқылады.' },
  },
  'esma_051': {
    tr: { meaning: 'Ey hak ve gercek olan Allah.', explanation: 'Hakikate baglilik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Truth.', explanation: 'May be recited for truthfulness and clarity.' },
    ru: { meaning: 'О Аллах, Истина.', explanation: 'Можно читать для следования истине.' },
    ar: { meaning: 'يا الله الحق، الحق المبين.', explanation: 'يُقرأ للثبات على الحق.' },
    kk: { meaning: 'Ақиқат Алла.', explanation: 'Бұл есім ақиқатқа беріктік үшін оқылады.' },
  },
  'esma_052': {
    tr: { meaning: 'Ey guvenilip dayanilan Allah.', explanation: 'Tevekkul niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Trustee.', explanation: 'May be recited to strengthen reliance on Allah.' },
    ru: { meaning: 'О Аллах, Попечитель.', explanation: 'Можно читать для укрепления таваккуля.' },
    ar: { meaning: 'يا الله الوكيل، نعم الوكيل.', explanation: 'يُقرأ لتقوية التوكل على الله.' },
    kk: { meaning: 'Ең жақсы Уәкіл Алла.', explanation: 'Бұл есім тәуекелді күшейту үшін оқылады.' },
  },
  'esma_053': {
    tr: { meaning: 'Ey sonsuz kuvvet sahibi Allah.', explanation: 'Manevi dayaniklilik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Strong.', explanation: 'May be recited for strength and perseverance.' },
    ru: { meaning: 'О Аллах, Всесильный.', explanation: 'Можно читать для силы и стойкости.' },
    ar: { meaning: 'يا الله القوي، شديد القوة.', explanation: 'يُقرأ لطلب القوة والثبات.' },
    kk: { meaning: 'Күш иесі Алла.', explanation: 'Бұл есім күш пен төзім үшін оқылады.' },
  },
  'esma_054': {
    tr: { meaning: 'Ey saglam ve guclu Allah.', explanation: 'Sebat ve istikrar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Firm and Steadfast.', explanation: 'May be recited for steadiness and resilience.' },
    ru: { meaning: 'О Аллах, Крепкий.', explanation: 'Можно читать для устойчивости и выносливости.' },
    ar: { meaning: 'يا الله المتين، الشديد المتين.', explanation: 'يُقرأ للرسوخ والثبات.' },
    kk: { meaning: 'Берік Алла.', explanation: 'Бұл есім беріктік үшін оқылады.' },
  },
  'esma_055': {
    tr: { meaning: 'Ey dost ve yardimci olan Allah.', explanation: 'Allahin dostlugunu isteme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Protecting Friend.', explanation: 'May be recited for protection and nearness.' },
    ru: { meaning: 'О Аллах, Покровитель и Друг.', explanation: 'Можно читать для покровительства и близости.' },
    ar: { meaning: 'يا الله الولي، ولي المؤمنين.', explanation: 'يُقرأ لطلب الولاية والقرب.' },
    kk: { meaning: 'Қамқор Дос Алла.', explanation: 'Бұл есім жақындық пен қорғаныс үшін оқылады.' },
  },
  'esma_056': {
    tr: { meaning: 'Ey hamd edilmeye layik Allah.', explanation: 'Sukur ve hamd niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Praiseworthy.', explanation: 'May be recited for gratitude and praise.' },
    ru: { meaning: 'О Аллах, Достойный хвалы.', explanation: 'Можно читать с благодарностью и хвалой.' },
    ar: { meaning: 'يا الله الحميد، المستحق للحمد.', explanation: 'يُقرأ حمدًا وشكرًا لله.' },
    kk: { meaning: 'Мадаққа лайық Алла.', explanation: 'Бұл есім мадақ пен шүкір үшін оқылады.' },
  },
  'esma_057': {
    tr: { meaning: 'Ey her seyi sayan Allah.', explanation: 'Hesap ve sorumluluk bilinci niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Reckoner of all things.', explanation: 'May be recited for accountability and mindfulness.' },
    ru: { meaning: 'О Аллах, Исчисляющий всё.', explanation: 'Можно читать для ответственности и осознанности.' },
    ar: { meaning: 'يا الله المحصي، المحصي لكل شيء.', explanation: 'يُقرأ للمحاسبة وحسن الانتباه.' },
    kk: { meaning: 'Барлығын есептеуші Алла.', explanation: 'Бұл есім жауапкершілік үшін оқылады.' },
  },
  'esma_058': {
    tr: { meaning: 'Ey yoktan var eden Allah.', explanation: 'Yeni baslangiclar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Originator.', explanation: 'May be recited for beginnings guided by faith.' },
    ru: { meaning: 'О Аллах, Начинающий творение.', explanation: 'Можно читать при новых начинаниях.' },
    ar: { meaning: 'يا الله المبدئ، مبدئ الخلق.', explanation: 'يُقرأ للبدايات المباركة.' },
    kk: { meaning: 'Жаратылысты бастаушы Алла.', explanation: 'Бұл есім жаңа бастау үшін оқылады.' },
  },
  'esma_059': {
    tr: { meaning: 'Ey tekrar yaratan ve dirilten Allah.', explanation: 'Yenilenme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Restorer.', explanation: 'May be recited for renewal and hope.' },
    ru: { meaning: 'О Аллах, Возвращающий к жизни.', explanation: 'Можно читать для обновления и надежды.' },
    ar: { meaning: 'يا الله المعيد، المعيد للخلق.', explanation: 'يُقرأ للتجدد والرجاء.' },
    kk: { meaning: 'Қайта тірілтуші Алла.', explanation: 'Бұл есім жаңару үшін оқылады.' },
  },
  'esma_060': {
    tr: { meaning: 'Ey hayat veren Allah.', explanation: 'Canlilik ve umut niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Giver of Life.', explanation: 'May be recited for vitality and hope.' },
    ru: { meaning: 'О Аллах, Дающий жизнь.', explanation: 'Можно читать для жизненной силы и надежды.' },
    ar: { meaning: 'يا الله المحيي، واهب الحياة.', explanation: 'يُقرأ لطلب الحياة والرجاء.' },
    kk: { meaning: 'Өмір беруші Алла.', explanation: 'Бұл есім үміт пен жігер үшін оқылады.' },
  },
  'esma_061': {
    tr: { meaning: 'Ey olumu takdir eden Allah.', explanation: 'Fanilik bilinci niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Bringer of Death.', explanation: 'May be recited with awareness of mortality.' },
    ru: { meaning: 'О Аллах, Дарующий смерть.', explanation: 'Можно читать с осознанием бренности.' },
    ar: { meaning: 'يا الله المميت، مقدر الأجل.', explanation: 'يُقرأ تذكّرًا بفناء الدنيا.' },
    kk: { meaning: 'Өлімді белгілейтін Алла.', explanation: 'Бұл есім өткіншілікті еске алу үшін оқылады.' },
  },
  'esma_062': {
    tr: { meaning: 'Ey diri ve hayat kaynagi olan Allah.', explanation: 'Canli iman niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Ever-Living.', explanation: 'May be recited for living faith and reliance.' },
    ru: { meaning: 'О Аллах, Вечно Живой.', explanation: 'Можно читать для живой веры и упования.' },
    ar: { meaning: 'يا الله الحي، الحي الذي لا يموت.', explanation: 'يُقرأ لحياة القلب بالإيمان.' },
    kk: { meaning: 'Мәңгі Тірі Алла.', explanation: 'Бұл есім тірі иман үшін оқылады.' },
  },
  'esma_063': {
    tr: { meaning: 'Ey her seyi ayakta tutan Allah.', explanation: 'Tevekkul ve istikrar niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Self-Subsisting Sustainer.', explanation: 'May be recited for steadiness and reliance.' },
    ru: { meaning: 'О Аллах, Самосущий Поддерживающий.', explanation: 'Можно читать для устойчивости и таваккуля.' },
    ar: { meaning: 'يا الله القيوم، القائم على كل شيء.', explanation: 'يُقرأ للثبات والتوكل.' },
    kk: { meaning: 'Барлығын ұстап тұрушы Алла.', explanation: 'Бұл есім тұрақтылық үшін оқылады.' },
  },
  'esma_064': {
    tr: { meaning: 'Ey diledigini bulan Allah.', explanation: 'Ihtiyaci Allah\'ta bulma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Finder.', explanation: 'May be recited for contentment in Allah.' },
    ru: { meaning: 'О Аллах, Находящий всё.', explanation: 'Можно читать для довольства Аллахом.' },
    ar: { meaning: 'يا الله الواجد، الواجد لما يشاء.', explanation: 'يُقرأ للقناعة بالله.' },
    kk: { meaning: 'Қалағанын табушы Алла.', explanation: 'Бұл есім қанағат үшін оқылады.' },
  },
  'esma_065': {
    tr: { meaning: 'Ey seref ve yukselik sahibi Allah.', explanation: 'Onurlu ahlak niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Noble and Glorious.', explanation: 'May be recited for noble character.' },
    ru: { meaning: 'О Аллах, Благородный и Славный.', explanation: 'Можно читать для благородного нрава.' },
    ar: { meaning: 'يا الله الماجد، صاحب الشرف.', explanation: 'يُقرأ للتحلي بمكارم الأخلاق.' },
    kk: { meaning: 'Ардақ иесі Алла.', explanation: 'Бұл есім көркем мінез үшін оқылады.' },
  },
  'esma_066': {
    tr: { meaning: 'Ey bir ve tek olan Allah.', explanation: 'Tevhid bilinci niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the One.', explanation: 'May be recited to strengthen tawhid.' },
    ru: { meaning: 'О Аллах, Единый.', explanation: 'Можно читать для укрепления таухида.' },
    ar: { meaning: 'يا الله الواحد، الأحد.', explanation: 'يُقرأ لترسيخ التوحيد.' },
    kk: { meaning: 'Бір Алла.', explanation: 'Бұл есім таухид үшін оқылады.' },
  },
  'esma_067': {
    tr: { meaning: 'Ey mutlak tek olan Allah.', explanation: 'Tevhidi derinlestirme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Unique One.', explanation: 'May be recited for pure monotheism.' },
    ru: { meaning: 'О Аллах, Единственный.', explanation: 'Можно читать для чистого единобожия.' },
    ar: { meaning: 'يا الله الأحد، الفرد الصمد.', explanation: 'يُقرأ لإخلاص التوحيد.' },
    kk: { meaning: 'Жалғыз, дара Алла.', explanation: 'Бұл есім бірқұдайшылық үшін оқылады.' },
  },
  'esma_068': {
    tr: { meaning: 'Ey her seyin muhtac oldugu Allah.', explanation: 'Ihtiyaclarda Allah\'a yonelme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Eternal Refuge.', explanation: 'May be recited in need and reliance.' },
    ru: { meaning: 'О Аллах, Вечный Прибежище.', explanation: 'Можно читать при нужде и уповании.' },
    ar: { meaning: 'يا الله الصمد، المقصود في الحوائج.', explanation: 'يُقرأ عند الحاجة والتوكل.' },
    kk: { meaning: 'Барша мұқтаждықтың Панасы Алла.', explanation: 'Бұл есім мұқтаждықта оқылады.' },
  },
  'esma_069': {
    tr: { meaning: 'Ey her seye gucu yeten Allah.', explanation: 'Imkansiz gorunen islerde umut niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the All-Powerful.', explanation: 'May be recited for hope and trust in divine power.' },
    ru: { meaning: 'О Аллах, Всемогущий.', explanation: 'Можно читать для надежды на мощь Аллаха.' },
    ar: { meaning: 'يا الله القادر، القادر على كل شيء.', explanation: 'يُقرأ رجاءً لقدرة الله.' },
    kk: { meaning: 'Барлық нәрсеге құдіреті жететін Алла.', explanation: 'Бұл есім үмітпен оқылады.' },
  },
  'esma_070': {
    tr: { meaning: 'Ey kudreti tam olan Allah.', explanation: 'Teslimiyet ve guven niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Omnipotent.', explanation: 'May be recited with surrender to Allah\'s will.' },
    ru: { meaning: 'О Аллах, Всесильный Властитель.', explanation: 'Можно читать с покорностью воле Аллаха.' },
    ar: { meaning: 'يا الله المقتدر، كامل القدرة.', explanation: 'يُقرأ تسليمًا لمشيئة الله.' },
    kk: { meaning: 'Құдіреті толық Алла.', explanation: 'Бұл есім бойсұну ниетімен оқылады.' },
  },
  'esma_071': {
    tr: { meaning: 'Ey diledigini one alan Allah.', explanation: 'Hikmetli zamanlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Expediter.', explanation: 'May be recited for trust in divine timing.' },
    ru: { meaning: 'О Аллах, Выдвигающий вперед.', explanation: 'Можно читать, доверяя божественному времени.' },
    ar: { meaning: 'يا الله المقدم، المقدّم بحكمته.', explanation: 'يُقرأ للرضا بتدبير الله.' },
    kk: { meaning: 'Алға шығарушы Алла.', explanation: 'Бұл есім Алла тағдырына разылық үшін оқылады.' },
  },
  'esma_072': {
    tr: { meaning: 'Ey diledigini geri birakan Allah.', explanation: 'Sabir ve bekleme adabi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Delayer.', explanation: 'May be recited for patience with delays.' },
    ru: { meaning: 'О Аллах, Отсрочивающий.', explanation: 'Можно читать для терпения в ожидании.' },
    ar: { meaning: 'يا الله المؤخر، المؤخر بحكمته.', explanation: 'يُقرأ للصبر عند التأخير.' },
    kk: { meaning: 'Кейін қалдырушы Алла.', explanation: 'Бұл есім сабыр үшін оқылады.' },
  },
  'esma_073': {
    tr: { meaning: 'Ey ilk ve baslangici olmayan Allah.', explanation: 'Her seyin basinin Allah oldugunu hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the First.', explanation: 'May be recited to center beginnings in faith.' },
    ru: { meaning: 'О Аллах, Первый.', explanation: 'Можно читать, начиная дела с верой.' },
    ar: { meaning: 'يا الله الأول بلا ابتداء.', explanation: 'يُقرأ لاستحضار بداية كل شيء بالله.' },
    kk: { meaning: 'Әуел, бастаусыз Алла.', explanation: 'Бұл есім істі иманмен бастау үшін оқылады.' },
  },
  'esma_074': {
    tr: { meaning: 'Ey son ve sonu olmayan Allah.', explanation: 'Sonuclari Allah\'a birakma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Last.', explanation: 'May be recited to remember ultimate return to Allah.' },
    ru: { meaning: 'О Аллах, Последний.', explanation: 'Можно читать, помня о возвращении к Аллаху.' },
    ar: { meaning: 'يا الله الآخر بلا انتهاء.', explanation: 'يُقرأ تذكّرًا بالرجوع إلى الله.' },
    kk: { meaning: 'Ақыр, соңы жоқ Алла.', explanation: 'Бұл есім ақыретті еске алу үшін оқылады.' },
  },
  'esma_075': {
    tr: { meaning: 'Ey apacik olan Allah.', explanation: 'Ayetleri tefekkur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Manifest.', explanation: 'May be recited while reflecting on signs of creation.' },
    ru: { meaning: 'О Аллах, Явный.', explanation: 'Можно читать, размышляя о знамениях.' },
    ar: { meaning: 'يا الله الظاهر، الظاهر بآياته.', explanation: 'يُقرأ مع التفكر في آيات الله.' },
    kk: { meaning: 'Айқын Алла.', explanation: 'Бұл есім ғалам аяттарын ойлау үшін оқылады.' },
  },
  'esma_076': {
    tr: { meaning: 'Ey gizli olan Allah.', explanation: 'Ic dunyayi islah niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Hidden.', explanation: 'May be recited for inner purification.' },
    ru: { meaning: 'О Аллах, Сокровенный.', explanation: 'Можно читать для очищения внутреннего мира.' },
    ar: { meaning: 'يا الله الباطن، العالم بالسرائر.', explanation: 'يُقرأ لإصلاح الباطن.' },
    kk: { meaning: 'Жасырын сырды білуші Алла.', explanation: 'Бұл есім ішкі түзеліс үшін оқылады.' },
  },
  'esma_077': {
    tr: { meaning: 'Ey her seyi yoneten Allah.', explanation: 'Ileri hikmetle yonetme niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Governor.', explanation: 'May be recited for trust in divine governance.' },
    ru: { meaning: 'О Аллах, Управляющий.', explanation: 'Можно читать, уповая на управление Аллаха.' },
    ar: { meaning: 'يا الله الوالي، المتولي لكل أمر.', explanation: 'يُقرأ للثقة بتدبير الله.' },
    kk: { meaning: 'Басқарушы Алла.', explanation: 'Бұл есім тәуекел үшін оқылады.' },
  },
  'esma_078': {
    tr: { meaning: 'Ey yuce ve ulu Allah.', explanation: 'Allahin yuceligini tefekkur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Exalted.', explanation: 'May be recited to magnify Allah above all flaws.' },
    ru: { meaning: 'О Аллах, Превознесенный выше всего.', explanation: 'Можно читать, возвеличивая Аллаха.' },
    ar: { meaning: 'يا الله المتعالي، المتعال عن النقائص.', explanation: 'يُقرأ لتعظيم الله وتنزيهه.' },
    kk: { meaning: 'Өте асқақ Алла.', explanation: 'Бұл есім Алланы ұлықтау үшін оқылады.' },
  },
  'esma_079': {
    tr: { meaning: 'Ey iyilik ve ihsan sahibi Allah.', explanation: 'Iyilikte sebat niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Source of Goodness.', explanation: 'May be recited to cultivate goodness.' },
    ru: { meaning: 'О Аллах, Источник добра.', explanation: 'Можно читать для укрепления добродетели.' },
    ar: { meaning: 'يا الله البر، كثير الإحسان.', explanation: 'يُقرأ لفعل الخير والإحسان.' },
    kk: { meaning: 'Жақсылық иесі Алла.', explanation: 'Бұл есім жақсылық үшін оқылады.' },
  },
  'esma_080': {
    tr: { meaning: 'Ey tevbeleri kabul eden Allah.', explanation: 'Tevbe ve donus niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Accepter of Repentance.', explanation: 'May be recited with repentance and reform.' },
    ru: { meaning: 'О Аллах, Принимающий покаяние.', explanation: 'Можно читать с покаянием и исправлением.' },
    ar: { meaning: 'يا الله التواب، قابل التوبة.', explanation: 'يُقرأ مع التوبة والإنابة.' },
    kk: { meaning: 'Тәубені қабыл етуші Алла.', explanation: 'Бұл есім тәубе үшін оқылады.' },
  },
  'esma_081': {
    tr: { meaning: 'Ey zulme karsi adaletle mukabele eden Allah.', explanation: 'Adalet bilinci ve zulumden sakinma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Avenger against injustice.', explanation: 'May be recited to seek justice with patience.' },
    ru: { meaning: 'О Аллах, Воздающий за несправедливость.', explanation: 'Можно читать, прося справедливости с терпением.' },
    ar: { meaning: 'يا الله المنتقم، المنتقم من الظالمين.', explanation: 'يُقرأ لطلب العدل مع الصبر.' },
    kk: { meaning: 'Зұлымдыққа әділ жауап беруші Алла.', explanation: 'Бұл есім әділет үшін оқылады.' },
  },
  'esma_082': {
    tr: { meaning: 'Ey affeden Allah.', explanation: 'Af dileme ve affedicilik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Pardoner.', explanation: 'May be recited for forgiveness and soft-heartedness.' },
    ru: { meaning: 'О Аллах, Дарующий прощение.', explanation: 'Можно читать для прощения и мягкости сердца.' },
    ar: { meaning: 'يا الله العفو، كثير العفو.', explanation: 'يُقرأ لطلب العفو ولين القلب.' },
    kk: { meaning: 'Кешірім беруші Алла.', explanation: 'Бұл есім кешірім үшін оқылады.' },
  },
  'esma_083': {
    tr: { meaning: 'Ey cok sefkatli Allah.', explanation: 'Merhamet ve sefkat niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Most Kind.', explanation: 'May be recited for compassion and tenderness.' },
    ru: { meaning: 'О Аллах, Крайне Милосердный.', explanation: 'Можно читать для милосердия и душевной мягкости.' },
    ar: { meaning: 'يا الله الرؤوف، شديد الرأفة.', explanation: 'يُقرأ للرحمة والرأفة.' },
    kk: { meaning: 'Өте мейірімді Алла.', explanation: 'Бұл есім мейірім үшін оқылады.' },
  },
  'esma_084': {
    tr: { meaning: 'Ey mulkun mutlak sahibi Allah.', explanation: 'Mulkun Allah\'a ait oldugunu hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, Owner of all dominion.', explanation: 'May be recited for humility about worldly power.' },
    ru: { meaning: 'О Аллах, Владыка всякой власти.', explanation: 'Можно читать для смирения перед властью Аллаха.' },
    ar: { meaning: 'يا الله مالك الملك، مالك كل ملك.', explanation: 'يُقرأ للتواضع وأن الملك لله.' },
    kk: { meaning: 'Бүкіл биліктің Иесі Алла.', explanation: 'Бұл есім дүниелік биліктің өткіншілігін еске салады.' },
  },
  'esma_085': {
    tr: { meaning: 'Ey celal ve ikram sahibi Allah.', explanation: 'Tazim ve sukur niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, Lord of Majesty and Honor.', explanation: 'May be recited with reverence and gratitude.' },
    ru: { meaning: 'О Аллах, Обладатель величия и щедрости.', explanation: 'Можно читать с почтением и благодарностью.' },
    ar: { meaning: 'يا ذا الجلال والإكرام، يا كريم.', explanation: 'يُقرأ بالتعظيم والشكر.' },
    kk: { meaning: 'Ұлылық пен кеңшілік иесі Алла.', explanation: 'Бұл есім құрмет пен шүкір үшін оқылады.' },
  },
  'esma_086': {
    tr: { meaning: 'Ey adaletle muamele eden Allah.', explanation: 'Insaf ve adalet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Equitable.', explanation: 'May be recited to strengthen fairness.' },
    ru: { meaning: 'О Аллах, Справедливый в воздаянии.', explanation: 'Можно читать для укрепления справедливости.' },
    ar: { meaning: 'يا الله المقسط، المقيم للعدل.', explanation: 'يُقرأ لإقامة العدل.' },
    kk: { meaning: 'Әділ төреші Алла.', explanation: 'Бұл есім әділдік үшін оқылады.' },
  },
  'esma_087': {
    tr: { meaning: 'Ey bir araya getiren Allah.', explanation: 'Birlik ve uyum niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Gatherer.', explanation: 'May be recited for unity and reconciliation.' },
    ru: { meaning: 'О Аллах, Собирающий вместе.', explanation: 'Можно читать для единства и примирения.' },
    ar: { meaning: 'يا الله الجامع، جامع القلوب.', explanation: 'يُقرأ للوحدة والإصلاح.' },
    kk: { meaning: 'Біріктіруші Алла.', explanation: 'Бұл есім бірлік үшін оқылады.' },
  },
  'esma_088': {
    tr: { meaning: 'Ey her seyden mustagni Allah.', explanation: 'Kanaat ve gonul zenginligi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Self-Sufficient.', explanation: 'May be recited for contentment and detachment.' },
    ru: { meaning: 'О Аллах, Самодостаточный.', explanation: 'Можно читать для довольства и независимости.' },
    ar: { meaning: 'يا الله الغني، الغني عن كل شيء.', explanation: 'يُقرأ للقناعة والاستغناء بالله.' },
    kk: { meaning: 'Ешкімге мұқтаж емес Алла.', explanation: 'Бұл есім қанағат үшін оқылады.' },
  },
  'esma_089': {
    tr: { meaning: 'Ey zenginlik veren Allah.', explanation: 'Helal genislik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Enricher.', explanation: 'May be recited for lawful sufficiency.' },
    ru: { meaning: 'О Аллах, Обогащающий.', explanation: 'Можно читать для дозволенного достатка.' },
    ar: { meaning: 'يا الله المغني، المغني لعباده.', explanation: 'يُقرأ لطلب الغنى الحلال.' },
    kk: { meaning: 'Жеткіліктілік беруші Алла.', explanation: 'Бұл есім адал жеткіліктілік үшін оқылады.' },
  },
  'esma_090': {
    tr: { meaning: 'Ey zarari engelleyen Allah.', explanation: 'Kotu etkilerden korunma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Preventer.', explanation: 'May be recited for protection from harm.' },
    ru: { meaning: 'О Аллах, Предотвращающий вред.', explanation: 'Можно читать для защиты от вреда.' },
    ar: { meaning: 'يا الله المانع، المانع بحكمته.', explanation: 'يُقرأ لدفع الضرر.' },
    kk: { meaning: 'Зияннан сақтаушы Алла.', explanation: 'Бұл есім қорғаныс үшін оқылады.' },
  },
  'esma_091': {
    tr: { meaning: 'Ey hikmetle musibet veren Allah.', explanation: 'Imtihanlarda sabir niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, Who allows adversity by wisdom.', explanation: 'May be recited for patience in trials.' },
    ru: { meaning: 'О Аллах, Допускающий испытания по мудрости.', explanation: 'Можно читать для терпения в испытаниях.' },
    ar: { meaning: 'يا الله الضار، المقدّر بحكمة.', explanation: 'يُقرأ للصبر عند البلاء.' },
    kk: { meaning: 'Сынақты даналықпен беруші Алла.', explanation: 'Бұл есім сынақта сабыр үшін оқылады.' },
  },
  'esma_092': {
    tr: { meaning: 'Ey fayda veren Allah.', explanation: 'Hayirli fayda niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Benefactor.', explanation: 'May be recited for beneficial outcomes.' },
    ru: { meaning: 'О Аллах, Дарующий пользу.', explanation: 'Можно читать для благой пользы.' },
    ar: { meaning: 'يا الله النافع، النافع لعباده.', explanation: 'يُقرأ لطلب النفع.' },
    kk: { meaning: 'Пайда беруші Алла.', explanation: 'Бұл есім игі пайда үшін оқылады.' },
  },
  'esma_093': {
    tr: { meaning: 'Ey nur ve aydinlik veren Allah.', explanation: 'Kalp nurlanmasi niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Light.', explanation: 'May be recited for inner illumination.' },
    ru: { meaning: 'О Аллах, Свет.', explanation: 'Можно читать для озарения сердца.' },
    ar: { meaning: 'يا الله النور، منوّر القلوب.', explanation: 'يُقرأ لاستنارة القلب.' },
    kk: { meaning: 'Нұр беруші Алла.', explanation: 'Бұл есім жүрек нұры үшін оқылады.' },
  },
  'esma_094': {
    tr: { meaning: 'Ey dogru yola ileten Allah.', explanation: 'Hidayet ve istikamet niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Guide.', explanation: 'May be recited for guidance and uprightness.' },
    ru: { meaning: 'О Аллах, Ведущий прямым путем.', explanation: 'Можно читать для наставления и прямоты.' },
    ar: { meaning: 'يا الله الهادي، هادي القلوب.', explanation: 'يُقرأ لطلب الهداية والاستقامة.' },
    kk: { meaning: 'Тура жолға бастаушы Алла.', explanation: 'Бұл есім туралық үшін оқылады.' },
  },
  'esma_095': {
    tr: { meaning: 'Ey essiz yaratan Allah.', explanation: 'Tefekkur ve hayranlik niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Incomparable Originator.', explanation: 'May be recited while reflecting on divine artistry.' },
    ru: { meaning: 'О Аллах, Несравненный Творец.', explanation: 'Можно читать, размышляя о совершенстве творения.' },
    ar: { meaning: 'يا الله البديع، البديع بلا مثال.', explanation: 'يُقرأ للتفكر في إبداع الخلق.' },
    kk: { meaning: 'Теңдессіз жаратушы Алла.', explanation: 'Бұл есім жаратылыс ғажабын ойлау үшін оқылады.' },
  },
  'esma_096': {
    tr: { meaning: 'Ey baki ve kalici olan Allah.', explanation: 'Fani dunyada baki olani hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Everlasting.', explanation: 'May be recited to remember what is everlasting.' },
    ru: { meaning: 'О Аллах, Вечный.', explanation: 'Можно читать, помня о вечном.' },
    ar: { meaning: 'يا الله الباقي، الدائم بلا زوال.', explanation: 'يُقرأ تذكّرًا ببقاء الله.' },
    kk: { meaning: 'Мәңгі қалушы Алла.', explanation: 'Бұл есім мәңгілікті еске алу үшін оқылады.' },
  },
  'esma_097': {
    tr: { meaning: 'Ey her seyin varisi olan Allah.', explanation: 'Mulkun sonunun Allah\'a dondugunu hatirlama niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Inheritor of all.', explanation: 'May be recited to remember ultimate ownership belongs to Allah.' },
    ru: { meaning: 'О Аллах, Наследующий всё.', explanation: 'Можно читать, помня, что все принадлежит Аллаху.' },
    ar: { meaning: 'يا الله الوارث، وارث كل شيء.', explanation: 'يُقرأ تذكّرًا بأن الملك لله.' },
    kk: { meaning: 'Барлық нәрсенің Мирасқоры Алла.', explanation: 'Бұл есім дүниенің өткіншілігін еске салады.' },
  },
  'esma_098': {
    tr: { meaning: 'Ey dogru yola ileten Allah.', explanation: 'Dogru adim atma niyetiyle okunabilir.' },
    en: { meaning: 'O Allah, the Guide to Rightness.', explanation: 'May be recited for prudent choices.' },
    ru: { meaning: 'О Аллах, Направляющий к правильному.', explanation: 'Можно читать для правильных шагов.' },
    ar: { meaning: 'يا الله الرشيد، المرشد إلى الصواب.', explanation: 'يُقرأ لطلب الرشد والصواب.' },
    kk: { meaning: 'Туралыққа бағыттаушы Алла.', explanation: 'Бұл есім дұрыс шешім үшін оқылады.' },
  },
  'esma_099': {
    tr: { meaning: 'Ey sabirli ve sabir veren Allah.', explanation: 'Sabir ve sebat niyetiyle okunabilir; dunyevi garanti icermez.' },
    en: { meaning: 'O Allah, the Most Patient.', explanation: 'May be recited for patience, steadiness, and trust.' },
    ru: { meaning: 'О Аллах, Терпеливейший.', explanation: 'Можно читать для терпения, стойкости и упования.' },
    ar: { meaning: 'يا الله الصبور، الملهم بالصبر.', explanation: 'يُقرأ للصبر والثبات والتوكل.' },
    kk: { meaning: 'Сабыр иесі Алла.', explanation: 'Бұл есім сабыр мен төзім үшін оқылады.' },
  },
'rizik_001': {
    tr: {
      meaning: 'Ey rızık veren, bütün canlıların rızkını yaratan Allah.',
      explanation: 'Rızık, bereket ve helal kazanç niyetiyle okunabilecek Esmaül Hüsna zikirlerindendir.',
    },
    en: {
      meaning: 'O Allah, the Provider, who creates the sustenance of all living beings.',
      explanation: 'Among the Beautiful Names of Allah that may be recited with the intention of seeking provision, blessing, and lawful earnings.',
    },
    ru: {
      meaning: 'О Аллах, дарующий удел, создающий пропитание для всех живых существ.',
      explanation: 'Из имён Аллаха, которые можно читать с намерением просить удел, благодать и дозволенный заработок.',
    },
    ar: {
      meaning: 'يا الله الرزاق، الذي يخلق رزق جميع الكائنات الحية.',
      explanation: 'من أسماء الله الحسنى التي يمكن قراءتها بنية طلب الرزق والبركة والكسب الحلال.',
    },
    kk: {
      meaning: 'Ризық беруші, барлық тірі жанның ризығын жаратқан Алла.',
      explanation: 'Ризық, береке және халал табыс ниетімен оқылатын Алланың көркем есімдерінің бірі.',
    },
  },
  'rizik_002': {
    tr: {
      meaning: 'Ey kapıları açan, zorlukları kolaylaştıran Allah.',
      explanation: 'Hayırlı kapıların açılması, işlerin kolaylaşması ve gönül ferahlığı niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Opener, who opens doors and makes difficulties easy.',
      explanation: 'May be recited with the intention of opening good doors, easing affairs, and bringing relief to the heart.',
    },
    ru: {
      meaning: 'О Аллах, Открывающий, который открывает двери и облегчает трудности.',
      explanation: 'Можно читать с намерением открытия благих путей, облегчения дел и умиротворения сердца.',
    },
    ar: {
      meaning: 'يا الله الفتاح، الذي يفتح الأبواب وييسّر الصعاب.',
      explanation: 'يُقرأ بنية فتح الأبواب الطيبة وتيسير الأمور وطمأنينة القلب.',
    },
    kk: {
      meaning: 'Есіктерді ашатын, қиындықтарды жеңілдететін Алла.',
      explanation: 'Істердің жеңілдеуі және қайырлы жолдардың ашылуы үшін оқылады.',
    },
  },
  'rizik_003': {
    tr: {
      meaning: 'Ey karşılıksız veren, bol ihsan sahibi Allah.',
      explanation: "Allah'ın lütfunu, ihsanını ve bereketini isteme niyetiyle okunabilecek bir esmadır.",
    },
    en: {
      meaning: 'O Allah, the Bestower, who gives freely and abundantly.',
      explanation: 'A Divine Name that may be recited with the intention of seeking Allah\'s grace, generosity, and blessing.',
    },
    ru: {
      meaning: 'О Аллах, Дарующий, который даёт безвозмездно и щедро.',
      explanation: 'Имя Аллаха, которое можно читать с намерением просить Его милость, щедрость и благодать.',
    },
    ar: {
      meaning: 'يا الله الوهاب، الذي يعطي بلا مقابل ويُكرم بسخاء.',
      explanation: 'من أسماء الله التي تُقرأ بنية طلب لطفه وإحسانه وبركته.',
    },
    kk: {
      meaning: 'Қарымсыз беруші, мол сый иесі Алла.',
      explanation: 'Алланың лұтфы мен берекесін тілеу ниетімен оқылады.',
    },
  },
  'rizik_004': {
    tr: {
      meaning: 'Ey her şeyden müstağni olan, sonsuz zenginlik sahibi Allah.',
      explanation: 'Maddi ve manevi bolluğu, yeterliliği ve bağımsızlığı isteme niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Self-Sufficient, who is free from all need and possesses infinite wealth.',
      explanation: 'May be recited with the intention of seeking material and spiritual abundance, sufficiency, and independence.',
    },
    ru: {
      meaning: 'О Аллах, Богатый, который не нуждается ни в чём и обладает безграничным богатством.',
      explanation: 'Можно читать с намерением просить материального и духовного изобилия, довольства и независимости.',
    },
    ar: {
      meaning: 'يا الله الغني، الذي لا يحتاج إلى شيء وله الغنى اللامحدود.',
      explanation: 'يُقرأ بنية طلب الوفرة المادية والمعنوية والاكتفاء والاستقلال.',
    },
    kk: {
      meaning: 'Еш нәрсеге мұқтаж емес, шексіз байлық иесі Алла.',
      explanation: 'Материалдық және рухани молшылық сұрау ниетімен оқылады.',
    },
  },
  'rizik_005': {
    tr: {
      meaning: 'Ey kullarını zengin eden, ihtiyaçlarını gideren Allah.',
      explanation: 'Geçim sıkıntısından kurtulmak, borçtan çıkmak ve bereket bulmak niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Enricher, who makes His servants wealthy and fulfills their needs.',
      explanation: 'May be recited with the intention of relief from financial hardship, freedom from debt, and finding blessing.',
    },
    ru: {
      meaning: 'О Аллах, Обогащающий, который обогащает Своих рабов и удовлетворяет их нужды.',
      explanation: 'Можно читать с намерением избавления от нужды, выхода из долгов и обретения благодати.',
    },
    ar: {
      meaning: 'يا الله المغني، الذي يغني عباده ويقضي حوائجهم.',
      explanation: 'يُقرأ بنية التخلص من ضيق العيش والديون وطلب البركة.',
    },
    kk: {
      meaning: 'Құлдарын байытатын, мұқтажын өтейтін Алла.',
      explanation: 'Таршылықтан шығу және береке тілеу ниетімен оқылады.',
    },
  },
  'rizik_006': {
    tr: {
      meaning: 'Ey rızkı açan, genişleten ve bereketlendiren Allah.',
      explanation: 'Rızkın genişlemesi, bereketi artırma ve bolluk niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Expander, who opens, broadens, and blesses provision.',
      explanation: 'May be recited with the intention of expanding provision, increasing blessing, and attaining abundance.',
    },
    ru: {
      meaning: 'О Аллах, Расширяющий, который открывает, расширяет и благословляет удел.',
      explanation: 'Можно читать с намерением расширения удела, умножения благодати и обретения изобилия.',
    },
    ar: {
      meaning: 'يا الله الباسط، الذي يبسط الرزق ويوسّعه ويبارك فيه.',
      explanation: 'يُقرأ بنية اتساع الرزق وزيادة البركة والوفرة.',
    },
    kk: {
      meaning: 'Ризықты кеңейтетін және берекелейтін Алла.',
      explanation: 'Ризықтың кеңеюі мен молшылық ниетімен оқылады.',
    },
  },
  'rizik_007': {
    tr: {
      meaning: "Allah'ım! Bize verdiğin rızıkta bereket ver ve bizi cehennem azabından koru.",
      explanation: 'Yemek öncesi ve rızık şükrü niyetiyle okunan sahih bir dua metnidir.',
    },
    en: {
      meaning: 'O Allah! Bless us in what You have provided us and protect us from the punishment of Hell.',
      explanation: 'An authentic supplication recited before meals and with the intention of gratitude for provision.',
    },
    ru: {
      meaning: 'О Аллах! Благослови нас в том, что Ты даровал нам, и защити нас от наказания Ада.',
      explanation: 'Достоверная молитва, читаемая перед едой и с намерением благодарности за удел.',
    },
    ar: {
      meaning: 'اللهم بارك لنا فيما رزقتنا وقنا عذاب النار.',
      explanation: 'دعاء صحيح يُقرأ قبل الطعام وبالنية شكر الرزق.',
    },
    kk: {
      meaning: 'Аллаһым, бізге берген ризығыңа береке бер және бізді тозақ азабынан сақта.',
      explanation: 'Бұл дұға ас алдында және ризыққа шүкіршілік ниетімен оқылады.',
    },
  },
  'rizik_008': {
    tr: {
      meaning: "Allah'ım! Beni helal rızıkla haram olandan koru ve beni fazlınla senden başkasına muhtaç etme.",
      explanation: "Tirmizî'de geçen bu dua, helal rızık ve kanaatkârlık için okunur.",
    },
    en: {
      meaning: 'O Allah! Suffice me with what is lawful and keep me from what is forbidden, and enrich me by Your grace so that I need none besides You.',
      explanation: 'This supplication recorded in Tirmidhi is recited for lawful provision and contentment.',
    },
    ru: {
      meaning: 'О Аллах! Доволь меня дозволенным и оберегай от запретного, и обогати меня Своей милостью, чтобы я не нуждался ни в ком кроме Тебя.',
      explanation: 'Эта молитва из Тirmidhi читается для дозволенного удела и довольства.',
    },
    ar: {
      meaning: 'اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك.',
      explanation: 'دعاء ورد في الترمذي يُقرأ لطلب الرزق الحلال والقناعة.',
    },
    kk: {
      meaning: 'Аллаһым, мені халал ризықпен жеткілікті ет, харамнан сақта және Өз мейіріміңмен Өзгені керек етпе.',
      explanation: 'Бұл дұға халал ризық пен қанағат сұрау ниетімен оқылады.',
    },
  },
  'rizik_009': {
    tr: {
      meaning: "Bana Allah yeter. O'ndan başka ilah yoktur. Ben O'na tevekkül ettim. O, büyük arşın Rabbidir.",
      explanation: 'Günde 7 kez okunması tavsiye edilen, tevekkül ve korunma niyetiyle okunan bir dua.',
    },
    en: {
      meaning: 'Allah is sufficient for me. There is no god but Him. I have placed my trust in Him, and He is the Lord of the Mighty Throne.',
      explanation: 'A supplication recommended to be recited seven times daily, with the intention of reliance on Allah and seeking protection.',
    },
    ru: {
      meaning: 'Мне достаточно Аллаха. Нет бога кроме Него. Я уповаю на Него, и Он — Господь Великого Трона.',
      explanation: 'Молитва, рекомендуемая к чтению 7 раз в день, с намерением упования на Аллаха и защиты.',
    },
    ar: {
      meaning: 'حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.',
      explanation: 'دعاء يُستحب قراءته سبع مرات يومياً بنية التوكل والحماية.',
    },
    kk: {
      meaning: 'Маған Алла жеткілікті. Одан басқа тәңір жоқ. Мен Оған тәуекел еттім. Ол — Ұлы Аршының Раббысы.',
      explanation: 'Күніне жеті рет оқылуы ұсынылады; тәуекел және қорғаныс ниетімен оқылады.',
    },
  },
  'rizik_010': {
    tr: {
      meaning: 'Ey cömert ve ikram sahibi Allah.',
      explanation: "Allah'ın ikramını, hayırlı fırsatları ve kolaylıkları isteme niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the Generous, the Lord of honor and grace.',
      explanation: 'May be recited with the intention of seeking Allah\'s generosity, good opportunities, and ease.',
    },
    ru: {
      meaning: 'О Аллах, Щедрый, обладающий великодушием и благородством.',
      explanation: 'Можно читать с намерением просить щедрости Аллаха, благих возможностей и облегчения.',
    },
    ar: {
      meaning: 'يا الله الكريم، صاحب الجود والإكرام.',
      explanation: 'يُقرأ بنية طلب إكرام الله والفرص الطيبة والتيسير.',
    },
    kk: {
      meaning: 'Жомарт әрі икрам иесі Алла.',
      explanation: 'Қайырлы мүмкіндік, кеңшілік және жеңілдік ниетімен оқылады.',
    },
  },
  'sifa_001': {
    tr: {
      meaning: 'Ey şifa veren Allah.',
      explanation: "Hastalık, yorgunluk ve manevi sıkıntı zamanlarında Allah'tan şifa isteme niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the Healer.',
      explanation: 'May be recited with the intention of seeking healing from Allah during times of illness, fatigue, and spiritual distress.',
    },
    ru: {
      meaning: 'О Аллах, Целитель.',
      explanation: 'Можно читать с намерением просить исцеления у Аллаха во время болезни, усталости и духовных трудностей.',
    },
    ar: {
      meaning: 'يا الله الشافي.',
      explanation: 'يُقرأ بنية طلب الشفاء من الله في أوقات المرض والتعب والضيق المعنوي.',
    },
    kk: {
      meaning: 'Шипа беруші Алла.',
      explanation: 'Ауру, шаршау және рухани қиындық сәтінде Алладан шипа сұрау үшін оқылады.',
    },
  },
  'sifa_002': {
    tr: {
      meaning: "Allah'ım, insanların Rabbi! Sıkıntıyı gider, şifa ver. Şifa veren ancak Sensin.",
      explanation: 'Hastalık ve şifa niyetiyle okunabilecek sahih dua metinlerinden biridir.',
    },
    en: {
      meaning: 'O Allah, Lord of mankind! Remove the affliction and grant healing. You alone are the Healer.',
      explanation: 'One of the authentic supplications that may be recited with the intention of healing from illness.',
    },
    ru: {
      meaning: 'О Аллах, Господь людей! Устрани недуг и исцели. Только Ты — Целитель.',
      explanation: 'Одна из достоверных молитв, которую можно читать с намерением исцеления от болезни.',
    },
    ar: {
      meaning: 'اللهم رب الناس، أذهب البأس، اشفِ، أنت الشافي.',
      explanation: 'من الأدعية الصحيحة التي تُقرأ بنية الشفاء من المرض.',
    },
    kk: {
      meaning: 'Аллаһым, адамдардың Раббысы, ауруды кетір, шипа бер. Шипа беруші тек Сенсің.',
      explanation: 'Бұл мәтін ауруға шипа сұрау ниетімен оқылатын сахих дұғалардың бірі.',
    },
  },
  'sifa_003': {
    tr: {
      meaning: "Allah'ın adıyla. Hissettiğim ve sakındığım şeyin şerrinden Allah'a ve O'nun kudretine sığınırım.",
      explanation: "Ağrı veya rahatsızlık hissedilen durumlarda Allah'a sığınma ve şifa niyetiyle okunabilir.",
    },
    en: {
      meaning: 'In the name of Allah. I seek refuge in Allah and His power from the evil of what I feel and fear.',
      explanation: 'May be recited when experiencing pain or discomfort, seeking refuge in Allah and asking for healing.',
    },
    ru: {
      meaning: 'С именем Аллаха. Я прибегаю к Аллаху и Его могуществу от зла того, что я ощущаю и чего опасаюсь.',
      explanation: 'Можно читать при боли или недомогании, прибегая к Аллаху и прося исцеления.',
    },
    ar: {
      meaning: 'بسم الله، أعوذ بالله وقدرته من شر ما أجد وأحاذر.',
      explanation: 'يُقرأ عند الشعور بالألم أو الانزعاج، بالاستعاذة بالله وطلب الشفاء.',
    },
    kk: {
      meaning: 'Алланың атымен. Сезіп тұрған және қорқатын нәрсенің жамандығынан Аллаға әрі Оның құдіретіне сиынамын.',
      explanation: 'Ауырсыну немесе жайсыздық кезінде қорғаныс және шипа ниетімен оқылады.',
    },
  },
  'sifa_004': {
    tr: {
      meaning: 'Ey her ihtiyaca kâfi gelen, yeterli olan Allah.',
      explanation: 'Şifa, güç ve manevi yeterlilik niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the All-Sufficient, who is enough for every need.',
      explanation: 'May be recited with the intention of healing, strength, and spiritual sufficiency.',
    },
    ru: {
      meaning: 'О Аллах, Достаточный, который удовлетворяет каждую нужду.',
      explanation: 'Можно читать с намерением исцеления, силы и духовной достаточности.',
    },
    ar: {
      meaning: 'يا الله الكافي، الذي يكفي لكل حاجة.',
      explanation: 'يُقرأ بنية الشفاء والقوة والاكتفاء المعنوي.',
    },
    kk: {
      meaning: 'Әр мұқтаждыққа жеткілікті Алла.',
      explanation: 'Шипа, қуат және рухани жеткіліктілік ниетімен оқылады.',
    },
  },
  'sifa_005': {
    tr: {
      meaning: "Allah'ım! Kalbimi her türlü hastalıktan ve vesveseden şifa ver.",
      explanation: 'Kalp huzursuzluğu, vesvese ve ruhsal sıkıntı için okunabilecek bir dua niyetidir.',
    },
    en: {
      meaning: 'O Allah! Heal my heart from every illness and whispering of doubt.',
      explanation: 'A supplication that may be recited for heart unrest, intrusive thoughts, and spiritual distress.',
    },
    ru: {
      meaning: 'О Аллах! Исцели моё сердце от всякой болезни и навязчивых мыслей.',
      explanation: 'Молитва, которую можно читать при беспокойстве сердца, навязчивых мыслях и духовных трудностях.',
    },
    ar: {
      meaning: 'اللهم اشفِ قلبي من كل مرض ووسوسة.',
      explanation: 'دعاء يُقرأ لقلق القلب والوسوسة والضيق الروحي.',
    },
    kk: {
      meaning: 'Аллаһым, жүрегімді әр түрлі дерт пен уәсуәсадан шипа қыл.',
      explanation: 'Жүрек мазасыздығы мен ой күйзелісінде оқылатын дұға.',
    },
  },
  'sifa_006': {
    tr: {
      meaning: 'Rabbim! Bana zarar dokundu. Sen merhametlilerin en merhametlisisin.',
      explanation: "Hz. Eyyub (a.s.)'ın duası. Hastalık ve sıkıntı içinde Allah'a yalvarma niyetiyle okunur.",
    },
    en: {
      meaning: 'My Lord! Harm has touched me, and You are the Most Merciful of those who show mercy.',
      explanation: 'The supplication of Prophet Ayyub (peace be upon him), recited with the intention of calling upon Allah in illness and hardship.',
    },
    ru: {
      meaning: 'Господи! Меня постигло страдание, а Ты — Самый милостивый из милующих.',
      explanation: 'Молитва пророка Айюба (мир ему), читаемая с намерением взывания к Аллаху в болезни и скорби.',
    },
    ar: {
      meaning: 'رب إني مسني الضر وأنت أرحم الراحمين.',
      explanation: 'دعاء النبي أيوب (عليه السلام)، يُقرأ بنية الالتجاء إلى الله في المرض والضيق.',
    },
    kk: {
      meaning: 'Раббым, маған зиян тиді, ал Сен мейірімділердің ең мейірімдісісің.',
      explanation: 'Бұл — Әйюб пайғамбардың дұғасы; қиындықта Аллаға жалбарыну үшін оқылады.',
    },
  },
  'sifa_007': {
    tr: {
      meaning: "Büyük arşın Rabbi olan Yüce Allah'tan seni iyileştirmesini dilerim.",
      explanation: 'Hasta ziyaretinde 7 kez okunması tavsiye edilen, sahih hadise dayanan bir dua.',
    },
    en: {
      meaning: 'I ask Allah the Almighty, Lord of the Mighty Throne, to heal you.',
      explanation: 'A supplication based on an authentic hadith, recommended to be recited seven times when visiting the sick.',
    },
    ru: {
      meaning: 'Я прошу Аллаха Великого, Господа Великого Трона, исцелить тебя.',
      explanation: 'Молитва, основанная на достоверном хадисе, рекомендуется читать 7 раз при посещении больного.',
    },
    ar: {
      meaning: 'أسأل الله العظيم رب العرش العظيم أن يشفيك.',
      explanation: 'دعاء مستند إلى حديث صحيح، يُستحب قراءته سبع مرات عند زيارة المريض.',
    },
    kk: {
      meaning: 'Ұлы Аршының Раббысы болған Ұлы Алладан сені сауықтыруын сұраймын.',
      explanation: 'Сахих хадиске негізделген бұл дұға науқасқа барғанда жеті рет оқылады.',
    },
  },
  'sifa_008': {
    tr: {
      meaning: "Allah'ım! Hidayet ettiklerinin arasında bana hidayet ver, afiyet verdiklerinin arasında bana da afiyet ver.",
      explanation: 'Kunut duasının başlangıcı. Genel sağlık ve afiyet niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah! Guide me among those You have guided, and grant me well-being among those You have granted well-being.',
      explanation: 'The opening of the Qunut supplication. May be recited with the intention of general health and well-being.',
    },
    ru: {
      meaning: 'О Аллах! Направь меня среди тех, кого Ты направил, и даруй мне благополучие среди тех, кому Ты даровал благополучие.',
      explanation: 'Начало молитвы Кунут. Можно читать с намерением общего здоровья и благополучия.',
    },
    ar: {
      meaning: 'اللهم اهدني فيمن هديت وعافني فيمن عافيت.',
      explanation: 'من بداية دعاء القنوت. يُقرأ بنية الصحة والعافية العامة.',
    },
    kk: {
      meaning: 'Аллаһым, тура жол бергендеріңнің қатарында маған да туралық бер, амандық бергендеріңнің қатарында маған да амандық бер.',
      explanation: 'Күнут дұғасының басы; жалпы саулық пен амандық ниетімен оқылады.',
    },
  },
  'huzur_001': {
    tr: {
      meaning: 'Allah bize yeter. O ne güzel vekildir.',
      explanation: "Kaygı, korku ve belirsizlik zamanlarında Allah'a tevekkül niyetiyle okunabilir.",
    },
    en: {
      meaning: 'Allah is sufficient for us, and He is the best Disposer of affairs.',
      explanation: 'May be recited with the intention of placing trust in Allah during times of anxiety, fear, and uncertainty.',
    },
    ru: {
      meaning: 'Нам достаточно Аллаха, и Он — лучший Попечитель.',
      explanation: 'Можно читать с намерением упования на Аллаха во времена тревоги, страха и неопределённости.',
    },
    ar: {
      meaning: 'حسبنا الله ونعم الوكيل.',
      explanation: 'يُقرأ بنية التوكل على الله في أوقات الهم والخوف وعدم اليقين.',
    },
    kk: {
      meaning: 'Бізге Алла жеткілікті. Ол қандай көркем Уәкіл.',
      explanation: 'Қорқыныш пен уайым кезінде Аллаға тәуекел ету ниетімен оқылады.',
    },
  },
  'huzur_002': {
    tr: {
      meaning: "Güç ve kuvvet ancak Allah'ın yardımıyladır.",
      explanation: 'Zor zamanlarda teslimiyet, sabır ve iç huzur niyetiyle okunabilir.',
    },
    en: {
      meaning: 'There is no power and no strength except with the help of Allah.',
      explanation: 'May be recited during difficult times with the intention of surrender, patience, and inner peace.',
    },
    ru: {
      meaning: 'Нет силы и могущества, кроме как с помощью Аллаха.',
      explanation: 'Можно читать в трудные времена с намерением смирения, терпения и внутреннего покоя.',
    },
    ar: {
      meaning: 'لا حول ولا قوة إلا بالله.',
      explanation: 'يُقرأ في الأوقات الصعبة بنية التسليم والصبر والطمأنينة.',
    },
    kk: {
      meaning: 'Алланың көмегінсіз күш те, қуат та жоқ.',
      explanation: 'Қиын сәтте сабыр және ішкі тыныштық ниетімен оқылады.',
    },
  },
  'huzur_003': {
    tr: {
      meaning: 'Ey esenlik ve huzur kaynağı Allah.',
      explanation: 'Kalp huzuru, iç dinginlik ve güven duygusu niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Source of peace and tranquility.',
      explanation: 'May be recited with the intention of peace of heart, inner calm, and a sense of security.',
    },
    ru: {
      meaning: 'О Аллах, Источник покоя и умиротворения.',
      explanation: 'Можно читать с намерением покоя сердца, внутреннего спокойствия и чувства защищённости.',
    },
    ar: {
      meaning: 'يا الله السلام، مصدر السكينة والطمأنينة.',
      explanation: 'يُقرأ بنية طمأنينة القلب والسكينة الداخلية والأمان.',
    },
    kk: {
      meaning: 'Есендік пен тыныштықтың қайнары Алла.',
      explanation: 'Жүрек тыныштығы мен қауіпсіздік сезімі үшін оқылады.',
    },
  },
  'huzur_004': {
    tr: {
      meaning: 'Ey iman ve güven veren Allah.',
      explanation: 'Gönle güven, iman tazeliği ve endişelerin giderilmesi niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Granter of faith and security.',
      explanation: 'May be recited with the intention of heart-felt trust, renewal of faith, and relief from worries.',
    },
    ru: {
      meaning: 'О Аллах, дарующий веру и безопасность.',
      explanation: 'Можно читать с намерением доверия сердцу, обновления веры и избавления от тревог.',
    },
    ar: {
      meaning: 'يا الله المؤمن، مانح الإيمان والأمان.',
      explanation: 'يُقرأ بنية الأمان في القلب وتجديد الإيمان وإزالة الهموم.',
    },
    kk: {
      meaning: 'Иман мен қауіпсіздік беруші Алла.',
      explanation: 'Иманды күшейту және уайымды азайту ниетімен оқылады.',
    },
  },
  'huzur_005': {
    tr: {
      meaning: "Allah'ı hamd ile tesbih ederim.",
      explanation: "Söylemesi kolay, terazide ağır, Rahman'ın sevdiği bir zikirdir.",
    },
    en: {
      meaning: 'Glory be to Allah and praise be to Him.',
      explanation: 'A remembrance easy to utter, heavy on the scales, and beloved by the Most Merciful.',
    },
    ru: {
      meaning: 'Пречист Аллах, и Ему хвала.',
      explanation: 'Зикр, лёгкий в произнесении, тяжёлый на весах и любимый Милостивым.',
    },
    ar: {
      meaning: 'سبحان الله وبحمده.',
      explanation: 'ذكر يسير على اللسان ثقيل في الميزان محبوب إلى الرحمن.',
    },
    kk: {
      meaning: 'Алла пәк, әрі Оған мадақ болсын.',
      explanation: 'Айтуға жеңіл, сауап таразысында ауыр әрі сүйікті зікір.',
    },
  },
  'huzur_006': {
    tr: {
      meaning: "Allah'ım! Tasa ve hüzünden, acizlikten ve tembellikten sana sığınırım.",
      explanation: "Buharî'de geçen bu dua, kaygı, üzüntü ve enerji eksikliği için okunur.",
    },
    en: {
      meaning: 'O Allah! I seek refuge in You from anxiety and grief, from incapacity and laziness.',
      explanation: 'This supplication recorded in Bukhari is recited for anxiety, sorrow, and lack of energy.',
    },
    ru: {
      meaning: 'О Аллах! Я прибегаю к Тебе от тревоги и печали, от беспомощности и лени.',
      explanation: 'Эта молитва из Бухари читается от тревоги, печали и нехватки энергии.',
    },
    ar: {
      meaning: 'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل.',
      explanation: 'دعاء ورد في البخاري يُقرأ للهم والحزن وقلة النشاط.',
    },
    kk: {
      meaning: 'Аллаһым, уайым мен қайғыдан, әлсіздік пен жалқаулықтан Саған сиынамын.',
      explanation: 'Бұл дұға уайым мен әлсіздіктен арылу ниетімен оқылады.',
    },
  },
  'huzur_007': {
    tr: {
      meaning: "Rab olarak Allah'tan, din olarak İslam'dan, peygamber olarak Muhammed (s.a.v.)'den razıyım.",
      explanation: "Sabah akşam 3'er kez okunması tavsiye edilen, huzur ve teslimiyet niyetiyle okunan bir dua.",
    },
    en: {
      meaning: 'I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace be upon him) as my Prophet.',
      explanation: 'A supplication recommended to be recited three times in the morning and evening, with the intention of peace and surrender.',
    },
    ru: {
      meaning: 'Я доволен Аллахом как Господом, исламом как религией и Мухаммадом (мир ему) как пророком.',
      explanation: 'Молитва, рекомендуемая к чтению по 3 раза утром и вечером, с намерением покоя и смирения.',
    },
    ar: {
      meaning: 'رضيت بالله رباً وبالإسلام ديناً وبمحمد نبياً.',
      explanation: 'دعاء يُستحب قراءته ثلاث مرات صباحاً ومساءً بنية الطمأنينة والتسليم.',
    },
    kk: {
      meaning: 'Раббым ретінде Аллаға, дін ретінде Исламға, пайғамбар ретінде Мұхаммедке разымын.',
      explanation: 'Таңертең және кешке үш рет оқу ұсынылады; жүрек тыныштығы үшін оқылады.',
    },
  },
  'huzur_008': {
    tr: {
      meaning: 'Ey yumuşak huylu, aceleci olmayan Allah.',
      explanation: 'Sabır, öfke kontrolü ve iç dinginlik niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Forbearing, who is gentle and never hasty.',
      explanation: 'May be recited with the intention of patience, control of anger, and inner tranquility.',
    },
    ru: {
      meaning: 'О Аллах, Кроткий, который терпелив и не торопится.',
      explanation: 'Можно читать с намерением терпения, сдержанности гнева и внутреннего спокойствия.',
    },
    ar: {
      meaning: 'يا الله الحليم، الذي يتأنى ولا يعجل.',
      explanation: 'يُقرأ بنية الصبر وضبط الغضب والسكينة الداخلية.',
    },
    kk: {
      meaning: 'Сабырлы, асықпайтын Алла.',
      explanation: 'Сабыр, ашуды тежеу және ішкі тыныштық ниетімен оқылады.',
    },
  },
  'korunma_001': {
    tr: {
      meaning:
        "Allah, kendisinden başka ilah olmayandır. O, diridir, kayyumdur (her şeyi ayakta tutandır). O'nu ne bir uyuklama tutar ne de uyku. Göklerde ve yerde ne varsa hepsi O'nundur. O'nun izni olmadan katında kim şefaat edebilir? O, kullarının önlerindekini ve arkalarındakini bilir. Onlar O'nun ilminden, kendisinin dilediği kadarından başka bir şeyi kuşatamazlar. O'nun kürsüsü gökleri ve yeri kaplamıştır. Onları koruyup gözetmek O'na ağır gelmez. O, yücedir, büyüktür.",
      explanation:
        "Kur'an'ın en büyük ayetidir. Her farz namazdan sonra, yatmadan önce ve korunma niyetiyle okunur. Peygamber Efendimiz (s.a.v.), yatarken Ayetel Kürsi okuyanın sabaha kadar Allah'ın korumasında olduğunu bildirmiştir.",
    },
    en: {
      meaning:
        'Allah — there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who can intercede with Him except by His permission? He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills. His Kursi extends over the heavens and the earth, and preserving them does not weary Him. He is the Most High, the Most Great.',
      explanation:
        'The greatest verse in the Quran. Recite it after every obligatory prayer, before sleep, and with the intention of divine protection. The Prophet ﷺ said that whoever recites Ayat al-Kursi before sleeping remains under Allah\'s protection until morning.',
    },
    ru: {
      meaning:
        'Аллах — нет бога кроме Него, Живого, поддерживающего всё существо. Его не берёт ни дремота, ни сон. Ему принадлежит то, что на небесах и на земле. Кто может заступиться перед Ним без Его дозволения? Он знает то, что перед ними и то, что позади них, и они не охватывают ничего из Его знания, кроме того, что Он пожелает. Его Престол объемлет небеса и землю, и сохранение их не утомляет Его. Он — Всевышний, Великий.',
      explanation:
        'Величайший аят Корана. Читается после каждого обязательного намаза, перед сном и с намерением защиты. Пророк ﷺ сообщил, что тот, кто читает Аятуль-Курси перед сном, остаётся под защитой Аллаха до утра.',
    },
    ar: {
      meaning:
        'الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم، له ما في السماوات وما في الأرض، من ذا الذي يشفع عنده إلا بإذنه، يعلم ما بين أيديهم وما خلفهم، ولا يحيطون بشيء من علمه إلا بما شاء، وسع كرسيه السماوات والأرض، ولا يؤوده حفظهما، وهو العلي العظيم.',
      explanation:
        'أعظم آية في القرآن. تُقرأ بعد كل صلاة فريضة وقبل النوم ونية الحماية. قال النبي ﷺ إن من قرأ آية الكرسي عند النوم لم يزل تحت حفظ الله حتى يصبح.',
    },
    kk: {
      meaning: 'Алладан басқа тәңір жоқ. Ол — Тірі, бәрін ұстап тұрушы.',
      explanation: 'Аятул-Күрси қорғаныс, тыныштық және сақтану ниетімен оқылады.',
    },
  },
  'korunma_002': {
    tr: {
      meaning:
        "De ki: Yarattığı şeylerin şerrinden, bastırdığı zaman karanlığın şerrinden, düğümlere üfleyenlerin şerrinden ve haset ettiği zaman hasetçinin şerrinden sabahın Rabbine sığınırım.",
      explanation:
        "Muavvizeteyn'in (Felak ve Nas) ilki olan bu sure, sabah-akşam 3'er kez okunur. Peygamber Efendimiz (s.a.v.) yatmadan önce Felak ve Nas'ı okuyup ellerine üfleyerek vücuduna sürmüştür. Nazar, korku ve görünmeyen şerlerden korunma niyetiyle okunur.",
    },
    en: {
      meaning:
        'Say: I seek refuge in the Lord of the daybreak, from the evil of what He has created, from the evil of darkness when it settles, from the evil of those who blow on knots, and from the evil of an envier when he envies.',
      explanation:
        'The first of the two protective surahs (Al-Mu\'awwidhatain). Recite it three times in the morning and three times in the evening. The Prophet ﷺ would recite Al-Falaq and An-Nas before sleeping, blow into his hands, and wipe them over his body. Recite with the intention of protection from the evil eye, fear, and unseen harm.',
    },
    ru: {
      meaning:
        'Скажи: Прибегаю к Господу рассвета от зла того, что Он сотворил, от зла мрака, когда он сгущается, от зла колдунов, дующих на узлы, и от зла завистника, когда он завидует.',
      explanation:
        'Первая из двух защитных сур (Муаввизатайн). Читается три раза утром и три раза вечером. Пророк ﷺ перед сном читал суры Аль-Фаляк и Ан-Нас, дул в ладони и проводил ими по телу. Читается с намерением защиты от сглаза, страха и невидимого вреда.',
    },
    ar: {
      meaning:
        'قل أعوذ برب الفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر النفاثات في العقد، ومن شر حاسد إذا حسد.',
      explanation:
        'أولى المعوذتين. تُقرأ ثلاث مرات صباحاً وثلاث مرات مساءً. كان النبي ﷺ يقرأ الفلق والناس قبل النوم وينفث في كفيه ويمسح بهما على جسده. تُقرأ بنية الحماية من العين والخوف والشرور الخفية.',
    },
    kk: {
      meaning: 'Таңның Раббысына барлық жамандықтан сиынамын.',
      explanation: 'Фәлақ сүресі таңертең және кешке қорғаныс ниетімен оқылады.',
    },
  },
  'korunma_003': {
    tr: {
      meaning:
        "De ki: İnsanların Rabbine, insanların Melikine, insanların İlahına sığınırım; insanların kalplerine vesvese veren, cinlerden ve insanlardan olan o sinsi vesvesecinin şerrinden.",
      explanation:
        "Muavvizeteyn'in ikincisi olan bu sure, Felak ile birlikte sabah-akşam 3'er kez okunur. Vesvese, şeytanın kışkırtması ve manevi zararlardan korunma niyetiyle okunur. Peygamber Efendimiz (s.a.v.) yatmadan önce bu sureleri okuyup ellerine üfleyerek vücuduna sürmüştür.",
    },
    en: {
      meaning:
        'Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer who whispers into the hearts of mankind — from among the jinn and mankind.',
      explanation:
        'The second of the two protective surahs (Al-Mu\'awwidhatain). Recite it three times in the morning and three times in the evening together with Al-Falaq. Recite with the intention of protection from whispers, Satan\'s provocation, and spiritual harm. The Prophet ﷺ would recite both surahs before sleeping, blow into his hands, and wipe them over his body.',
    },
    ru: {
      meaning:
        'Скажи: Прибегаю к Господу людей, Царю людей, Богу людей от зла наущающего уклоняющегося, который нашёптывает в сердца людей — из числа джиннов и людей.',
      explanation:
        'Вторая из двух защитных сур (Муаввизатайн). Читается три раза утром и три раза вечером вместе с сурой Аль-Фаляк. Читается с намерением защиты от наваждений, провокаций шайтана и духовного вреда. Пророк ﷺ перед сном читал обе суры, дул в ладони и проводил ими по телу.',
    },
    ar: {
      meaning:
        'قل أعوذ برب الناس، ملك الناس، إله الناس، من شر الوسواس الخناس، الذي يوسوس في صدور الناس، من الجنة والناس.',
      explanation:
        'ثانية المعوذتين. تُقرأ ثلاث مرات صباحاً وثلاث مرات مساءً مع سورة الفلق. تُقرأ بنية الحماية من الوسوسة وإغواء الشيطان والأذى المعنوي. كان النبي ﷺ يقرأ السورتين قبل النوم وينفث في كفيه ويمسح بهما على جسده.',
    },
    kk: {
      meaning: 'Адамдардың Раббысына, Патшасына және Илаһына сиынамын.',
      explanation: 'Нас сүресі уәсуәсадан және жасырын зияннан қорғану үшін оқылады.',
    },
  },
  'korunma_004': {
    tr: {
      meaning: "Allah'ın adıyla ki adıyla birlikte yerde ve gökte hiçbir şey zarar veremez.",
      explanation: "Sabah ve akşam 3'er kez okuyanda o gün zarar görmeme hakkında hadis rivayeti vardır.",
    },
    en: {
      meaning: 'In the name of Allah, with whose name nothing on earth or in the heavens can cause harm.',
      explanation: 'There is a hadith narration that whoever recites this three times in the morning and evening will not be harmed that day.',
    },
    ru: {
      meaning: 'С именем Аллаха, с которым ничто на земле и на небе не причинит вреда.',
      explanation: 'Есть хадис о том, что тот, кто читает это три раза утром и вечером, не пострадает в тот день.',
    },
    ar: {
      meaning: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء.',
      explanation: 'ورد في الحديث أن من قرأها ثلاث مرات صباحاً ومساءً لم يضره شيء ذلك اليوم.',
    },
    kk: {
      meaning: 'Алланың атымен, Оның есімімен жерде де, көкте де еш нәрсе зиян бере алмайды.',
      explanation: 'Таңертең және кешке үш рет оқуға қатысты хадис риуаяты бар.',
    },
  },
  'korunma_005': {
    tr: {
      meaning: "Allah'ın eksiksiz kelimeleriyle yarattığı her şeyin şerrinden O'na sığınırım.",
      explanation: 'Akşam 3 kez okunduğunda o gece zarar görmeyeceğine dair hadis rivayeti vardır.',
    },
    en: {
      meaning: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
      explanation: 'There is a hadith narration that whoever recites this three times in the evening will not be harmed that night.',
    },
    ru: {
      meaning: 'Я прибегаю к совершенным словам Аллаха от зла того, что Он создал.',
      explanation: 'Есть хадис о том, что тот, кто читает это три раза вечером, не пострадает той ночью.',
    },
    ar: {
      meaning: 'أعوذ بكلمات الله التامات من شر ما خلق.',
      explanation: 'ورد في الحديث أن من قرأها ثلاث مرات مساءً لم يضره شيء تلك الليلة.',
    },
    kk: {
      meaning: 'Алланың кемел сөздерімен Ол жаратқан нәрсенің жамандығынан сиынамын.',
      explanation: 'Кешке үш рет оқылса, сол түнде зиян тимейтіні туралы хадис бар.',
    },
  },
  'korunma_006': {
    tr: {
      meaning: 'Ey her şeyi koruyan ve muhafaza eden Allah.',
      explanation: 'Kişinin, ailesinin ve sevdiklerinin korunması niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Guardian, who protects and preserves all things.',
      explanation: 'May be recited with the intention of protection for oneself, one\'s family, and loved ones.',
    },
    ru: {
      meaning: 'О Аллах, Хранитель, который охраняет и оберегает всё.',
      explanation: 'Можно читать с намерением защиты себя, семьи и близких.',
    },
    ar: {
      meaning: 'يا الله الحافظ، الذي يحفظ ويصون كل شيء.',
      explanation: 'يُقرأ بنية حماية النفس والأسرة والأحباب.',
    },
    kk: {
      meaning: 'Барлық нәрсені қорғаушы әрі сақтаушы Алла.',
      explanation: 'Өзіңді, отбасыңды және жақындарыңды қорғау ниетімен оқылады.',
    },
  },
  'korunma_007': {
    tr: {
      meaning: 'Bunu bizim için boyun eğdireni tenzih ederiz. Biz elbette Rabbimize döneceğiz.',
      explanation: 'Taşıta binerken okunması sünnet olan ayet. Güvenli yolculuk niyetiyle okunur.',
    },
    en: {
      meaning: 'Glory be to Him who has subjected this to us, and to our Lord we shall surely return.',
      explanation: 'A verse recommended when boarding a vehicle, recited with the intention of a safe journey.',
    },
    ru: {
      meaning: 'Пречист Тот, кто подчинил нам это, и мы непременно вернёмся к нашему Господу.',
      explanation: 'Аят, рекомендуемый при посадке в транспорт, читается с намерением безопасного пути.',
    },
    ar: {
      meaning: 'سبحان الذي سخر لنا هذا وإنا إلى ربنا لمنقلبون.',
      explanation: 'آية يُستحب قراءتها عند ركوب وسيلة النقل، بنية السفر الآمن.',
    },
    kk: {
      meaning: 'Мұны бізге бойсұндырған Алла пәк. Біз Раббымызға міндетті түрде қайтамыз.',
      explanation: 'Көлікке мінгенде оқылатын аят; сапар қауіпсіздігі ниетімен оқылады.',
    },
  },
  'salavat_001': {
    tr: {
      meaning: "Allah'ım, Efendimiz Muhammed'e salât eyle.",
      explanation: 'Peygamber Efendimize salavat getirme niyetiyle okunur.',
    },
    en: {
      meaning: 'O Allah, send blessings upon our Master Muhammad.',
      explanation: 'Recited with the intention of sending blessings upon the Prophet (peace be upon him).',
    },
    ru: {
      meaning: 'О Аллах, благослови нашего Господина Мухаммада.',
      explanation: 'Читается с намерением отправить благословения Пророку (мир ему).',
    },
    ar: {
      meaning: 'اللهم صل على محمد.',
      explanation: 'يُقرأ بنية الصلاة على النبي صلى الله عليه وسلم.',
    },
    kk: {
      meaning: 'Аллаһым, Пайғамбарымыз Мұхаммедке салауат ет.',
      explanation: 'Пайғамбарға салауат айту ниетімен оқылады.',
    },
  },
  'salavat_002': {
    tr: {
      meaning: "Allah'ım, Efendimiz Muhammed'e ve onun âline salât eyle.",
      explanation: 'Günlük salavat takibi için temel salavat metnidir.',
    },
    en: {
      meaning: 'O Allah, send blessings upon our Master Muhammad and upon his family.',
      explanation: 'The foundational salawat text for daily remembrance of the Prophet.',
    },
    ru: {
      meaning: 'О Аллах, благослови нашего Господина Мухаммада и его семью.',
      explanation: 'Основной текст салавата для ежедневного поминания Пророка.',
    },
    ar: {
      meaning: 'اللهم صل على سيدنا محمد وعلى آل سيدنا محمد.',
      explanation: 'متن الصلاة الأساسي للمتابعة اليومية على النبي.',
    },
    kk: {
      meaning: 'Аллаһым, Пайғамбарымыз Мұхаммедке және оның әулетіне салауат ет.',
      explanation: 'Күнделікті салауат үшін негізгі мәтін.',
    },
  },
  'salavat_003': {
    tr: {
      meaning: "Allah'ım! İbrahim'e ve âline salât ettiğin gibi Muhammed'e ve âline de salât et.",
      explanation: 'Namazda okunan Salavat-ı İbrahimiyye, en faziletli salavat metinlerinden biridir.',
    },
    en: {
      meaning: 'O Allah! Send blessings upon Muhammad and his family as You sent blessings upon Ibrahim and his family.',
      explanation: 'The Ibrahimi Salawat recited in prayer, among the most virtuous forms of salawat.',
    },
    ru: {
      meaning: 'О Аллах! Благослови Мухаммада и его семью так, как Ты благословил Ибрахима и его семью.',
      explanation: 'Ибрагимийский салават, читаемый в намазе, — один из самых благодатных текстов салавата.',
    },
    ar: {
      meaning: 'اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم وعلى آل إبراهيم.',
      explanation: 'الصلاة الإبراهيمية التي تُقرأ في الصلاة، من أفضل صيغ الصلاة على النبي.',
    },
    kk: {
      meaning: 'Аллаһым, Ибраһимге және әулетіне салауат еткеніңдей, Мұхаммедке және әулетіне де салауат ет.',
      explanation: 'Намазда оқылатын Ибраһимия салауатының мәтіні.',
    },
  },
  'salavat_004': {
    tr: {
      meaning: "Allah'ım! Ümmi Peygamber Muhammed'e, âline ve ashabına salât ve selam eyle.",
      explanation: 'Cuma günleri çokça okunması tavsiye edilen salavat metnidir.',
    },
    en: {
      meaning: 'O Allah! Send blessings and peace upon the unlettered Prophet Muhammad, his family, and his companions.',
      explanation: 'A salawat text recommended to be recited abundantly on Fridays.',
    },
    ru: {
      meaning: 'О Аллах! Благослови и приветствуй неграмотного пророка Мухаммада, его семью и сподвижников.',
      explanation: 'Текст салавата, рекомендуемый к обильному чтению по пятницам.',
    },
    ar: {
      meaning: 'اللهم صل على محمد النبي الأمي وعلى آله وصحبه وسلم.',
      explanation: 'صيغة صلاة يُستحب كثرة قراءتها يوم الجمعة.',
    },
    kk: {
      meaning: 'Аллаһым, үмми пайғамбар Мұхаммедке, оның әулетіне және сахабаларына салауат пен сәлем бер.',
      explanation: 'Жұма күні көбірек оқу ұсынылатын салауат.',
    },
  },
  'salavat_005': {
    tr: {
      meaning: "Allah'ın salâtı ve selamı onun üzerine olsun.",
      explanation: 'Peygamber adı anıldıkça okunması tavsiye edilen kısa salavat formu.',
    },
    en: {
      meaning: 'May the blessings and peace of Allah be upon him.',
      explanation: 'The short form of salawat recommended whenever the Prophet\'s name is mentioned.',
    },
    ru: {
      meaning: 'Благословение Аллаха и мир ему.',
      explanation: 'Краткая форма салавата, рекомендуемая при каждом упоминании имени Пророка.',
    },
    ar: {
      meaning: 'صلى الله عليه وسلم.',
      explanation: 'صيغة صلاة مختصرة يُستحب قراءتها عند ذكر اسم النبي.',
    },
    kk: {
      meaning: 'Алланың салауаты мен сәлемі оған болсын.',
      explanation: 'Пайғамбар есімі аталғанда айтылатын қысқа салауат нұсқасы.',
    },
  },
  'salavat_006': {
    tr: {
      meaning: "Allah'ım! Efendimiz Muhammed'e, bizi tüm korku ve belalardan kurtaracak bir salât eyle.",
      explanation: 'Tüncina salavâtı olarak bilinen bu metin, bela ve sıkıntılardan korunma niyetiyle okunur.',
    },
    en: {
      meaning: 'O Allah! Send blessings upon our Master Muhammad — a blessing through which You deliver us from all fears and calamities.',
      explanation: 'Known as Salawat al-Tunjina, this text is recited with the intention of protection from trials and hardships.',
    },
    ru: {
      meaning: 'О Аллах! Благослови нашего Господина Мухаммада — благословением, которым Ты избавишь нас от всех страхов и бед.',
      explanation: 'Известный как Салават Тунджина, этот текст читается с намерением защиты от испытаний и трудностей.',
    },
    ar: {
      meaning: 'اللهم صل على سيدنا محمد صلاة تنجينا بها من جميع الأهوال والآفات.',
      explanation: 'معروف بصلاة التنجينا، يُقرأ بنية الحماية من البلاء والآفات.',
    },
    kk: {
      meaning: 'Аллаһым, Пайғамбарымыз Мұхаммедке барлық қорқыныш пен бәледен құтқаратын салауат түсір.',
      explanation: 'Түнжина салауаты ретінде белгілі; қиындықтан қорғану ниетімен оқылады.',
    },
  },
  'iliski_001': {
    tr: {
      meaning: 'Ey çok seven ve sevgi kaynağı olan Allah.',
      explanation: 'Kalpte sevgi, muhabbet, aile huzuru ve hayırlı ilişki niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Most Loving, the Source of love who loves abundantly.',
      explanation: 'May be recited with the intention of love in the heart, affection, family harmony, and righteous relationships.',
    },
    ru: {
      meaning: 'О Аллах, Любящий, источник любви, который любит обильно.',
      explanation: 'Можно читать с намерением любви в сердце, привязанности, семейного мира и благих отношений.',
    },
    ar: {
      meaning: 'يا الله الودود، مصدر المحبة الذي يحب بكثرة.',
      explanation: 'يُقرأ بنية المحبة في القلب والمودة وطمأنينة الأسرة والعلاقات الطيبة.',
    },
    kk: {
      meaning: 'Көп сүйетін және сүйіспеншілік қайнары болған Алла.',
      explanation: 'Жүрекке мейірім, отбасына татулық тілеу үшін оқылады.',
    },
  },
  'iliski_002': {
    tr: {
      meaning: 'Ey dilediğini bir araya getiren Allah.',
      explanation: 'Hayırlı kavuşma, aile birliği ve gönül huzuru niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Gatherer, who brings together whom He wills.',
      explanation: 'May be recited with the intention of a blessed reunion, family unity, and peace of heart.',
    },
    ru: {
      meaning: 'О Аллах, Собирающий, который сводит вместе кого пожелает.',
      explanation: 'Можно читать с намерением благого воссоединения, семейного единства и покоя сердца.',
    },
    ar: {
      meaning: 'يا الله الجامع، الذي يجمع من يشاء.',
      explanation: 'يُقرأ بنية اللقاء الطيب ووحدة الأسرة وطمأنينة القلب.',
    },
    kk: {
      meaning: 'Қалаған құлдарын қауыштырушы Алла.',
      explanation: 'Жақсылыққа қауышу және отбасы бірлігі ниетімен оқылады.',
    },
  },
  'iliski_003': {
    tr: {
      meaning: 'Ey kullarına lütufla ve incelikle muamele eden Allah.',
      explanation: 'Zorlaşan ilişkilerde kalp yumuşaklığı, anlayış ve hayırlı çözüm niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Subtle, who treats His servants with kindness and gentleness.',
      explanation: 'May be recited in strained relationships with the intention of softening hearts, understanding, and a good resolution.',
    },
    ru: {
      meaning: 'О Аллах, Тонкий, который обращается со Своими рабами с добротой и мягкостью.',
      explanation: 'Можно читать в напряжённых отношениях с намерением смягчения сердец, понимания и благого решения.',
    },
    ar: {
      meaning: 'يا الله اللطيف، الذي يتعامل مع عباده بلطف ورقة.',
      explanation: 'يُقرأ في العلاقات المشددة بنية تليين القلوب والفهم والحل الطيب.',
    },
    kk: {
      meaning: 'Құлдарына лүпіл мен нәзіктікпен мәміле етуші Алла.',
      explanation: 'Қиын қарым-қатынаста түсіністік пен жұмсақтық үшін оқылады.',
    },
  },
  'iliski_004': {
    tr: {
      meaning: 'Rabbimiz! Bize gözlerimizin nuru olacak eşler ve nesiller bağışla. Bizi takva sahiplerine önder kıl.',
      explanation: "Furkan Suresi'nden alınan bu dua, aile huzuru ve hayırlı nesil niyetiyle okunur.",
    },
    en: {
      meaning: 'Our Lord! Grant us from our spouses and offspring the comfort of our eyes, and make us leaders for the righteous.',
      explanation: 'This supplication from Surah Al-Furqan is recited with the intention of family harmony and righteous offspring.',
    },
    ru: {
      meaning: 'Господь наш! Даруй нам от наших супругов и потомков радость для глаз и сделай нас образцом для богобоязненных.',
      explanation: 'Эта молитва из суры Аль-Фуркан читается с намерением семейного мира и благочестивого потомства.',
    },
    ar: {
      meaning: 'ربنا هب لنا من أزواجنا وذرياتنا قرة أعين واجعلنا للمتقين إماماً.',
      explanation: 'دعاء من سورة الفرقان يُقرأ بنية السعادة الزوجية والذرية الصالحة.',
    },
    kk: {
      meaning: 'Раббымыз, жұбайларымыздан және ұрпағымыздан көз қуанышын нәсіп ет, бізді тақуаларға үлгі қыл.',
      explanation: 'Бұл дұға отбасы тыныштығы және игі ұрпақ ниетімен оқылады.',
    },
  },
  'iliski_005': {
    tr: {
      meaning: "Allah'ım! Kalplerimizi birbirine yaklaştır ve aramızdaki ilişkiyi düzelt.",
      explanation: 'İlişkilerde uyum, kalp birliği ve barışma niyetiyle okunabilecek bir dua.',
    },
    en: {
      meaning: 'O Allah! Bring our hearts together and set right our relations with one another.',
      explanation: 'A supplication that may be recited with the intention of harmony, unity of hearts, and reconciliation.',
    },
    ru: {
      meaning: 'О Аллах! Сблизь наши сердца и исправь отношения между нами.',
      explanation: 'Молитва, которую можно читать с намерением согласия, единства сердец и примирения.',
    },
    ar: {
      meaning: 'اللهم ألف بين قلوبنا وأصلح ذات بيننا.',
      explanation: 'دعاء يُقرأ بنية الانسجام ووحدة القلوب والصلح.',
    },
    kk: {
      meaning: 'Аллаһым, жүректерімізді жарастыр және арамызды түзет.',
      explanation: 'Татулық пен татуласу ниетімен оқылады.',
    },
  },
  'iliski_006': {
    tr: {
      meaning: "Allah'ım! Beni ve bana zulmedeni bağışla. Bana ve beni saptırana hidayet ver.",
      explanation: 'Affetmekte zorluk çekilen durumlarda, gönül genişliği ve huzur için okunabilir.',
    },
    en: {
      meaning: 'O Allah! Forgive me and those who wrong me. Guide me and those who lead me astray.',
      explanation: 'May be recited when forgiveness is difficult, for generosity of heart and inner peace.',
    },
    ru: {
      meaning: 'О Аллах! Прости меня и тех, кто поступил со мной несправедливо. Направь меня и тех, кто ввёл меня в заблуждение.',
      explanation: 'Можно читать, когда трудно простить, для широты сердца и внутреннего покоя.',
    },
    ar: {
      meaning: 'اللهم اغفر لي ولمن ظلمني واهدني واهد من أضلني.',
      explanation: 'يُقرأ عند صعوبة العفو، لسعة الصدر والطمأنينة.',
    },
    kk: {
      meaning: 'Аллаһым, мені және маған зұлымдық жасағанды кешір, мені де, адасқанды да туралыққа бастай гөр.',
      explanation: 'Кешіру қиын кезде жүрек кеңдігі үшін оқылады.',
    },
  },
  'iliski_007': {
    tr: {
      meaning: 'Rabbim! Doğrusu bana indireceğin her hayra muhtacım.',
      explanation: "Hz. Musa'nın söylediği bu dua, hayırlı eş ve kavuşma niyetiyle okunabilir.",
    },
    en: {
      meaning: 'My Lord! I am truly in need of whatever good You send down to me.',
      explanation: 'This supplication of Prophet Musa (peace be upon him) may be recited with the intention of a righteous spouse and blessed union.',
    },
    ru: {
      meaning: 'Господи! Поистине, я нуждаюсь в любом благе, которое Ты ниспошлёшь мне.',
      explanation: 'Молитва пророка Мусы (мир ему), которую можно читать с намерением праведного супруга и благого соединения.',
    },
    ar: {
      meaning: 'رب إني لما أنزلت إلي من خير فقير.',
      explanation: 'دعاء النبي موسى (عليه السلام) يُقرأ بنية الزوج الصالح واللقاء الطيب.',
    },
    kk: {
      meaning: 'Раббым, Сен түсіретін әрбір жақсылыққа мен мұқтажбын.',
      explanation: 'Бұл — Мұса пайғамбардың дұғасы; игі жар және игі қауышу ниетімен оқылады.',
    },
  },
  'ev_is_001': {
    tr: {
      meaning: 'Ey hayırlı kapıları açan Allah.',
      explanation: 'Ev, iş, proje, yeni başlangıç ve hayırlı fırsatlar niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Opener, who opens good doors.',
      explanation: 'May be recited with the intention of home, work, projects, new beginnings, and good opportunities.',
    },
    ru: {
      meaning: 'О Аллах, Открывающий, который открывает благие двери.',
      explanation: 'Можно читать с намерением дома, работы, проектов, новых начал и благих возможностей.',
    },
    ar: {
      meaning: 'يا الله الفتاح، الذي يفتح الأبواب الطيبة.',
      explanation: 'يُقرأ بنية البيت والعمل والمشاريع والبدايات الجديدة والفرص الطيبة.',
    },
    kk: {
      meaning: 'Қайырлы есіктерді ашушы Алла.',
      explanation: 'Үй, жұмыс және жаңа мүмкіндік ниетімен оқылады.',
    },
  },
  'ev_is_002': {
    tr: {
      meaning: 'Ey cömert ve ikram sahibi Allah.',
      explanation: "Allah'ın ikramını, hayırlı fırsatları ve kolaylıkları isteme niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the Generous, the Lord of honor and grace.',
      explanation: 'May be recited with the intention of seeking Allah\'s generosity, good opportunities, and ease.',
    },
    ru: {
      meaning: 'О Аллах, Щедрый, обладающий великодушием и благородством.',
      explanation: 'Можно читать с намерением просить щедрости Аллаха, благих возможностей и облегчения.',
    },
    ar: {
      meaning: 'يا الله الكريم، صاحب الجود والإكرام.',
      explanation: 'يُقرأ بنية طلب إكرام الله والفرص الطيبة والتيسير.',
    },
    kk: {
      meaning: 'Жомарт әрі икрам иесі Алла.',
      explanation: 'Жақсы мүмкіндік пен жеңілдік сұрау ниетімен оқылады.',
    },
  },
  'ev_is_003': {
    tr: {
      meaning: "Allah'ım! Hayırları yapmayı ve kötülüklerden uzak durmayı senden dilerim.",
      explanation: 'İş hayatında bereket ve dürüstlük niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah! I ask You to enable me to do good deeds and to avoid what is forbidden.',
      explanation: 'May be recited with the intention of blessing and integrity in one\'s work life.',
    },
    ru: {
      meaning: 'О Аллах! Я прошу Тебя даровать мне совершать добро и держаться подальше от запретного.',
      explanation: 'Можно читать с намерением благодати и честности в трудовой жизни.',
    },
    ar: {
      meaning: 'اللهم إني أسألك فعل الخيرات وترك المنكرات.',
      explanation: 'يُقرأ بنية البركة والأمانة في العمل.',
    },
    kk: {
      meaning: 'Аллаһым, жақсылық істеуді және жамандықтан тыйылуды Сенен сұраймын.',
      explanation: 'Жұмыста адалдық пен береке ниетімен оқылады.',
    },
  },
  'ev_is_004': {
    tr: {
      meaning: "Allah'ım! Girişin ve çıkışın hayrını senden dilerim.",
      explanation: 'Eve girerken okunması sünnet olan dua. Ev bereketi ve huzuru niyetiyle okunur.',
    },
    en: {
      meaning: 'O Allah! I ask You for the goodness of entering and leaving.',
      explanation: 'A supplication recommended when entering the home, recited with the intention of blessing and peace in the household.',
    },
    ru: {
      meaning: 'О Аллах! Я прошу у Тебя блага входа и выхода.',
      explanation: 'Молитва, рекомендуемая при входе в дом, читается с намерением благодати и покоя в доме.',
    },
    ar: {
      meaning: 'اللهم إني أسألك خير المولج وخير المخرج.',
      explanation: 'دعاء يُستحب عند دخول البيت، يُقرأ بنية بركة البيت وطمأنينته.',
    },
    kk: {
      meaning: 'Аллаһым, кіруімнің де, шығуымның да қайырын Сенен сұраймын.',
      explanation: 'Үйге кіргенде береке мен тыныштық ниетімен оқылады.',
    },
  },
  'ev_is_005': {
    tr: {
      meaning: 'Rabbim! Beni doğruluk girişiyle girdir, doğruluk çıkışıyla çıkar. Katından bana yardımcı bir güç ver.',
      explanation: "Yeni bir projeye, işe veya mekâna girerken okunabilecek İsra Suresi'nden bir dua.",
    },
    en: {
      meaning: 'My Lord! Cause me to enter with truth and exit with truth, and grant me from Yourself a supporting authority.',
      explanation: 'A supplication from Surah Al-Isra that may be recited when entering a new project, job, or place.',
    },
    ru: {
      meaning: 'Господи! Введи меня правдивым входом и выведи правдивым выходом, и даруй мне от Себя поддерживающую силу.',
      explanation: 'Молитва из суры Аль-Исра, которую можно читать при начале нового проекта, работы или места.',
    },
    ar: {
      meaning: 'رب أدخلني مدخل صدق وأخرجني مخرج صدق واجعل لي من لدنك سلطاناً نصيراً.',
      explanation: 'دعاء من سورة الإسراء يُقرأ عند بدء مشروع أو عمل أو مكان جديد.',
    },
    kk: {
      meaning: 'Раббым, мені шындықпен кіргіз, шындықпен шығар және Өзіңнен жәрдем бер.',
      explanation: 'Жаңа іс бастарда тұрақтылық пен жәрдем сұрау үшін оқылады.',
    },
  },
  'ev_is_006': {
    tr: {
      meaning: 'Rabbim! Göğsümü aç ve işimi kolaylaştır.',
      explanation: "Hz. Musa'nın duasından alınan bu kısım, iş güçlükleri ve yeni adımlar için okunabilir.",
    },
    en: {
      meaning: 'My Lord! Expand my chest and ease my task for me.',
      explanation: 'This portion from the supplication of Prophet Musa (peace be upon him) may be recited for work difficulties and new steps.',
    },
    ru: {
      meaning: 'Господи! Расширь мою грудь и облегчи моё дело.',
      explanation: 'Эта часть молитвы пророка Мусы (мир ему) может читаться при трудностях в работе и новых шагах.',
    },
    ar: {
      meaning: 'رب اشرح لي صدري ويسر لي أمري.',
      explanation: 'من دعاء النبي موسى (عليه السلام) يُقرأ لصعوبات العمل والخطوات الجديدة.',
    },
    kk: {
      meaning: 'Раббым, кеудемді кеңейт және ісімді жеңілдет.',
      explanation: 'Жұмыстағы қиындық пен жаңа қадам алдында оқылады.',
    },
  },
  'ev_is_007': {
    tr: {
      meaning: 'Ey işleri kolaylaştıran Allah! İşlerimizi bize kolaylaştır.',
      explanation: 'İş, başvuru veya zorlu bir süreçte kolaylık niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Facilitator! Make our affairs easy for us.',
      explanation: 'May be recited with the intention of ease during work, applications, or a difficult process.',
    },
    ru: {
      meaning: 'О Аллах, Облегчающий! Облегчи наши дела.',
      explanation: 'Можно читать с намерением облегчения в работе, заявках или трудном процессе.',
    },
    ar: {
      meaning: 'يا الله الميسر! يسر علينا أمورنا.',
      explanation: 'يُقرأ بنية التيسير في العمل أو التقديم أو المراحل الصعبة.',
    },
    kk: {
      meaning: 'Істерді жеңілдетуші Алла, істерімізді жеңіл ет.',
      explanation: 'Қиын процесс, жұмыс немесе өтініш кезінде жеңілдік үшін оқылады.',
    },
  },
};
