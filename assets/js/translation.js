// Translation object with all languages
const translations = {
  uzb: {
    // Navigation
    home: "Bosh sahifa",
    kafedra: "Kafedra",
    courses: "Yo'nalishlar",
    courseTypeOne: "Kunduzgi ta'lim",
    courseTypeTwo: "Dual ta'lim",
    courseTypeThree: "Sirtqi ta'lim",
    courseTypeFour: "Qisqa muddatli ta'lim",
    teachers: "Ustozlar",
    events: "Tadbirlar",
    contact: "Aloqa",
    apply: "Roʻyxatdan oʻtish",
    
    // Hero Section
    heroTitle: "Kasb — bu hayot poydevori",
    heroSubtitle: "Biz yaxshi o'quvchilarni o'z ishini mutaxasisiga aylantiramiz!",
    heroButton: "Roʻyxatdan oʻtish",
    
    // About Section
    aboutTitle: "Biz eng yaxshilarni emas — yaxshiroqlarni yetishtiramiz",
    aboutDesc: "O'quvchilarimizni real ish bozoriga tayyorlaymiz. Ta'lim jarayoni nazariya va amaliyot uyg'unligida olib boriladi.",
    aboutPoint1: "Amaliy mashg'ulotlarga asoslangan ta'lim.",
    aboutPoint2: "Tajribali ustozlar bilan o'qish.",
    aboutPoint3: "Talabgir kasblar bo'yicha tayyorgarlik.",
    readMore: "Batafsil",
    
    // Stats Section
    statsStudents: "O'quvchilar",
    statsCourses: "Yo'nalishlar",
    statsEvents: "Tadbirlar",
    statsTeachers: "Pedagog & Murabbiylar",
    
    // Why Us Section
    whyTitle: "Nega bizni tanlashadi?",
    whyDesc: "Biz amaliy bilim va real kasblarga yo'naltirilgan ta'lim beramiz. O'quv jarayoni zamonaviy talablar asosida tashkil etilgan bo'lib, har bir o'quvchi kasb egasi bo'lib yetishishiga e'tibor qaratiladi.",
    whyBox1Title: "Amaliy ta'lim",
    whyBox1Desc: "Nazariya va amaliyot uyg'unligi asosida olib boriladigan mashg'ulotlar orqali o'quvchilar real ish jarayoniga tayyorlanadi.",
    whyBox2Title: "Tajribali ustozlar",
    whyBox2Desc: "Ko'p yillik tajribaga ega ustozlar tomonidan beriladigan bilim va ko'nikmalar sifatli ta'limni ta'minlaydi.",
    whyBox3Title: "Talabgor kasblar",
    whyBox3Desc: "Mehnat bozorida yuqori talabga ega bo'lgan kasblar bo'yicha zamonaviy va amaliy ta'lim yo'nalishlari.",

    // Courses
    tailor: "Tikuvchilik",
    dressDesigner: "Tikuv mahsulotlari dizayneri",
    bankManagement: "Bank ishi nazoratchisi",
    graphicDesigner: "Kompyuter grafikasi va dizayn",
    computerSciense: "Raqamli axborotlarni qayta ishlash ustasi",
    electroEngeneer: "Elektromantyor",
    automechanic: "Avtomobil divigatellarini tashxislash va ta'mirlash",
    welder: "Payvandchi",
    cook: "Oshpazlik",
    barber: "Sartarosh",
    bugaltery: "Buxgalteria-audit",
    computerEngineering: "Kompyuter injiniringi",
    electrostation: "Elektrstansiyalari va tarmoqlari",
    dual: "Dual",
    years: "2 YIL",
    homeGraphicHeader: "Grafik dizayn va 3D modellashtirish",
    homeGraphicContext: "Photoshop, Blender va boshqa dizaynga oid dasturlaridan foydalangan holda vizual dizayn va 3D modellar yaratishni o'rganasiz.",
    homeTailorHeader: "Professional tikuvchilik",
    homeTailorContext: "Tikuvchilikning asosiy va amaliy usullarini o'rganasiz. Matolarni tanlash, o'lchov olish, bichish va tikish jarayonlarini bosqichma-bosqich egallaysiz.",
    homeBankHeader: "Bankdagi xolatni nazorat qilish",
    homeBankContext: "Bank operatsiyalarini nazorat qilish, moliyaviy hujjatlar<br>bilan ishlash va ichki tartib-qoidalariga rioya qilishshi o'rganasiz.",
    
    // Courses Section
    coursesTitle: "Yo'nalishlar",
    coursesSubtitle: "Mashxur yo'nalishlar",
    stageOne: "Direktor",
    stageOneContext: "Direktor ta'lim muassasasining umumiy faoliyatiga rahbarlik qiladi, o'quv-tarbiya jarayonini, moliyaviy-xo'jalik ishlarini, kadrlar siyosatini va boshqaruv tizimini tashkil etish hamda rivojlantirish uchun to'liq mas'ul hisoblanadi.",
    stageTwo: "O'quv ishlari bo'yicha direktor o'rin bosari",
    stageTwoContext: "O'quv ishlari bo'yicha direktor o'rinbosari ta'lim muassasasida o'quv jarayonini rejalashtirish, tashkil etish, muvofiqlashtirish va nazorat qilish uchun mas'ul xodim.",
    stageThree: "Yoshlar ishlari bo'yicha direktor o'rin bosari",
    stageThreeContext: "Yoshlar ishlari bo'yicha direktor o'rinbosari ta'lim muassasasida o'quvchilarning ma'naviy-axloqiy tarbiyasi, bo'sh vaqtini mazmunli tashkil etish hamda davlat yoshlar siyosatini amalga oshirish uchun mas'ul rahbar xodim.",

    
    // Footer
    footerStreet: "Yoshlik ko'chasi 18B",
    footerRegion: "Farg'ona, O'zbekiston",
    footerPhone: "Telefon:",
    footerLinks: "Foydali havolalar",
    footerServices: "Bizning xizmatlarimiz",
    footerNewsletter: "Bizning yangiliklar xatimiga obuna bo'ling",
    footerNewsletterDesc: "Mahsulot va xizmatlarimiz haqidagi so'nggi yangiliklarni oling!",
    footerCopyright: "Mualliflik huquqi",
    footerRights: "Barcha huquqlar himoyalangan",
    
    // Footer Links
    footerHome: "Bosh sahifa",
    footerAbout: "Biz haqimizda",
    footerCourses: "Yonalishlar",
    footerEvents: "Tadbirlar",
    footerHelp: "Yordam",
    
    // Footer Services
    serviceWebDesign: "Veb-dizayn",
    serviceWebDev: "Veb-dasturlash",
    serviceProduct: "Mahsulot boshqaruvi",
    serviceMarketing: "Marketing",
    serviceGraphic: "Grafik dizayn",

    /////////////////////////////////////////
    // Courses-Page
    coursesPageTitle: "Kunduzgi ta'lim yo'nalishlari",
    coursesPageDesc: "Bizning ta'lim markazida mehnat bozorida eng talabgir kasblar bo'yicha zamonaviy kurslar mavjud. Har bir yo'nalish amaliy mashg'ulotlar va real loyihalar asosida tashkil etilgan bo'lib, bitiruvchilarimiz ishga tayyor holda chiqadi.",
    breadcrumbCourses: "Kunduzgi ta'lim",
    breadcrumbDualCourses: "Dual ta'lim",
    dualCoursesPageTitle: "Dual ta'lim yo'nalishlari",


    // Course Titles
    tailorTitle: "Ayollar, Erkaklar, Bolalar kiyimi tikuvchisi",
    dressDesignerTitle: "Tikuvchilik va dizayn",
    bankManagementTitle: "Bank nazoratchisi-Kassir",
    graphicDesignerTitle: "Grafik dizayn va 3D modellashtirish",
    computerScienseTitle: "Raqamli axborotlarni qayta ishlash ustasi-Web kontent administratori",
    electroEngeneerTitle: "Elektromontyor",
    automechanicTitle: "Avtomobil chilangari",
    welderTitle: "Payvandlash ishlari",
    cookTitle: "Oshpaz-Qandolatchi",
    barberTitle: "Sartaroshlik san'ati",

    
    // Course Descriptions
    tailorDesc: "Tikuvchilikning asosiy va amaliy usullarini o'rganasiz. Matolarni tanlash, o'lchov olish, bichish va tikish jarayonlarini bosqichma-bosqich egallaysiz. Kurs davomida kundalik kiyimlar va buyurtma asosidagi mahsulotlar tayyorlash bo'yicha real amaliyot olib boriladi.",
    dressDesignerDesc: "Tikuv mahsulotlarini loyihalash va dizaynerlash jarayonlarini o'rganasiz. Kiyim modellari yaratish, eskiz chizish, material tanlash va dizaynni amaliy tikuv jarayoniga moslashtirish bo'yicha ko'nikmalar hosil qilasiz. Shuningdek, zamonaviy moda tendensiyalarini tahlil qilish, buyurtmachilar talablari asosida individual dizayn ishlash.",
    bankManagementDesc: "Bank operatsiyalarini nazorat qilish, moliyaviy hujjatlar bilan ishlash va ichki tartib-qoidalariga rioya etilishini tekshirish bo'yicha bilim va ko'nikmalarni egallaysiz. Shuningdek, hisob-kitoblarni tahlil qilish, moliyaviy xavflarni aniqlash hamda bank faoliyatida shaffoflik va aniqlikni ta'minlash usullari bilan tanishasiz.",
    graphicDesignerDesc: "Photoshop va Blender dasturlaridan foydalangan holda vizual dizayn va 3D modellar yaratishni o'rganasiz. Logotiplar, bannerlar, reklama materiallari hamda 3D obyektlar bilan ishlash bo'yicha amaliy ko'nikmalar hosil qilasiz.",
    computerScienseDesc: "Zamonaviy veb-saytlar yaratish bo'yicha to'liq kurs. HTML, CSS, JavaScript, Bootstrap va boshqa texnologiyalarni chuqur o'rganasiz. Real loyihalar ustida ishlaymiz.",
    electroEngeneerDesc: "Elektr tarmoqlari va uskunalarini o'rnatish, ulash, sozlash va qayta ta'mirlash bo'yicha amaliy bilimlarga ega bo'lasiz. Shuningdek, elektr xavfsizligi qoidalariga rioya qilish, nosozliklarni aniqlash va bartaraf etish kabi ko'nikmalari shakllantiriladi.",
    automechanicDesc: "Avtomobil dvigatellarining ishlash prinsiplarini, nosozliklarni aniqlash va ularni ta'mirlash jarayonlarini o'rganasiz. Dvigatel tizimlari, yoqilg'i va sovitish tizimlari bilan ishlash bo'yicha amaliy ko'nikmalar hosil qilasiz.",
    welderDesc: "Payvandlash ishlarining asosiy usullari va texnologiyalarini o'rganasiz. Metall konstruksiyalarni payvandlash, biriktirish va mustahkamlash bo'yicha amaliy ko'nikmalarga ega bo'lasiz. Kurs davomida xavfsizlik qoidalariga qat'iy rioya qilgan holda real amaliy mashg'ulotlar olib boriladi.",
    cookDesc: "Ovqat tayyorlashning asosiy texnologiyalari, mahsulotlarni to'g'ri tanlash va ishlov berish usullarini o'rganasiz. Milliy va zamonaviy taomlarni tayyorlash, oshxona gigiyenasi hamda sanitariya qoidalariga rioya qilish bo'yicha amaliy ko'nikmalar hosil qilasiz.",
    barberDesc: "O'quv jarayonida talabalar real barber uskunalari bilan ishlashni, gigiyena va xavfsizlik qoidalariga rioya qilishni, yuz tuzilishiga mos soch va soqol shakllarini tanlashni o'rganadilar. Mashg'ulotlar asosan amaliy tarzda, tajribali ustozlar nazoratida olib boriladi.",

    //////////////////////////////////////////// Kafedra
    // Kafedra Page
    kafedraPageTitle: "Kafedralar",
    kafedraPageDesc: "Bizning maqsadimiz – har bir yoshga zamonaviy va talabgor kasblarni o'rgatish orqali ularni muvaffaqiyatli mutaxassisga aylantirish. Amaliy ta'lim va tajribali ustozlar yordamida o'quvchilarimiz real ish bozoriga tayyor bo'lib chiqadi.",
    breadcrumbKafedra: "Biz haqimizda",
    
    // Languages Department
    langDeptTitle: "Tillar kafedrasi",
    langDeptDesc: "Texnikumda o'quvchilarning milliy va xorijiy tillar bo'yicha kommunikativ kompetensiyasini, kasbiy lug'at va muloqot ko'nikmalarini shakllantirish, til o'qitish metodikasini takomillashtirish.",
    langDeptPoint1: "O'quv rejalari va o'quv dasturlarining ijrosini nazorat qilish, kerakli tadbirlarni tashkil etish.",
    langDeptPoint2: "Kafedra o'qituvchilari ishini rejalashtirish, darslarni aniqlash va kuzatish.",
    langDeptPoint3: "Metodik maslahatlar tashkil etish, o'qituvchilarning malaka oshirishini yo'lga qo'yish.",
    langDeptPoint4: "O'quv materiallari, darslik va metodik tavsiyalarni ishlab chiqish va yangilash.",
    langDeptPoint5: "Respublika va hududiy til siyosatiga muvofiq tadbirlarni amalga oshirish.",
    langDeptPoint6: "Hujjatlar, hisobotlar va kafedra ma'lumotlarini taqdim etish.",
    
    // Special Subjects Department
    specialDeptTitle: "Maxsus fanlar kafedrasi",
    specialDeptDesc: "Texnikumning kasbiy ta'lim yo'nalishlari bo'yicha maxsus fanlarning o'qitilishida amaliy kompetensiyalarni shakllantirish, o'quv dasturlari va amaliyotlarni muvofiqlashtirish.",
    specialDeptPoint1: "Maxsus fanlar bo'yicha o'quv dasturlarini ishlab chiqish va amaliyot bilan bog'lash.",
    specialDeptPoint2: "Laboratoriyalar, ustaxonalar va jihozlarning o'quv jarayoniga mosligini ta'minlash.",
    specialDeptPoint3: "O'qituvchilar va ustoz-o'qituvchilar tajribasini muvofiqlashtirish.",
    specialDeptPoint4: "Korxonalar bilan amaliy hamkorlikni yo'lga qo'yish, amaliyot joylarini tashkil etish.",
    specialDeptPoint5: "Xavfsizlik va mehnat muhofazasi talablariga rioya etilishini nazorat qilish.",
    specialDeptPoint6: "Hisobotlar tayyorlash va magistratura/sertifikatlash bo'yicha tashkiliy ishlar.",
    
    // Natural Sciences Department
    scienceDeptTitle: "Aniq va tabiiy fanlar kafedrasi",
    scienceDeptDesc: "Matematika, fizikа, kimyo va biologiya kabi aniq va tabiiy fanlarni texnikum dasturlari bilan uyg'unlashtirish orqali o'quvchilarning analitik va ilmiy fikrlash ko'nikmalarini rivojlantirish.",
    scienceDeptPoint1: "O'quv dasturlari va mashg'ulotlar jadvalini muvofiqlashtirish.",
    scienceDeptPoint2: "Laboratoriya asboblari va ochiq amaliy mashg'ulotlar tashkiloti.",
    scienceDeptPoint3: "Metodik ishlarni boshqarish va ilmiy tadqiqot ishlarini rag'batlantirish.",
    scienceDeptPoint4: "O'qituvchilar malakasini oshirish bo'yicha ishlar tashkil etish.",
    scienceDeptPoint5: "Darslar sifati va o'quv natijalarini monitoring qilish.",
    
    // Digital Information Processing Department
    digitalDeptTitle: "Raqamlari axborotlarni qayta ishlash kafedrasi",
    digitalDeptDesc: "Raqamli texnologiyalar, dasturlash, ma'lumotlar bazalari va axborot tizimlari bo'yicha kasbiy kompetensiyalarni shakllantirish hamda soha talablari uchun kadrlar tayyorlash.",
    digitalDeptPoint1: "Dasturlash, ma'lumotlar bazasi va axborot tizimlari bo'yicha o'quv dasturlarini ishlab chiqish va yangilash.",
    digitalDeptPoint2: "Amaliy mashg'ulotlar (kompyuter sinflari, loyihalar) tashkil etish va jihozlash.",
    digitalDeptPoint3: "IT sanoati bilan hamkorlik o'rnatish, amaliyot va stajirovkalarni tashkil etish.",
    digitalDeptPoint4: "O'qituvchilarning texnik va metodik malakasini oshirish.",
    digitalDeptPoint5: "Axborot xavfsizligi va texnik jihozlarni ekspluatatsiya qilishni nazorat qilish.",
    
    ////////////////////////////// Teachers
    // Teachers Page
    teachersPageTitle: "Ustozlar",
    teachersPageDesc: "Bizning tajribali ustozlar jamoasi sizga eng yuqori sifatli ta'lim berishga tayyor. Ular o'z sohasida yetuk mutaxassislar bo'lib, amaliy tajribaga ega.",
    
    // Subject Names
    subjectPhysics: "Fizika",
    subjectMotherTongue: "Ona tili",
    subjectBusinessFundamentals: "Biznes asoslari",
    subjectITInformatics: "Informatika va axborot texnologiyalari",
    subjectEnglish: "Ingiliz tili",
    subjectRussian: "Rus tili",
    subjectEducationMaster: "Ta'lim ustasi",
    subjectClothingDesigner: "Liboslar dizayneri",
    subjectChQBT: "ChQBT",
    subjectInformatics: "Informatika",
    subjectStage1Head: "1-bosqich bo'lim boshlig'i",
    subjectStage2Head: "2-bosqich bo'lim boshlig'i",
    subjectPsychologist: "Psixolog",
    subjectInformatics2: "Informatika va axborot texnologiyalari",
    
    // Teacher Descriptions
    teacherPhysicsDesc: "Fizika sohasida ko'p yillik tajribaga ega mutaxassis. Talabalarga fizika qonunlarini sodda va tushunarli tarzda o'rgatadi.",
    teacherMotherTongueDesc: "Ona tili fanini chuqur biladigan tajribali ustoz. O'quvchilarda to'g'ri va ravon nutqni shakllantirishga e'tibor qaratadi.",
    teacherBusinessFundamentalsDesc1: "Biznes asoslari yo'nalishida tajribali mutaxassis. O'quvchilarga tadbirkorlik va moliyaviy fikrlash ko'nikmalarini rivojlantiradi.",
    teacherBusinessFundamentalsDesc2: "Biznes asoslari bo'yicha tajribali mutaxassis. Talabalarga tadbirkorlik tamoyillari va amaliy biznes ko'nikmalarini o'rgatadi.",
    teacherITInformaticsDesc: "Informatika va axborot texnologiyalari sohasida malakali ustoz. O'quvchilarga raqamli texnologiyalar va amaliy ko'nikmalarni egallashda yo'l ko'rsatadi.",
    teacherEnglishDesc1: "Ingliz tili bo'yicha chuqur bilimga ega pedagog. O'quvchilarga tilni kundalik va amaliy darajada qo'llashni o'rgatadi.",
    teacherEnglishDesc2: "Ingliz tili fanidan tajribali o'qituvchi. O'quvchilarning muloqot va tushunish ko'nikmalarini rivojlantirishga e'tibor qaratadi.",
    teacherEnglishDesc3: "Ingliz tilini samarali o'rgatishga ixtisoslashgan ustoz. O'quvchilarning so'z boyligi va ishonch bilan gapirishini rivojlantiradi.",
    teacherEnglishDesc4: "Ingliz tilini o'rgatishda tajribali ustoz. O'quvchilarning muloqot va til ko'nikmalarini samarali rivojlantiradi.",
    teacherRussianDesc: "Rus tili fanidan tajribali ustoz. O'quvchilarga til qoidalari va muloqot ko'nikmalarini tushunarli tarzda o'rgatadi.",
    teacherEducationMasterDesc1: "Ta'lim sohasida tajribali ustoz. O'quvchilarga bilimni chuqur va tushunarli tarzda yetkazishga intiladi.",
    teacherEducationMasterDesc2: "Ta'lim sohasida ko'p yillik tajribaga ega mutaxassis. O'quvchilarning bilim va ko'nikmalarini samarali shakllantirishga e'tibor beradi.",
    teacherEducationMasterDesc3: "Ta'lim sohasida tajribali ustoz. O'quvchilarning bilim va ko'nikmalarini mustahkamlashga intiladi.",
    teacherClothingDesignerDesc: "Liboslar dizayni sohasida tajribali mutaxassis. Talabalarga zamonaviy va ijodiy dizayn tamoyillarini o'rgatadi.",
    teacherChQBTDesc: "Boshlang'ich ta'lim sohasida tajribali mutaxassis. Bolalarga o'qish, yozish va asosiy ko'nikmalarni qulay va tushunarli tarzda o'rgatadi.",
    teacherInformaticsDesc: "Informatika sohasida tajribali ustoz. O'quvchilarga kompyuter texnologiyalari va dasturlash asoslarini tushunarli tarzda o'rgatadi.",
    teacherStage1HeadDesc: "1-bosqich bo'limida tajribali rahbar. Bo'lim faoliyatini samarali boshqarib, o'quv jarayonini qo'llab-quvvatlaydi.",
    teacherStage2HeadDesc: "2-bosqich bo'limida tajribali rahbar. Bo'lim ishlarini samarali boshqarib, o'quv jarayonining sifatini ta'minlaydi.",
    teacherPsychologistDesc: "Tajribali psixolog. Talabalar va o'quvchilarning ruhiy holatini qo'llab-quvvatlash va rivojlantirishga yordam beradi.",
    teacherInformaticsDesc2: "Informatika va axborot texnologiyalari sohasida tajribali ustoz. O'quvchilarga raqamli vositalar va zamonaviy texnologiyalarni amaliy tarzda o'rgatadi.", 
    
    /////////////////////////// Events
    // Events Page
    eventsPageTitle: "Tadbir va Yangiliklar",
    eventsPageDesc: "Bizning markazda doimiy ravishda qiziqarli seminarlar, master-klasslar va ochiq darslar o'tkaziladi. Bu tadbirlar sizga yangi bilimlar olish va tajribali mutaxassislar bilan muloqot qilish imkonini beradi.",
    eventsPageBreadcrumb: "Tadbir va Yangiliklar",
    
    ////////////// Contact
    // Contact Page
    contactPageTitle: "Aloqa",
    contactPageDesc: "Savollaringiz bormi? Biz bilan bog‘laning! Mutaxassislarimiz sizga tezda javob berishadi va barcha kerakli ma’lumotlarni taqdim etishadi.",
    contactPageLocation: "Manzil",
    contactPagePhone: "Bizga qo‘ng‘iroq qiling",
    contactPageEmail: "Email orqali yozing",

    ///////////////////////////////// Course Details
    // Course details Page - Automechanic
    courseDetailsTitle: "Yo'nalish tafsilotlari",
    courseDetailsDesc: "Bu yerda kurs haqidagi qisqacha tavsif bo'lishi mumkin. Masalan: Bizning kurslarimiz sizga yangi ko'nikmalar o'rgatadi va karyerangizni rivojlantirishga yordam beradi.",
    breadcrumbDetails: "Yo'nalish tafsilotlari",
    
    // Course Info Labels
    courseName: "Kurs nomi",
    duration: "O'qish muddati",
    studyForm: "O'qish shakli",
    diplomaCategory: "Diplom toifasi",
    schedule: "Dars jadvali",
    generalSubjects: "Umum ta'lim fanlar",
    professionalSubjects: "Umum kasbiy fanlar",
    specialSubjects: "Maxsus fanlar",
    practicalTraining: "O'quv amaliyoti",
    
    // Course Info Values
    durationValue: "2 Yil / 4 Simester",
    studyFormValue: "Kunduzgi",
    diplomaValue: "O'rta maxsus",
    scheduleValue: "08:00 - 12:50",
    generalSubjectsValue: "10 ta",
    professionalSubjectsValue: "6 ta",
    specialSubjectsValue: "6 ta",
    practicalTrainingValue: "3 ta",
    
    // Semester Tabs
    semester1: "Birinchi semestr",
    semester2: "Ikkinchi semestr",
    semester3: "Uchinchi semestr",
    semester4: "To'rtinchi semestr",
    semesterFinal: "Yakuniy bosqich",
    
    // Semester 1
    sem1Title: "Avtomobil motorlari asoslari",
    sem1Subtitle: "Bu bo'limda motor tuzilishi, ishlash tamoyillari va diagnostika asoslari bilan tanishuv.",
    sem1Desc: "Semestr davomida talabalar avtomobil divigatellarining asosiy qismlarini o'rganadilar, oddiy diagnostika usullarini egallaydilar va birinchi loyihalarni amalga oshiradilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    // Semester 2
    sem2Title: "Diagnostika texnikalari",
    sem2Subtitle: "Diagnostika asboblari va usullari.",
    sem2Desc: "Talabalar motor nosozliklarini aniqlash usullarini o'rganadilar, diagnostika dasturlarini qo'llaydilar va real misollar ustida ishlaydilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    // Semester 3
    sem3Title: "Ilg'or ta'mirlash",
    sem3Subtitle: "Motor qismlarini ta'mirlash va almashtirish.",
    sem3Desc: "Bu bo'limda talabalar murakkab ta'mirlash texnologiyalarini, zamonaviy asboblarni va xavfsizlik standartlarini o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    // Semester 4
    sem4Title: "Amaliyot va loyihalar",
    sem4Subtitle: "Avtoservis korxonalarida amaliyot o'tash.",
    sem4Desc: "Semestr davomida talabalar real avtomobillarda amaliyot o'tadilar, mustaqil ta'mirlash loyihalarini ishlab chiqadilar va ularni himoya qiladilar.",
    
    // Semester Final
    semFinalTitle: "Kasb, malaka va diplom",
    semFinalSubtitle: "Ta'lim muassasasini muvaffaqiyatli tugatganlik haqida diplom.",
    semFinalDesc: "Talabalarga o'rta maxsus diplom oladilar, shuningdek, sohasida ish topish bo'yicha maslahatlar va karyera rivojlantirish bo'yicha tavsiyalar beriladi.",

    /////////////////////////////////////
    // Course details Bank-management
    bankCourseTitle: "Bank ishi nazoratchisi: Bank operatsiyalarini nazorat va moliyaviy xavfsizlik",
    bankCourseDesc: "Bank ishi nazoratchisi kursi davomida talabalar bank operatsiyalarini nazorat qilish, moliyaviy hisobotlarni tahlil qilish, risklarni boshqarish va bank qonunchiligini o'rganadilar. Kurs nazariy darslar va amaliy mashg'ulotlar orqali o'tkaziladi, real bank stsenariylari ustida ishlanadi. Kursni tugatgandan so'ng siz professional nazoratchi sifatida bank va moliya tizimida ishlay olasiz va moliyaviy jarayonlarni samarali nazorat qila olasiz.",
    professionalSubjectsValue5: "5 ta",
    specialSubjectsValue4: "4 ta",
    
    // Bank Management Semesters
    bankSem1Title: "Bank tizimi asoslari",
    bankSem1Subtitle: "Bu bo'limda bank faoliyati, moliyaviy institutlar va qonunchilik asoslari bilan tanishuv.",
    bankSem1Desc: "Semestr davomida talabalar bank operatsiyalarining asosiy turlarini o'rganadilar, moliyaviy hisobotlarni tushunadilar va birinchi nazorat texnikalarini egallaydilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    bankSem2Title: "Moliyaviy tahlil",
    bankSem2Subtitle: "Bank hisobotlarini tahlil qilish va risklarni baholash.",
    bankSem2Desc: "Talabalar moliyaviy ko'rsatkichlarni tahlil qilish usullarini o'rganadilar, risklarni boshqarish strategiyalarini ishlab chiqadilar va real misollar ustida ishlaydilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    bankSem3Title: "Ilg'or nazorat texnikalari",
    bankSem3Subtitle: "Bank ichki nazorati va audit usullari.",
    bankSem3Desc: "Bu bo'limda talabalar zamonaviy nazorat dasturlarini, moliyaviy firibgarliklarni aniqlash va xalqaro standartlarni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    bankSem4Title: "Amaliyot va loyihalar",
    bankSem4Subtitle: "Bank muassasalarida amaliyot o'tash.",
    bankSem4Desc: "Semestr davomida talabalar real banklarda amaliyot o'tadilar, mustaqil nazorat loyihalarini ishlab chiqadilar va ularni himoya qiladilar.",

    /////////////////////////////////
    // Barber Course Details
    barberCourseTitle: "Sartaroshlik: Soch kesish va uslub berish san'ati",
    barberCourseDesc: "Sartaroshlik kursi davomida talabalar soch kesish texnikalari, uslub berish, bo'yash, parvarish qilish va mijozlar bilan muloqot ko'nikmalarini egallaydilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real modellarda ishlanadi. Kursni tugatgandan so'ng siz professional sartarosh sifatida go'zallik salonlari va sartaroshxonalarda ishlay olasiz va zamonaviy soch turmaklarini yaratish imkoniyatiga ega bo'lasiz.",
    barberCourseName: "Sartarosh (modelyer)",
    generalSubjectsValue14: "14 ta",
    
    // Barber Semesters
    barberSem1Title: "Sartaroshlik asoslari",
    barberSem1Subtitle: "Bu bo'limda asbob-uskunalar, gigiyena va soch tuzilishi bilan tanishuv.",
    barberSem1Desc: "Semestr davomida talabalar sartaroshlik asboblarini ishlatishni, oddiy soch kesish texnikalarini va mijozlar bilan muloqotni o'rganadilar. Natijada mustahkam nazariy va amaliy poydevor hosil bo'ladi.",
    
    barberSem2Title: "Erkaklar soch turmagi",
    barberSem2Subtitle: "Klassik va zamonaviy erkaklar soch kesimlari.",
    barberSem2Desc: "Talabalar turli xil erkaklar soch turmaklarini yaratishni o'rganadilar, qaychi va mashinka bilan ishlashni egallaydilar va real modellarda mashq qiladilar.",
    
    barberSem3Title: "Ayollar va bolalar turmagi",
    barberSem3Subtitle: "Ayollar soch kesimi, uslub berish va bo'yash.",
    barberSem3Desc: "Bu bo'limda talabalar ayollar va bolalar soch turmaklarini, bo'yash texnikalarini va zamonaviy trendlarni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    barberSem4Title: "Amaliyot va loyihalar",
    barberSem4Subtitle: "Go'zallik salonlarida amaliyot o'tash.",
    barberSem4Desc: "Semestr davomida talabalar real sartaroshxonalarda amaliyot o'tadilar, o'z portfolio larini to'ldiradilar va yakuniy loyihalarni taqdim etadilar.",

    ///////////////////////////////
    // Cooking Course Details
    cookingCourseTitle: "Oshpazlik: Milliy va xalqaro taomlarni tayyorlash san'ati",
    cookingCourseDesc: "Oshpazlik kursi davomida talabalar oshxona gigiyenasi, mahsulotlarni qayta ishlash, milliy va xalqaro taomlarni tayyorlash texnikalarini o'rganadilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real oshxona loyihalari ustida ishlanadi. Kursni tugatgandan so'ng siz professional oshpaz sifatida restoran va mehmonxona sohasida ishlay olasiz va mazali taomlarni tayyorlash imkoniyatiga ega bo'lasiz.",
    cookingCourseName: "Oshpazlik",
    generalSubjectsValue13: "13 ta",
    professionalSubjectsValue7: "7 ta",
    specialSubjectsValue4: "4 ta",
    practicalTrainingValue4: "4 ta",
    
    // Cooking Semesters
    cookingSem1Title: "Oshpazlik asoslari",
    cookingSem1Subtitle: "Bu bo'limda oshxona gigiyenasi, mahsulotlar va asbob-uskunalar bilan tanishuv.",
    cookingSem1Desc: "Semestr davomida talabalar oshxona qoidalari, pichoq bilan ishlash va oddiy taomlarni tayyorlashni o'rganadilar. Natijada mustahkam nazariy va amaliy poydevor hosil bo'ladi.",
    
    cookingSem2Title: "Milliy taomlar",
    cookingSem2Subtitle: "O'zbek milliy taomlari: palov, shashlik, somsa va boshqalar.",
    cookingSem2Desc: "Talabalar an'anaviy retseptlarni o'rganadilar, ingredientlarni tanlash va tayyorlash texnikalarini egallaydilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    cookingSem3Title: "Xalqaro oshxona",
    cookingSem3Subtitle: "Yevropa, Osiyo va boshqa mintaqa taomlari.",
    cookingSem3Desc: "Bu bo'limda talabalar xalqaro retseptlarni, zamonaviy tayyorlash usullarini va taom bezashni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    cookingSem4Title: "Amaliyot va loyihalar",
    cookingSem4Subtitle: "Restoran va kafe oshxonalarida amaliyot o'tash.",
    cookingSem4Desc: "Semestr davomida talabalar real oshxonalarda amaliyot o'tadilar, menyular tuzadilar va yakuniy loyihalarni taqdim etadilar.",

    ///////////////////////////////////
    // Dress Designer Course Details
    dressDesignerCourseTitle: "Tikuv maxsulotlari dizayneri: Kiyim-kechak va moda dizayni",
    dressDesignerCourseDesc: "Tikuv maxsulotlari dizayneri kursi davomida talabalar moda dizayni asoslarini, eskiz chizish, rang va shakl tanlash, shuningdek, tikuv maxsulotlarini loyihalash ko'nikmalarini egallaydilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real dizayn loyihalari ustida ishlanadi. Kursni tugatgandan so'ng siz professional dizayner sifatida moda industriyasida faoliyat yurita olasiz va o'z brendingizni yaratish imkoniyatiga ega bo'lasiz.",
    dressDesignerCourseName: "Tikuv maxsulotlari dizayneri",
    generalSubjectsValue11: "11 ta",
    professionalSubjectsValue5: "5 ta",
    practicalTrainingValue2: "2 ta",
    
    // Dress Designer Semesters
    dressDesignerSem1Title: "Dizayn asoslari",
    dressDesignerSem1Subtitle: "Bu bo'limda dizayn tamoyillari, rang nazariyasi va eskiz chizish bilan tanishuv.",
    dressDesignerSem1Desc: "Semestr davomida talabalar dizaynning asosiy elementlarini o'rganadilar, birinchi eskizlarni chizadilar va moda tendensiyalari haqida ma'lumot oladilar. Natijada kreativ fikrlash ko'nikmalari rivojlanadi.",
    
    dressDesignerSem2Title: "Matolar va materiallar",
    dressDesignerSem2Subtitle: "Matolar turlari, xususiyatlari va ulardan foydalanish.",
    dressDesignerSem2Desc: "Talabalar turli matolarni tanlash va ularga mos dizayn yaratishni o'rganadilar, eskizlarni raqamlashtiradilar va birinchi loyihalarni amalga oshiradilar, shuningdek, guruh loyihalarida ishtirok etadilar.",
    
    dressDesignerSem3Title: "Ilg'or dizayn texnikalari",
    dressDesignerSem3Subtitle: "Murakkab kolleksiyalar va brend yaratish.",
    dressDesignerSem3Desc: "Bu bo'limda talabalar zamonaviy dizayn dasturlarini, moda marketingini va individual kolleksiyalarni loyihalashni o'rganadilar, shuningdek, real bozor talablariga mos dizaynlar yaratadilar.",
    
    dressDesignerSem4Title: "Amaliyot va portfolio",
    dressDesignerSem4Subtitle: "Moda korxonalarida amaliyot o'tash.",
    dressDesignerSem4Desc: "Semestr davomida talabalar dizayn studiyalarida amaliyot o'tadilar, o'z portfolio larini to'ldiradilar va yakuniy loyihalarni taqdim etadilar.",

    /////////////////////////////////////////
    // Electrician Course Details
    electricianCourseTitle: "Elektromontyor: Elektr tarmoqlari va uskunalarini o'rnatish va ta'mirlash",
    electricianCourseDesc: "Elektromontyor kursi davomida talabalar elektr tarmoqlarini loyihalash, simlar va kabellarni o'rnatish, elektr uskunalarini ta'mirlash va xavfsizlik qoidalari ko'nikmalarini egallaydilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real loyihalar ustida ishlanadi. Kursni tugatgandan so'ng siz professional elektromontyor sifatida qurilish va sanoat sohasida ishlay olasiz va elektr tizimlarini samarali boshqara olasiz.",
    electricianCourseName: "Elektromontyor",
    generalSubjectsValue14: "14 ta",
    professionalSubjectsValue6: "6 ta",
    specialSubjectsValue3: "3 ta",
    
    // Electrician Semesters
    electricianSem1Title: "Elektr texnikasi asoslari",
    electricianSem1Subtitle: "Bu bo'limda elektr oqimi, kuchlanish va qarshilik tushunchalari bilan tanishuv.",
    electricianSem1Desc: "Semestr davomida talabalar elektr sxemalarini o'rganadilar, asbob-uskunalar bilan ishlaydilar va birinchi oddiy loyihalarni amalga oshiradilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    electricianSem2Title: "Elektr tarmoqlarini o'rnatish",
    electricianSem2Subtitle: "Simlar va kabellarni o'rnatish texnikalari.",
    electricianSem2Desc: "Talabalar elektr tarmoqlarini loyihalashni o'rganadilar, o'rnatish ishlarini bajaradilar va xavfsizlik qoidalarini qo'llaydilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    electricianSem3Title: "Ilg'or elektr uskunalar",
    electricianSem3Subtitle: "Transformatorlar, generatorlar va avtomatika tizimlari.",
    electricianSem3Desc: "Bu bo'limda talabalar murakkab elektr tizimlarini ta'mirlashni, diagnostika qilishni va zamonaviy texnologiyalarni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    electricianSem4Title: "Amaliyot va loyihalar",
    electricianSem4Subtitle: "Sanoat korxonalarida amaliyot o'tash.",
    electricianSem4Desc: "Semestr davomida talabalar real ob'ektlarda amaliyot o'tadilar, mustaqil loyihalarni ishlab chiqadilar va ularni himoya qiladilar.",

    /////////////////////////////////////////
    // Graphic Design Course Details
    graphicDesignCourseTitle: "Kompyuter grafikasi va dizayn: Raqamli grafikalar va vizual dizayn",
    graphicDesignCourseDesc: "Kompyuter grafikasi va dizayn kursi davomida talabalar grafik dasturlari (masalan, Adobe Photoshop, Illustrator) bilan ishlash, vizual dizayn tamoyillari, veb-dizayn va 3D modellashtirish ko'nikmalarini egallaydilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real dizayn loyihalari ustida ishlanadi. Kursni tugatgandan so'ng siz professional grafik dizayner sifatida reklama, veb va multimedia sohasida ishlay olasiz va kreativ loyihalarni amalga oshira olasiz.",
    graphicDesignCourseName: "Kompyuter grafikasi va dizayn",
    
    // Graphic Design Semesters
    graphicDesignSem1Title: "Grafik dizayn asoslari",
    graphicDesignSem1Subtitle: "Bu bo'limda dizayn tamoyillari, rang nazariyasi va grafik dasturlari bilan tanishuv.",
    graphicDesignSem1Desc: "Semestr davomida talabalar grafik dasturlarining asosiy funksiyalarini o'rganadilar, birinchi loyihalarni yaratadilar va kreativ fikrlash ko'nikmalarini rivojlantiradilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    graphicDesignSem2Title: "Vektor va raster grafikasi",
    graphicDesignSem2Subtitle: "Illustrator va Photoshop dasturlarida ishlash.",
    graphicDesignSem2Desc: "Talabalar vektor grafikalarini yaratish, rasm tahrirlash va dizayn elementlarini birlashtirishni o'rganadilar, real loyihalar ustida ishlaydilar va guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    graphicDesignSem3Title: "Ilg'or dizayn texnikalari",
    graphicDesignSem3Subtitle: "Veb-dizayn, UI/UX va 3D modellashtirish.",
    graphicDesignSem3Desc: "Bu bo'limda talabalar zamonaviy dizayn dasturlarini, veb-sayt dizayni va mobil ilovalar interfeysini o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    graphicDesignSem4Title: "Amaliyot va loyihalar",
    graphicDesignSem4Subtitle: "Reklama agentliklarida amaliyot o'tash.",
    graphicDesignSem4Desc: "Semestr davomida talabalar dizayn studiyalarida amaliyot o'tadilar, mustaqil loyihalarni ishlab chiqadilar va ularni himoya qiladilar.",

    /////////////////////////////
    // Data Processing Course Details
    dataProcessingCourseTitle: "Raqamli axborotlarni qayta ishlash ustasi: Ma'lumotlarni qayta ishlash va tahlil",
    dataProcessingCourseDesc: "Raqamli axborotlarni qayta ishlash ustasi kursi davomida talabalar ma'lumotlar bazalari bilan ishlash, dasturlash asoslari, ma'lumotlarni tahlil qilish va raqamli texnologiyalarni qo'llash ko'nikmalarini egallaydilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real ma'lumotlar loyihalari ustida ishlanadi. Kursni tugatgandan so'ng siz professional ma'lumotlar mutaxassisi sifatida IT va biznes sohasida ishlay olasiz va axborotlarni samarali qayta ishlash imkoniyatiga ega bo'lasiz.",
    dataProcessingCourseName: "Raqamli axborotlarni qayta ishlash ustasi",
    
    // Data Processing Semesters
    dataProcessingSem1Title: "Raqamli axborotlar asoslari",
    dataProcessingSem1Subtitle: "Bu bo'limda ma'lumotlar turlari, dasturlash asoslari va ma'lumotlar bazalari bilan tanishuv.",
    dataProcessingSem1Desc: "Semestr davomida talabalar raqamli axborotlarni saqlash va qayta ishlashning asosiy usullarini o'rganadilar, oddiy dasturlarni yozadilar va birinchi loyihalarni amalga oshiradilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    dataProcessingSem2Title: "Ma'lumotlarni tahlil qilish",
    dataProcessingSem2Subtitle: "Ma'lumotlar statistikasi va tahlil vositalari.",
    dataProcessingSem2Desc: "Talabalar ma'lumotlarni tahlil qilish usullarini o'rganadilar, Python va SQL kabi tillarni qo'llaydilar, real ma'lumotlar to'plamlarini qayta ishladilar va guruh loyihalarida ishtirok etadilar.",
    
    dataProcessingSem3Title: "Ilg'or qayta ishlash texnikalari",
    dataProcessingSem3Subtitle: "Big data va mashinaviy o'rganish asoslari.",
    dataProcessingSem3Desc: "Bu bo'limda talabalar katta ma'lumotlar to'plamlarini qayta ishlash, ma'lumotlarni vizualizatsiya qilish va oddiy algoritmlarni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    dataProcessingSem4Title: "Amaliyot va loyihalar",
    dataProcessingSem4Subtitle: "IT kompaniyalarida amaliyot o'tash.",
    dataProcessingSem4Desc: "Semestr davomida talabalar real korxonalarda amaliyot o'tadilar, mustaqil ma'lumotlar loyihalarini ishlab chiqadilar va ularni himoya qiladilar.",

    /////////////////////////////////////////
    // Tailoring Course Details
    tailoringCourseTitle: "Tikuvchilik: Kiyim-kechak tikish va dizayn asoslari",
    tailoringCourseDesc: "Tikuvchilik kursi davomida talabalar tikuv mashinalari bilan ishlash, matolar tanlash, naqsh chizish va kiyim-kechak tikish ko'nikmalarini egallaydilar. Kurs amaliy mashg'ulotlar orqali o'tkaziladi va real loyihalar ustida ishlanadi. Kursni tugatgandan so'ng siz professional tikuvchi sifatida ishlay olasiz va moda industriyasida o'z o'rningizni topasiz.",
    tailoringCourseName: "Tikuvchilik",
    
    // Tailoring Semesters
    tailoringSem1Title: "Tikuvchilik asoslari",
    tailoringSem1Subtitle: "Bu bo'limda tikuv mashinalari, asbob-uskunalar va matolar turlari bilan tanishuv.",
    tailoringSem1Desc: "Semestr davomida talabalar tikuvchilikning asosiy texnikalarini o'rganadilar, oddiy naqshlarni chizadilar va birinchi oddiy buyumlarni tikadilar. Natijada mustahkam nazariy va amaliy poydevor hosil bo'ladi.",
    
    tailoringSem2Title: "Naqsh va kesim",
    tailoringSem2Subtitle: "Kiyim naqshlarini chizish va kesish texnikalari.",
    tailoringSem2Desc: "Talabalar turli xil kiyim turlarining naqshlarini yaratishni o'rganadilar, matolarni kesadilar va birinchi loyihalarni amalga oshiradilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    tailoringSem3Title: "Ilg'or tikuv texnikalari",
    tailoringSem3Subtitle: "Murakkab kiyimlar va aksessuarlar tikish.",
    tailoringSem3Desc: "Bu bo'limda talabalar zamonaviy tikuv usullarini, dekorativ elementlarni va moda trendlarini o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    tailoringSem4Title: "Amaliyot va loyihalar",
    tailoringSem4Subtitle: "Real ishlab chiqarish jarayonida amaliyot o'tash.",
    tailoringSem4Desc: "Semestr davomida talabalar korxonalarda amaliyot o'tadilar, mustaqil loyihalarni ishlab chiqadilar va ularni himoya qiladilar.",

    //////////////////////////////
    // Welding Course Details
    weldingCourseTitle: "Payvandchi: Metallarni payvandlash va qayta ishlash",
    weldingCourseDesc: "Payvandchi kursi davomida talabalar payvandlash texnologiyalarini, asbob-uskunalar bilan ishlash, metall turlarini va xavfsizlik qoidalarini o'rganadilar. Kurs nazariy va amaliy mashg'ulotlar orqali o'tkaziladi, real loyihalar ustida ishlanadi. Kursni tugatgandan so'ng siz professional payvandchi sifatida qurilish va sanoat sohasida ishlay olasiz va metall konstruksiyalarni samarali payvandlay olasiz.",
    weldingCourseName: "Payvandchi",
    
    // Welding Semesters
    weldingSem1Title: "Payvandlash asoslari",
    weldingSem1Subtitle: "Bu bo'limda payvandlash turlari, asbob-uskunalar va metallar bilan tanishuv.",
    weldingSem1Desc: "Semestr davomida talabalar payvandlashning asosiy texnikalarini o'rganadilar, oddiy loyihalarni amalga oshiradilar va xavfsizlik qoidalarini egallaydilar. Natijada mustahkam nazariy poydevor hosil bo'ladi.",
    
    weldingSem2Title: "Amaliy payvandlash",
    weldingSem2Subtitle: "Elektr payvandlash va gaz payvandlash texnikalari.",
    weldingSem2Desc: "Talabalar turli payvandlash usullarini o'rganadilar, metallarni payvandlaydilar va real loyihalar ustida ishlaydilar, shuningdek, guruhda ishlash ko'nikmalarini rivojlantiradilar.",
    
    weldingSem3Title: "Ilg'or texnologiyalar",
    weldingSem3Subtitle: "Lazer va plazma payvandlash.",
    weldingSem3Desc: "Bu bo'limda talabalar zamonaviy payvandlash usullarini, sifat nazoratini va metall qayta ishlashni o'rganadilar, shuningdek, individual loyihalar ustida ishlaydilar.",
    
    weldingSem4Title: "Amaliyot va loyihalar",
    weldingSem4Subtitle: "Sanoat korxonalarida amaliyot o'tash.",
    weldingSem4Desc: "Semestr davomida talabalar real ob'ektlarda amaliyot o'tadilar, mustaqil loyihalarni ishlab chiqadilar va ularni himoya qiladilar.",

    ///////////////////////////////////
    //////////////////////////////////
    // Dual Education Course Info
    tailorCourseName: "Tikuvchilik",
    studyFormValueDual: "Dual ta'lim",
    diplomaValueProfessional: "Professional",
    
    // Dual Education Modules
    naturalHumanitarianModules: "Tabiiy va gumanitar modullar",
    naturalHumanitarianModulesValue: "9 ta",
    specializationModules: "Mutaxasislik modullar",
    specializationModulesValue: "5 ta",
    professionalModules: "Professional modullar",
    professionalModulesValue: "5 ta",
    electiveModules: "Tanlov modullar",
    electiveModulesValue: "4 ta",
  },
  
  eng: {
    // Navigation
    home: "Home",
    kafedra: "Department",
    courses: "Courses",
    courseTypeOne: "Full-time",
    courseTypeTwo: "Dual education",
    courseTypeThree: "Part-time",
    courseTypeFour: "Short-term education",
    teachers: "Teachers",
    events: "Events",
    contact: "Contact",
    apply: "Apply",
    
    // Hero Section
    heroTitle: "Profession is the foundation of life",
    heroSubtitle: "We turn good students into professionals in their field!",
    heroButton: "Apply",
    
    // About Section
    aboutTitle: "We don't train the best — we train better ones",
    aboutDesc: "We prepare our students for the real job market. The educational process is conducted in harmony of theory and practice.",
    aboutPoint1: "Education based on practical training.",
    aboutPoint2: "Learning with experienced teachers.",
    aboutPoint3: "Training in demanded professions.",
    readMore: "More",
    
    // Stats Section
    statsStudents: "Students",
    statsCourses: "Courses",
    statsEvents: "Events",
    statsTeachers: "Teachers & Mentors",
    
    // Why Us Section
    whyTitle: "Why choose us?",
    whyDesc: "We provide practical knowledge and education focused on real professions. The educational process is organized according to modern requirements, with attention to each student becoming a professional.",
    whyBox1Title: "Practical Education",
    whyBox1Desc: "Through classes conducted in harmony of theory and practice, students are prepared for real work processes.",
    whyBox2Title: "Experienced Teachers",
    whyBox2Desc: "Knowledge and skills provided by teachers with many years of experience ensure quality education.",
    whyBox3Title: "Demanded Professions",
    whyBox3Desc: "Modern and practical educational directions in professions that are in high demand in the labor market.",
    
    // Courses
    tailor: "Tailor",
    dressDesigner: "Clothing Designer",
    bankManagement: "Banking Manager",
    graphicDesigner: "Computer Graphics and Design",
    computerSciense: "Digital Information Processing Engineer",
    electroEngineer: "Electrical Engineer",
    automechanic: "Automotive Engine Diagnostics and Repair",
    welder: "Welder",
    cook: "Cooking",
    barber: "Barber",
    bugaltery: "Accounting-audit",
    computerEngineering: "Computer Engineering",
    electrostation: "Power Plants and Networks",
    dual: "Dual",
    years: "2 YEARS",
    homeGraphicHeader: "Graphic Design and 3D Modeling",
    homeGraphicContext: "You will learn to create visual design and 3D models using Photoshop, Blender and other design programs.",
    homeTailorHeader: "Professional Tailoring",
    homeTailorContext: "You will learn the basic and practical methods of tailoring. You will master the processes of selecting fabrics, taking measurements, cutting and sewing step by step.",
    homeBankHeader: "Controlling the situation in the bank",
    homeBankContext: "You will learn to control bank transactions, work with financial documents and comply with internal regulations.",

    // Courses Section
    coursesTitle: "Courses",
    coursesSubtitle: "Popular Courses",
    stageOne: "Principal",
    stageOneContext: "The director leads the general activities of the educational institution, is fully responsible for the organization and development of the educational process, financial and economic affairs, personnel policy and management system.",
    stageTwo: "Deputy Director for Academic Affairs",
    stageTwoContext: "The Deputy Director for Academic Affairs is an employee responsible for planning, organizing, coordinating and controlling the educational process in the educational institution.",
    stageThree: "Deputy Director for Youth Affairs",
    stageThreeContext: "The Deputy Director for Youth Affairs is a senior employee responsible for the spiritual and moral education of students, meaningful organization of their free time and the implementation of the state youth policy in the educational institution.",
    
    // Footer
    footerStreet: "Yoshlik street 18B",
    footerRegion: "Fergana, Uzbekistan",
    footerPhone: "Phone:",
    footerLinks: "Useful Links",
    footerServices: "Our Services",
    footerNewsletter: "Subscribe to our newsletter",
    footerNewsletterDesc: "Get the latest news about our products and services!",
    footerCopyright: "Copyright",
    footerRights: "All rights reserved",
    
    // Footer Links
    footerHome: "Home",
    footerAbout: "About Us",
    footerCourses: "Courses",
    footerEvents: "Events",
    footerHelp: "Help",
    
    // Footer Services
    serviceWebDesign: "Web Design",
    serviceWebDev: "Web Development",
    serviceProduct: "Product Management",
    serviceMarketing: "Marketing",
    serviceGraphic: "Graphic Design",
    
    ////////////////////////////
    // Courses-Page
    coursesPageTitle: "Full-time Education Programs",
    coursesPageDesc: "Our training center offers modern courses in the most demanded professions in the labor market. Each program is organized based on practical training and real projects, ensuring our graduates are ready for employment.",
    breadcrumbCourses: "Full-time Education",
    breadcrumbDualCourses: "Dual Education",
    dualCoursesPageTitle: "Dual Education Programs",
    
    // Course Titles
    tailorTitle: "Women's, Men's, Children's Clothing Tailor",
    dressDesignerTitle: "Tailoring and Design",
    bankManagementTitle: "Bank Supervisor-Cashier",
    graphicDesignerTitle: "Graphic Design and 3D Modeling",
    computerScienseTitle: "Digital Information Processing Specialist-Web Content Administrator",
    electroEngeneerTitle: "Electrician",
    automechanicTitle: "Automotive Mechanic",
    welderTitle: "Welding Works",
    cookTitle: "Chef-Confectioner",
    barberTitle: "Barbering Art",

    // Course Descriptions
    tailorDesc: "You will learn the basic and practical methods of tailoring. You will master the processes of fabric selection, measurement, cutting and sewing step by step. During the course, real practice is carried out in preparing everyday clothes and custom-made products.",
    dressDesignerDesc: "You will learn the processes of designing and designing garment products. You will develop skills in creating clothing models, drawing sketches, selecting materials and adapting design to the practical sewing process. Also, analyzing modern fashion trends and working on individual designs based on customer requirements.",
    bankManagementDesc: "You will acquire knowledge and skills in controlling banking operations, working with financial documents and checking compliance with internal regulations. Also, you will learn methods of analyzing calculations, identifying financial risks and ensuring transparency and accuracy in banking activities.",
    graphicDesignerDesc: "You will learn to create visual designs and 3D models using Photoshop and Blender software. You will develop practical skills in working with logos, banners, advertising materials and 3D objects.",
    computerScienseDesc: "A complete course on creating modern websites. You will thoroughly learn HTML, CSS, JavaScript, Bootstrap and other technologies. We work on real projects.",
    electroEngeneerDesc: "You will gain practical knowledge in installing, connecting, adjusting and repairing electrical networks and equipment. Also, skills such as following electrical safety rules, identifying and eliminating faults will be formed.",
    automechanicDesc: "You will learn the operating principles of automobile engines, how to identify malfunctions and repair them. You will develop practical skills in working with engine systems, fuel and cooling systems.",
    welderDesc: "You will learn the basic methods and technologies of welding work. You will gain practical skills in welding, joining and strengthening metal structures. During the course, real practical training is conducted with strict adherence to safety rules.",
    cookDesc: "You will learn the basic technologies of food preparation, methods of proper selection and processing of products. You will develop practical skills in preparing national and modern dishes, kitchen hygiene and compliance with sanitary rules.",
    barberDesc: "During the training process, students learn to work with real barber equipment, follow hygiene and safety rules, and choose hair and beard styles suitable for facial structure. Classes are mainly conducted in a practical manner, under the supervision of experienced teachers.",

    ////////////////////////////// Kafedra
    // Kafedra Page
    kafedraPageTitle: "Departments",
    kafedraPageDesc: "Our goal is to turn every young person into a successful specialist by teaching them modern and demanded professions. With practical education and the help of experienced teachers, our students graduate ready for the real job market.",
    breadcrumbKafedra: "About Us",
    
    // Languages Department
    langDeptTitle: "Languages Department",
    langDeptDesc: "Developing students' communicative competence in national and foreign languages, professional vocabulary and communication skills, and improving language teaching methodology at the technical school.",
    langDeptPoint1: "Monitor the implementation of curricula and educational programs, organize necessary activities.",
    langDeptPoint2: "Plan the work of department teachers, identify and monitor classes.",
    langDeptPoint3: "Organize methodological consultations, facilitate teacher professional development.",
    langDeptPoint4: "Develop and update educational materials, textbooks and methodological recommendations.",
    langDeptPoint5: "Implement measures in accordance with republican and regional language policy.",
    langDeptPoint6: "Submit documents, reports and department information.",
    
    // Special Subjects Department
    specialDeptTitle: "Special Subjects Department",
    specialDeptDesc: "Developing practical competencies in teaching specialized subjects in the technical school's vocational education areas, coordinating curricula and practical training.",
    specialDeptPoint1: "Develop curricula for special subjects and link them with practice.",
    specialDeptPoint2: "Ensure laboratories, workshops and equipment are suitable for the educational process.",
    specialDeptPoint3: "Coordinate the experience of teachers and master-teachers.",
    specialDeptPoint4: "Establish practical cooperation with enterprises, organize internship locations.",
    specialDeptPoint5: "Monitor compliance with safety and occupational health requirements.",
    specialDeptPoint6: "Prepare reports and organizational work for graduate studies/certification.",
    
    // Natural Sciences Department
    scienceDeptTitle: "Natural Sciences Department",
    scienceDeptDesc: "Developing students' analytical and scientific thinking skills by integrating exact and natural sciences such as mathematics, physics, chemistry and biology with technical school programs.",
    scienceDeptPoint1: "Coordinate curricula and class schedules.",
    scienceDeptPoint2: "Organize laboratory equipment and open practical classes.",
    scienceDeptPoint3: "Manage methodological work and encourage scientific research.",
    scienceDeptPoint4: "Organize work on teacher professional development.",
    scienceDeptPoint5: "Monitor lesson quality and learning outcomes.",
    
    // Digital Information Processing Department
    digitalDeptTitle: "Digital Information Processing Department",
    digitalDeptDesc: "Developing professional competencies in digital technologies, programming, databases and information systems, and preparing personnel for industry requirements.",
    digitalDeptPoint1: "Develop and update curricula in programming, databases and information systems.",
    digitalDeptPoint2: "Organize and equip practical classes (computer labs, projects).",
    digitalDeptPoint3: "Establish cooperation with IT industry, organize internships and training.",
    digitalDeptPoint4: "Improve teachers' technical and methodological skills.",
    digitalDeptPoint5: "Monitor information security and technical equipment operation.",

    //////////////////////////// Teachers
    // Teachers Page
    teachersPageTitle: "Teachers",
    teachersPageDesc: "Our team of experienced teachers is ready to provide you with the highest quality education. They are skilled professionals in their field with practical experience.",
    
    // Subject Names
    subjectPhysics: "Physics",
    subjectMotherTongue: "Mother Tongue",
    subjectBusinessFundamentals: "Business Fundamentals",
    subjectITInformatics: "IT and Information Technologies",
    subjectEnglish: "English Language",
    subjectRussian: "Russian Language",
    subjectEducationMaster: "Education Master",
    subjectClothingDesigner: "Clothing Designer",
    subjectChQBT: "Primary Education",
    subjectInformatics: "Computer Science",
    subjectStage1Head: "Stage 1 Department Head",
    subjectStage2Head: "Stage 2 Department Head",
    subjectPsychologist: "Psychologist",
    subjectInformatics2: "Informatics and Information Technology",
    
    // Teacher Descriptions
    teacherPhysicsDesc: "Expert with many years of experience in physics. Teaches students physics laws in a simple and understandable way.",
    teacherMotherTongueDesc: "Experienced teacher with deep knowledge of mother tongue. Focuses on developing correct and fluent speech in students.",
    teacherBusinessFundamentalsDesc1: "Experienced specialist in business fundamentals. Develops entrepreneurship and financial thinking skills in students.",
    teacherBusinessFundamentalsDesc2: "Experienced specialist in business fundamentals. Teaches students entrepreneurship principles and practical business skills.",
    teacherITInformaticsDesc: "Qualified teacher in IT and information technologies. Guides students in mastering digital technologies and practical skills.",
    teacherEnglishDesc1: "Educator with deep knowledge of English. Teaches students to apply the language at everyday and practical levels.",
    teacherEnglishDesc2: "Experienced English teacher. Focuses on developing students' communication and comprehension skills.",
    teacherEnglishDesc3: "Teacher specialized in effective English teaching. Develops students' vocabulary and confident speaking.",
    teacherEnglishDesc4: "Experienced teacher in English instruction. Effectively develops students' communication and language skills.",
    teacherRussianDesc: "Experienced teacher of Russian language. Teaches students language rules and communication skills in an understandable way.",
    teacherEducationMasterDesc1: "Experienced teacher in education. Strives to convey knowledge to students deeply and clearly.",
    teacherEducationMasterDesc2: "Specialist with many years of experience in education. Focuses on effectively shaping students' knowledge and skills.",
    teacherEducationMasterDesc3: "Experienced teacher in education. Strives to strengthen students' knowledge and skills.",
    teacherClothingDesignerDesc: "Experienced specialist in clothing design. Teaches students modern and creative design principles.",
    teacherChQBTDesc: "Experienced specialist in primary education. Teaches children reading, writing and basic skills in a comfortable and understandable way.",
    teacherInformaticsDesc: "Experienced teacher in computer science. Teaches students computer technologies and programming basics in an understandable way.",
    teacherStage1HeadDesc: "Experienced leader in Stage 1 department. Effectively manages department activities and supports the educational process.",
    teacherStage2HeadDesc: "Experienced leader in Stage 2 department. Effectively manages department work and ensures quality of the educational process.",
    teacherPsychologistDesc: "Experienced psychologist. Helps support and develop the mental state of students and pupils.",
    teacherInformaticsDesc2: "Experienced teacher in the field of informatics and information technology. Teaches students digital tools and modern technologies in a practical way.",

    ////////////////// Events
    // Events Page
    eventsPageTitle: "Events and News",
    eventsPageDesc: "Our center regularly hosts interesting seminars, master classes and open lessons. These events give you the opportunity to gain new knowledge and interact with experienced professionals.",
    eventsPageBreadcrumb: "Events and News",

    ////////////// Contact
    // Contact Page
    contactPageTitle: "Contact",
    contactPageDesc: "Do you have any questions? Contact us! Our specialists will answer you quickly and provide all the necessary information.",
    contactPageLocation: "Address",
    contactPagePhone: "Call us",
    contactPageEmail: "Text via email",

    ////////////////////// Course Details Pages
    // Course Details Page
    courseDetailsTitle: "Course Details",
    courseDetailsDesc: "Here can be a brief description of the course. For example: Our courses teach you new skills and help develop your career.",
    breadcrumbDetails: "Course Details",

    // Course Details Automechanic
    courseName: "Course Name",
    duration: "Study Duration",
    studyForm: "Study Form",
    diplomaCategory: "Diploma Category",
    schedule: "Class Schedule",
    generalSubjects: "General Education Subjects",
    professionalSubjects: "General Professional Subjects",
    specialSubjects: "Special Subjects",
    practicalTraining: "Practical Training",
    
    // Course Info Values
    durationValue: "2 Years / 4 Semesters",
    studyFormValue: "Full-time",
    diplomaValue: "Secondary Specialized",
    scheduleValue: "08:00 - 12:50",
    generalSubjectsValue: "10 subjects",
    professionalSubjectsValue: "6 subjects",
    specialSubjectsValue: "6 subjects",
    practicalTrainingValue: "3 practices",
    
    // Semester Tabs
    semester1: "First Semester",
    semester2: "Second Semester",
    semester3: "Third Semester",
    semester4: "Fourth Semester",
    semesterFinal: "Final Stage",
    
    // Semester 1
    sem1Title: "Automotive Engine Basics",
    sem1Subtitle: "In this section, introduction to engine structure, operating principles and diagnostic basics.",
    sem1Desc: "During the semester, students learn the main parts of automobile engines, master simple diagnostic methods and implement first projects. As a result, a solid theoretical foundation is formed.",
    
    // Semester 2
    sem2Title: "Diagnostic Techniques",
    sem2Subtitle: "Diagnostic tools and methods.",
    sem2Desc: "Students learn methods of identifying engine malfunctions, apply diagnostic programs and work on real examples, and also develop teamwork skills.",
    
    // Semester 3
    sem3Title: "Advanced Repair",
    sem3Subtitle: "Repairing and replacing engine parts.",
    sem3Desc: "In this section, students learn complex repair technologies, modern tools and safety standards, and also work on individual projects.",
    
    // Semester 4
    sem4Title: "Practice and Projects",
    sem4Subtitle: "Practice at auto service enterprises.",
    sem4Desc: "During the semester, students practice on real cars, develop independent repair projects and defend them.",
    
    // Semester Final
    semFinalTitle: "Profession, Qualification and Diploma",
    semFinalSubtitle: "Diploma on successful completion of the educational institution.",
    semFinalDesc: "Students receive a secondary specialized diploma, as well as advice on finding a job in their field and recommendations for career development.",

    ////////////////////////////////////////////
    // Bank Management Course Details
    bankCourseTitle: "Banking Operations Supervisor: Banking Operations Control and Financial Security",
    bankCourseDesc: "During the banking operations supervisor course, students learn to control banking operations, analyze financial reports, manage risks and banking legislation. The course is conducted through theoretical lessons and practical exercises, working on real banking scenarios. After completing the course, you will be able to work as a professional supervisor in the banking and financial system and effectively control financial processes.",
    professionalSubjectsValue5: "5 subjects",
    specialSubjectsValue4: "4 subjects",
    
    // Bank Management Semesters
    bankSem1Title: "Fundamentals of Banking System",
    bankSem1Subtitle: "In this section, introduction to banking activities, financial institutions and legal fundamentals.",
    bankSem1Desc: "During the semester, students learn the main types of banking operations, understand financial reports and master the first control techniques. As a result, a solid theoretical foundation is formed.",
    
    bankSem2Title: "Financial Analysis",
    bankSem2Subtitle: "Analyzing bank reports and assessing risks.",
    bankSem2Desc: "Students learn methods of analyzing financial indicators, develop risk management strategies and work on real examples, and also develop teamwork skills.",
    
    bankSem3Title: "Advanced Control Techniques",
    bankSem3Subtitle: "Bank internal control and audit methods.",
    bankSem3Desc: "In this section, students learn modern control programs, detecting financial fraud and international standards, and also work on individual projects.",
    
    bankSem4Title: "Practice and Projects",
    bankSem4Subtitle: "Practice at banking institutions.",
    bankSem4Desc: "During the semester, students practice in real banks, develop independent control projects and defend them.",

    ////////////////////////////
    // Barber Course Details
    barberCourseTitle: "Barbering: The Art of Haircut and Styling",
    barberCourseDesc: "During the barbering course, students master haircutting techniques, styling, coloring, care and client communication skills. The course is conducted through theoretical and practical classes, working on real models. After completing the course, you will be able to work as a professional barber in beauty salons and barbershops and have the opportunity to create modern hairstyles.",
    barberCourseName: "Barber (Stylist)",
    generalSubjectsValue14: "14 subjects",
    
    // Barber Semesters
    barberSem1Title: "Barbering Fundamentals",
    barberSem1Subtitle: "In this section, introduction to tools, hygiene and hair structure.",
    barberSem1Desc: "During the semester, students learn to use barbering tools, simple haircutting techniques and client communication. As a result, a solid theoretical and practical foundation is formed.",
    
    barberSem2Title: "Men's Hairstyles",
    barberSem2Subtitle: "Classic and modern men's haircuts.",
    barberSem2Desc: "Students learn to create various men's hairstyles, master working with scissors and clippers, and practice on real models.",
    
    barberSem3Title: "Women's and Children's Hairstyles",
    barberSem3Subtitle: "Women's haircuts, styling and coloring.",
    barberSem3Desc: "In this section, students learn women's and children's hairstyles, coloring techniques and modern trends, and also work on individual projects.",
    
    barberSem4Title: "Practice and Projects",
    barberSem4Subtitle: "Practice at beauty salons.",
    barberSem4Desc: "During the semester, students practice in real barbershops, build their portfolios and present final projects.",

    ////////////////////////////////
    // Barber Course Details
    barberCourseTitle: "Barbering: The Art of Haircut and Styling",
    barberCourseDesc: "During the barbering course, students master haircutting techniques, styling, coloring, care and client communication skills. The course is conducted through theoretical and practical classes, working on real models. After completing the course, you will be able to work as a professional barber in beauty salons and barbershops and have the opportunity to create modern hairstyles.",
    barberCourseName: "Barber (Stylist)",
    generalSubjectsValue14: "14 subjects",
    
    // Barber Semesters
    barberSem1Title: "Barbering Fundamentals",
    barberSem1Subtitle: "In this section, introduction to tools, hygiene and hair structure.",
    barberSem1Desc: "During the semester, students learn to use barbering tools, simple haircutting techniques and client communication. As a result, a solid theoretical and practical foundation is formed.",
    
    barberSem2Title: "Men's Hairstyles",
    barberSem2Subtitle: "Classic and modern men's haircuts.",
    barberSem2Desc: "Students learn to create various men's hairstyles, master working with scissors and clippers, and practice on real models.",
    
    barberSem3Title: "Women's and Children's Hairstyles",
    barberSem3Subtitle: "Women's haircuts, styling and coloring.",
    barberSem3Desc: "In this section, students learn women's and children's hairstyles, coloring techniques and modern trends, and also work on individual projects.",
    
    barberSem4Title: "Practice and Projects",
    barberSem4Subtitle: "Practice at beauty salons.",
    barberSem4Desc: "During the semester, students practice in real barbershops, build their portfolios and present final projects.",

    /////////////////////////////
    // Cooking Course Details
    cookingCourseTitle: "Cooking: The Art of Preparing National and International Dishes",
    cookingCourseDesc: "During the cooking course, students learn kitchen hygiene, food processing, and techniques for preparing national and international dishes. The course is conducted through theoretical and practical classes, working on real kitchen projects. After completing the course, you will be able to work as a professional chef in the restaurant and hotel industry and have the opportunity to prepare delicious dishes.",
    cookingCourseName: "Cooking",
    generalSubjectsValue13: "13 subjects",
    professionalSubjectsValue7: "7 subjects",
    specialSubjectsValue4: "4 subjects",
    practicalTrainingValue4: "4 practices",
    
    // Cooking Semesters
    cookingSem1Title: "Cooking Fundamentals",
    cookingSem1Subtitle: "In this section, introduction to kitchen hygiene, products and equipment.",
    cookingSem1Desc: "During the semester, students learn kitchen rules, knife skills and simple food preparation. As a result, a solid theoretical and practical foundation is formed.",
    
    cookingSem2Title: "National Dishes",
    cookingSem2Subtitle: "Uzbek national dishes: pilaf, kebab, samsa and others.",
    cookingSem2Desc: "Students learn traditional recipes, master ingredient selection and preparation techniques, and also develop teamwork skills.",
    
    cookingSem3Title: "International Cuisine",
    cookingSem3Subtitle: "European, Asian and other regional dishes.",
    cookingSem3Desc: "In this section, students learn international recipes, modern cooking methods and food presentation, and also work on individual projects.",
    
    cookingSem4Title: "Practice and Projects",
    cookingSem4Subtitle: "Practice in restaurant and cafe kitchens.",
    cookingSem4Desc: "During the semester, students practice in real kitchens, compile menus and present final projects.",

    ///////////////////////////
    // Dress Designer Course Details
    dressDesignerCourseTitle: "Garment Designer: Fashion and Apparel Design",
    dressDesignerCourseDesc: "During the garment designer course, students master the basics of fashion design, sketching, color and shape selection, as well as skills in designing garment products. The course is conducted through theoretical and practical classes, working on real design projects. After completing the course, you will be able to work as a professional designer in the fashion industry and have the opportunity to create your own brand.",
    dressDesignerCourseName: "Garment Designer",
    generalSubjectsValue11: "11 subjects",
    professionalSubjectsValue5: "5 subjects",
    practicalTrainingValue2: "2 practices",
    
    // Dress Designer Semesters
    dressDesignerSem1Title: "Design Fundamentals",
    dressDesignerSem1Subtitle: "In this section, introduction to design principles, color theory and sketching.",
    dressDesignerSem1Desc: "During the semester, students learn the basic elements of design, draw their first sketches and receive information about fashion trends. As a result, creative thinking skills are developed.",
    
    dressDesignerSem2Title: "Fabrics and Materials",
    dressDesignerSem2Subtitle: "Types of fabrics, their characteristics and usage.",
    dressDesignerSem2Desc: "Students learn to choose different fabrics and create designs suitable for them, digitize sketches and implement first projects, and also participate in group projects.",
    
    dressDesignerSem3Title: "Advanced Design Techniques",
    dressDesignerSem3Subtitle: "Creating complex collections and brands.",
    dressDesignerSem3Desc: "In this section, students learn modern design software, fashion marketing and designing individual collections, and also create designs that meet real market demands.",
    
    dressDesignerSem4Title: "Practice and Portfolio",
    dressDesignerSem4Subtitle: "Practice at fashion enterprises.",
    dressDesignerSem4Desc: "During the semester, students practice in design studios, build their portfolios and present final projects.",

    //////////////////////////////////////////
    // Electrician Course Details
    electricianCourseTitle: "Electrician: Installation and Repair of Electrical Networks and Equipment",
    electricianCourseDesc: "During the electrician course, students master skills in designing electrical networks, installing wires and cables, repairing electrical equipment and safety rules. The course is conducted through theoretical and practical classes, working on real projects. After completing the course, you will be able to work as a professional electrician in the construction and industrial sectors and effectively manage electrical systems.",
    electricianCourseName: "Electrician",
    generalSubjectsValue14: "14 subjects",
    professionalSubjectsValue6: "6 subjects",
    specialSubjectsValue3: "3 subjects",
    
    // Electrician Semesters
    electricianSem1Title: "Electrical Engineering Fundamentals",
    electricianSem1Subtitle: "In this section, introduction to concepts of electric current, voltage and resistance.",
    electricianSem1Desc: "During the semester, students learn electrical circuits, work with tools and equipment, and implement first simple projects. As a result, a solid theoretical foundation is formed.",
    
    electricianSem2Title: "Electrical Network Installation",
    electricianSem2Subtitle: "Techniques for installing wires and cables.",
    electricianSem2Desc: "Students learn to design electrical networks, perform installation work and apply safety rules, and also develop teamwork skills.",
    
    electricianSem3Title: "Advanced Electrical Equipment",
    electricianSem3Subtitle: "Transformers, generators and automation systems.",
    electricianSem3Desc: "In this section, students learn to repair complex electrical systems, perform diagnostics and modern technologies, and also work on individual projects.",
    
    electricianSem4Title: "Practice and Projects",
    electricianSem4Subtitle: "Practice at industrial enterprises.",
    electricianSem4Desc: "During the semester, students practice at real facilities, develop independent projects and defend them.",

    ///////////////////////////////
    // Graphic Design Course Details
    graphicDesignCourseTitle: "Computer Graphics and Design: Digital Graphics and Visual Design",
    graphicDesignCourseDesc: "During the computer graphics and design course, students master skills in working with graphics programs (e.g., Adobe Photoshop, Illustrator), visual design principles, web design and 3D modeling. The course is conducted through theoretical and practical classes, working on real design projects. After completing the course, you will be able to work as a professional graphic designer in advertising, web and multimedia fields and implement creative projects.",
    graphicDesignCourseName: "Computer Graphics and Design",
    
    // Graphic Design Semesters
    graphicDesignSem1Title: "Graphic Design Fundamentals",
    graphicDesignSem1Subtitle: "In this section, introduction to design principles, color theory and graphics programs.",
    graphicDesignSem1Desc: "During the semester, students learn the basic functions of graphics programs, create first projects and develop creative thinking skills. As a result, a solid theoretical foundation is formed.",
    
    graphicDesignSem2Title: "Vector and Raster Graphics",
    graphicDesignSem2Subtitle: "Working with Illustrator and Photoshop programs.",
    graphicDesignSem2Desc: "Students learn to create vector graphics, edit images and combine design elements, work on real projects and develop teamwork skills.",
    
    graphicDesignSem3Title: "Advanced Design Techniques",
    graphicDesignSem3Subtitle: "Web design, UI/UX and 3D modeling.",
    graphicDesignSem3Desc: "In this section, students learn modern design software, website design and mobile app interfaces, and also work on individual projects.",
    
    graphicDesignSem4Title: "Practice and Projects",
    graphicDesignSem4Subtitle: "Practice at advertising agencies.",
    graphicDesignSem4Desc: "During the semester, students practice in design studios, develop independent projects and defend them.",

    //////////////////////////
    // Data Processing Course Details
    dataProcessingCourseTitle: "Digital Information Processing Specialist: Data Processing and Analysis",
    dataProcessingCourseDesc: "During the digital information processing specialist course, students master skills in working with databases, programming basics, data analysis and applying digital technologies. The course is conducted through theoretical and practical classes, working on real data projects. After completing the course, you will be able to work as a professional data specialist in IT and business fields and have the ability to effectively process information.",
    dataProcessingCourseName: "Digital Information Processing Specialist",
    
    // Data Processing Semesters
    dataProcessingSem1Title: "Digital Information Fundamentals",
    dataProcessingSem1Subtitle: "In this section, introduction to data types, programming basics and databases.",
    dataProcessingSem1Desc: "During the semester, students learn the basic methods of storing and processing digital information, write simple programs and implement first projects. As a result, a solid theoretical foundation is formed.",
    
    dataProcessingSem2Title: "Data Analysis",
    dataProcessingSem2Subtitle: "Data statistics and analysis tools.",
    dataProcessingSem2Desc: "Students learn data analysis methods, apply languages like Python and SQL, process real datasets and participate in group projects.",
    
    dataProcessingSem3Title: "Advanced Processing Techniques",
    dataProcessingSem3Subtitle: "Big data and machine learning basics.",
    dataProcessingSem3Desc: "In this section, students learn to process large datasets, visualize data and simple algorithms, and also work on individual projects.",
    
    dataProcessingSem4Title: "Practice and Projects",
    dataProcessingSem4Subtitle: "Practice at IT companies.",
    dataProcessingSem4Desc: "During the semester, students practice at real enterprises, develop independent data projects and defend them.",

    ////////////////////////////////////////
    // Tailoring Course Details
    tailoringCourseTitle: "Tailoring: Clothing Sewing and Design Basics",
    tailoringCourseDesc: "During the tailoring course, students master skills in working with sewing machines, selecting fabrics, drawing patterns and sewing clothing. The course is conducted through practical classes and working on real projects. After completing the course, you will be able to work as a professional tailor and find your place in the fashion industry.",
    tailoringCourseName: "Tailoring",
    
    // Tailoring Semesters
    tailoringSem1Title: "Tailoring Fundamentals",
    tailoringSem1Subtitle: "In this section, introduction to sewing machines, tools and types of fabrics.",
    tailoringSem1Desc: "During the semester, students learn the basic techniques of tailoring, draw simple patterns and sew first simple items. As a result, a solid theoretical and practical foundation is formed.",
    
    tailoringSem2Title: "Pattern and Cutting",
    tailoringSem2Subtitle: "Techniques for drawing and cutting clothing patterns.",
    tailoringSem2Desc: "Students learn to create patterns for various types of clothing, cut fabrics and implement first projects, and also develop teamwork skills.",
    
    tailoringSem3Title: "Advanced Sewing Techniques",
    tailoringSem3Subtitle: "Sewing complex clothing and accessories.",
    tailoringSem3Desc: "In this section, students learn modern sewing methods, decorative elements and fashion trends, and also work on individual projects.",
    
    tailoringSem4Title: "Practice and Projects",
    tailoringSem4Subtitle: "Practice in real production process.",
    tailoringSem4Desc: "During the semester, students practice at enterprises, develop independent projects and defend them.",

    ////////////////////////////////
    // Welding Course Details
    weldingCourseTitle: "Welder: Metal Welding and Processing",
    weldingCourseDesc: "During the welder course, students learn welding technologies, working with tools and equipment, types of metals and safety rules. The course is conducted through theoretical and practical classes, working on real projects. After completing the course, you will be able to work as a professional welder in the construction and industrial sectors and effectively weld metal structures.",
    weldingCourseName: "Welder",
    
    // Welding Semesters
    weldingSem1Title: "Welding Fundamentals",
    weldingSem1Subtitle: "In this section, introduction to types of welding, tools and metals.",
    weldingSem1Desc: "During the semester, students learn the basic techniques of welding, implement simple projects and master safety rules. As a result, a solid theoretical foundation is formed.",
    
    weldingSem2Title: "Practical Welding",
    weldingSem2Subtitle: "Electric welding and gas welding techniques.",
    weldingSem2Desc: "Students learn various welding methods, weld metals and work on real projects, and also develop teamwork skills.",
    
    weldingSem3Title: "Advanced Technologies",
    weldingSem3Subtitle: "Laser and plasma welding.",
    weldingSem3Desc: "In this section, students learn modern welding methods, quality control and metal processing, and also work on individual projects.",
    
    weldingSem4Title: "Practice and Projects",
    weldingSem4Subtitle: "Practice at industrial enterprises.",
    weldingSem4Desc: "During the semester, students practice at real facilities, develop independent projects and defend them.",

    /////////////////////////////////////
    ////////////////////////////////////
    // Dual Education Course Info
    tailorCourseName: "Tailoring",
    studyFormValueDual: "Dual education",
    diplomaValueProfessional: "Professional",
    
    // Dual Education Modules
    naturalHumanitarianModules: "Natural and Humanitarian Modules",
    naturalHumanitarianModulesValue: "9 modules",
    specializationModules: "Specialization Modules",
    specializationModulesValue: "5 modules",
    professionalModules: "Professional Modules",
    professionalModulesValue: "5 modules",
    electiveModules: "Elective Modules",
    electiveModulesValue: "4 modules",
  },
  
  rus: {
    // Navigation
    home: "Главная",
    kafedra: "Кафедра",
    courses: "Направления",
    courseTypeOne: "Очная форма обучения",
    courseTypeTwo: "Двойная форма обучения",
    courseTypeThree: "Заочная форма обучения",
    courseTypeFour: "Краткосрочная форма обучения",
    teachers: "Преподаватели",
    events: "Мероприятия",
    contact: "Контакты",
    apply: "Регистрация",
    
    // Hero Section
    heroTitle: "Профессия — это основа жизни",
    heroSubtitle: "Мы превращаем хороших студентов в специалистов своего дела!",
    heroButton: "Регистрация",
    
    // About Section
    aboutTitle: "Мы не обучаем лучших — мы делаем лучше",
    aboutDesc: "Мы готовим наших студентов к реальному рынку труда. Образовательный процесс проводится в гармонии теории и практики.",
    aboutPoint1: "Обучение, основанное на практических занятиях.",
    aboutPoint2: "Обучение с опытными преподавателями.",
    aboutPoint3: "Подготовка по востребованным профессиям.",
    readMore: "Подробнее",
    
    // Stats Section
    statsStudents: "Студенты",
    statsCourses: "Направления",
    statsEvents: "Мероприятия",
    statsTeachers: "Педагоги и Наставники",
    
    // Why Us Section
    whyTitle: "Почему выбирают нас?",
    whyDesc: "Мы предоставляем практические знания и образование, ориентированное на реальные профессии. Образовательный процесс организован в соответствии с современными требованиями, с вниманием к тому, чтобы каждый студент стал профессионалом.",
    whyBox1Title: "Практическое обучение",
    whyBox1Desc: "Через занятия, проводимые в гармонии теории и практики, студенты готовятся к реальным рабочим процессам.",
    whyBox2Title: "Опытные преподаватели",
    whyBox2Desc: "Знания и навыки, предоставляемые преподавателями с многолетним опытом, обеспечивают качественное образование.",
    whyBox3Title: "Востребованные профессии",
    whyBox3Desc: "Современные и практические образовательные направления по профессиям, которые пользуются высоким спросом на рынке труда.",
    
    // Courses
    tailor: "Портной",
    dressDesigner: "Дизайнер одежды",
    bankManagement: "Банковское управление",
    graphicDesigner: "Компьютерная графика и дизайн",
    computerSciense: "Инженер по цифровой обработке информации",
    electroEngeneer: "Инженер-электрик",
    automechanic: "Диагностика и ремонт автомобильных двигателей",
    welder: "Сварщик",
    cook: "Кулинари",
    barber: "Парикмахер",
    bugaltery: "Бухгалтерский учет-аудит",
    computerEngineering: "Компьютерная инженерия",
    electrostation: "Электростанции и сети",
    dual: "Дуал",
    years: "2 ГОДА",
    homeGraphicHeader: "Графический дизайн и 3D-моделирование",
    homeGraphicContext: "Вы научитесь создавать визуальный дизайн и 3D-модели с помощью Photoshop, Blender и других программ для дизайна.",
    homeTailorHeader: "Профессиональный пошив",
    homeTailorContext: "Вы изучите основные и практические методы пошива. Вы освоите процессы выбора тканей, снятия мерок, раскроя и пошива шаг за шагом.",
    homeBankHeader: "Контроль ситуации в банке",
    homeBankContext: "Вы научитесь контролировать банковские операции, работать с финансовыми документами и соблюдать внутренние правила.",
    
    // Courses Section
    coursesTitle: "Направления",
    coursesSubtitle: "Популярные направления",
    stageOne: "Директор",
    stageOneContext: "Директор руководит общей деятельностью образовательного учреждения, несет полную ответственность за организацию и развитие образовательного процесса, финансово-экономические вопросы, кадровую политику и систему управления.",
    stageTwo: "Заместитель директора по учебной работе.",
    stageTwoContext: "Заместитель директора по учебной работе — это сотрудник, ответственный за планирование, организацию, координацию и контроль образовательного процесса в образовательном учреждении.",
    stageThree: "Заместитель директора по делам молодежи.",
    stageThreeContext: "Заместитель директора по делам молодежи — это высокопоставленный сотрудник, ответственный за духовно-нравственное воспитание учащихся, осмысленную организацию их свободного времени и реализацию государственной молодежной политики в образовательном учреждении.",

    // Footer
    footerStreet: "Улица Yoshlik 18Б",
    footerRegion: "Фергана, Узбекистан",
    footerPhone: "Телефон",
    footerLinks: "Полезные ссылки",
    footerServices: "Наши услуги",
    footerNewsletter: "Подпишитесь на нашу рассылку",
    footerNewsletterDesc: "Получайте последние новости о наших продуктах и услугах!",
    footerCopyright: "Авторское право",
    footerRights: "Все права защищены",
    
    // Footer Links
    footerHome: "Главная",
    footerAbout: "О нас",
    footerCourses: "Направления",
    footerEvents: "Мероприятия",
    footerHelp: "Помощь",
    
    // Footer Services
    serviceWebDesign: "Веб-дизайн",
    serviceWebDev: "Веб-разработка",
    serviceProduct: "Управление продуктом",
    serviceMarketing: "Маркетинг",
    serviceGraphic: "Графический дизайн",

    ///////////////////////////////////////////
    // Courses-Page
    coursesPageTitle: "Программы очного обучения",
    coursesPageDesc: "Наш учебный центр предлагает современные курсы по наиболее востребованным профессиям на рынке труда. Каждая программа организована на основе практических занятий и реальных проектов, что обеспечивает готовность наших выпускников к трудоустройству.",
    breadcrumbCourses: "Очное обучение",
    breadcrumbDualCourses: "Двойное образование",
    dualCoursesPageTitle: "Области дуального образования",

    // Course Titles
    tailorTitle: "Портной женской, мужской, детской одежды",
    dressDesignerTitle: "Портняжное дело и дизайн",
    bankManagementTitle: "Банковский контролер-кассир",
    graphicDesignerTitle: "Графический дизайн и 3D моделирование",
    computerScienseTitle: "Специалист по обработке цифровой информации-Администратор веб-контента",
    electroEngeneerTitle: "Электромонтер",
    automechanicTitle: "Автомеханик",
    welderTitle: "Сварочные работы",
    cookTitle: "Повар-кондитер",
    barberTitle: "Искусство парикмахерского дела",
    
    // Course Descriptions
    tailorDesc: "Вы изучите основные и практические методы портняжного дела. Поэтапно освоите процессы выбора ткани, снятия мерок, раскроя и шитья. В ходе курса проводится реальная практика по изготовлению повседневной одежды и изделий на заказ.",
    dressDesignerDesc: "Вы изучите процессы проектирования и дизайна швейных изделий. Развите навыки создания моделей одежды, рисования эскизов, выбора материалов и адаптации дизайна к практическому процессу шитья. Также анализ современных модных тенденций и работа над индивидуальным дизайном на основе требований заказчиков.",
    bankManagementDesc: "Вы приобретете знания и навыки контроля банковских операций, работы с финансовыми документами и проверки соблюдения внутренних правил. Также познакомитесь с методами анализа расчетов, выявления финансовых рисков и обеспечения прозрачности и точности в банковской деятельности.",
    graphicDesignerDesc: "Вы научитесь создавать визуальные дизайны и 3D-модели с использованием программ Photoshop и Blender. Разовьете практические навыки работы с логотипами, баннерами, рекламными материалами и 3D-объектами.",
    computerScienseDesc: "Полный курс по созданию современных веб-сайтов. Углубленно изучите HTML, CSS, JavaScript, Bootstrap и другие технологии. Работаем над реальными проектами.",
    electroEngeneerDesc: "Вы получите практические знания по установке, подключению, настройке и ремонту электрических сетей и оборудования. Также будут сформированы такие навыки, как соблюдение правил электробезопасности, выявление и устранение неисправностей.",
    automechanicDesc: "Вы изучите принципы работы автомобильных двигателей, выявление неисправностей и процессы их ремонта. Разовьете практические навыки работы с системами двигателя, топливными и охлаждающими системами.",
    welderDesc: "Вы изучите основные методы и технологии сварочных работ. Получите практические навыки сварки, соединения и укрепления металлических конструкций. В ходе курса проводятся реальные практические занятия при строгом соблюдении правил безопасности.",
    cookDesc: "Вы изучите основные технологии приготовления пищи, методы правильного выбора и обработки продуктов. Разовьете практические навыки приготовления национальных и современных блюд, кухонной гигиены и соблюдения санитарных правил.",
    barberDesc: "В процессе обучения студенты учатся работать с настоящим парикмахерским оборудованием, соблюдать правила гигиены и безопасности, выбирать прически и формы бороды, подходящие к структуре лица. Занятия проводятся в основном в практической форме под наблюдением опытных преподавателей.",
    ////////////////////////// Kafedra
    // Kafedra Page
    kafedraPageTitle: "Кафедры",
    kafedraPageDesc: "Наша цель – превратить каждого молодого человека в успешного специалиста, обучая их современным и востребованным профессиям. Благодаря практическому образованию и помощи опытных преподавателей наши студенты выходят готовыми к реальному рынку труда.",
    breadcrumbKafedra: "О нас",
    
    // Languages Department
    langDeptTitle: "Кафедра языков",
    langDeptDesc: "Формирование у студентов техникума коммуникативной компетенции по национальным и иностранным языкам, профессионального словаря и навыков общения, совершенствование методики преподавания языков.",
    langDeptPoint1: "Контроль выполнения учебных планов и учебных программ, организация необходимых мероприятий.",
    langDeptPoint2: "Планирование работы преподавателей кафедры, определение и наблюдение за занятиями.",
    langDeptPoint3: "Организация методических консультаций, содействие повышению квалификации преподавателей.",
    langDeptPoint4: "Разработка и обновление учебных материалов, учебников и методических рекомендаций.",
    langDeptPoint5: "Проведение мероприятий в соответствии с республиканской и региональной языковой политикой.",
    langDeptPoint6: "Представление документов, отчетов и информации кафедры.",
    
    // Special Subjects Department
    specialDeptTitle: "Кафедра специальных предметов",
    specialDeptDesc: "Формирование практических компетенций в преподавании специальных предметов по направлениям профессионального образования техникума, координация учебных программ и практики.",
    specialDeptPoint1: "Разработка учебных программ по специальным предметам и их связь с практикой.",
    specialDeptPoint2: "Обеспечение соответствия лабораторий, мастерских и оборудования учебному процессу.",
    specialDeptPoint3: "Координация опыта преподавателей и мастеров-преподавателей.",
    specialDeptPoint4: "Установление практического сотрудничества с предприятиями, организация мест практики.",
    specialDeptPoint5: "Контроль соблюдения требований безопасности и охраны труда.",
    specialDeptPoint6: "Подготовка отчетов и организационная работа по магистратуре/сертификации.",
    
    // Natural Sciences Department
    scienceDeptTitle: "Кафедра точных и естественных наук",
    scienceDeptDesc: "Развитие аналитических и научных навыков мышления студентов путем интеграции точных и естественных наук, таких как математика, физика, химия и биология с программами техникума.",
    scienceDeptPoint1: "Координация учебных программ и расписания занятий.",
    scienceDeptPoint2: "Организация лабораторного оборудования и открытых практических занятий.",
    scienceDeptPoint3: "Управление методической работой и поощрение научно-исследовательской работы.",
    scienceDeptPoint4: "Организация работы по повышению квалификации преподавателей.",
    scienceDeptPoint5: "Мониторинг качества уроков и результатов обучения.",
    
    // Digital Information Processing Department
    digitalDeptTitle: "Кафедра обработки цифровой информации",
    digitalDeptDesc: "Формирование профессиональных компетенций в области цифровых технологий, программирования, баз данных и информационных систем, а также подготовка кадров для отраслевых требований.",
    digitalDeptPoint1: "Разработка и обновление учебных программ по программированию, базам данных и информационным системам.",
    digitalDeptPoint2: "Организация и оснащение практических занятий (компьютерные классы, проекты).",
    digitalDeptPoint3: "Установление сотрудничества с IT-индустрией, организация стажировок и обучения.",
    digitalDeptPoint4: "Повышение технических и методических навыков преподавателей.",
    digitalDeptPoint5: "Контроль информационной безопасности и эксплуатации технического оборудования.",

    /////////////// Teachers
    // Teachers Page
    teachersPageTitle: "Преподаватели",
    teachersPageDesc: "Наша команда опытных преподавателей готова предоставить вам образование высочайшего качества. Они являются квалифицированными специалистами в своей области с практическим опытом.",
    
    // Subject Names
    subjectPhysics: "Физика",
    subjectMotherTongue: "Родной язык",
    subjectBusinessFundamentals: "Основы бизнеса",
    subjectITInformatics: "ИТ и информационные технологии",
    subjectEnglish: "Английский язык",
    subjectRussian: "Русский язык",
    subjectEducationMaster: "Мастер образования",
    subjectClothingDesigner: "Дизайнер одежды",
    subjectChQBT: "Начальное образование",
    subjectInformatics: "Информатика",
    subjectStage1Head: "Руководитель отдела 1-го этапа",
    subjectStage2Head: "Руководитель отдела 2-го этапа",
    subjectPsychologist: "Психолог",
     subjectInformatics2: "Информатика и информационные технологии",
     
     // Teacher Descriptions
     teacherPhysicsDesc: "Специалист с многолетним опытом в области физики. Обучает студентов законам физики в простой и понятной форме.",
     teacherMotherTongueDesc: "Опытный преподаватель с глубоким знанием родного языка. Уделяет внимание формированию правильной и беглой речи у учащихся.",
     teacherBusinessFundamentalsDesc1: "Опытный специалист в области основ бизнеса. Развивает у учащихся навыки предпринимательства и финансового мышления.",
     teacherBusinessFundamentalsDesc2: "Опытный специалист по основам бизнеса. Обучает студентов принципам предпринимательства и практическим бизнес-навыкам.",
     teacherITInformaticsDesc: "Квалифицированный преподаватель в области ИТ и информационных технологий. Направляет студентов в освоении цифровых технологий и практических навыков.",
     teacherEnglishDesc1: "Педагог с глубокими знаниями английского языка. Обучает студентов применению языка на повседневном и практическом уровне.",
     teacherEnglishDesc2: "Опытный преподаватель английского языка. Уделяет внимание развитию коммуникативных навыков и понимания у студентов.",
     teacherEnglishDesc3: "Преподаватель, специализирующийся на эффективном обучении английскому языку. Развивает словарный запас студентов и уверенную речь.",
     teacherEnglishDesc4: "Опытный преподаватель английского языка. Эффективно развивает коммуникативные и языковые навыки студентов.",
     teacherRussianDesc: "Опытный преподаватель русского языка. Обучает студентов правилам языка и коммуникативным навыкам в понятной форме.",
     teacherEducationMasterDesc1: "Опытный преподаватель в сфере образования. Стремится передавать знания студентам глубоко и ясно.",
     teacherEducationMasterDesc2: "Специалист с многолетним опытом в образовании. Уделяет внимание эффективному формированию знаний и навыков студентов.",
     teacherEducationMasterDesc3: "Опытный преподаватель в сфере образования. Стремится укреплять знания и навыки студентов.",
     teacherClothingDesignerDesc: "Опытный специалист в области дизайна одежды. Обучает студентов современным и творческим принципам дизайна.",
     teacherChQBTDesc: "Опытный специалист в области начального образования. Обучает детей чтению, письму и основным навыкам в комфортной и понятной форме.",
     teacherInformaticsDesc: "Опытный преподаватель информатики. Обучает студентов компьютерным технологиям и основам программирования в понятной форме.",
     teacherStage1HeadDesc: "Опытный руководитель отдела 1-го этапа. Эффективно управляет деятельностью отдела и поддерживает образовательный процесс.",
     teacherStage2HeadDesc: "Опытный руководитель отдела 2-го этапа. Эффективно управляет работой отдела и обеспечивает качество образовательного процесса.",
     teacherPsychologistDesc: "Опытный психолог. Помогает поддерживать и развивать психическое состояние студентов и учащихся.",
     teacherInformaticsDesc2: "Опытный преподаватель в области информатики и информационных технологий. Обучает студентов цифровым инструментам и современным технологиям практическим способом.",
     
     ///////////////// Events
     // Events Page
    eventsPageTitle: "Мероприятия и Новости",
    eventsPageDesc: "В нашем центре регулярно проводятся интересные семинары, мастер-классы и открытые уроки. Эти мероприятия дают вам возможность получить новые знания и пообщаться с опытными специалистами.",
    eventsPageBreadcrumb: "Мероприятия и Новости",

    ////////////// Contact
    // Contact Page
    contactPageTitle: "Контакты",
    contactPageDesc: "У вас есть вопросы? Свяжитесь с нами! Наши специалисты быстро ответят вам и предоставят всю необходимую информацию.",
    contactPageLocation: "Адрес",
    contactPagePhone: "Позвоните нам",
    contactPageEmail: "Напишите по электронной почте",

    ///////////// Course Details Pages
    // Course Details Automechanic 
    courseDetailsTitle: "Детали курса",
    courseDetailsDesc: "Здесь может быть краткое описание курса. Например: Наши курсы обучают вас новым навыкам и помогают развивать вашу карьеру.",
    breadcrumbDetails: "Детали курса",
    
    // Course Info Labels
    courseName: "Название курса",
    duration: "Продолжительность обучения",
    studyForm: "Форма обучения",
    diplomaCategory: "Категория диплома",
    schedule: "Расписание занятий",
    generalSubjects: "Общеобразовательные предметы",
    professionalSubjects: "Общепрофессиональные предметы",
    specialSubjects: "Специальные предметы",
    practicalTraining: "Учебная практика",
    
    // Course Info Values
    durationValue: "2 года / 4 семестра",
    studyFormValue: "Очная",
    diplomaValue: "Среднее специальное",
    scheduleValue: "08:00 - 12:50",
    generalSubjectsValue: "10 предметов",
    professionalSubjectsValue: "6 предметов",
    specialSubjectsValue: "6 предметов",
    practicalTrainingValue: "3 практики",
    
    // Semester Tabs
    semester1: "Первый семестр",
    semester2: "Второй семестр",
    semester3: "Третий семестр",
    semester4: "Четвертый семестр",
    semesterFinal: "Заключительный этап",
    
    // Semester 1
    sem1Title: "Основы автомобильных двигателей",
    sem1Subtitle: "В этом разделе знакомство со структурой двигателя, принципами работы и основами диагностики.",
    sem1Desc: "В течение семестра студенты изучают основные части автомобильных двигателей, осваивают простые методы диагностики и реализуют первые проекты. В результате формируется прочный теоретический фундамент.",
    
    // Semester 2
    sem2Title: "Техники диагностики",
    sem2Subtitle: "Диагностические инструменты и методы.",
    sem2Desc: "Студенты изучают методы выявления неисправностей двигателя, применяют диагностические программы и работают над реальными примерами, а также развивают навыки командной работы.",
    
    // Semester 3
    sem3Title: "Расширенный ремонт",
    sem3Subtitle: "Ремонт и замена частей двигателя.",
    sem3Desc: "В этом разделе студенты изучают сложные технологии ремонта, современные инструменты и стандарты безопасности, а также работают над индивидуальными проектами.",
    
    // Semester 4
    sem4Title: "Практика и проекты",
    sem4Subtitle: "Практика на автосервисных предприятиях.",
    sem4Desc: "В течение семестра студенты проходят практику на реальных автомобилях, разрабатывают самостоятельные ремонтные проекты и защищают их.",
    
    // Semester Final
    semFinalTitle: "Профессия, квалификация и диплом",
    semFinalSubtitle: "Диплом об успешном окончании учебного заведения.",
    semFinalDesc: "Студенты получают диплом о среднем специальном образовании, а также консультации по поиску работы в своей области и рекомендации по развитию карьеры.",

    ////////////////////////////////
    // Bank Management Course Details
    bankCourseTitle: "Контролер банковских операций: Контроль банковских операций и финансовая безопасность",
    bankCourseDesc: "В ходе курса контролера банковских операций студенты изучают контроль банковских операций, анализ финансовых отчетов, управление рисками и банковское законодательство. Курс проводится через теоретические занятия и практические упражнения, работу над реальными банковскими сценариями. После завершения курса вы сможете работать профессиональным контролером в банковской и финансовой системе и эффективно контролировать финансовые процессы.",
    professionalSubjectsValue5: "5 предметов",
    specialSubjectsValue4: "4 предмета",
    
    // Bank Management Semesters
    bankSem1Title: "Основы банковской системы",
    bankSem1Subtitle: "В этом разделе знакомство с банковской деятельностью, финансовыми институтами и правовыми основами.",
    bankSem1Desc: "В течение семестра студенты изучают основные виды банковских операций, понимают финансовые отчеты и осваивают первые методы контроля. В результате формируется прочный теоретический фундамент.",
    
    bankSem2Title: "Финансовый анализ",
    bankSem2Subtitle: "Анализ банковских отчетов и оценка рисков.",
    bankSem2Desc: "Студенты изучают методы анализа финансовых показателей, разрабатывают стратегии управления рисками и работают над реальными примерами, а также развивают навыки командной работы.",
    
    bankSem3Title: "Продвинутые техники контроля",
    bankSem3Subtitle: "Методы внутреннего банковского контроля и аудита.",
    bankSem3Desc: "В этом разделе студенты изучают современные программы контроля, выявление финансового мошенничества и международные стандарты, а также работают над индивидуальными проектами.",
    
    bankSem4Title: "Практика и проекты",
    bankSem4Subtitle: "Практика в банковских учреждениях.",
    bankSem4Desc: "В течение семестра студенты проходят практику в реальных банках, разрабатывают самостоятельные контрольные проекты и защищают их.",

    /////////////////////////////////
    // Barber Course Details
    barberCourseTitle: "Парикмахерское дело: Искусство стрижки и стайлинга",
    barberCourseDesc: "В ходе курса парикмахерского дела студенты осваивают техники стрижки, укладки, окрашивания, ухода и навыки общения с клиентами. Курс проводится через теоретические и практические занятия, работу на реальных моделях. После завершения курса вы сможете работать профессиональным парикмахером в салонах красоты и парикмахерских и иметь возможность создавать современные прически.",
    barberCourseName: "Парикмахер (стилист)",
    generalSubjectsValue14: "14 предметов",
    
    // Barber Semesters
    barberSem1Title: "Основы парикмахерского дела",
    barberSem1Subtitle: "В этом разделе знакомство с инструментами, гигиеной и структурой волос.",
    barberSem1Desc: "В течение семестра студенты учатся использовать парикмахерские инструменты, простые техники стрижки и общение с клиентами. В результате формируется прочная теоретическая и практическая основа.",
    
    barberSem2Title: "Мужские прически",
    barberSem2Subtitle: "Классические и современные мужские стрижки.",
    barberSem2Desc: "Студенты учатся создавать различные мужские прически, осваивают работу с ножницами и машинкой, практикуются на реальных моделях.",
    
    barberSem3Title: "Женские и детские прически",
    barberSem3Subtitle: "Женские стрижки, укладка и окрашивание.",
    barberSem3Desc: "В этом разделе студенты изучают женские и детские прически, техники окрашивания и современные тренды, а также работают над индивидуальными проектами.",
    
    barberSem4Title: "Практика и проекты",
    barberSem4Subtitle: "Практика в салонах красоты.",
    barberSem4Desc: "В течение семестра студенты проходят практику в реальных парикмахерских, формируют свои портфолио и представляют итоговые проекты.",

    ////////////////////////////////////////
    // Cooking Course Details
    cookingCourseTitle: "Кулинария: Искусство приготовления национальных и международных блюд",
    cookingCourseDesc: "В ходе курса кулинарии студенты изучают кухонную гигиену, обработку продуктов и техники приготовления национальных и международных блюд. Курс проводится через теоретические и практические занятия, работу над реальными кухонными проектами. После завершения курса вы сможете работать профессиональным поваром в ресторанной и гостиничной индустрии и иметь возможность готовить вкусные блюда.",
    cookingCourseName: "Кулинария",
    generalSubjectsValue13: "13 предметов",
    professionalSubjectsValue7: "7 предметов",
    specialSubjectsValue4: "4 предмета",
    practicalTrainingValue4: "4 практики",
    
    // Cooking Semesters
    cookingSem1Title: "Основы кулинарии",
    cookingSem1Subtitle: "В этом разделе знакомство с кухонной гигиеной, продуктами и оборудованием.",
    cookingSem1Desc: "В течение семестра студенты изучают правила кухни, навыки работы с ножом и простое приготовление пищи. В результате формируется прочная теоретическая и практическая основа.",
    
    cookingSem2Title: "Национальные блюда",
    cookingSem2Subtitle: "Узбекские национальные блюда: плов, шашлык, самса и другие.",
    cookingSem2Desc: "Студенты изучают традиционные рецепты, осваивают техники выбора и приготовления ингредиентов, а также развивают навыки командной работы.",
    
    cookingSem3Title: "Международная кухня",
    cookingSem3Subtitle: "Европейские, азиатские и другие региональные блюда.",
    cookingSem3Desc: "В этом разделе студенты изучают международные рецепты, современные методы приготовления и оформление блюд, а также работают над индивидуальными проектами.",
    
    cookingSem4Title: "Практика и проекты",
    cookingSem4Subtitle: "Практика на кухнях ресторанов и кафе.",
    cookingSem4Desc: "В течение семестра студенты проходят практику в реальных кухнях, составляют меню и представляют итоговые проекты.",

    ///////////////////////////
    // Dress Designer Course Details
    dressDesignerCourseTitle: "Дизайнер швейных изделий: Мода и дизайн одежды",
    dressDesignerCourseDesc: "В ходе курса дизайнера швейных изделий студенты осваивают основы модного дизайна, эскизирование, выбор цвета и формы, а также навыки проектирования швейных изделий. Курс проводится через теоретические и практические занятия, работу над реальными дизайн-проектами. После завершения курса вы сможете работать профессиональным дизайнером в модной индустрии и иметь возможность создать свой собственный бренд.",
    dressDesignerCourseName: "Дизайнер швейных изделий",
    generalSubjectsValue11: "11 предметов",
    professionalSubjectsValue5: "5 предметов",
    practicalTrainingValue2: "2 практики",
    
    // Dress Designer Semesters
    dressDesignerSem1Title: "Основы дизайна",
    dressDesignerSem1Subtitle: "В этом разделе знакомство с принципами дизайна, теорией цвета и эскизированием.",
    dressDesignerSem1Desc: "В течение семестра студенты изучают основные элементы дизайна, рисуют первые эскизы и получают информацию о модных тенденциях. В результате развиваются навыки креативного мышления.",
    
    dressDesignerSem2Title: "Ткани и материалы",
    dressDesignerSem2Subtitle: "Виды тканей, их характеристики и использование.",
    dressDesignerSem2Desc: "Студенты учатся выбирать различные ткани и создавать подходящие для них дизайны, оцифровывать эскизы и реализовывать первые проекты, а также участвуют в групповых проектах.",
    
    dressDesignerSem3Title: "Продвинутые техники дизайна",
    dressDesignerSem3Subtitle: "Создание сложных коллекций и брендов.",
    dressDesignerSem3Desc: "В этом разделе студенты изучают современные программы дизайна, маркетинг моды и проектирование индивидуальных коллекций, а также создают дизайны, соответствующие реальным требованиям рынка.",
    
    dressDesignerSem4Title: "Практика и портфолио",
    dressDesignerSem4Subtitle: "Практика на модных предприятиях.",
    dressDesignerSem4Desc: "В течение семестра студенты проходят практику в дизайн-студиях, формируют свои портфолио и представляют итоговые проекты.",

    /////////////////////////////////////////////////
    // Electrician Course Details
    electricianCourseTitle: "Электромонтер: Установка и ремонт электрических сетей и оборудования",
    electricianCourseDesc: "В ходе курса электромонтера студенты осваивают навыки проектирования электрических сетей, установки проводов и кабелей, ремонта электрооборудования и правил безопасности. Курс проводится через теоретические и практические занятия, работу над реальными проектами. После завершения курса вы сможете работать профессиональным электромонтером в строительной и промышленной сфере и эффективно управлять электрическими системами.",
    electricianCourseName: "Электромонтер",
    generalSubjectsValue14: "14 предметов",
    professionalSubjectsValue6: "6 предметов",
    specialSubjectsValue3: "3 предмета",
    
    // Electrician Semesters
    electricianSem1Title: "Основы электротехники",
    electricianSem1Subtitle: "В этом разделе знакомство с понятиями электрического тока, напряжения и сопротивления.",
    electricianSem1Desc: "В течение семестра студенты изучают электрические схемы, работают с инструментами и оборудованием, и реализуют первые простые проекты. В результате формируется прочный теоретический фундамент.",
    
    electricianSem2Title: "Монтаж электрических сетей",
    electricianSem2Subtitle: "Техники установки проводов и кабелей.",
    electricianSem2Desc: "Студенты учатся проектировать электрические сети, выполнять монтажные работы и применять правила безопасности, а также развивают навыки командной работы.",
    
    electricianSem3Title: "Продвинутое электрооборудование",
    electricianSem3Subtitle: "Трансформаторы, генераторы и системы автоматики.",
    electricianSem3Desc: "В этом разделе студенты учатся ремонтировать сложные электрические системы, проводить диагностику и осваивают современные технологии, а также работают над индивидуальными проектами.",
    
    electricianSem4Title: "Практика и проекты",
    electricianSem4Subtitle: "Практика на промышленных предприятиях.",
    electricianSem4Desc: "В течение семестра студенты проходят практику на реальных объектах, разрабатывают самостоятельные проекты и защищают их.",

    /////////////////////////////
    // Graphic Design Course Details
    graphicDesignCourseTitle: "Компьютерная графика и дизайн: Цифровая графика и визуальный дизайн",
    graphicDesignCourseDesc: "В ходе курса компьютерной графики и дизайна студенты осваивают навыки работы с графическими программами (например, Adobe Photoshop, Illustrator), принципы визуального дизайна, веб-дизайн и 3D-моделирование. Курс проводится через теоретические и практические занятия, работу над реальными дизайн-проектами. После завершения курса вы сможете работать профессиональным графическим дизайнером в рекламной, веб и мультимедийной сфере и реализовывать креативные проекты.",
    graphicDesignCourseName: "Компьютерная графика и дизайн",
    
    // Graphic Design Semesters
    graphicDesignSem1Title: "Основы графического дизайна",
    graphicDesignSem1Subtitle: "В этом разделе знакомство с принципами дизайна, теорией цвета и графическими программами.",
    graphicDesignSem1Desc: "В течение семестра студенты изучают основные функции графических программ, создают первые проекты и развивают навыки креативного мышления. В результате формируется прочный теоретический фундамент.",
    
    graphicDesignSem2Title: "Векторная и растровая графика",
    graphicDesignSem2Subtitle: "Работа с программами Illustrator и Photoshop.",
    graphicDesignSem2Desc: "Студенты учатся создавать векторную графику, редактировать изображения и объединять элементы дизайна, работают над реальными проектами и развивают навыки командной работы.",
    
    graphicDesignSem3Title: "Продвинутые техники дизайна",
    graphicDesignSem3Subtitle: "Веб-дизайн, UI/UX и 3D-моделирование.",
    graphicDesignSem3Desc: "В этом разделе студенты изучают современные программы дизайна, дизайн веб-сайтов и интерфейсы мобильных приложений, а также работают над индивидуальными проектами.",
    
    graphicDesignSem4Title: "Практика и проекты",
    graphicDesignSem4Subtitle: "Практика в рекламных агентствах.",
    graphicDesignSem4Desc: "В течение семестра студенты проходят практику в дизайн-студиях, разрабатывают самостоятельные проекты и защищают их.",

    //////////////////////////////////////////
    // Data Processing Course Details
    dataProcessingCourseTitle: "Специалист по обработке цифровой информации: Обработка и анализ данных",
    dataProcessingCourseDesc: "В ходе курса специалиста по обработке цифровой информации студенты осваивают навыки работы с базами данных, основы программирования, анализ данных и применение цифровых технологий. Курс проводится через теоретические и практические занятия, работу над реальными проектами данных. После завершения курса вы сможете работать профессиональным специалистом по данным в IT и бизнес-сфере и иметь возможность эффективно обрабатывать информацию.",
    dataProcessingCourseName: "Специалист по обработке цифровой информации",
    
    // Data Processing Semesters
    dataProcessingSem1Title: "Основы цифровой информации",
    dataProcessingSem1Subtitle: "В этом разделе знакомство с типами данных, основами программирования и базами данных.",
    dataProcessingSem1Desc: "В течение семестра студенты изучают основные методы хранения и обработки цифровой информации, пишут простые программы и реализуют первые проекты. В результате формируется прочный теоретический фундамент.",
    
    dataProcessingSem2Title: "Анализ данных",
    dataProcessingSem2Subtitle: "Статистика данных и инструменты анализа.",
    dataProcessingSem2Desc: "Студенты изучают методы анализа данных, применяют языки как Python и SQL, обрабатывают реальные наборы данных и участвуют в групповых проектах.",
    
    dataProcessingSem3Title: "Продвинутые техники обработки",
    dataProcessingSem3Subtitle: "Big data и основы машинного обучения.",
    dataProcessingSem3Desc: "В этом разделе студенты учатся обрабатывать большие наборы данных, визуализировать данные и простые алгоритмы, а также работают над индивидуальными проектами.",
    
    dataProcessingSem4Title: "Практика и проекты",
    dataProcessingSem4Subtitle: "Практика в IT-компаниях.",
    dataProcessingSem4Desc: "В течение семестра студенты проходят практику на реальных предприятиях, разрабатывают самостоятельные проекты данных и защищают их.",

    /////////////////////
    // Tailoring Course Details
    tailoringCourseTitle: "Портняжное дело: Основы шитья одежды и дизайна",
    tailoringCourseDesc: "В ходе курса портняжного дела студенты осваивают навыки работы со швейными машинами, выбора тканей, построения выкроек и шитья одежды. Курс проводится через практические занятия и работу над реальными проектами. После завершения курса вы сможете работать профессиональным портным и найти свое место в индустрии моды.",
    tailoringCourseName: "Портняжное дело",
    
    // Tailoring Semesters
    tailoringSem1Title: "Основы портняжного дела",
    tailoringSem1Subtitle: "В этом разделе знакомство со швейными машинами, инструментами и видами тканей.",
    tailoringSem1Desc: "В течение семестра студенты изучают основные техники портняжного дела, рисуют простые выкройки и шьют первые простые изделия. В результате формируется прочный теоретический и практический фундамент.",
    
    tailoringSem2Title: "Выкройка и раскрой",
    tailoringSem2Subtitle: "Техники построения и раскроя выкроек одежды.",
    tailoringSem2Desc: "Студенты учатся создавать выкройки различных видов одежды, раскраивать ткани и реализовывать первые проекты, а также развивают навыки командной работы.",
    
    tailoringSem3Title: "Продвинутые техники шитья",
    tailoringSem3Subtitle: "Шитье сложной одежды и аксессуаров.",
    tailoringSem3Desc: "В этом разделе студенты изучают современные методы шитья, декоративные элементы и модные тенденции, а также работают над индивидуальными проектами.",
    
    tailoringSem4Title: "Практика и проекты",
    tailoringSem4Subtitle: "Практика в реальном производственном процессе.",
    tailoringSem4Desc: "В течение семестра студенты проходят практику на предприятиях, разрабатывают самостоятельные проекты и защищают их.",

    //////////////////////////////
    // Welding Course Details
    weldingCourseTitle: "Сварщик: Сварка и обработка металлов",
    weldingCourseDesc: "В ходе курса сварщика студенты изучают технологии сварки, работу с инструментами и оборудованием, виды металлов и правила безопасности. Курс проводится через теоретические и практические занятия, работу над реальными проектами. После завершения курса вы сможете работать профессиональным сварщиком в строительной и промышленной сфере и эффективно сваривать металлические конструкции.",
    weldingCourseName: "Сварщик",
    
    // Welding Semesters
    weldingSem1Title: "Основы сварки",
    weldingSem1Subtitle: "В этом разделе знакомство с видами сварки, инструментами и металлами.",
    weldingSem1Desc: "В течение семестра студенты изучают основные техники сварки, реализуют простые проекты и осваивают правила безопасности. В результате формируется прочный теоретический фундамент.",
    
    weldingSem2Title: "Практическая сварка",
    weldingSem2Subtitle: "Электросварка и газовая сварка.",
    weldingSem2Desc: "Студенты изучают различные методы сварки, сваривают металлы и работают над реальными проектами, а также развивают навыки командной работы.",
    
    weldingSem3Title: "Продвинутые технологии",
    weldingSem3Subtitle: "Лазерная и плазменная сварка.",
    weldingSem3Desc: "В этом разделе студенты изучают современные методы сварки, контроль качества и обработку металлов, а также работают над индивидуальными проектами.",
    
    weldingSem4Title: "Практика и проекты",
    weldingSem4Subtitle: "Практика на промышленных предприятиях.",
    weldingSem4Desc: "В течение семестра студенты проходят практику на реальных объектах, разрабатывают самостоятельные проекты и защищают их.",

    ////////////////////////////////////
    ///////////////////////////////////
    // Dual Education Course Info
    tailorCourseName: "Портняжное дело",
    studyFormValueDual: "Двойное образование",
    diplomaValueProfessional: "Профессиональный",
    
    // Dual Education Modules
    naturalHumanitarianModules: "Естественные и гуманитарные модули",
    naturalHumanitarianModulesValue: "9 модулей",
    specializationModules: "Специализационные модули",
    specializationModulesValue: "5 модулей",
    professionalModules: "Профессиональные модули",
    professionalModulesValue: "5 модулей",
    electiveModules: "Элективные модули",
    electiveModulesValue: "4 модуля",
  }
};

// Get saved language or default to 'uzb'
let currentLang = localStorage.getItem('language') || 'uzb';

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  updatePageLanguage();
}

// Function to update all text on page
function updatePageLanguage() {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set the dropdown to current language
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.value = currentLang;
  }
  updatePageLanguage();
});