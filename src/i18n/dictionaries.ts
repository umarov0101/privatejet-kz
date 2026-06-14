export type Locale = "ru" | "kz" | "en";

export const LOCALES: Locale[] = ["ru", "kz", "en"];

export const LOCALE_LABEL: Record<Locale, string> = {
  ru: "RU",
  kz: "KZ",
  en: "EN",
};

export const PHONE = "+7 708 938 08 00";
export const PHONE_RAW = "77089380800";
export const TEL = "+77089380800";
export const WA_BASE = `https://wa.me/${PHONE_RAW}`;

export const wa = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

type Dict = {
  brand: string;
  tagline: string;
  nav: { home: string; fleet: string; services: string; contact: string };
  cta: { book: string; bookMsg: string; whatsapp: string; call: string; viewTariffs: string; discuss: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    badge1: string;
    badge2: string;
    badge3: string;
    badge4: string;
    badge5: string;
    badge6: string;
    scroll: string;
  };
  headlights: { eyebrow: string; title: string; sub: string };
  who: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    hint: string;
  };
  perks: {
    title: string;
    items: { t: string; d: string }[];
  };
  tariffs: {
    eyebrow: string;
    title: string;
    note: string;
    fromLabel: string;
    perHour: string;
    perDay: string;
    perRide: string;
    onRequest: string;
    individual: string;
    book: string;
    items: { name: string; price: string; unit?: string; desc: string; waText: string }[];
  };
  interior: { eyebrow: string; title: string; sub: string };
  videos: { eyebrow: string; title: string; sub: string };
  marquee: string[];
  airport: { eyebrow: string; title: string; sub: string };
  reviews: { eyebrow: string; title: string; sub: string; items: { name: string; role: string; text: string }[] };
  booking: {
    eyebrow: string;
    title: string;
    sub: string;
    dateLabel: string;
    pickDate: string;
    timeLabel: string;
    serviceLabel: string;
    services: string[];
    nameLabel: string;
    namePh: string;
    phoneLabel: string;
    phonePh: string;
    routeLabel: string;
    routePh: string;
    submit: string;
    errName: string;
    errDate: string;
    waHeader: string;
    waService: string;
    waDate: string;
    waName: string;
    successTitle: string;
    successSub: string;
    successNote: string;
    successReset: string;
    required: string;
  };
  finalCta: { title: string; sub: string; button: string };
  footer: { rights: string; city: string; hours: string; nav: string; address: string };
  fleetGallery: { eyebrow: string; title: string; sub: string };
  fleetPage: {
    title: string;
    sub: string;
    specTitle: string;
    spec: { label: string; value: string }[];
    feature: { t: string; d: string }[];
  };
  servicesPage: {
    title: string;
    sub: string;
    items: { name: string; price: string; desc: string; bullets: string[]; waText: string }[];
  };
  contactPage: {
    title: string;
    sub: string;
    callLabel: string;
    waLabel: string;
    hoursTitle: string;
    hoursValue: string;
    cityTitle: string;
    cityValue: string;
    addressTitle: string;
    addressValue: string;
    manager: string;
  };
  langSwitch: string;
};

