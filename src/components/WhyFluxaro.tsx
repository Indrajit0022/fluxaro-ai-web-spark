import React, { Suspense } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Timeline = React.lazy(() =>
  import("@/components/ui/timeline").then((mod) => ({ default: mod.Timeline }))
);

const FluxaroInlineLogo = () => (
  <span className="inline-flex items-center gap-1.5 align-middle">
    <svg width="16" height="12" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
      <rect y="0" width="18" height="2" rx="1" fill="url(#why-grad)" />
      <rect y="6" width="12" height="2" rx="1" fill="url(#why-grad)" />
      <rect y="12" width="15" height="2" rx="1" fill="url(#why-grad)" />
      <defs>
        <linearGradient id="why-grad" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
    <span className="font-heading font-bold">Fluxaro</span>
  </span>
);

interface ComparisonCardProps {
  everyoneElse: { heading: string; body: string };
  fluxaro: { heading: string; body: string };
}

const ComparisonCard = ({ everyoneElse, fluxaro }: ComparisonCardProps) => (
  <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
    <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground mb-5 sm:mb-6 block">
      THE DIFFERENCE
    </span>

    {/* Everyone Else */}
    <div>
      <span className="inline-block bg-destructive/10 text-destructive text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
        Everyone Else
      </span>
      <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">{everyoneElse.heading}</h4>
      <p className="font-body text-[13px] sm:text-sm text-muted-foreground leading-relaxed mt-2">{everyoneElse.body}</p>
    </div>

    <div className="my-5 sm:my-6 border-t border-border" />

    {/* Fluxaro */}
    <div>
      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
        <Check className="w-3.5 h-3.5" /> <FluxaroInlineLogo />
      </span>
      <h4 className="font-heading font-bold text-lg sm:text-xl text-foreground">{fluxaro.heading}</h4>
      <p className="font-body text-[13px] sm:text-sm text-muted-foreground leading-relaxed mt-2">{fluxaro.body}</p>
    </div>
  </div>
);

