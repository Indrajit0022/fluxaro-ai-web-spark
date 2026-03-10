import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroBadge = () => (
  <div className="animate-fade-in delay-100 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur dark:border-primary-foreground/10 dark:bg-primary-foreground/5">
    <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
    <span className="font-body text-xs font-medium uppercase tracking-wider text-primary dark:text-muted-foreground">
      AI-Native SaaS Development Agency
    </span>
  </div>
);

const HeroSection = () => (
  <section className="hero-dot-grid relative overflow-hidden bg-background pb-16 pt-20">
    {/* Radial gradient glow */}
    <div
      className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2"
      style={{
        width: "900px",
        height: "500px",
        background: "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, rgba(14,165,233,0.04) 40%, transparent 70%)",
      }}
    />

    <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-5 text-center">
      <HeroBadge />

      {/* Headline */}
      <h1
        className="animate-fade-in delay-200 mt-7 font-heading font-extrabold tracking-tight text-foreground"
        style={{
          fontSize: "clamp(36px, 5.5vw, 60px)",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
        }}
      >
        We Don't Automate Businesses.
        <br />
        We Rebuild Them With AI.
      </h1>

      {/* Subtext */}
      <p className="animate-fade-in delay-300 mt-6 max-w-[480px] font-body text-base leading-relaxed text-secondary-foreground" style={{ lineHeight: 1.65 }}>
        Custom-built AI SaaS, voice agents, chatbots and workflow systems — delivered on contract.
        Not templates. Not promises. Real systems that drive real revenue.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-in delay-400 mt-8 flex flex-col items-center gap-3.5 sm:flex-row">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-body text-[15px] font-medium text-primary-foreground shadow-cta transition-colors hover:bg-primary-hover"
        >
          Book a Free Discovery Call
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-body text-[15px] font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          <Play size={14} />
          See Our Work
        </Link>
      </div>

      {/* Trust line */}
      <p className="animate-fade-in delay-500 mt-6 font-body text-[13px] text-muted-foreground">
        Delivered on contract or we make it right — Indrajit Prasad, Founder & CEO
      </p>
    </div>
  </section>
);

export default HeroSection;
