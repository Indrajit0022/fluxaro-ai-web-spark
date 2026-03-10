import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    label: "STEP 01",
    title: "Discovery Call",
    desc: "We map your operations, bottlenecks, and automation opportunities in a focused session. No fluff — just signal.",
    badge: "45 minutes",
  },
  {
    num: "02",
    label: "STEP 02",
    title: "Design & Plan",
    desc: "We architect your custom AI system and produce a full build plan with locked scope, timeline, and deliverables.",
    badge: "2–3 days",
  },
  {
    num: "03",
    label: "STEP 03",
    title: "Build & Integrate",
    desc: "We develop the software and integrate it directly into your existing tools, CRM, and workflows. No disruption.",
    badge: "3–5 days",
  },
  {
    num: "04",
    label: "STEP 04",
    title: "Deploy & Optimize",
    desc: "We go live, monitor performance, and keep improving. Your system gets smarter the longer it runs.",
    badge: "Ongoing",
  },
];

const HowItWorks = () => {
  const [activeConnector, setActiveConnector] = useState<number | null>(null);
  const [cursorX, setCursorX] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    let foundIndex: number | null = null;

    connectorRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distanceY = Math.abs(clientY - centerY);

      if (distanceY < 120) {
        foundIndex = i;
        const centerX = rect.left + rect.width / 2;
        setCursorX(clientX - centerX);
      }
    });

    setActiveConnector(foundIndex);
  };

  const handleMouseLeave = () => {
    setActiveConnector(null);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="bg-[#f9fafb] dark:bg-[#0d0d12] py-28 px-10 transition-colors duration-500 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[700px] mx-auto">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center font-body text-xs uppercase tracking-widest text-[#4f46e5] font-semibold px-4 py-1.5 rounded-full bg-[#4f46e5]/5 border border-[#4f46e5]/20 backdrop-blur-sm mb-4">
            THE PROCESS
          </span>
          <h2
            className="font-heading font-[800] tracking-tight text-[#0f0f14] dark:text-[#f0f0f8]"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Discovery to Deployed.
            <br />
            In Days, Not Months.
          </h2>
          <p
            className="font-body text-[#6b7280] dark:text-[#9494b0] max-w-[520px] mx-auto leading-[1.7] mt-6"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            No endless meetings. No scope creep. Just a proven system that gets your AI running fast — and keeps it running.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 flex flex-col items-center">
          {steps.map((step, i) => (
            <div key={step.num} className="w-full flex flex-col items-center">
              {/* Step Card */}
              <div
                className={`w-full bg-white dark:bg-[#12121c] border border-[#e5e7eb] dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] flex items-start gap-6 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#4f46e5] text-white font-heading font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_24px_rgba(99,102,241,0.45)]">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="font-body text-xs uppercase tracking-widest text-[#9ca3af] mb-1 block">
                    {step.label}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#0f0f14] dark:text-[#f0f0f8] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[#6b7280] dark:text-[#9494b0] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <span className="inline-block rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-body text-xs font-semibold px-4 py-1.5">
                    {step.badge}
                  </span>
                </div>
              </div>

              {/* Connector Arrow */}
              {i < steps.length - 1 && (
                <div
                  ref={(el) => (connectorRefs.current[i] = el)}
                  className="relative h-16 w-full flex items-center justify-center py-4"
                >
                  {/* Layer 1: Static Track */}
                  <div className="absolute h-full w-[2px] bg-[#e5e7eb] dark:bg-white/10 rounded-full" />
                  
                  {/* Layer 2: Animated Fill */}
                  <div
                    className="absolute top-0 w-[2px] bg-gradient-to-b from-[#4f46e5] to-[#0ea5e9] rounded-full transition-all duration-[600ms] ease-out"
                    style={{
                      height: visible ? "100%" : "0%",
                      transitionDelay: `${i * 200}ms`,
                    }}
                  />

                  {/* Layer 3: Cursor Reactive Arrow */}
                  <div
                    className={`relative w-6 h-6 rounded-full bg-white dark:bg-[#12121c] border-2 flex items-center justify-center transition-all duration-200 z-10 ${
                      activeConnector === i 
                        ? "border-indigo-600 scale-[1.3] shadow-[0_0_16px_rgba(99,102,241,0.6)]" 
                        : "border-indigo-400 scale-100 shadow-none"
                    }`}
                    style={{
                      transform: activeConnector === i && !isMobile
                        ? `scale(1.3) rotate(${Math.max(-15, Math.min(15, cursorX / 2))}deg)`
                        : `scale(1) rotate(0deg)`
                    }}
                  >
                    <ChevronDown className={`w-3.5 h-3.5 text-indigo-500 transition-transform duration-200`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-sm sm:text-base text-[#6b7280] dark:text-[#9494b0]">
            Ready to start? Your system could be live in under 7 days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#4f46e5] text-white font-semibold text-sm px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:bg-[#4338ca] transition-colors mt-4"
          >
            Book Your Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="font-body text-[13px] text-[#9ca3af] mt-3">
            45 minutes. No pitch. Just strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

