"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 5, suffix: "+", label: "Years of engineering experience" },
  { value: 4, suffix: "", label: "Production platforms shipped end to end" },
  { value: 3, suffix: "+", label: "AI agent & RAG systems built" },
  { value: 90, suffix: "+", label: "Lighthouse performance score on shipped sites" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-semibold text-gradient tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactStrip() {
  return (
    <section aria-label="Impact highlights" className="border-y border-edge bg-surface/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="pr-6">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
