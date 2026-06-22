import { useState } from "react";
import { useLocale } from "@/i18n/context";
import { Reveal } from "./Reveal";

const faqTitles = {
  ru: "Часто задаваемые вопросы",
  kz: "Жиі қойылатын сұрақтар",
  en: "Frequently asked questions",
};

const faqs = {
  ru: [
    {
      q: "Можно ли оплатить картой?",
      a: "Да, принимаем оплату картой, наличными и переводом на карту. Уточните удобный способ при бронировании.",
    },
    {
      q: "Что если рейс задержали?",
      a: "Мы отслеживаем статус рейса в реальном времени. Водитель скорректирует время подачи автоматически — вы ничего не потеряете.",
    },
    {
      q: "Как далеко вы едете?",
      a: "По всему Казахстану. Астана — Боровое, Караганда, Кокшетау, Павлодар и любые другие направления. Стоимость рассчитывается индивидуально.",
    },
    {
      q: "Нужно ли платить заранее?",
      a: "Для подтверждения бронирования просим предоплату 10–20%. Остаток оплачивается по факту поездки — наличными, картой или переводом.",
    },
    {
      q: "Сколько мест в автомобиле?",
      a: "До 6 пассажиров + багаж до 6 чемоданов. Все кресла — капитанские, кожаные с подогревом.",
    },
    {
      q: "Можно заказать несколько машин?",
      a: "Да. Для делегаций и групп предоставляем от 2 и более одинаковых Staria LUXE с едиными стандартами сервиса.",
    },
    {
      q: "Сколько стоит трансфер из аэропорта Астаны?",
      a: "Трансфер из аэропорта NQZ в центр Астаны — от 25 000 ₸ на Hyundai Staria LUXE. Точная стоимость зависит от района и времени. Назовите адрес в WhatsApp — рассчитаем сразу.",
    },
    {
      q: "За сколько нужно бронировать?",
      a: "Лучше за несколько часов, но часто подаём и день в день. Для делегаций и нескольких машин — желательно за 1–2 дня. Срочный заказ — напишите в WhatsApp, постараемся помочь.",
    },
    {
      q: "Есть ли детское кресло?",
      a: "Да, предоставляем детское кресло или бустер бесплатно — просто укажите возраст ребёнка при заказе.",
    },
    {
      q: "Встречаете ли вы ночью и рано утром?",
      a: "Да, работаем круглосуточно 7 дней в неделю. Ночные рейсы и ранние вылеты из аэропорта Астаны — без доплаты за время суток.",
    },
    {
      q: "Подходит ли Staria для свадьбы или мероприятия?",
      a: "Да. Hyundai Staria LUXE — представительный минивэн для свадеб, фотосессий и деловых мероприятий. Можем подать несколько одинаковых авто для кортежа.",
    },
    {
      q: "Можно ли арендовать Staria без водителя?",
      a: "Да. Сдаём Hyundai Staria на 8–11 мест без водителя: от 1 суток — 80 000 ₸, от 3 суток — 75 000 ₸, от 10 суток — 69 000 ₸ в сутки. Условия: возраст от 21 года, стаж от 3 лет (страховой класс от 8), суточный лимит 200 км, залог 50 000 ₸. При необходимости доставим машину по городу.",
    },
  ],
  kz: [
    {
      q: "Картамен төлеуге бола ма?",
      a: "Иә, карта, қолма-қол ақша және аударым арқылы қабылдаймыз. Брондау кезінде ыңғайлы тәсілді нақтылаңыз.",
    },
    {
      q: "Рейс кешіктірілсе не болады?",
      a: "Біз рейс мәртебесін нақты уақытта бақылаймыз. Жүргізуші келу уақытын автоматты түрде реттейді.",
    },
    {
      q: "Қаншалықты алыс жүресіздер?",
      a: "Бүкіл Қазақстан бойынша. Астана — Бурабай, Қарағанды, Көкшетау, Павлодар және басқа бағыттар.",
    },
    {
      q: "Алдын ала төлеу керек пе?",
      a: "Брондауды растау үшін 10–20% алдын ала төлем сұраймыз. Қалғаны сапардан кейін — қолма-қол, картамен немесе аударыммен.",
    },
    {
      q: "Көлікте неше орын бар?",
      a: "6 жолаушыға дейін + 6 чемоданға дейін. Барлық орындықтар — капитан, ысытылатын былғары.",
    },
    {
      q: "Бірнеше көлік тапсырыс беруге бола ма?",
      a: "Иә. Делегациялар үшін 2 және одан да көп бірдей Staria LUXE ұсынамыз.",
    },
    {
      q: "Астана әуежайынан трансфер қанша тұрады?",
      a: "NQZ әуежайынан Астана орталығына трансфер — Hyundai Staria LUXE-те 25 000 ₸-ден басталады. Нақты бағасы ауданға және уақытқа байланысты. Мекенжайды WhatsApp-қа жазыңыз — бірден есептейміз.",
    },
    {
      q: "Қанша уақыт бұрын брондау керек?",
      a: "Бірнеше сағат бұрын дұрыс, бірақ көбіне сол күні де береміз. Делегациялар мен бірнеше көлік үшін — 1–2 күн бұрын. Шұғыл тапсырыс — WhatsApp-қа жазыңыз.",
    },
    {
      q: "Балаларға арналған орындық бар ма?",
      a: "Иә, балалар орындығын немесе бустерді тегін береміз — тапсырыс кезінде баланың жасын көрсетіңіз.",
    },
    {
      q: "Түнде және таңертең ерте қарсы аласыздар ма?",
      a: "Иә, тәулік бойы аптасына 7 күн жұмыс істейміз. Түнгі рейстер мен ерте ұшулар — уақыт үшін қосымша ақысыз.",
    },
    {
      q: "Staria той немесе іс-шараға жарай ма?",
      a: "Иә. Hyundai Staria LUXE — той, фотосессия және іскерлік іс-шаралар үшін өкілді минивэн. Кортеж үшін бірнеше бірдей көлік бере аламыз.",
    },
    {
      q: "Staria-ны жүргізушісіз жалдауға бола ма?",
      a: "Иә. 8–11 орындық Hyundai Staria-ны жүргізушісіз береміз: 1 тәуліктен — 80 000 ₸, 3 тәуліктен — 75 000 ₸, 10 тәуліктен — тәулігіне 69 000 ₸. Шарттар: 21 жастан, өтілі 3 жылдан (сақтандыру класы 8-ден), тәуліктік лимит 200 км, кепіл 50 000 ₸. Қажет болса көлікті қала бойынша жеткіземіз.",
    },
  ],
  en: [
    {
      q: "Can I pay by card?",
      a: "Yes, we accept card, cash and bank transfer. Let us know your preferred method when booking.",
    },
    {
      q: "What if my flight is delayed?",
      a: "We track your flight status in real time. The driver will adjust pickup automatically — no stress on your end.",
    },
    {
      q: "How far do you travel?",
      a: "Across all of Kazakhstan. Astana to Burabay, Karaganda, Kokshetau, Pavlodar and beyond. Custom quote per route.",
    },
    {
      q: "Do I need to pay in advance?",
      a: "We ask for a 10–20% deposit to confirm the booking. The remaining balance is paid after the ride — by cash, card or transfer.",
    },
    {
      q: "How many passengers fit?",
      a: "Up to 6 passengers + luggage up to 6 suitcases. All seats are captain leather seats with heating.",
    },
    {
      q: "Can I book multiple cars?",
      a: "Yes. For delegations and groups we provide 2 or more identical Staria LUXE with the same service standard.",
    },
    {
      q: "How much is a transfer from Astana airport?",
      a: "A transfer from NQZ airport to central Astana starts at 25,000 ₸ in a Hyundai Staria LUXE. The exact price depends on the district and time — send your address on WhatsApp for an instant quote.",
    },
    {
      q: "How far in advance should I book?",
      a: "A few hours ahead is ideal, but same-day rides are often possible. For delegations or several cars, 1–2 days is better. Need it urgently? Message us on WhatsApp.",
    },
    {
      q: "Do you provide a child seat?",
      a: "Yes, we provide a child seat or booster free of charge — just tell us your child's age when booking.",
    },
    {
      q: "Do you operate at night and early morning?",
      a: "Yes, we work 24/7. Night flights and early departures from Astana airport carry no time-of-day surcharge.",
    },
    {
      q: "Is the Staria suitable for a wedding or event?",
      a: "Yes. The Hyundai Staria LUXE is a representative minivan for weddings, photo shoots and business events. We can provide several identical cars for a motorcade.",
    },
    {
      q: "Can I rent the Staria without a driver?",
      a: "Yes. We rent the Hyundai Staria (8–11 seats) without a driver: from 1 day — 80,000 ₸, from 3 days — 75,000 ₸, from 10 days — 69,000 ₸ per day. Conditions: age 21+, 3+ years of driving experience (insurance class 8+), daily limit 200 km, deposit 50,000 ₸. We can deliver the car within the city if needed.",
    },
  ],
};

export function FAQ() {
  const { locale } = useLocale();
  const items = faqs[locale];
  const [open, setOpen] = useState<number | null>(null);

  // Schema.org FAQPage — отдаётся в серверном HTML, чтобы Google/Яндекс читали вопросы-ответы
  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });

  return (
    <section className="py-14 md:py-20 bg-[var(--surface)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4 text-center">
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-center leading-[1.05] mb-14">
            {faqTitles[locale]}
          </h2>
        </Reveal>

        <div className="space-y-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="border border-gold/15 rounded-2xl bg-background overflow-hidden transition-all duration-300 hover:border-gold/30">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{item.q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-transform duration-300"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: open === i ? "600px" : "0px" }}
                >
                  <p className="px-7 pb-6 text-foreground/70 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
