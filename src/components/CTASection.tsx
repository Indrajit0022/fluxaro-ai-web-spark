import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background py-28 px-4 sm:px-10"
    >
      <div
        className={`max-w-[900px] mx-auto relative overflow-hidden rounded-3xl transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#0ea5e9]" />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center py-20 sm:py-24 px-6 sm:px-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
            <span className="font-body text-xs font-medium uppercase tracking-wider text-white/80">
              Limited availability
            </span>
          </div>

          <h2
            className="font-heading font-[800] text-white tracking-tight"
            style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              lineHeight: 1.1,
            }}
          >
            Ready to Build Your
            <br />
            AI-Powered Future?
          </h2>

          <p className="font-body text-white/70 max-w-[480px] mx-auto mt-5 leading-relaxed text-base sm:text-lg">
            Book a free 45-minute discovery call. We'll map your operations,
            identify the highest-impact opportunities, and show you exactly
            what we'd build.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-[#4f46e5] font-body text-[15px] font-semibold px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/90 transition-colors"
            >
              Book Your Discovery Call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-body text-[15px] font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              See Our Work
            </Link>
          </div>

          <p className="font-body text-white/50 text-[13px] mt-6">
            No pitch. No pressure. Just strategy. — Indrajit Prasad, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
