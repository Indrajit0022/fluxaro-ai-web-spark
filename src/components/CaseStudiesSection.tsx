import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    badge: "Real Estate",
    badgeClass: "bg-primary/5 text-primary",
    gradient: "from-primary to-[hsl(199,89%,48%)]",
    title: "AI Lead Qualification & Voice Agent System",
    problem:
      "Agency receiving 200+ leads per month and responding manually — losing prospects to faster competitors within minutes of inquiry. Top-of-funnel was hemorrhaging revenue.",
    stats: [
      { value: "3×", label: "More Appointments" },
      { value: "90%", label: "Faster Response Time" },
      { value: "60%", label: "Less Manual Work" },
    ],
  },
  {
    badge: "Marketing Agency",
    badgeClass: "bg-[hsl(187,72%,50%)]/5 text-[hsl(187,72%,40%)] dark:text-[hsl(187,72%,55%)]",
    gradient: "from-[hsl(199,89%,48%)] to-[hsl(160,60%,45%)]",
    title: "Custom Workflow Automation Pipeline",
    problem:
      "Multi-client agency juggling 12+ tools manually. Team burning 60% of their week on admin and reporting instead of actual strategy and client delivery.",
    stats: [
      { value: "300%", label: "More Qualified Leads" },
      { value: "45%", label: "Conversion Rate" },
      { value: "40h", label: "Saved Every Week" },
    ],
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background py-20 sm:py-28 md:py-[120px] px-4 sm:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center font-body text-xs uppercase tracking-widest text-primary font-semibold px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm mb-4">
            RESULTS
          </span>
          <h2
            className="font-heading font-[800] tracking-tight text-foreground"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Real Businesses.
            <br />
            Real Results.
          </h2>
          <p
            className="font-body text-muted-foreground max-w-[520px] mx-auto leading-[1.7] mt-6"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            We don't do case studies with vague outcomes. Every number below is real.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 sm:mt-20">
          {cases.map((c, i) => (
            <div
              key={c.badge}
              className={`bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(79,70,229,0.1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: visible ? `${150 * i + 100}ms` : "0ms" }}
            >
              {/* Top accent strip */}
              <div className={`h-1 bg-gradient-to-r ${c.gradient}`} />

              <div className="p-7 sm:p-9">
                <span className={`inline-block rounded-full text-xs font-semibold px-3 py-1 font-body ${c.badgeClass}`}>
                  {c.badge}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-[22px] text-foreground mt-4 leading-tight">
                  {c.title}
                </h3>
                <p className="font-body text-[13px] sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  {c.problem}
                </p>

                <div className="border-t border-border my-6" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-0">
                  {c.stats.map((s, si) => (
                    <div
                      key={s.label}
                      className={`text-center ${si > 0 ? "border-l border-border" : ""}`}
                    >
                      <span className="font-heading font-[800] text-2xl sm:text-[32px] text-foreground">
                        {s.value}
                      </span>
                      <span className="block font-body text-[11px] sm:text-xs text-muted-foreground mt-1">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1.5 font-body text-[13px] text-primary hover:text-primary-hover transition-colors mt-6 group"
                >
                  View Full Case Study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 sm:mt-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="font-body text-sm sm:text-base text-muted-foreground">
            Want to be our next case study?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-cta hover:bg-primary-hover transition-colors mt-4"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
