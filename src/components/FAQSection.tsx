import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a custom AI system?",
    a: "Most projects go from discovery call to deployed system in 5–7 business days. Complex enterprise builds may take 2–3 weeks. We'll give you an exact timeline before any work begins.",
  },
  {
    q: "Do I own the code you build?",
    a: "Yes — 100%. Every line of code we write belongs to you. Full source code, documentation, and deployment access are handed over on completion. No lock-in, no recurring licence fees.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's exactly what the discovery call is for. We'll audit your current operations, identify the highest-impact automation opportunities, and recommend the right system for your goals. No commitment required.",
  },
  {
    q: "How is Fluxaro different from other AI agencies?",
    a: "Most agencies resell templates or stitch together no-code tools. We write custom software from scratch, deliver on contract with locked scope and timeline, and measure success by your revenue — not our billable hours.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Every project includes post-launch support (30–60 days depending on your plan). We monitor performance, fix issues, and optimize your system. Extended support and retainer packages are available for teams that want continuous improvement.",
  },
  {
    q: "What technologies do you use?",
    a: "We're technology-agnostic and choose the best stack for each project. Common tools include Python, TypeScript, React, Next.js, OpenAI, Anthropic, custom LLM pipelines, Twilio, and various CRM/API integrations.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center font-body text-xs uppercase tracking-widest text-indigo-500 font-semibold px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 backdrop-blur-sm mb-4">
            FAQ
          </span>
          <h2
            className="font-heading font-[800] tracking-tight text-[#0f0f14] dark:text-[#f0f0f8]"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Questions?
            <br />
            We've Got Answers.
          </h2>
          <p
            className="font-body text-[#6b7280] dark:text-[#9494b0] max-w-[480px] mx-auto leading-[1.7] mt-6"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white dark:bg-[#12121c] border border-[#e5e7eb] dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-200 dark:border-indigo-500/30 shadow-[0_4px_24px_rgba(79,70,229,0.08)]"
                    : "hover:border-indigo-100 dark:hover:border-indigo-500/20"
                } ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: visible ? `${80 * i + 100}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-heading font-bold text-[15px] sm:text-base text-[#0f0f14] dark:text-[#f0f0f8] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9ca3af] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-6 font-body text-[13px] sm:text-sm text-[#6b7280] dark:text-[#9494b0] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