const ru: Dict = {
  brand: "Private Jet KZ",
  tagline: "Астана · VIP трансфер",
  nav: { home: "Главная", fleet: "Автопарк", services: "Услуги", contact: "Контакты" },
  cta: {
    book: "Заказать в WhatsApp",
    bookMsg: "Здравствуйте, пишу с вашего сайта, хочу заказать трансфер",
    whatsapp: "WhatsApp",
    call: "Позвонить",
    viewTariffs: "Посмотреть тарифы",
    discuss: "Обсудить индивидуально",
  },
  hero: {
    eyebrow: "10 лет премиум-сервиса в Астане",
    title1: "VIP трансфер",
    title2: "в Астане.",
    subtitle:
      "Premium-трансфер на Hyundai Staria LUXE. Встречаем гостей, делегации и первых лиц — без опозданий, без лишних слов.",
    badge1: "10 лет на рынке",
    badge2: "3 000+ поездок",
    badge3: "Парк из 5 авто",
    badge4: "Капитанские кресла",
    badge5: "Опытные водители",
    badge6: "24/7 на связи",
    scroll: "Прокрутите вниз",
  },
  headlights: {
    eyebrow: "Включаем фары",
    title: "Подача — точно в минуту",
    sub: "Без звонков «я уже еду». Авто стоит у входа за 5 минут до согласованного времени.",
  },
  who: {
    eyebrow: "О нас",
    title: "VIP-трансфер с собственным автопарком",
    p1: "Private Jet KZ — это 5 одинаковых Hyundai Staria LUXE и команда водителей, которые ценят ваше время. Не диспетчерская, не такси — собственный автопарк с единым стандартом.",
    p2: "Тихий салон, чистота перед каждым выездом, капитанские кожаные кресла с оттоманками, тёплая подсветка. Вы получаете один и тот же уровень сервиса — какая бы машина ни приехала.",
    hint: "Откройте дверь — заглянем внутрь",
  },
  perks: {
    title: "Почему нас выбирают?",
    items: [
      { t: "Свой флот", d: "5 одинаковых Staria LUXE — без подмен «по ситуации»" },
      { t: "Единый стандарт", d: "Один уровень сервиса в каждой машине" },
      { t: "Тишина в салоне", d: "Шумоизоляция и капитанские кресла с оттоманками" },
      { t: "Подача вовремя", d: "Минута в минуту, никаких отговорок" },
      { t: "Помощь с багажом", d: "Вас встретит водитель в презентабельном виде с табличкой в руках" },
      { t: "Конфиденциальность", d: "Тонировка, шторки на окнах" },
    ],
  },
  tariffs: {
    eyebrow: "Тарифы",
    title: "Прозрачные цены — никаких сюрпризов",
    note: "Цены указаны от. Итоговая стоимость зависит от маршрута, времени подачи и продолжительности.",
    fromLabel: "от",
    perHour: "₸ / час",
    perDay: "₸ / день",
    perRide: "₸ / поездка",
    onRequest: "По запросу",
    individual: "Индивидуально",
    book: "Заказать",
    items: [
      {
        name: "VIP трансфер",
        price: "25 000",
        unit: "₸ / поездка",
        desc: "Из/в аэропорт, по городу, на встречу. Водитель встретит с табличкой и поможет с багажом.",
        waText: "Здравствуйте, хочу заказать VIP трансфер по Астане.",
      },
      {
        name: "Аренда по часам",
        price: "15 000",
        unit: "₸ / час",
        desc: "Машина и водитель в вашем распоряжении. Минимум 3 часа, маршрут — любой.",
        waText: "Здравствуйте, хочу арендовать Staria по часам.",
      },
      {
        name: "День",
        price: "150 000",
        unit: "₸ / день",
        desc: "12 часов, неограниченные поездки. Идеально для насыщенного рабочего дня.",
        waText: "Здравствуйте, хочу заказать Staria на полный день.",
      },
      {
        name: "Авто без водителя",
        price: "80 000",
        unit: "₸ / сутки",
        desc: "Hyundai Staria на 8–11 мест без водителя. От 3 суток — 75 000 ₸, от 10 суток — 69 000 ₸. Залог 50 000 ₸, лимит 200 км/сутки.",
        waText: "Здравствуйте, хочу арендовать Staria без водителя.",
      },
      {
        name: "Встреча делегаций",
        price: "Индивидуально",
        unit: "",
        desc: "От 2 машин и больше. Программа встречи, сопровождение, тайминг — под вашу задачу.",
        waText: "Здравствуйте, нужна встреча делегации в Астане.",
      },
    ],
  },
  interior: {
    eyebrow: "Капитанские кресла с оттоманками",
    title: "Здесь работают, отдыхают, обсуждают сделки",
    sub: "Кожа, тёплая подсветка, тишина. Бутылка воды — уже в держателе.",
  },
  videos: {
    eyebrow: "Видео",
    title: "Смотрите, как мы работаем",
    sub: "Реальные поездки, салон Staria LUXE и отзывы клиентов — на нашем YouTube-канале.",
  },
  marquee: [
    "10 ЛЕТ НА РЫНКЕ",
    "3000+ ПОЕЗДОК",
    "ПАРК ИЗ 5 АВТО",
    "КАПИТАНСКИЕ КРЕСЛА",
    "ОПЫТНЫЕ ВОДИТЕЛИ",
    "24/7 НА СВЯЗИ",
  ],
  airport: {
    eyebrow: "В аэропорту",
    title: "Встретим у выхода с табличкой",
    sub: "Астана (NQZ). Подача за 30 минут до прилёта, помощь с багажом, тёплый салон.",
  },
  reviews: {
    eyebrow: "Отзывы",
    title: "Что говорят клиенты",
    sub: "Постоянные гости, делегации и съёмочные группы — несколько историй из 10 лет работы.",
    items: [
      { name: "Айгерим Сагатова", role: "Продюсер · съёмки в Боровом", text: "Заказывали Staria на 3 дня в Боровое со съёмочной группой. Водитель Ербол приехал минута в минуту, помог с оборудованием, дорогой — тишина, можно было работать в ноутбуке. По возвращении машину подали к самому подъезду отеля. Уровень — как у частного джета, только на земле." },
      { name: "Дмитрий Власов", role: "Бизнес-поездка Астана — Омск", text: "Нужно было доехать до Омска без пересадок и нервов. Согласовали маршрут в WhatsApp за 10 минут. Чистый салон, две остановки в пути по моему запросу. Обратно — та же машина, тот же водитель. Большая редкость в Казахстане." },
      { name: "Алихан Бектуров", role: "Постоянный клиент · Алматы → Астана", text: "Прилетаю в Астану 2-3 раза в месяц, всегда заказываю Private Jet KZ. Машина уже стоит у выхода NQZ с табличкой, бутылка воды в держателе, маршрут в офис согласован заранее. За 2 года — ни одного опоздания." },
      { name: "Олег Краснов", role: "Встреча делегации", text: "Принимали партнёров из ОАЭ — нужны были 3 одинаковые машины. Получили ровно то, что обещали: 3 чёрные Staria LUXE, вежливые водители, координатор на связи. Гости были в восторге от салона." },
      { name: "Жанна Турлыбекова", role: "Деловой день в Астане", text: "Заказала на полный день: 4 встречи, обед, ужин. Водитель Санжар знал город идеально, между встречами в машине было удобно работать и созваниваться. Ни одной задержки. Оплата прозрачная, без сюрпризов." },
      { name: "Тимур Ахметов", role: "Свадебный кортеж · Астана", text: "Брал две Staria на свадьбу для родителей и почётных гостей. Машины подъехали украшенные по нашему запросу, водители вежливые, помогли пожилым гостям сесть. Фото на фоне авто — просто огонь. Спасибо команде!" },
    ],
  },
  booking: {
    eyebrow: "Бронь онлайн",
    title: "Забронируйте Трансфер за 30 секунд",
    sub: "Выберите дату и услугу — мы подтвердим заявку в WhatsApp в течение нескольких минут.",
    dateLabel: "Дата подачи",
    pickDate: "Выберите дату",
    timeLabel: "Время подачи",
    serviceLabel: "Услуга",
    services: ["VIP трансфер", "Аренда по часам", "Полный день", "Межгород", "Встреча делегации", "Авто без водителя"],
    nameLabel: "Ваше имя",
    namePh: "Имя",
    phoneLabel: "Телефон",
    phonePh: "+7 ___ ___ __ __",
    routeLabel: "Маршрут / комментарий",
    routePh: "Например: NQZ — отель Ritz Carlton",
    submit: "Отправить в WhatsApp",
    errName: "Введите ваше имя",
    errDate: "Выберите дату",
    waHeader: "Заявка с сайта Private Jet KZ",
    waService: "Услуга",
    waDate: "Дата",
    waName: "Имя",
    successTitle: "Заявка отправлена!",
    successSub: "Санат свяжется с вами в WhatsApp в течение нескольких минут.",
    successNote: "Работаем 24/7 — ответим быстро.",
    successReset: "Оформить ещё одну заявку",
    required: "— обязательные поля · остальное уточнит менеджер в WhatsApp",
  },
  finalCta: {
    title: "Закажите трансфер за один звонок",
    sub: "Менеджер на связи в WhatsApp. Ответ в течение нескольких минут.",
    button: "Написать в WhatsApp",
  },
  footer: {
    rights: "© Private Jet KZ — все права защищены",
    city: "г. Астана, Казахстан",
    hours: "24/7",
    nav: "Навигация",
    address: "ул. Толе Би 25/1",
  },
  fleetGallery: {
    eyebrow: "Наш автопарк",
    title: "Реальные авто — реальные поездки",
    sub: "Снято на наших выездах. 5 одинаковых Hyundai Staria LUXE — всегда в чистоте и готовности.",
  },
  fleetPage: {
    title: "Аренда Hyundai Staria LUXE с водителем в Астане",
    sub: "Собственный автопарк из 5 одинаковых Hyundai Staria LUXE в топовой комплектации LUXE. Все автомобили — ухоженные, с капитанскими кожаными креслами с оттоманками, тонировкой и шторами. Единый стандарт комфорта в каждой машине.",
    specTitle: "Опции трансфера",
    spec: [
      { label: "Мест для пассажиров", value: "до 6" },
      { label: "Капитанские кресла с оттоманками", value: "Кожа, подогрев" },
      { label: "Люк", value: "Панорамный · 2 ряда" },
      { label: "Тонированные окна со шторами", value: "Задние стёкла" },
      { label: "Багажник", value: "До 6 чемоданов" },
      { label: "Климат", value: "Многозонный" },
      { label: "Wi-Fi / Зарядки", value: "USB-C, Type-A" },
      { label: "Складные сиденья", value: "3-й ряд" },
      { label: "Усиленная печка", value: "Быстрый прогрев" },
      { label: "Бутылка воды", value: "В каждой поездке" },
    ],
    feature: [
      { t: "Тонированные окна со шторами", d: "Конфиденциальность во время поездки" },
      { t: "Автоматические двери", d: "Удобный вход для VIP-гостей" },
      { t: "Минимальный шум", d: "Шумоизоляция топ-уровня" },
      { t: "Чистота", d: "Полная мойка перед каждым выездом" },
    ],
  },
  servicesPage: {
    title: "VIP-трансфер в Астане",
    sub: "Private Jet KZ — собственный автопарк из 5 Hyundai Staria LUXE с водителями для VIP-трансфера в Астане. Трансфер из аэропорта NQZ, почасовая аренда, аренда на полный день, межгород и встреча делегаций. Подача минута в минуту, тихий салон, водитель в деловом виде.",
    items: [
      {
        name: "VIP трансфер по городу",
        price: "от 25 000 ₸",
        desc: "VIP-трансфер по Астане на Hyundai Staria LUXE: аэропорт NQZ, деловые встречи, рестораны, мероприятия. Водитель встречает с именной табличкой, помогает с багажом. Подача за 5 минут до назначенного времени — без звонков «я уже еду».",
        bullets: ["Подача за 5 минут до времени", "Водитель в презентабельном виде с табличкой", "Помощь с багажом", "Бутылка воды в салоне"],
        waText: "Здравствуйте, нужен VIP трансфер по Астане.",
      },
      {
        name: "Аренда по часам",
        price: "от 15 000 ₸ / час",
        desc: "Машина и водитель в вашем распоряжении на несколько часов. Минимум 3 часа. Идеально для деловых поездок с несколькими остановками, шопинга, прогулок по городу. Ожидание водителя включено в тариф.",
        bullets: ["Минимум 3 часа, любой маршрут по городу", "Ожидание включено в стоимость", "Несколько остановок без доплаты", "Тишина в салоне, климат-контроль"],
        waText: "Здравствуйте, хочу почасовую аренду Staria.",
      },
      {
        name: "Полный день",
        price: "от 150 000 ₸ / 12 часов",
        desc: "12 часов в вашем распоряжении без лимита поездок по городу. Оптимально для насыщенных рабочих дней с несколькими деловыми встречами. Водитель сопровождает весь день, ожидает между встречами, маршрут корректируется в режиме реального времени.",
        bullets: ["12 часов непрерывной работы", "Без лимита по километражу в городе", "Ожидание между встречами включено", "Идеально для дней с 3+ встречами"],
        waText: "Здравствуйте, хочу заказать Staria на день.",
      },
      {
        name: "Авто без водителя",
        price: "от 69 000 ₸ / сутки",
        desc: "Аренда Hyundai Staria на 8–11 мест без водителя в Астане. Вместительный минивэн для семьи, поездки большой компанией или рабочих задач. Чем дольше срок аренды — тем ниже суточная цена. При необходимости доставим машину по городу.",
        bullets: ["Hyundai Staria, 8–11 мест", "От 1 суток — 80 000 ₸ / сутки", "От 3 суток — 75 000 ₸ / сутки", "От 10 суток — 69 000 ₸ / сутки", "Возраст от 21 года, стаж от 3 лет (страховой класс от 8)", "Суточный лимит 200 км, залог 50 000 ₸", "Доставим машину по городу при необходимости"],
        waText: "Здравствуйте, интересует аренда Staria без водителя.",
      },
      {
        name: "Междугородние поездки",
        price: "от 200 ₸/км",
        desc: "VIP-трансфер из Астаны в любой город Казахстана. Популярные маршруты: Астана — Боровое (Бурабай, 240 км), Астана — Караганда (220 км), Астана — Кокшетау (270 км), Астана — Павлодар (440 км). Стоимость рассчитывается индивидуально по маршруту.",
        bullets: ["Расчёт по фактическому маршруту", "Опытный водитель, знающий трассы Казахстана", "Мульти-остановки по пути", "Комфорт на дальние расстояния — Staria LUXE"],
        waText: "Здравствуйте, нужен межгородской трансфер на Staria.",
      },
      {
        name: "Встреча делегаций",
        price: "Индивидуально",
        desc: "Организация VIP-встречи и сопровождения делегаций в Астане: от 2 автомобилей. Разрабатываем программу встречи, координируем тайминг, обеспечиваем единый стандарт сервиса для всех гостей. Опыт работы с иностранными делегациями, бизнес-партнёрами, официальными лицами.",
        bullets: ["От 2 автомобилей Hyundai Staria LUXE", "Координатор на связи весь день", "Единый стандарт сервиса для всей группы", "Опыт с иностранными делегациями"],
        waText: "Здравствуйте, обсудим встречу делегации.",
      },
    ],
  },
  contactPage: {
    title: "Связаться с нами",
    sub: "Менеджер на связи в WhatsApp 24/7. Ответ в течение нескольких минут.",
    callLabel: "Позвонить",
    waLabel: "Написать в WhatsApp",
    hoursTitle: "Часы работы",
    hoursValue: "Круглосуточно, 7 дней в неделю",
    cityTitle: "Город",
    cityValue: "Астана, Казахстан",
    addressTitle: "Адрес",
    addressValue: "ул. Толе би, 25/1, г. Астана",
    manager: "Санат · менеджер",
  },
  langSwitch: "Язык",
};

