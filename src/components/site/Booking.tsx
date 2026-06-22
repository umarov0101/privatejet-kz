import { useState } from "react";
import { format } from "date-fns";
import { ru as ruLocale, kk as kkLocale, enUS } from "date-fns/locale";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/i18n/context";
import { wa } from "@/i18n/dictionaries";
import { Reveal } from "./Reveal";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Booking() {
  const { t, locale } = useLocale();
  const dfLocale = locale === "ru" ? ruLocale : locale === "kz" ? kkLocale : enUS;

  const [date, setDate] = useState<Date | undefined>();
  const [service, setService] = useState<string>(t.booking.services[0]);
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ name?: string; date?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; date?: string } = {};
    if (!name.trim()) newErrors.name = t.booking.errName;
    if (!date) newErrors.date = t.booking.errDate;
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const dateStr = date ? format(date, "PPP", { locale: dfLocale }) : "—";
    const lines = [
      t.booking.waHeader,
      ``,
      `${t.booking.waService}: ${service}`,
      `${t.booking.waDate}: ${dateStr}`,
      name && `${t.booking.waName}: ${name}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(wa(lines), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setDate(undefined);
    setService(t.booking.services[0]);
    setName("");
    setErrors({});
  };

  return (
    <section id="booking" className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] [background:radial-gradient(circle_at_50%_0%,var(--gold)_0%,transparent_55%)]" />
      <div className="relative max-w-5xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">
              {t.booking.eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              {t.booking.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="gradient-gold-text italic">
                {t.booking.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
            <p className="mt-5 text-foreground/65 max-w-xl mx-auto">{t.booking.sub}</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {submitted ? (
            /* ✅ Экран благодарности */
            <div className="rounded-2xl border border-gold/30 bg-[var(--surface)]/60 backdrop-blur-sm p-10 md:p-16 text-center shadow-luxe">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-16 h-16 text-gold" strokeWidth={1.2} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{t.booking.successTitle}</h3>
              <p className="text-foreground/70 text-lg max-w-md mx-auto mb-2">
                {t.booking.successSub}
              </p>
              <p className="text-foreground/50 text-sm mb-10">{t.booking.successNote}</p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full border border-gold/40 text-sm text-gold hover:border-gold hover:bg-gold/5 transition-colors"
              >
                {t.booking.successReset}
              </button>
            </div>
          ) : (
            /* 📋 Форма */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-gold/20 bg-[var(--surface)]/60 backdrop-blur-sm p-6 md:p-10 shadow-luxe space-y-6"
            >
              <div className="grid md:grid-cols-3 gap-5">
                {/* Date */}
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {t.booking.dateLabel} <span className="text-gold">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-11 bg-background/50",
                          errors.date ? "border-red-500" : "border-gold/30 hover:border-gold",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                        {date ? (
                          format(date, "PPP", { locale: dfLocale })
                        ) : (
                          <span>{t.booking.pickDate}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                          setDate(d);
                          setErrors((prev) => ({ ...prev, date: undefined }));
                        }}
                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {t.booking.serviceLabel}
                  </Label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-11 rounded-md border border-gold/30 bg-background/50 px-3 text-sm hover:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    {t.booking.services.map((s) => (
                      <option key={s} value={s} className="bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                    {t.booking.nameLabel} <span className="text-gold">*</span>
                  </Label>
                  <Input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder={t.booking.namePh}
                    maxLength={80}
                    className={cn(
                      "h-11 bg-background/50",
                      errors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-gold/30 hover:border-gold focus-visible:ring-gold",
                    )}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
              </div>

              <p className="text-xs text-foreground/40">
                <span className="text-gold">*</span> {t.booking.required}
              </p>

              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] shadow-[var(--shadow-gold)] hover:scale-[1.02] transition-transform"
                >
                  {t.booking.submit}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
