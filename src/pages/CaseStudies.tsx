import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* ─── Intersection Observer hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Reusable Pill ─── */
const EyebrowPill = ({ children }: { children: ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 dark:border-indigo-500/20 dark:bg-indigo-500/10">
    <span className="font-body text-xs font-medium uppercase tracking-wider text-indigo-500">
      {children}
    </span>
  </div>
);

/* ═══════════════════════════════════════════
   SECTION 1 — HERO
   ═══════════════════════════════════════════ */
const PageHero = () => (
  <section className="services-dot-grid relative overflow-hidden bg-white pt-32 pb-20 px-10 dark:bg-[#09090b]">
    <div
      className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2"
      style={{
        width: "700px",
        height: "400px",
        background:
          "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
      }}
    />
    <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
      <EyebrowPill>RESULTS</EyebrowPill>
      <h1 className="mt-7 font-heading font-extrabold text-5xl md:text-7xl tracking-tight leading-tight text-[#0f0f14] dark:text-[#f0f0f8]">
        Real Businesses.
        <br />
        Real Results.
      </h1>
      <p className="mt-6 max-w-xl mx-auto font-body text-lg leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
        We don't do case studies with vague outcomes. Every number below is real
        — pulled directly from client systems after deployment.
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — STATS BAR
   ═══════════════════════════════════════════ */
const stats = [
  { value: "100+", label: "AI Systems Built" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5–7 Days", label: "Average Delivery" },
  { value: "$2M+", label: "Revenue Generated for Clients" },
];

const StatsBar = () => {
  const { ref, visible } = useReveal(0.2);
  return (
    <section className="bg-[#f9fafb] py-12 px-10 dark:bg-[#0d0d12]">
      <div
        ref={ref}
        className={`mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-8 md:flex-row md:gap-0 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-0">
            <div className="text-center px-6 md:px-10">
              <p className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-[#0f0f14] dark:text-white">
                {s.value}
              </p>
              <p className="font-body text-sm text-[#6b7280] dark:text-[#9494b0] mt-1">
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-[#e5e7eb] dark:bg-white/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 3 — CASE STUDY CARDS
   ═══════════════════════════════════════════ */

interface CaseStudy {
  badge: string;
  badgeColor: string;
  title: string;
  problem: string;
  solution: string;
  gradient: string;
  results: { value: string; label: string }[];
}

const fullStudies: CaseStudy[] = [
  {
    badge: "Real Estate",
    badgeColor:
      "text-indigo-500 bg-indigo-50 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20",
    title: "AI Lead Qualification & Voice Agent System",
    gradient: "from-[#4f46e5] to-[#0ea5e9]",
    problem:
      "A real estate agency receiving 200+ leads per month was responding to every inquiry manually. By the time agents called back, leads had already moved on to faster competitors. Top-of-funnel was hemorrhaging revenue daily.",
    solution:
      "We built a custom AI lead qualification system with an integrated voice agent. The system automatically responds to new leads within seconds, qualifies them using a custom scoring model, books appointments directly into the agent's calendar, and syncs everything to their CRM — without any human input required.",
    results: [
      { value: "3×", label: "More Appointments Booked" },
      { value: "90%", label: "Faster Lead Response Time" },
      { value: "60%", label: "Reduction in Manual Work" },
    ],
  },
  {
    badge: "Marketing Agency",
    badgeColor:
      "text-cyan-500 bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/20",
    title: "Custom Workflow Automation Pipeline",
    gradient: "from-[#0ea5e9] to-[#10b981]",
    problem:
      "A multi-client marketing agency was managing 12+ tools manually. Their team was spending over 60% of their working week on admin tasks, reporting, and data entry — instead of strategy and client delivery.",
    solution:
      "We engineered a fully custom workflow automation pipeline that connects all their tools, automates client reporting, routes leads automatically, manages task creation, and sends status updates — eliminating the entire manual admin layer from their operations.",
    results: [
      { value: "300%", label: "Increase in Qualified Leads" },
      { value: "45%", label: "Conversion Rate Achieved" },
      { value: "40h", label: "Saved Every Single Week" },
    ],
  },
];

const FullCaseCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => {
  const { ref, visible } = useReveal(0.08);
  return (
    <div
      ref={ref}
      className={`mb-8 overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-500 hover:border-indigo-200 dark:border-white/10 dark:bg-[#12121c] dark:hover:border-indigo-500/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Accent bar */}
      <div className={`h-1 bg-gradient-to-r ${study.gradient}`} />

      {/* Body */}
      <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 md:grid-cols-5">
        {/* Left — 60 % */}
        <div className="md:col-span-3">
          <span
            className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${study.badgeColor}`}
          >
            {study.badge}
          </span>
          <h3 className="mt-4 font-heading font-extrabold text-3xl leading-tight text-[#0f0f14] dark:text-[#f0f0f8]">
            {study.title}
          </h3>

          {/* Problem */}
          <div className="mt-6">
            <p className="mb-3 font-body text-xs uppercase tracking-widest text-[#9ca3af]">
              THE PROBLEM
            </p>
            <p className="font-body text-base leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
              {study.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mt-6">
            <p className="mb-3 font-body text-xs uppercase tracking-widest text-[#9ca3af]">
              THE SOLUTION
            </p>
            <p className="font-body text-base leading-relaxed text-[#374151] dark:text-[#d1d5db]">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Right — 40 % */}
        <div className="flex flex-col justify-center md:col-span-2">
          {study.results.map((r, ri) => (
            <div
              key={r.label}
              className={`${
                ri < study.results.length - 1
                  ? "border-b border-[#f0f0f0] pb-6 mb-6 dark:border-white/10"
                  : ""
              }`}
            >
              <p className="font-heading font-extrabold text-5xl text-[#0f0f14] dark:text-white">
                {r.value}
              </p>
              <p className="mt-1 font-body text-sm text-[#6b7280]">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface PlaceholderData {
  badge: string;
  title: string;
  text: string;
  gradient: string;
  badgeColor: string;
}

const placeholders: PlaceholderData[] = [
  {
    badge: "E-commerce",
    title: "AI Customer Support & Order Automation",
    text: "Full case study coming soon. Results exceeded client expectations across all KPIs.",
    gradient: "from-[#10b981] to-[#0ea5e9]",
    badgeColor:
      "text-emerald-500 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20",
  },
  {
    badge: "SaaS",
    title: "Intelligent Onboarding & Retention System",
    text: "Full case study coming soon. System live and optimizing continuously.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    badgeColor:
      "text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20",
  },
];

const PlaceholderCard = ({
  data,
  index,
}: {
  data: PlaceholderData;
  index: number;
}) => {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-500 hover:border-indigo-200 dark:border-white/10 dark:bg-[#12121c] dark:hover:border-indigo-500/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${data.gradient}`} />
      <div className="p-8">
        <span
          className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${data.badgeColor}`}
        >
          {data.badge}
        </span>
        <h3 className="mt-4 font-heading font-bold text-xl text-[#0f0f14] dark:text-[#f0f0f8]">
          {data.title}
        </h3>
        <p className="mt-3 font-body text-sm text-[#6b7280] dark:text-[#9494b0]">
          {data.text}
        </p>
        <span className="mt-6 inline-block rounded-full bg-[#f9fafb] px-3 py-1 text-xs text-[#9ca3af] dark:bg-white/5">
          Coming Soon
        </span>
      </div>
    </div>
  );
};

const CaseStudyCards = () => (
  <section className="bg-white py-24 px-10 dark:bg-[#09090b]">
    <div className="mx-auto max-w-[1100px]">
      {fullStudies.map((s, i) => (
        <FullCaseCard key={s.title} study={s} index={i} />
      ))}

      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        {placeholders.map((p, i) => (
          <PlaceholderCard key={p.badge} data={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 4 — BOTTOM CTA
   ═══════════════════════════════════════════ */
const BottomCTA = () => {
  const { ref, visible } = useReveal(0.15);
  return (
    <section className="bg-[#f9fafb] py-24 px-10 dark:bg-[#0d0d12]">
      <div
        ref={ref}
        className={`mx-auto max-w-[700px] text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-heading font-extrabold text-4xl md:text-5xl tracking-tight text-[#0f0f14] dark:text-[#f0f0f8]">
          Want to Be Our
          <br />
          Next Case Study?
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-lg text-[#6b7280] dark:text-[#9494b0]">
          Book a discovery call. We'll show you exactly what we'd build for your
          business and what results you can expect.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 font-body text-[15px] font-medium text-white shadow-cta transition-colors hover:bg-[#4338ca]"
          >
            Book a Free Discovery Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <p className="mt-3 font-body text-xs text-[#9ca3af]">
          45 minutes. No pitch. Just strategy.
        </p>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const CaseStudies = () => (
  <main>
    <PageHero />
    <StatsBar />
    <CaseStudyCards />
    <BottomCTA />
  </main>
);

export default CaseStudies;
