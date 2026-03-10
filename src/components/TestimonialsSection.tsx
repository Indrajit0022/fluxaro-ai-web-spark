import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "RP",
    name: "Rahul Patel",
    role: "CEO, PropStack AI",
    stars: 5,
    quote:
      "Fluxaro delivered our entire AI lead qualification system in 6 days. What three agencies quoted us 3 months for, they shipped in under a week. Our response time dropped by 90% and appointments tripled.",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Founder, GrowthLoop",
    stars: 5,
    quote:
      "We needed a custom workflow engine — not another Zapier template. Fluxaro built exactly what we described, integrated it with our CRM, and it's been running flawlessly for 4 months. Best investment we've made.",
  },
  {
    initials: "JO",
    name: "James Okoro",
    role: "COO, ScaleOps Agency",
    stars: 5,
    quote:
      "The voice agent they built handles 200+ calls a day without breaking a sweat. It qualifies leads, books meetings, and syncs everything to HubSpot. Our team finally focuses on closing instead of chasing.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f9fafb] dark:bg-[#0d0d12] py-28 px-4 sm:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block font-body text-xs uppercase tracking-widest text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-full px-4 py-1.5 mb-4">
            CLIENT RESULTS
          </span>
          <h2
            className="font-heading font-extrabold tracking-tight text-[#0f0f14] dark:text-[#f0f0f8]"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Founders' Favourite
            <br />
            AI Development Partner.
          </h2>
          <p className="font-body text-lg text-[#6b7280] dark:text-[#9494b0] max-w-md mx-auto mt-5 leading-relaxed">
            Trusted by operators and founders who needed real systems, not
            promises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white dark:bg-[#12121c] border border-[#e5e7eb] dark:border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:border-indigo-200 dark:hover:border-indigo-500/30 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${150 * i + 200}ms` : "0ms" }}
            >
              {/* Avatar row */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-indigo-500/10 border-2 border-indigo-500/30 font-heading font-bold text-indigo-500 text-sm flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[#0f0f14] dark:text-[#f0f0f8]">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-[#9ca3af]">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-[13px] sm:text-sm text-[#6b7280] dark:text-[#9494b0] leading-relaxed mt-4">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