const timelineData = [
  {
    title: "Custom Built",
    content: (
      <ComparisonCard
        everyoneElse={{
          heading: "Template tools dressed up as custom work",
          body: "Most agencies take off-the-shelf tools — Zapier, Make, n8n — brand them as custom solutions, charge enterprise prices, and deliver something you could have built yourself in a weekend.",
        }}
        fluxaro={{
          heading: "100% custom-built software, every time",
          body: "Every system we build is written from scratch for your exact business logic. No templates. No repackaged tools. Real engineers writing real code that does exactly what your business needs — nothing more, nothing less.",
        }}
      />
    ),
  },
  {
    title: "Accountability",
    content: (
      <ComparisonCard
        everyoneElse={{
          heading: "Vague retainers with no deliverables",
          body: "You pay monthly. They bill hours. Scope creeps endlessly. Six months later you have half a product and a full invoice. There's no contract protecting you — just hope.",
        }}
        fluxaro={{
          heading: "Contract-based. Clear scope. Clear outcomes.",
          body: "Before we write a single line of code, everything is locked in writing. Scope, timeline, deliverables, cost. You know exactly what you're getting, exactly when you're getting it, and exactly what happens if we miss.",
        }}
      />
    ),
  },
  {
    title: "Speed",
    content: (
      <ComparisonCard
        everyoneElse={{
          heading: "Months of meetings before anything works",
          body: "Discovery phases that last 3 weeks. Design sprints that produce decks, not software. By the time something is in production, the original problem has already cost you more than the solution.",
        }}
        fluxaro={{
          heading: "Live and running in 5–7 days",
          body: "We move fast because we're built to move fast. Our process is designed to go from discovery call to deployed software in under a week. You'll see your system working before most agencies finish their proposal.",
        }}
      />
    ),
  },
  {
    title: "Outcomes",
    content: (
      <ComparisonCard
        everyoneElse={{
          heading: "They track hours. You track hope.",
          body: "Most agencies measure success by how many hours they logged. Their KPI is utilisation rate. Yours is ROI. These are fundamentally different goals — and you end up paying for their goal, not yours.",
        }}
        fluxaro={{
          heading: "We're measured by your revenue.",
          body: "Every system we build has one purpose — to make your business more money or save you significant time. We don't disappear after deployment. We track performance, we optimise, and we're not done until the numbers move.",
        }}
      />
    ),
  },
  {
    title: "Expertise",
    content: (
      <ComparisonCard
        everyoneElse={{
          heading: "Generalists pretending to be AI experts",
          body: "The AI agency market is flooded with marketers who learned to use ChatGPT last year and rebranded. They'll sell you a chatbot wrapper and call it an AI system. You deserve better.",
        }}
        fluxaro={{
          heading: "AI-native from day one.",
          body: "We didn't pivot to AI — we were built for it. Every system we've shipped is AI-native at its core. We know the models, the APIs, the architectures, and the pitfalls. We've built 100+ systems. We know what works.",
        }}
      />
    ),
  },
  {
    title: "The Bottom Line",
    content: (
      <div className="bg-foreground dark:bg-card rounded-2xl p-8 sm:p-10 border border-transparent dark:border-border shadow-[0_0_80px_rgba(99,102,241,0.12)]">
        <span className="font-heading font-[800] text-6xl sm:text-8xl text-primary/20 leading-none block -mb-4 select-none">"</span>
        <blockquote className="font-heading font-bold text-xl sm:text-[26px] md:text-[32px] text-primary-foreground leading-[1.3] max-w-[600px]">
          I started Fluxaro because I was tired of watching businesses pay agencies for automation theatre. Fancy decks. Demo environments. Retainer fees. And nothing actually working in production.
          <br /><br />
          We build real software. We take accountability. And we don't stop until it works.
        </blockquote>
        <p className="font-body text-xs sm:text-sm text-primary-foreground/50 mt-6 sm:mt-8">
          — Indrajit Prasad, Founder & CEO, Fluxaro AI
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Founder-led", "Builder-operated", "Outcome-obsessed"].map((label) => (
            <span key={label} className="bg-primary/10 text-primary rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold font-body">
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

const WhyFluxaro = () => (
  <section className="bg-background pt-40 sm:pt-52 md:pt-60">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-5">
      <span className="inline-flex items-center font-body text-sm sm:text-base uppercase tracking-widest text-primary font-semibold px-5 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-sm mb-5 sm:mb-6">
        WHY FLUXARO
      </span>
      <h2
        className="font-heading font-[800] tracking-tight text-foreground"
        style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05 }}
      >
        Most Agencies Talk.
        <br />
        We Ship.
      </h2>
      <p
        className="font-body text-muted-foreground max-w-[560px] leading-[1.7] mt-4 sm:mt-6"
        style={{ fontSize: "clamp(14px, 1.8vw, 16px)" }}
      >
        Anyone can promise AI automation. We're one of the few who actually build production-grade custom software — on contract, on time, with real outcomes your business can measure.
      </p>
    </div>

    {/* Timeline */}
    <Suspense fallback={<div className="h-96" />}>
      <Timeline data={timelineData} />
    </Suspense>

    {/* Bottom CTA */}
    <div className="text-center mt-12 sm:mt-16 mb-4 pb-16 sm:pb-20 px-4">
      <p className="font-body text-sm sm:text-base text-muted-foreground">
        Still on the fence? Get on a call. We'll show you exactly what we'd build for you.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-[var(--shadow-cta)] hover:bg-[hsl(var(--primary-hover))] transition-colors mt-4"
      >
        Book a Free Discovery Call
        <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="font-body text-[12px] sm:text-[13px] text-muted-foreground mt-3">
        45 minutes. No pitch. Just strategy.
      </p>
    </div>
  </section>
);

export default WhyFluxaro;
