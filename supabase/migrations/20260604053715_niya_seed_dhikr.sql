/*
  # NIYA App - Seed Dhikr Content

  Seeds the dhikr table with a comprehensive collection of dhikr and duas
  organized by category for the NIYA spiritual companion app.
  
  Categories covered:
  - rizq (Rizq & Abundance)
  - healing (Healing)
  - peace (Peace & Serenity)
  - protection (Protection)
  - salawat (Salawat)
  - asma-ul-husna (Asma Ul Husna)
  - relationships (Relationships & Marriage)
  - opportunities (Home, Work & New Opportunities)
*/

INSERT INTO dhikr (title, arabic_text, transliteration, meaning, explanation, target_count, category, premium, sort_order) VALUES

-- RIZQ & ABUNDANCE
('Hasbiyallah', 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ', 'Hasbiyallahu la ilaha illa huwa alayhi tawakkaltu wa huwa rabbul arshil azim', 'Allah is sufficient for me. There is no god but Him. I put my trust in Him. He is the Lord of the Mighty Throne.', 'Recited 7 times morning and evening for complete protection and sufficiency. A powerful dhikr for tawakkul and reliance on Allah.', 7, 'rizq', false, 1),

('Allahumma Inni As''aluka Rizqan', 'اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا وَعِلْمًا نَافِعًا وَعَمَلًا مُتَقَبَّلًا', 'Allahumma inni as''aluka rizqan tayyiban wa ilman nafi''an wa amalan mutaqabbalan', 'O Allah, I ask You for wholesome provision, beneficial knowledge, and accepted deeds.', 'A comprehensive supplication for livelihood, knowledge, and deeds. Recited after Fajr prayer.', 1, 'rizq', false, 2),

('SubhanAllah wa Bihamdih', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', 'SubhanAllahi wa bihamdih', 'Glory be to Allah and all praise is due to Him.', 'The Prophet ﷺ said: whoever recites this 100 times a day, his sins will be forgiven even if they are as abundant as the foam of the sea. Opens doors of rizq.', 100, 'rizq', false, 3),

('Astaghfirullah', 'أَسْتَغْفِرُ اللَّهَ', 'Astaghfirullah', 'I seek forgiveness from Allah.', 'Istighfar opens the doors of provision. Allah says in the Quran: "Seek forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver. He will send rain upon you in continuing showers and give you increase in wealth and children."', 100, 'rizq', false, 4),

-- HEALING
('Allahumma Rabban Nas', 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا', 'Allahumma Rabban-nasi adhibil ba''sa, ishfi antash-shafi la shifa''a illa shifa''uk, shifa''an la yughadiru saqama', 'O Allah, Lord of mankind, remove the hardship and grant healing — You are the Healer. There is no cure except Your cure, a healing that leaves no illness behind.', 'The healing dua of the Prophet ﷺ. Recite over yourself or a loved one who is ill, blowing gently over them.', 3, 'healing', false, 1),

('Bismillah x3 / A''uthu Billahi x7', 'بِسْمِ اللَّهِ (ثَلَاثًا) أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سَبْعًا)', 'Bismillah (x3) A''udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir (x7)', 'In the name of Allah (x3). I seek refuge in Allah and His power from the evil of what I feel and fear (x7).', 'When placing the hand on the area of pain. Recite Bismillah 3 times, then the full dua 7 times. Narrated by Muslim.', 7, 'healing', false, 2),

('Ya Shafi', 'يَا شَافِي', 'Ya Shafi', 'O Healer', 'One of the Beautiful Names of Allah. Recite continuously seeking healing for yourself or others. Combine with firm belief that only Allah heals.', 100, 'healing', false, 3),

-- PEACE & SERENITY
('Hasbunallah wa Ni''mal Wakeel', 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', 'Hasbunallahu wa ni''mal wakil', 'Allah is sufficient for us, and He is the best Disposer of affairs.', 'Ibrahim (AS) recited this when thrown into fire, and the Prophet ﷺ recited it when told people had gathered against him. A dhikr of complete trust and peace.', 100, 'peace', false, 1),

('La Hawla wa La Quwwata', 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', 'La hawla wa la quwwata illa billah', 'There is no power nor strength except through Allah.', 'Known as al-Hawqalah. The Prophet ﷺ described it as a treasure from the treasures of Jannah. Recited in moments of difficulty to find peace and reliance.', 100, 'peace', false, 2),

('Allahumma Inni As''aluka Al-Afiyah', 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', 'Allahumma inni as''alukal afwa wal afiyata fid-dunya wal akhira', 'O Allah, I ask You for pardon and well-being in this world and in the hereafter.', 'The Prophet ﷺ said no one was ever given a greater gift after certainty of faith than well-being (afiyah). This dua asks for peace of heart, body, and spirit.', 3, 'peace', false, 3),

('Allahumma Anta As-Salam', 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', 'Allahumma antas-salam wa minkas-salam tabarakta ya dhal jalali wal ikram', 'O Allah, You are Peace and from You comes peace. Blessed are You, O Possessor of majesty and honor.', 'Recited after every obligatory prayer (salah). Returns the heart to its natural state of peace and tranquility.', 1, 'peace', false, 4),

-- PROTECTION
('Ayat Al-Kursi', 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ', 'Allahu la ilaha illa huwal hayyul qayyum, la ta''khudhuhu sinatun wa la nawm...', 'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep...', 'The greatest verse in the Quran. Reciting Ayat Al-Kursi after every obligatory prayer guarantees entry into Paradise. Reciting before sleep grants divine protection all night.', 1, 'protection', false, 1),

('Al-Mu''awwidhatain (Al-Falaq & An-Nas)', 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ', 'Qul a''udhu bi rabbil falaq, min sharri ma khalaq...', 'Say: I seek refuge in the Lord of the daybreak, from the evil of what He has created...', 'Recite Surah Al-Falaq and Surah An-Nas 3 times each morning and evening. The Prophet ﷺ would recite them before sleeping, blowing into his hands and wiping his body.', 3, 'protection', false, 2),

('Bismillahil Ladhi La Yadurr', 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', 'Bismillahil-ladhi la yadurru ma''asmihi shay''un fil-ardi wa la fis-sama''i wa huwas-sami''ul-alim', 'In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.', 'Recite 3 times morning and evening. Whoever recites this will not be struck by sudden affliction until morning or evening.', 3, 'protection', false, 3),

-- SALAWAT
('Salawat Ibrahim', 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ', 'Allahumma salli ala Muhammadin wa ala ali Muhammadin kama sallayta ala Ibrahima wa ala ali Ibrahim', 'O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim.', 'The complete Salawat Ibrahim recited in salah. Every blessing sent upon the Prophet returns 10 blessings to the sender.', 100, 'salawat', false, 1),

('Salawat Al-Nuraniyya', 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ النُّورِ الذَّاتِي', 'Allahumma salli ala sayyidina Muhammadin-nuri dhdhati', 'O Allah, send blessings upon our master Muhammad, the essential light.', 'A beautiful salawat focusing on the light of the Prophet ﷺ. Deeply purifies the heart and elevates spiritual station.', 100, 'salawat', false, 2),

('Allahumma Salli Ala Muhammad', 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', 'Allahumma salli ala Muhammad', 'O Allah, send blessings upon Muhammad.', 'The simplest and most accessible form of salawat. The Prophet ﷺ said whoever sends one salawat upon him, Allah sends 10 blessings upon them.', 100, 'salawat', false, 3),

-- ASMA UL HUSNA
('Ya Rahman', 'يَا رَحْمَانُ', 'Ya Rahman', 'O Most Gracious, O Most Merciful', 'The Most Merciful. Encompasses all of creation with mercy. Reciting increases compassion, opens the heart, and draws divine mercy.', 100, 'asma-ul-husna', false, 1),

('Ya Rahim', 'يَا رَحِيمُ', 'Ya Rahim', 'O Especially Merciful', 'The specifically merciful towards the believers. Recite for special mercy in matters you are struggling with.', 100, 'asma-ul-husna', false, 2),

('Ya Razzaq', 'يَا رَزَّاقُ', 'Ya Razzaq', 'O Provider', 'The Provider of all sustenance. Reciting this name opens channels of provision. Best recited after Fajr and Asr.', 100, 'asma-ul-husna', false, 3),

('Ya Fattah', 'يَا فَتَّاحُ', 'Ya Fattah', 'O Opener', 'The Opener of all doors. When facing closed doors in life — opportunities, relationships, rizq — reciting Ya Fattah opens what seems locked.', 100, 'asma-ul-husna', false, 4),

('Ya Latif', 'يَا لَطِيفُ', 'Ya Latif', 'O Most Subtle, O Most Kind', 'The Subtly Kind. Allah''s kindness reaches in ways we cannot perceive. Recite in difficulty for gentle resolution that you could not have imagined.', 129, 'asma-ul-husna', false, 5),

('Ya Shakur', 'يَا شَكُورُ', 'Ya Shakur', 'O Most Appreciative', 'The Most Grateful. Allah appreciates even the smallest good deed. Reciting increases gratitude in the heart and multiplies blessings.', 41, 'asma-ul-husna', false, 6),

-- RELATIONSHIPS & MARRIAGE
('Rabbana Hablana Min Azwajina', 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a''yunin waj''alna lil-muttaqina imama', 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.', 'Surah Al-Furqan 25:74. The dua of the servants of the Most Merciful for righteous families. Recite for blessings in marriage and children.', 33, 'relationships', false, 1),

('Rabbi Inni Lima Anzalta', 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', 'Rabbi inni lima anzalta ilayya min khayrin faqir', 'My Lord, indeed I am, for whatever good You would send down to me, in need.', 'The dua of Prophet Musa (AS) that led to his marriage. Powerful for those seeking a righteous spouse.', 100, 'relationships', false, 2),

('Allahumma Allif Bayna Qulubina', 'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا', 'Allahumma allif bayna qulubina', 'O Allah, unite our hearts.', 'A dua for unity and love between spouses, family members, and communities. Heals rifts and strengthens bonds.', 33, 'relationships', false, 3),

-- HOME, WORK & OPPORTUNITIES
('Allahumma Yassir wa La Tu''assir', 'اللَّهُمَّ يَسِّرْ وَلَا تُعَسِّرْ', 'Allahumma yassir wa la tu''assir', 'O Allah, make it easy and do not make it difficult.', 'A brief but powerful dua before undertaking any task, project, or new endeavor. Opens the way to ease.', 3, 'opportunities', false, 1),

('Hasbiyallahu La Ilaha Illa Hu', 'حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ', 'Hasbiyallahu la ilaha illa hu', 'Allah is sufficient for me; there is no deity except Him.', 'A powerful proclamation of trust when facing uncertainty at work or in new opportunities. Recited by the Prophet ﷺ in times of hardship.', 7, 'opportunities', false, 2),

('Rabbi Zidni Ilma', 'رَبِّ زِدْنِي عِلْمًا', 'Rabbi zidni ilma', 'My Lord, increase me in knowledge.', 'Surah Ta-Ha 20:114. The only dua in the Quran where Allah commands the Prophet ﷺ to ask for more — more knowledge. Recite before studying, working, or learning.', 100, 'opportunities', false, 3),

('Allahumma La Sahla Illa Ma Ja''alta', 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا', 'Allahumma la sahla illa ma ja''altahu sahlan wa anta taj''alul hazna idha shi''ta sahla', 'O Allah, there is no ease except in what You have made easy. And You make difficulty, if You wish, easy.', 'A profound dua that acknowledges that all ease comes from Allah. Recite when facing challenges at work, in projects, or new beginnings.', 3, 'opportunities', false, 4);
