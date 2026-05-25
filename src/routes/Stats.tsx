import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/context";

function useCountUp(end: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, start]);
    return count;
}

const stats = {
    ru: [
        { value: 10, suffix: "", label: "лет на рынке" },
        { value: 500, suffix: "+", label: "довольных клиентов" },
        { value: 5, suffix: "", label: "Staria LUXE в парке" },
        { value: 24, suffix: "/7", label: "на связи всегда" },
    ],
    kz: [
        { value: 10, suffix: "", label: "жыл нарықта" },
        { value: 500, suffix: "+", label: "риза клиент" },
        { value: 5, suffix: "", label: "Staria LUXE паркте" },
        { value: 24, suffix: "/7", label: "әрқашан байланыста" },
    ],
    en: [
        { value: 10, suffix: "", label: "years on the market" },
        { value: 500, suffix: "+", label: "happy clients" },
        { value: 5, suffix: "", label: "Staria LUXE in fleet" },
        { value: 24, suffix: "/7", label: "always available" },
    ],
};

function StatCard({ value, suffix, label, animate }: {
    value: number; suffix: string; label: string; animate: boolean;
}) {
    const count = useCountUp(value, 1800, animate);
    return (
        <div className="flex flex-col items-center text-center p-8 border border-gold/15 rounded-2xl bg-[var(--surface)] hover:border-gold/40 transition-colors">
            <div className="font-display text-6xl md:text-7xl leading-none gradient-gold-text">
                {count}{suffix}
            </div>
            <div className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/60">{label}</div>
        </div>
    );
}

export function Stats() {
    const { locale } = useLocale();
    const items = stats[locale];
    const ref = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {items.map((s, i) => (
                        <StatCard key={i} {...s} animate={animate} />
                    ))}
                </div>
            </div>
        </section>
    );
}