const kz: Dict = {
  brand: "Private Jet KZ",
  tagline: "Астана · VIP трансфер",
  nav: { home: "Басты бет", fleet: "Автопарк", services: "Қызметтер", contact: "Байланыс" },
  cta: {
    book: "WhatsApp арқылы тапсырыс",
    bookMsg: "Сәлем, сіздің сайтыңыздан жазып тұрмын, трансфер тапсырыс бергім келеді",
    whatsapp: "WhatsApp",
    call: "Қоңырау шалу",
    viewTariffs: "Тарифтерді көру",
    discuss: "Жеке талқылау",
  },
  hero: {
    eyebrow: "Астанада 10 жыл премиум қызмет",
    title1: "VIP трансфер",
    title2: "Астанада.",
    subtitle:
      "Hyundai Staria LUXE-те Premium трансфер. Қонақтарды, делегацияларды және бірінші тұлғаларды кешіктірмей қарсы аламыз.",
    badge1: "10 жыл нарықта",
    badge2: "3 000+ сапар",
    badge3: "5 көліктен парк",
    badge4: "Капитан орындықтар",
    badge5: "Тәжірибелі жүргізушілер",
    badge6: "24/7 байланыста",
    scroll: "Төмен айналдырыңыз",
  },
  headlights: {
    eyebrow: "Шамдарды қосамыз",
    title: "Көлік дәл уақытында",
    sub: "«Мен жолдамын» қоңыраулары болмайды. Автокөлік келісілген уақыттан 5 минут бұрын кіреберісте тұрады.",
  },
  who: {
    eyebrow: "Біз туралы",
    title: "Өз автопаркімен VIP-трансфер",
    p1: "Private Jet KZ — бұл 5 бірдей Hyundai Staria LUXE және сіздің уақытыңызды бағалайтын жүргізушілер тобы. Диспетчерлік емес, такси емес — біртұтас стандартпен өз автопарк.",
    p2: "Тыныш салон, әр шығу алдында тазалық, былғары капитан орындықтары, жылы жарық. Қандай көлік келсе де — бірдей сервис деңгейін аласыз.",
    hint: "Есікті ашыңыз — ішіне қарайық",
  },
  perks: {
    title: "Бізді неге таңдайды?",
    items: [
      { t: "Өз флоты", d: "5 бірдей Staria LUXE — алмастыру жоқ" },
      { t: "Бірыңғай стандарт", d: "Әр көлікте бірдей сервис деңгейі" },
      { t: "Салондағы тыныштық", d: "Шу оқшаулағыш және капитан орындықтар" },
      { t: "Уақытында келу", d: "Минут минутке, ешқандай сылтау жоқ" },
      { t: "Жүкке көмек", d: "Жүргізуші презентабельді түрде тақтайшамен қарсы алады" },
      { t: "Құпиялылық", d: "Тонировка, терезедегі шторлар" },
    ],
  },
  tariffs: {
    eyebrow: "Тарифтер",
    title: "Ашық бағалар — ешқандай тосын сый жоқ",
    note: "Бағалар «бастап» көрсетілген. Соңғы құн маршрутқа, уақытқа және ұзақтығына байланысты.",
    fromLabel: "бастап",
    perHour: "₸ / сағат",
    perDay: "₸ / күн",
    perRide: "₸ / сапар",
    onRequest: "Сұраныс бойынша",
    individual: "Жеке",
    book: "Тапсырыс беру",
    items: [
      {
        name: "VIP трансфер",
        price: "25 000",
        unit: "₸ / сапар",
        desc: "Әуежайға/әуежайдан, қала бойынша, кездесуге. Жүргізуші тақтайшамен қарсы алады.",
        waText: "Сәлем, Астана бойынша VIP трансфер тапсырыс бергім келеді.",
      },
      {
        name: "Сағаттық жалдау",
        price: "15 000",
        unit: "₸ / сағат",
        desc: "Көлік пен жүргізуші сіздің қарамағыңызда. Кемінде 3 сағат.",
        waText: "Сәлем, Staria-ны сағатпен жалдағым келеді.",
      },
      {
        name: "Күн",
        price: "150 000",
        unit: "₸ / күн",
        desc: "12 сағат, шектеусіз сапарлар. Қарбалас күнге өте қолайлы.",
        waText: "Сәлем, Staria-ны бүкіл күнге тапсырыс бергім келеді.",
      },
      {
        name: "Жүргізушісіз авто",
        price: "80 000",
        unit: "₸ / тәулік",
        desc: "8–11 орындық Hyundai Staria жүргізушісіз. 3 тәуліктен — 75 000 ₸, 10 тәуліктен — 69 000 ₸. Кепіл 50 000 ₸, лимит 200 км/тәулік.",
        waText: "Сәлем, Staria-ны жүргізушісіз жалдағым келеді.",
      },
      {
        name: "Делегацияларды қарсы алу",
        price: "Жеке",
        unit: "",
        desc: "2 көліктен бастап. Бағдарлама, ілесу, тайминг — сіздің тапсырмаңыз бойынша.",
        waText: "Сәлем, Астанада делегацияны қарсы алу керек.",
      },
    ],
  },
  interior: {
    eyebrow: "Капитан орындықтары оттоманкамен",
    title: "Мұнда жұмыс істейді, демалады, мәмілелерді талқылайды",
    sub: "Былғары, жылы жарық, тыныштық. Су бөтелкесі — қазір ұстағышта.",
  },
  videos: {
    eyebrow: "Видео",
    title: "Біздің жұмысты көріңіз",
    sub: "Нақты сапарлар, Staria LUXE салоны және клиент пікірлері — біздің YouTube арнамызда.",
  },
  marquee: [
    "10 ЖЫЛ НАРЫҚТА",
    "3000+ САПАР",
    "5 КӨЛІКТЕН ПАРК",
    "КАПИТАН ОРЫНДЫҚТАР",
    "ТӘЖІРИБЕЛІ ЖҮРГІЗУШІЛЕР",
    "24/7 БАЙЛАНЫСТА",
  ],
  airport: {
    eyebrow: "Әуежайда",
    title: "Шығу есігінде тақтайшамен қарсы аламыз",
    sub: "Астана (NQZ). Ұшу алдында 30 минут бұрын келу, жүкке көмек, жылы салон.",
  },
  reviews: {
    eyebrow: "Пікірлер",
    title: "Клиенттер не дейді",
    sub: "Тұрақты қонақтар, делегациялар және түсірілім топтары — 10 жылдық тәжірибеден бірнеше әңгіме.",
    items: [
      { name: "Айгерім Сағатова", role: "Продюсер · Бурабайдағы түсірілім", text: "Түсірілім тобымен Бурабайға 3 күнге Staria тапсырыс бердік. Жүргізуші Ербол минутына дәл келді, жабдықпен көмектесті. Жолда — тыныштық, ноутбукта жұмыс істеуге болады. Қайтарда көлік қонақ үйдің кіреберісіне дейін келді." },
      { name: "Дмитрий Власов", role: "Іскерлік сапар Астана — Омбы", text: "Омбыға ауыстырусыз және жүйкесіз жетуім керек еді. WhatsApp-та маршрутты 10 минутта келістік. Таза салон, жолда екі тоқтау. Қайтарда — сол көлік, сол жүргізуші." },
      { name: "Алихан Бектұров", role: "Тұрақты клиент · Алматы → Астана", text: "Айына 2-3 рет Астанаға ұшамын, әрқашан Private Jet KZ-ге тапсырыс беремін. Көлік NQZ шығу есігінде тақтайшамен тұрады, су бөтелкесі дайын. 2 жылда — бір де кешіккен жоқ." },
      { name: "Олег Краснов", role: "Делегацияны қарсы алу", text: "БАӘ серіктестерін қарсы алдық — 3 бірдей көлік керек болды. Уәде еткендей: 3 қара Staria LUXE, мейірімді жүргізушілер, координатор байланыста. Қонақтар салонға таңқалды." },
      { name: "Жанна Тұрлыбекова", role: "Астанадағы іскерлік күн", text: "Толық күнге тапсырыс бердім: 4 кездесу, түскі ас, кешкі ас. Жүргізуші Санжар қаланы тамаша біледі, кездесулер арасында машинада жұмыс істеу ыңғайлы болды. Бір де кідіріс жоқ." },
      { name: "Тимұр Ахметов", role: "Үйлену кортежі · Астана", text: "Ата-анам мен құрметті қонақтарға үйлену тойына 2 Staria алдым. Көліктер бізідің сұранысымыз бойынша безендірілген, жүргізушілер сыпайы, қарт қонақтарға отыруға көмектесті. Көліктің фонындағы фотолар тамаша!" },
    ],
  },
  booking: {
    eyebrow: "Онлайн брондау",
    title: "Трансферді 30 секундта брондаңыз",
    sub: "Күн мен қызметті таңдаңыз — өтінімді WhatsApp арқылы бірнеше минут ішінде растаймыз.",
    dateLabel: "Қажетті күн",
    pickDate: "Күнді таңдаңыз",
    timeLabel: "Уақыт",
    serviceLabel: "Қызмет",
    services: ["VIP трансфер", "Сағаттық жалдау", "Толық күн", "Қалааралық", "Делегацияны қарсы алу", "Жүргізушісіз авто"],
    nameLabel: "Атыңыз",
    namePh: "Аты-жөні",
    phoneLabel: "Телефон",
    phonePh: "+7 ___ ___ __ __",
    routeLabel: "Маршрут / түсініктеме",
    routePh: "Мысалы: NQZ — Ritz Carlton қонақ үйі",
    submit: "WhatsApp-қа жіберу",
    errName: "Атыңызды енгізіңіз",
    errDate: "Күнді таңдаңыз",
    waHeader: "Private Jet KZ сайтынан өтінім",
    waService: "Қызмет",
    waDate: "Күн",
    waName: "Аты",
    successTitle: "Өтінім жіберілді!",
    successSub: "Санат бірнеше минут ішінде WhatsApp-та хабарласады.",
    successNote: "24/7 жұмыс істейміз — жылдам жауап береміз.",
    successReset: "Тағы бір өтінім жіберу",
    required: "— міндетті өрістер · қалғанын менеджер WhatsApp-та нақтылайды",
  },
  finalCta: {
    title: "Бір қоңыраумен Трансфер шақырыңыз",
    sub: "Менеджер WhatsApp-та байланыста. Бірнеше минут ішінде жауап.",
    button: "WhatsApp-қа жазу",
  },
  footer: {
    rights: "© Private Jet KZ — барлық құқықтар қорғалған",
    city: "Астана қ., Қазақстан",
    hours: "24/7",
    nav: "Навигация",
    address: "Төле Би к-сі, 25/1",
  },
  fleetGallery: {
    eyebrow: "Біздің автопарк",
    title: "Нақты көліктер — нақты сапарлар",
    sub: "Біздің жұмыс сапарларымыздан түсірілген. 5 бірдей Hyundai Staria LUXE — әрдайым таза және дайын.",
  },
  fleetPage: {
    title: "Hyundai Staria LUXE",
    sub: "Топ комплектация. 5 көліктің барлығы — бірдей, ұқыпты, капитан орындықтармен.",
    specTitle: "Трансфер опциялары",
    spec: [
      { label: "Жолаушы орындары", value: "6 дейін" },
      { label: "Атаманмен капитан орындықтар", value: "Былғары, жылыту" },
      { label: "Люк", value: "Панорамды · 2 қатар" },
      { label: "Шторалы тонировка әйнектер", value: "Артқы шынылар" },
      { label: "Багаж", value: "6 чемоданға дейін" },
      { label: "Климат", value: "Көп аймақты" },
      { label: "Wi-Fi / Зарядтау", value: "USB-C, Type-A" },
      { label: "Бүктелетін орындықтар", value: "3-ші қатар" },
      { label: "Күшейтілген жылытқыш", value: "Жылдам жылыту" },
      { label: "Су бөтелкесі", value: "Әр сапарда" },
    ],
    feature: [
      { t: "Шторалы тонировка әйнектер", d: "Сапар кезіндегі құпиялылық" },
      { t: "Автоматты есіктер", d: "VIP қонақтарға қолайлы кіру" },
      { t: "Минималды шу", d: "Топ деңгейлі шу оқшаулағыш" },
      { t: "Тазалық", d: "Әр шығу алдында толық жуу" },
    ],
  },
  servicesPage: {
    title: "Қызметтер",
    sub: "Сағаттық жалдаудан делегацияларды қарсы алуға дейін — Астанадағы VIP трансфердің барлық спектрі.",
    items: [
      {
        name: "Қала бойынша VIP трансфер",
        price: "25 000 ₸ бастап",
        desc: "Әуежай, кездесу, мейрамхана, іс-шара.",
        bullets: ["Уақытқа дейін 5 минут бұрын келу", "Презентабельді жүргізуші", "Жүкке көмек", "Салонда су бөтелкесі"],
        waText: "Сәлем, Астана бойынша VIP трансфер керек.",
      },
      {
        name: "Сағаттық жалдау",
        price: "15 000 ₸ / сағат бастап",
        desc: "Көлік пен жүргізуші сіздің қарамағыңызда. Кемінде 3 сағат.",
        bullets: ["Қала ішіндегі кез келген маршрут", "Күту кіреді", "Бірнеше тоқтау", "Салондағы тыныштық"],
        waText: "Сәлем, Staria-ны сағатпен жалдағым келеді.",
      },
      {
        name: "Толық күн",
        price: "150 000 ₸ / 12 сағат бастап",
        desc: "Кездесулер мен ауысулар күні үшін.",
        bullets: ["12 сағат жұмыс", "Қаладағы шектеусіз километраж", "Қарбалас күндерге қолайлы"],
        waText: "Сәлем, Staria-ны күнге тапсырыс бергім келеді.",
      },
      {
        name: "Жүргізушісіз авто",
        price: "69 000 ₸ / тәулік бастап",
        desc: "Астанада 8–11 орындық Hyundai Staria-ны жүргізушісіз жалға. Отбасыға, үлкен компаниямен сапарға немесе жұмыс істерге арналған кең минивэн. Мерзім ұзағырақ болса — тәуліктік баға арзанырақ. Қажет болса, көлікті қала бойынша жеткіземіз.",
        bullets: ["Hyundai Staria, 8–11 орын", "1 тәуліктен — 80 000 ₸ / тәулік", "3 тәуліктен — 75 000 ₸ / тәулік", "10 тәуліктен — 69 000 ₸ / тәулік", "21 жастан, өтілі 3 жылдан (сақтандыру класы 8-ден)", "Тәуліктік лимит 200 км, кепіл 50 000 ₸", "Қажет болса қала бойынша жеткіземіз"],
        waText: "Сәлем, Staria-ны жүргізушісіз жалдау қызықтырады.",
      },
      {
        name: "Қалааралық сапарлар",
        price: "200 ₸/км бастап",
        desc: "Астана — Бурабай, Қарағанды, Көкшетау, Павлодар т.б.",
        bullets: ["Маршрут бойынша есеп", "Тәжірибелі жүргізуші", "Көп тоқтаулар мүмкін"],
        waText: "Сәлем, Staria-да қалааралық керек.",
      },
      {
        name: "Делегацияларды қарсы алу",
        price: "Жеке",
        desc: "2 көліктен. Бағдарлама, ілесу, тайминг.",
        bullets: ["Координатор байланыста", "Бірыңғай сервис стандарты", "Қауіпсіздік және ұқыптылық"],
        waText: "Сәлем, делегацияны қарсы алуды талқылайық.",
      },
    ],
  },
  contactPage: {
    title: "Бізбен байланыс",
    sub: "Менеджер WhatsApp-та 24/7 байланыста. Бірнеше минут ішінде жауап.",
    callLabel: "Қоңырау шалу",
    waLabel: "WhatsApp-қа жазу",
    hoursTitle: "Жұмыс уақыты",
    hoursValue: "Тәулік бойы, аптасына 7 күн",
    cityTitle: "Қала",
    cityValue: "Астана, Қазақстан",
    addressTitle: "Мекенжай",
    addressValue: "Төле би к-сі, 25/1, Астана қ.",
    manager: "Санат · менеджер",
  },
  langSwitch: "Тіл",
};

