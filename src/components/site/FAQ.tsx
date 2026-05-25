import { useState, useEffect } from "react";
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
    ],
};

export function FAQ() {
    const { locale } = useLocale();
    const items = faqs[locale];
    const [open, setOpen] = useState<number | null>(null);

    // Schema.org FAQPage — rich snippets in Google
    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": { "@type": "Answer", "text": item.a },
            })),
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "faq-schema";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => { document.getElementById("faq-schema")?.remove(); };
    }, [locale]);

    return (
        <section className="py-14 md:py-20 bg-[var(--surface)]">
            <div className="max-w-3xl mx-auto px-5 md:px-10">
                <Reveal>
                    <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4 text-center">FAQ</div>
                    <h2 className="font-display text-4xl md:text-5xl text-center leading-[1.05] mb-14">
                        {faqTitles[locale]}
                    </h2>
                </Reveal>

                <div className="space-y-3">
                    {items.map((item, i) => (
                        <Reveal key={i} delay={i * 60}>
                            <div
                                className="border border-gold/15 rounded-2xl bg-background overflow-hidden transition-all duration-300 hover:border-gold/30"
                            >
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
                                    style={{ maxHeight: open === i ? "200px" : "0px" }}
                                >
                                    <p className="px-7 pb-6 text-foreground/70 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}