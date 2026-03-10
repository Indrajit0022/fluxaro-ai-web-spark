import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter Build",
    price: "$2,500",
    period: "one-time",
    description:
      "Perfect for founders who need one focused AI system built and deployed fast.",
    features: [
      "Single AI system (chatbot, voice agent, or workflow)",
      "Up to 3 integrations",
      "5-day delivery",
      "30 days post-launch support",
      "Full source code ownership",
    ],
    cta: "Start Building",
    highlighted: false,
  },
  {
    name: "Growth System",
    price: "$5,000",
    period: "one-time",
    description:
      "For businesses ready to deploy a multi-component AI stack that drives real revenue.",
    features: [
      "Multi-system build (2–3 AI components)",
      "Unlimited integrations",
      "7-day delivery",
      "60 days optimization & support",
      "Priority Slack channel",
      "Performance tracking dashboard",
    ],
    cta: "Scale My Business",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "scoped",
    description:
      "Full-scale AI infrastructure for companies with complex operations and high-volume needs.",
    features: [
      "Full AI infrastructure build",
      "Custom SaaS application",
      "Dedicated engineering team",
      "Ongoing optimization & iteration",
      "SLA-backed uptime guarantee",
      "White-glove onboarding",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
];

const PricingSection = () => {
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
      className="bg-background py-28 px-4 sm:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center font-body text-xs uppercase tracking-widest text-primary font-semibold px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm mb-4">
            PRICING
          </span>
          <h2
            className="font-heading font-[800] tracking-tight text-foreground"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Transparent Pricing.
            <br />
            No Surprises.
          </h2>
          <p
            className="font-body text-muted-foreground max-w-[520px] mx-auto leading-[1.7] mt-6"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            Every project is scoped, priced, and locked before we write a single
            line of code. You know exactly what you're paying for.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-[#4f46e5] border-[#4f46e5] text-white shadow-[0_20px_60px_rgba(79,70,229,0.3)]"
                  : "bg-white dark:bg-[#12121c] border-[#e5e7eb] dark:border-white/10 hover:border-indigo-200 dark:hover:border-indigo-500/30"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${150 * i + 200}ms` : "0ms",
              }}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-[#0f0f14] font-body text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`font-heading font-bold text-xl ${
                  plan.highlighted
                    ? "text-white"
                    : "text-[#0f0f14] dark:text-[#f0f0f8]"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-heading font-[800] text-4xl ${
                    plan.highlighted
                      ? "text-white"
                      : "text-[#0f0f14] dark:text-[#f0f0f8]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-body text-sm ${
                    plan.highlighted
                      ? "text-white/60"
                      : "text-[#9ca3af]"
                  }`}
                >
                  / {plan.period}
                </span>
              </div>

              <p
                className={`font-body text-[13px] sm:text-sm leading-relaxed mt-3 ${
                  plan.highlighted
                    ? "text-white/70"
                    : "text-[#6b7280] dark:text-[#9494b0]"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`my-6 border-t ${
                  plan.highlighted
                    ? "border-white/20"
                    : "border-[#e5e7eb] dark:border-white/10"
                }`}
              />

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted
                          ? "text-white/80"
                          : "text-indigo-500"
                      }`}
                    />
                    <span
                      className={`font-body text-[13px] sm:text-sm ${
                        plan.highlighted
                          ? "text-white/90"
                          : "text-[#0f0f14] dark:text-[#f0f0f8]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-body text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#4f46e5] hover:bg-white/90"
                    : "bg-[#4f46e5] text-white hover:bg-[#4338ca] shadow-[0_4px_14px_rgba(79,70,229,0.35)]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={`text-center font-body text-[13px] text-[#9ca3af] mt-8 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          All prices are project-based. No retainers. No hidden fees. Payment
          plans available.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
