import { Language } from '@/types';

export type DhikrI18nEntry = { meaning: string; explanation: string };

export const DHIKR_I18N: Record<string, Record<Language, DhikrI18nEntry>> = {
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
  'esma_001': {
    tr: {
      meaning: 'Ey dünyada bütün varlıklara merhamet eden Allah.',
      explanation: "Allah'ın rahmetini, merhametini ve lütfunu isteme niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the Most Merciful, who shows mercy to all creation in this world.',
      explanation: 'May be recited with the intention of seeking Allah\'s mercy, compassion, and grace.',
    },
    ru: {
      meaning: 'О Аллах, Милостивый, проявляющий милость ко всему творению в этом мире.',
      explanation: 'Можно читать с намерением просить милости, сострадания и благодати Аллаха.',
    },
    ar: {
      meaning: 'يا الله الرحمن، الذي يرحم جميع المخلوقات في الدنيا.',
      explanation: 'يُقرأ بنية طلب رحمة الله ورحمته ولطفه.',
    },
    kk: {
      meaning: 'Бұл дүниеде барлық жаратылысқа мейірім етуші Алла.',
      explanation: 'Алланың рақымы мен мейірімін тілеу ниетімен оқылады.',
    },
  },
  'esma_002': {
    tr: {
      meaning: 'Ey sonsuz merhamet sahibi Allah.',
      explanation: 'Kalbin yumuşaması, merhamet ve manevi yakınlık niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Especially Merciful, possessor of infinite mercy.',
      explanation: 'May be recited with the intention of softening the heart, mercy, and spiritual closeness to Allah.',
    },
    ru: {
      meaning: 'О Аллах, Милосердный, обладающий безграничной милостью.',
      explanation: 'Можно читать с намерением смягчения сердца, милости и духовной близости к Аллаху.',
    },
    ar: {
      meaning: 'يا الله الرحيم، صاحب الرحمة اللامحدودة.',
      explanation: 'يُقرأ بنية تليين القلب والرحمة والقرب المعنوي من الله.',
    },
    kk: {
      meaning: 'Шексіз мейірім иесі Алла.',
      explanation: 'Жүректі жұмсарту және рухани жақындық үшін оқылады.',
    },
  },
  'esma_003': {
    tr: {
      meaning: 'Ey her şeyin hakiki sahibi ve hükümdarı olan Allah.',
      explanation: 'Mülk, hâkimiyet ve dünyevi işlerin çözümü niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Sovereign, the true Owner and Ruler of all things.',
      explanation: 'May be recited with the intention of seeking dominion, authority, and resolution of worldly affairs.',
    },
    ru: {
      meaning: 'О Аллах, Царь, истинный Владелец и Правитель всего сущего.',
      explanation: 'Можно читать с намерением просить власти, управления и решения мирских дел.',
    },
    ar: {
      meaning: 'يا الله الملك، المالك الحق والحاكم على كل شيء.',
      explanation: 'يُقرأ بنية طلب الملك والحكم وتيسير الأمور الدنيوية.',
    },
    kk: {
      meaning: 'Барлық нәрсенің шынайы иесі әрі билеушісі Алла.',
      explanation: 'Істердің түзелуі мен дұрыс басқарылуы ниетімен оқылады.',
    },
  },
  'esma_004': {
    tr: {
      meaning: 'Ey her türlü eksiklikten münezzeh olan Allah.',
      explanation: 'Kalp temizliği, günahlardan arınma ve manevi yücelme niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Holy, who is free from every imperfection.',
      explanation: 'May be recited with the intention of purity of heart, cleansing from sins, and spiritual elevation.',
    },
    ru: {
      meaning: 'О Аллах, Святой, который пречист от всякого недостатка.',
      explanation: 'Можно читать с намерением чистоты сердца, очищения от грехов и духовного возвышения.',
    },
    ar: {
      meaning: 'يا الله القدوس، المنزه عن كل نقص.',
      explanation: 'يُقرأ بنية طهارة القلب والتطهر من الذنوب والسمو المعنوي.',
    },
    kk: {
      meaning: 'Барлық кемшіліктен пәк Алла.',
      explanation: 'Жүрек тазалығы мен күнәдан арылу ниетімен оқылады.',
    },
  },
  'esma_005': {
    tr: {
      meaning: 'Ey mutlak güç ve izzet sahibi, yenilmez Allah.',
      explanation: 'Güç, onur, saygınlık ve zorluklara karşı direnç niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Almighty, possessor of absolute power and honor, the Invincible.',
      explanation: 'May be recited with the intention of strength, dignity, honor, and resilience against hardships.',
    },
    ru: {
      meaning: 'О Аллах, Могущественный, обладающий абсолютной силой и достоинством, непобедимый.',
      explanation: 'Можно читать с намерением силы, достоинства, чести и стойкости перед трудностями.',
    },
    ar: {
      meaning: 'يا الله العزيز، صاحب القوة والعزة المطلقة، الذي لا يُقهر.',
      explanation: 'يُقرأ بنية القوة والكرامة والصمود أمام الصعاب.',
    },
    kk: {
      meaning: 'Абсолютті күш пен ұлықтық иесі, жеңілмес Алла.',
      explanation: 'Қуат, абырой және табандылық ниетімен оқылады.',
    },
  },
  'esma_006': {
    tr: {
      meaning: 'Ey her şeyi kendi iradesine boyun eğdiren, kırıkları onaran Allah.',
      explanation: 'Kırılan kalplerin onarılması ve haksızlıklara karşı sığınma niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Compeller, who subdues all to His will and mends the broken.',
      explanation: 'May be recited with the intention of healing broken hearts and seeking refuge from injustice.',
    },
    ru: {
      meaning: 'О Аллах, Покоряющий, который подчиняет всё Своей воле и исцеляет сломанных.',
      explanation: 'Можно читать с намерением исцеления разбитых сердец и прибегания к Аллаху от несправедливости.',
    },
    ar: {
      meaning: 'يا الله الجبار، الذي يقهر كل شيء بإرادته ويجبر الكسور.',
      explanation: 'يُقرأ بنية إصلاح القلوب المكسورة والاستعاذة من الظلم.',
    },
    kk: {
      meaning: 'Барлық нәрсені Өз еркіне бағындыратын, сынған көңілді жөндейтін Алла.',
      explanation: 'Жаралы жүрекке медет және әділет тілеу үшін оқылады.',
    },
  },
  'esma_007': {
    tr: {
      meaning: 'Ey her şeyi yoktan var eden Allah.',
      explanation: 'Yaratılışı tefekkür, yeni başlangıçlar ve şükür niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the Creator, who brings all things into being from nothing.',
      explanation: 'May be recited with the intention of reflecting on creation, new beginnings, and gratitude.',
    },
    ru: {
      meaning: 'О Аллах, Творец, который создаёт всё из ничего.',
      explanation: 'Можно читать с намерением размышления о творении, новых началах и благодарности.',
    },
    ar: {
      meaning: 'يا الله الخالق، الذي يخلق كل شيء من العدم.',
      explanation: 'يُقرأ بنية التفكر في الخلق والبدايات الجديدة والشكر.',
    },
    kk: {
      meaning: 'Барлық нәрсені жоқтан жаратушы Алла.',
      explanation: 'Жаңа бастау және шүкір ниетімен оқылады.',
    },
  },
  'esma_008': {
    tr: {
      meaning: 'Ey her şeyi en ince ayrıntısına kadar bilen Allah.',
      explanation: 'İlim, anlayış ve doğru karar verme niyetiyle okunabilir.',
    },
    en: {
      meaning: 'O Allah, the All-Knowing, who knows everything down to its finest detail.',
      explanation: 'May be recited with the intention of seeking knowledge, understanding, and wise decision-making.',
    },
    ru: {
      meaning: 'О Аллах, Всезнающий, который знает всё до мельчайших деталей.',
      explanation: 'Можно читать с намерением просить знания, понимания и мудрых решений.',
    },
    ar: {
      meaning: 'يا الله العليم، الذي يعلم كل شيء إلى أدق تفاصيله.',
      explanation: 'يُقرأ بنية طلب العلم والفهم واتخاذ القرار الصحيح.',
    },
    kk: {
      meaning: 'Барлық нәрсені толық білуші Алла.',
      explanation: 'Ілім мен түсінік сұрау ниетімен оқылады.',
    },
  },
  'esma_009': {
    tr: {
      meaning: 'Ey her şeye gücü yeten, sonsuz kudret sahibi Allah.',
      explanation: "Güçsüzlük hissinde, imkânsız görünen işler için Allah'a sığınma niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the All-Powerful, who has power over all things and possesses infinite might.',
      explanation: 'May be recited when feeling powerless, seeking refuge in Allah for matters that seem impossible.',
    },
    ru: {
      meaning: 'О Аллах, Всемогущий, который способен на всё и обладает безграничной силой.',
      explanation: 'Можно читать в чувстве беспомощности, прибегая к Аллаху в делах, кажущихся невозможными.',
    },
    ar: {
      meaning: 'يا الله القادر، الذي يقدر على كل شيء وله القدرة اللامحدودة.',
      explanation: 'يُقرأ عند الشعور بالعجز، بالاستعاذة بالله في الأمور التي تبدو مستحيلة.',
    },
    kk: {
      meaning: 'Барлық нәрсеге күші жететін, шексіз құдірет иесі Алла.',
      explanation: 'Әлсіздік сәтінде Алладан медет сұрау үшін оқылады.',
    },
  },
  'esma_010': {
    tr: {
      meaning: 'Ey her şeyi işiten Allah.',
      explanation: "Duaların kabul olması, derdini Allah'a açma ve yakarış niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the All-Hearing, who hears everything.',
      explanation: 'May be recited with the intention of having prayers accepted, opening one\'s heart to Allah, and supplication.',
    },
    ru: {
      meaning: 'О Аллах, Всеслышащий, который слышит всё.',
      explanation: 'Можно читать с намерением принятия молитв, открытия сердца Аллаху и усердной просьбы.',
    },
    ar: {
      meaning: 'يا الله السميع، الذي يسمع كل شيء.',
      explanation: 'يُقرأ بنية قبول الدعاء وفتح القلب لله والتضرع.',
    },
    kk: {
      meaning: 'Барлық нәрсені естуші Алла.',
      explanation: 'Дұғаның қабыл болуы және Аллаға жалбарыну ниетімен оқылады.',
    },
  },
  'esma_011': {
    tr: {
      meaning: 'Ey her şeyi gören Allah.',
      explanation: "Allah'ın her şeyi gördüğünü hatırlama, ihlâs ve samimilik niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the All-Seeing, who sees everything.',
      explanation: 'May be recited with the intention of remembering that Allah sees all things, sincerity, and devotion.',
    },
    ru: {
      meaning: 'О Аллах, Всевидящий, который видит всё.',
      explanation: 'Можно читать с намерением помнить, что Аллах видит всё, искренности и преданности.',
    },
    ar: {
      meaning: 'يا الله البصير، الذي يرى كل شيء.',
      explanation: 'يُقرأ بنية تذكر أن الله يرى كل شيء والإخلاص والصدق.',
    },
    kk: {
      meaning: 'Барлық нәрсені көруші Алла.',
      explanation: 'Ықылас пен шынайылықты күшейту үшін оқылады.',
    },
  },
  'esma_012': {
    tr: {
      meaning: 'Ey tevbeleri çokça kabul eden Allah.',
      explanation: "Tövbe, pişmanlık ve Allah'a dönüş niyetiyle okunabilir.",
    },
    en: {
      meaning: 'O Allah, the Accepter of Repentance, who accepts repentance again and again.',
      explanation: 'May be recited with the intention of repentance, remorse, and returning to Allah.',
    },
    ru: {
      meaning: 'О Аллах, Принимающий покаяние, который принимает покаяние снова и снова.',
      explanation: 'Можно читать с намерением покаяния, раскаяния и возвращения к Аллаху.',
    },
    ar: {
      meaning: 'يا الله التواب، الذي يقبل التوبة مراراً.',
      explanation: 'يُقرأ بنية التوبة والندم والرجوع إلى الله.',
    },
    kk: {
      meaning: 'Тәубені қайта-қайта қабыл етуші Алла.',
      explanation: 'Тәубе мен Аллаға қайта оралу ниетімен оқылады.',
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