const en: Dict = {
  brand: "Private Jet KZ",
  tagline: "Astana · VIP transfer",
  nav: { home: "Home", fleet: "Fleet", services: "Services", contact: "Contact" },
  cta: {
    book: "Book on WhatsApp",
    bookMsg: "Hello, I'm writing from your website and would like to book a transfer",
    whatsapp: "WhatsApp",
    call: "Call",
    viewTariffs: "View tariffs",
    discuss: "Discuss in private",
  },
  hero: {
    eyebrow: "10 years of premium service in Astana",
    title1: "VIP Transfer",
    title2: "Astana.",
    subtitle:
      "Premium VIP transfer and chauffeur service in Astana on the Hyundai Staria LUXE. Airport transfer at NQZ with an English-speaking driver — we meet guests, delegations and VIPs on time, every time.",
    badge1: "10 years in market",
    badge2: "3,000+ rides",
    badge3: "Fleet of 5 cars",
    badge4: "Captain seats",
    badge5: "Experienced drivers",
    badge6: "24/7 available",
    scroll: "Scroll down",
  },
  headlights: {
    eyebrow: "Headlights on",
    title: "Pickup, to the minute",
    sub: "No “I’m on my way” calls. The car is at the door 5 minutes before your scheduled time.",
  },
  who: {
    eyebrow: "About us",
    title: "VIP Transfer & Chauffeur Service with Our Own Fleet",
    p1: "Private Jet KZ is a private car service in Astana — a fleet of 5 identical Hyundai Staria LUXE and a team of professional chauffeurs who respect your time. Not a dispatcher, not a taxi — our own cars, one single standard, ideal for executive and corporate transfer.",
    p2: "Quiet cabin, full clean before every ride, captain leather seats, warm ambient light. Whether you need a private driver in Astana for the day or a single airport transfer, you get the same level of service — no matter which car shows up.",
    hint: "Open the door — see inside",
  },
  perks: {
    title: "Why clients choose us?",
    items: [
      { t: "Our own fleet", d: "5 identical Staria LUXE — no last-minute swaps" },
      { t: "Single standard", d: "Same level of service in every car" },
      { t: "Quiet cabin", d: "Sound insulation and captain seats" },
      { t: "On time", d: "To the minute. No excuses." },
      { t: "Help with luggage", d: "Your driver greets you in smart dress with a sign in hand" },
      { t: "Confidentiality", d: "Tinted windows with curtains" },
    ],
  },
  tariffs: {
    eyebrow: "Tariffs",
    title: "Transparent pricing — no surprises",
    note: "Prices are starting from. Final cost depends on route, time and duration.",
    fromLabel: "from",
    perHour: "₸ / hour",
    perDay: "₸ / day",
    perRide: "₸ / ride",
    onRequest: "On request",
    individual: "Custom",
    book: "Book",
    items: [
      {
        name: "VIP transfer",
        price: "25 000",
        unit: "₸ / ride",
        desc: "To/from airport, around the city, to a meeting. Driver meets you with a sign and helps with bags.",
        waText: "Hello, I'd like to book a VIP transfer in Astana.",
      },
      {
        name: "Hourly rental",
        price: "15 000",
        unit: "₸ / hour",
        desc: "Car and driver at your disposal. Minimum 3 hours, any route.",
        waText: "Hello, I'd like to rent the Staria by the hour.",
      },
      {
        name: "Full day",
        price: "150 000",
        unit: "₸ / day",
        desc: "12 hours, unlimited rides. Perfect for a packed work day.",
        waText: "Hello, I'd like to book the Staria for a full day.",
      },
      {
        name: "Self-drive rental",
        price: "80 000",
        unit: "₸ / day",
        desc: "Hyundai Staria (8–11 seats) without a driver. From 3 days — 75 000 ₸, from 10 days — 69 000 ₸. Deposit 50 000 ₸, limit 200 km/day.",
        waText: "Hello, I'd like to rent the Staria without a driver.",
      },
      {
        name: "Delegation pickup",
        price: "Custom",
        unit: "",
        desc: "Two or more cars. Custom programme, escort and timing — built around your task.",
        waText: "Hello, I need a delegation pickup in Astana.",
      },
    ],
  },
  interior: {
    eyebrow: "Captain seats with ottomans",
    title: "Where deals are made — between rides",
    sub: "Leather, warm ambient light, silence. A bottle of water already in the holder.",
  },
  videos: {
    eyebrow: "Video",
    title: "See how we work",
    sub: "Real rides, the Staria LUXE cabin and client reviews — on our YouTube channel.",
  },
  marquee: ["10 YEARS IN MARKET", "3000+ RIDES", "FLEET OF 5 CARS", "CAPTAIN SEATS", "EXPERT DRIVERS", "24/7 AVAILABLE"],
  airport: {
    eyebrow: "At the airport",
    title: "We meet you at the gate with a sign",
    sub: "Astana airport transfer at NQZ with meet-and-greet and an English-speaking driver. We arrive 30 minutes before landing, help with luggage, warm cabin ready.",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our clients say",
    sub: "Repeat guests, delegations and film crews — a few stories from 10 years on the road.",
    items: [
      { name: "Aigerim Sagatova", role: "Producer · Borovoye film shoot", text: "Booked a Staria for 3 days to Borovoye with the film crew. Driver Yerbol arrived to the minute, helped with the gear. Quiet cabin — I worked on the laptop the whole way. On return the car pulled right up to the hotel entrance. Felt like a private jet, just on the ground." },
      { name: "Dmitry Vlasov", role: "Astana — Omsk business trip", text: "Needed to reach Omsk without transfers or stress. Agreed the route over WhatsApp in 10 minutes. Clean cabin, two stops on request. Same car and same driver on the way back — a rarity in Kazakhstan." },
      { name: "Alikhan Bekturov", role: "Repeat client · Almaty → Astana", text: "I fly to Astana 2-3 times a month and always book Private Jet KZ. The car is already at the NQZ exit with a sign, water in the holder, route to the office pre-agreed. Two years — not a single delay." },
      { name: "Oleg Krasnov", role: "Delegation pickup", text: "We hosted partners from the UAE — needed 3 identical cars. Got exactly what was promised: 3 black Staria LUXE, courteous drivers, coordinator on call. Guests were blown away by the cabin." },
      { name: "Zhanna Turlybekova", role: "Business day in Astana", text: "Booked a full day: 4 meetings, lunch, dinner. Driver Sanzhar knew the city perfectly, the cabin was a comfortable office between meetings. Not a single delay. Pricing was transparent." },
      { name: "Timur Akhmetov", role: "Wedding cortege · Astana", text: "Booked two Staria for my parents and honoured guests at a wedding. Cars arrived decorated to our request, drivers were polite, helped elderly guests in. Photos against the cars came out incredible. Thanks to the team!" },
    ],
  },
  booking: {
    eyebrow: "Online booking",
    title: "Book your Transfer in 30 seconds",
    sub: "Pick a date and service — we'll confirm on WhatsApp within minutes.",
    dateLabel: "Pickup date",
    pickDate: "Choose a date",
    timeLabel: "Pickup time",
    serviceLabel: "Service",
    services: ["VIP transfer", "Hourly rental", "Full day", "Intercity", "Delegation pickup", "Self-drive rental"],
    nameLabel: "Your name",
    namePh: "Name",
    phoneLabel: "Phone",
    phonePh: "+7 ___ ___ __ __",
    routeLabel: "Route / notes",
    routePh: "E.g. NQZ — Ritz Carlton hotel",
    submit: "Send on WhatsApp",
    errName: "Please enter your name",
    errDate: "Please select a date",
    waHeader: "Booking request from Private Jet KZ website",
    waService: "Service",
    waDate: "Date",
    waName: "Name",
    successTitle: "Request sent!",
    successSub: "Sanat will contact you on WhatsApp within a few minutes.",
    successNote: "We work 24/7 — we'll reply fast.",
    successReset: "Submit another request",
    required: "— required fields · our manager will confirm the rest on WhatsApp",
  },
  finalCta: {
    title: "One message — and your Transfer is on its way",
    sub: "Our manager is on WhatsApp. Reply within minutes.",
    button: "Message on WhatsApp",
  },
  footer: {
    rights: "© Private Jet KZ — all rights reserved",
    city: "Astana, Kazakhstan",
    hours: "24/7",
    nav: "Navigation",
    address: "25/1 Tole Bi St",
  },
  fleetGallery: {
    eyebrow: "Our fleet",
    title: "Real cars — real rides",
    sub: "Photographed on our actual jobs. 5 identical Hyundai Staria LUXE — always clean and ready.",
  },
  fleetPage: {
    title: "Hyundai Staria LUXE",
    sub: "Top-trim VIP minivan with driver. All 5 cars — identical, well-maintained, with captain seats — for VIP transfer and group transfer in Astana.",
    specTitle: "Transfer options",
    spec: [
      { label: "Passenger seats", value: "up to 6" },
      { label: "Captain seats with ottomans", value: "Leather, heated" },
      { label: "Sunroof", value: "Panoramic · 2 rows" },
      { label: "Tinted windows with curtains", value: "Rear glass" },
      { label: "Luggage", value: "Up to 6 cases" },
      { label: "Climate", value: "Multi-zone" },
      { label: "Wi-Fi / Charging", value: "USB-C, Type-A" },
      { label: "Folding seats", value: "3rd row" },
      { label: "Reinforced heater", value: "Fast warm-up" },
      { label: "Water bottle", value: "Every ride" },
    ],
    feature: [
      { t: "Tinted windows with curtains", d: "Privacy on the road" },
      { t: "Automatic doors", d: "Easy entrance for VIP guests" },
      { t: "Minimal noise", d: "Top-tier sound insulation" },
      { t: "Full clean", d: "Detailed before every ride" },
    ],
  },
  servicesPage: {
    title: "Services",
    sub: "From hourly chauffeur hire to delegation transport — the full range of VIP transfer, executive and corporate transfer, and group transfer in Astana.",
    items: [
      {
        name: "VIP transfer in the city",
        price: "from 25 000 ₸",
        desc: "Airport, business meeting, restaurant, event.",
        bullets: ["Arrives 5 minutes before time", "Driver in smart presentable dress", "Help with luggage", "Bottle of water inside"],
        waText: "Hello, I need a VIP transfer in Astana.",
      },
      {
        name: "Hourly rental",
        price: "from 15 000 ₸ / hour",
        desc: "Car and driver at your disposal. Minimum 3 hours.",
        bullets: ["Any route in the city", "Waiting included", "Multiple stops", "Quiet cabin"],
        waText: "Hello, I'd like an hourly Staria rental.",
      },
      {
        name: "Full day",
        price: "from 150 000 ₸ / 12 hours",
        desc: "When your day is full of meetings and movement.",
        bullets: ["12 hours of work", "Unlimited mileage in the city", "Perfect for packed days"],
        waText: "Hello, I'd like a full-day Staria booking.",
      },
      {
        name: "Self-drive rental",
        price: "from 69 000 ₸ / day",
        desc: "Rent a Hyundai Staria (8–11 seats) without a driver in Astana. A spacious minivan for family trips, group travel or work tasks. The longer the rental, the lower the daily rate. We can deliver the car within the city if needed.",
        bullets: ["Hyundai Staria, 8–11 seats", "From 1 day — 80 000 ₸ / day", "From 3 days — 75 000 ₸ / day", "From 10 days — 69 000 ₸ / day", "Age 21+, 3+ years of driving experience (insurance class 8+)", "Daily limit 200 km, deposit 50 000 ₸", "City delivery available if needed"],
        waText: "Hello, I'm interested in renting the Staria without a driver.",
      },
      {
        name: "Intercity rides",
        price: "from 200 ₸/km",
        desc: "Astana to Borovoe/Burabay transfer, Astana to Karaganda private transfer, Kokshetau, Pavlodar and more.",
        bullets: ["Custom route quote", "Experienced driver", "Multi-stop available"],
        waText: "Hello, I need an intercity ride on the Staria.",
      },
      {
        name: "Delegation pickups",
        price: "Custom",
        desc: "Two cars and more — delegation transport and group transfer in Astana. Programme, escort, timing.",
        bullets: ["Coordinator on call", "Single service standard", "Safety and punctuality"],
        waText: "Hello, let's discuss a delegation pickup.",
      },
    ],
  },
  contactPage: {
    title: "Contact us",
    sub: "Our manager is on WhatsApp 24/7. Reply within minutes.",
    callLabel: "Call",
    waLabel: "Message on WhatsApp",
    hoursTitle: "Hours",
    hoursValue: "24/7, every day",
    cityTitle: "City",
    cityValue: "Astana, Kazakhstan",
    addressTitle: "Address",
    addressValue: "25/1 Tole bi St, Astana",
    manager: "Sanat · manager",
  },
  langSwitch: "Language",
};

export const dictionaries: Record<Locale, Dict> = { ru, kz, en };
export type { Dict };
