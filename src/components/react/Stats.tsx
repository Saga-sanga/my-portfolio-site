import { Award, Code2, Coffee, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Code2, value: 87, suffix: "+", label: "Repositories" },
  { icon: Coffee, value: 1000, suffix: "+", label: "Cups of Coffee" },
  { icon: Award, value: 3, suffix: "", label: "GitHub Achievements" },
  { icon: Globe, value: 20, suffix: "+", label: "Followers" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white/50 p-6 text-center dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <stat.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
