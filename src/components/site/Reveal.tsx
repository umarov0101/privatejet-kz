import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = As as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out will-change-transform`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {children}
    </Comp>
  );
}
