import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: string;
  label: string;
  numeric?: number;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: "100+", label: "AI Systems Built", numeric: 100, suffix: "+" },
  { value: "5–7 Days", label: "Average Delivery" },
  { value: "100%", label: "Custom Built", numeric: 100, suffix: "%" },
  { value: "0", label: "Templates Used", numeric: 0 },
];

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || target === 0) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const StatBlock = ({ stat }: { stat: StatItem }) => {
  const { count, ref } = useCountUp(stat.numeric ?? 0);

  return (
    <div ref={ref} className="flex flex-col items-center py-4 md:py-0">
      <span className="font-heading text-[32px] font-bold text-[#0f0f14] dark:text-[#f0f0f8]">
        {stat.numeric !== undefined
          ? `${stat.prefix ?? ""}${stat.numeric === 0 ? "0" : count}${stat.suffix ?? ""}`
          : stat.value}
      </span>
      <span className="mt-1 font-body text-[13px] text-[#6b7280] dark:text-[#9494b0]">
        {stat.label}
      </span>
    </div>
  );
};

const StatsRow = () => (
  <section className="w-full bg-white dark:bg-[#09090b]" style={{ padding: "48px 40px" }}>
    <div className="mx-auto max-w-[1100px]">
      {/* Desktop: row with vertical dividers */}
      <div className="hidden md:grid md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex justify-center ${
              i < stats.length - 1
                ? "border-r border-[#e5e7eb] dark:border-[rgba(255,255,255,0.07)]"
                : ""
            }`}
          >
            <StatBlock stat={stat} />
          </div>
        ))}
      </div>
      {/* Mobile: 2x2 grid with horizontal borders */}
      <div className="grid grid-cols-2 gap-y-0 md:hidden">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex justify-center ${
              i < 2
                ? "border-b border-[#e5e7eb] dark:border-[rgba(255,255,255,0.07)]"
                : ""
            }`}
          >
            <StatBlock stat={stat} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsRow;
