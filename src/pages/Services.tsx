import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Zap,
  MessageSquare,
  Phone,
  Brain,
  GitBranch,
  ChevronDown,
} from "lucide-react";

/* ─── Intersection Observer hook ─── */
function useReveal(threshold = 0.15) {
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

/* ─── CTA Button ─── */
const CtaButton = ({
  children,
  to = "/contact",
}: {
  children: ReactNode;
  to?: string;
}) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3.5 font-body text-[15px] font-medium text-white shadow-cta transition-colors hover:bg-[#4338ca]"
  >
    {children}
    <ArrowRight
      size={16}
      className="transition-transform group-hover:translate-x-0.5"
    />
  </Link>
);

/* ═══════════════════════════════════════════
   SECTION 1 — PAGE HERO
   ═══════════════════════════════════════════ */
const PageHero = () => (
  <section className="services-dot-grid relative overflow-hidden bg-white pt-32 pb-20 px-10 dark:bg-[#09090b]">
    {/* Indigo radial glow */}
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
      <EyebrowPill>OUR SERVICES</EyebrowPill>

      <h1 className="mt-7 font-heading font-extrabold text-5xl md:text-7xl tracking-tight leading-tight text-[#0f0f14] dark:text-[#f0f0f8]">
        Custom AI Systems,
        <br />
        Built for Your Business.
      </h1>

      <p className="mt-6 max-w-xl mx-auto font-body text-lg leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
        Every service we offer is engineered from scratch on contract. No
        templates. No off-the-shelf tools. Just real software that solves real
        business problems.
      </p>

      <div className="mt-8">
        <CtaButton>Book a Discovery Call</CtaButton>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   VISUAL CARDS (one per service)
   ═══════════════════════════════════════════ */

/* 01 — Feature list */
const FeatureListCard = () => {
  const features = [
    { icon: Code2, name: "Custom Dashboard" },
    { icon: Zap, name: "API Integrations" },
    { icon: MessageSquare, name: "AI Chat Module" },
    { icon: Phone, name: "Voice Pipeline" },
  ];

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
      <p className="font-body text-xs uppercase tracking-widest text-[#9ca3af] mb-5">
        INCLUDED FEATURES
      </p>
      <div className="space-y-4">
        {features.map((f) => (
          <div
            key={f.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <f.icon className="w-5 h-5 text-indigo-500" />
              <span className="font-body text-sm text-[#374151] dark:text-[#d1d5db]">
                {f.name}
              </span>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-600 dark:bg-emerald-500/10">
              Included
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 02 — Chat UI mockup */
const ChatMockupCard = () => (
  <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
    {/* Header bar */}
    <div className="flex items-center gap-2 mb-5">
      <span className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </span>
      <span className="ml-2 font-body text-xs font-semibold text-[#374151] dark:text-[#d1d5db]">
        Fluxaro AI Assistant
      </span>
    </div>

    {/* Messages */}
    <div className="space-y-3">
      {/* User */}
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-tr-sm bg-indigo-500 px-4 py-2.5 text-sm text-white max-w-[75%]">
          Hi, I need help with pricing
        </div>
      </div>
      {/* Bot */}
      <div className="flex justify-start">
        <div className="rounded-2xl rounded-tl-sm bg-[#f3f4f6] px-4 py-2.5 text-sm text-[#374151] dark:bg-zinc-800 dark:text-[#d1d5db] max-w-[75%]">
          Of course! Our plans start from...
        </div>
      </div>
      {/* User */}
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-tr-sm bg-indigo-500 px-4 py-2.5 text-sm text-white max-w-[75%]">
          Can I book a demo?
        </div>
      </div>
      {/* Bot */}
      <div className="flex justify-start">
        <div className="rounded-2xl rounded-tl-sm bg-[#f3f4f6] px-4 py-2.5 text-sm text-[#374151] dark:bg-zinc-800 dark:text-[#d1d5db] max-w-[75%]">
          Absolutely! Let me schedule...
        </div>
      </div>
    </div>

    {/* Typing indicator */}
    <div className="mt-4 flex items-center gap-2">
      <span className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] animate-bounce [animation-delay:300ms]" />
      </span>
      <span className="font-body text-xs text-[#9ca3af]">
        Assistant is typing...
      </span>
    </div>
  </div>
);

/* 03 — Call log */
const CallLogCard = () => {
  const rows = [
    {
      lead: "Lead #4821",
      status: "Qualified",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10",
      time: "2:34",
      active: true,
    },
    {
      lead: "Lead #4820",
      status: "Booked",
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10",
      time: "4:12",
      active: false,
    },
    {
      lead: "Lead #4819",
      status: "Follow-up",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-500/10",
      time: "1:58",
      active: false,
    },
    {
      lead: "Lead #4818",
      status: "Qualified",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10",
      time: "3:05",
      active: false,
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
      <p className="font-body text-xs uppercase tracking-widest text-[#9ca3af] mb-5">
        LIVE CALL LOG
      </p>
      <div className="divide-y divide-[#f0f0f0] dark:divide-white/10">
        {rows.map((r) => (
          <div
            key={r.lead}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  r.active
                    ? "bg-emerald-500 animate-pulse"
                    : "bg-[#d1d5db] dark:bg-zinc-600"
                }`}
              />
              <span className="font-body text-sm text-[#374151] dark:text-[#d1d5db]">
                {r.lead}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${r.color}`}
              >
                {r.status}
              </span>
              <span className="font-body text-xs text-[#9ca3af] w-8 text-right">
                {r.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 04 — Flow diagram */
const FlowDiagramCard = () => {
  const nodes = [
    {
      icon: Zap,
      label: "Trigger",
      active: true,
      iconColor: "text-indigo-500",
    },
    {
      icon: Brain,
      label: "Process",
      active: false,
      iconColor: "text-indigo-500",
    },
    {
      icon: GitBranch,
      label: "Integrate",
      active: false,
      iconColor: "text-indigo-500",
    },
    {
      icon: CheckCircle2,
      label: "Output",
      active: false,
      iconColor: "text-emerald-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
      <div className="flex flex-col items-center gap-0">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex flex-col items-center">
            <div
              className={`flex items-center gap-3 rounded-xl border px-5 py-3 ${
                n.active
                  ? "border-indigo-300 bg-indigo-50 dark:border-indigo-500/40 dark:bg-indigo-500/10"
                  : "border-[#e5e7eb] bg-white dark:border-white/10 dark:bg-[#1a1a2e]"
              }`}
            >
              <n.icon className={`w-5 h-5 ${n.iconColor}`} />
              <span className="font-body text-sm font-semibold text-[#374151] dark:text-[#d1d5db]">
                {n.label}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <ChevronDown className="w-5 h-5 text-indigo-400 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* 05 — Roadmap timeline */
const RoadmapCard = () => {
  const steps = [
    { num: "1", title: "Audit", sub: "Week 1" },
    { num: "2", title: "Roadmap", sub: "Week 2" },
    { num: "3", title: "Implementation", sub: "Week 3–8" },
  ];

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-start gap-4">
            {/* Dot + connector */}
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4f46e5] text-xs font-bold text-white">
                {s.num}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-[#e5e7eb] dark:bg-white/10" />
              )}
            </div>
            {/* Content */}
            <div className="pt-1">
              <p className="font-body text-sm font-semibold text-[#0f0f14] dark:text-[#f0f0f8]">
                {s.title}
              </p>
              <p className="font-body text-xs text-[#9ca3af]">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   SECTION 2 — SERVICE PANELS
   ═══════════════════════════════════════════ */

interface ServiceData {
  number: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  bullets: string[];
  count: string;
  cta: string;
  visual: ReactNode;
}

const services: ServiceData[] = [
  {
    number: "01 / 05",
    badge: "FLAGSHIP SERVICE",
    titleLine1: "Custom AI Software,",
    titleLine2: "Built on Contract.",
    description:
      "We design and develop fully bespoke AI-powered SaaS applications for your exact business needs. Your logic, your workflows, your rules — engineered into production-grade software.",
    bullets: [
      "Full-stack custom development",
      "Scalable cloud architecture",
      "API integrations with your existing tools",
      "Ongoing support & optimization",
    ],
    count: "20+ systems built",
    cta: "Start Your Build →",
    visual: <FeatureListCard />,
  },
  {
    number: "02 / 05",
    badge: "CONVERSATIONAL AI",
    titleLine1: "Intelligent Chatbots",
    titleLine2: "That Convert.",
    description:
      "Not a widget. A fully trained conversational AI built on your data, integrated into your website, CRM, and support stack.",
    bullets: [
      "Trained on your business data",
      "Multi-platform: Web, WhatsApp, Instagram",
      "Voice agent integration available",
      "Human handover built-in",
    ],
    count: "15+ chatbots deployed",
    cta: "Build My Chatbot →",
    visual: <ChatMockupCard />,
  },
  {
    number: "03 / 05",
    badge: "INBOUND & OUTBOUND",
    titleLine1: "AI That Handles",
    titleLine2: "Your Calls 24/7.",
    description:
      "Inbound and outbound voice agents that qualify leads, book appointments, handle objections, and sync to your CRM — automatically. Never miss a call again.",
    bullets: [
      "Inbound & outbound calls",
      "Lead qualification & booking",
      "CRM auto-sync",
      "Call recordings & transcripts",
    ],
    count: "10,000+ calls handled",
    cta: "Deploy Voice Agent →",
    visual: <CallLogCard />,
  },
  {
    number: "04 / 05",
    badge: "CUSTOM SOFTWARE",
    titleLine1: "Replace Manual Processes",
    titleLine2: "With AI Workflows.",
    description:
      "We build fully automated workflow systems — not Zapier templates. Real software that connects your tools, processes data, and acts without human input.",
    bullets: [
      "End-to-end process automation",
      "Multi-tool integrations",
      "Error handling & monitoring",
      "Custom logic & conditions",
    ],
    count: "25+ workflows deployed",
    cta: "Automate My Workflow →",
    visual: <FlowDiagramCard />,
  },
  {
    number: "05 / 05",
    badge: "STRATEGY FIRST",
    titleLine1: "Strategy Before",
    titleLine2: "Software.",
    description:
      "Not sure where to start? We audit your operations, identify automation opportunities, and build a custom AI roadmap for your business with clear ROI projections.",
    bullets: [
      "Operations audit",
      "AI opportunity mapping",
      "Custom roadmap & ROI projections",
      "Implementation support",
    ],
    count: "30+ businesses consulted",
    cta: "Book a Strategy Call →",
    visual: <RoadmapCard />,
  },
];

const ServicePanel = ({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) => {
  const { ref, visible } = useReveal(0.1);
  const isOdd = index % 2 === 0; // 0-indexed: 0,2,4 = odd panels (1,3,5)
  const bgClass = isOdd
    ? "bg-white dark:bg-[#09090b]"
    : "bg-[#f9fafb] dark:bg-[#0d0d12]";

  return (
    <section className={`${bgClass} py-24 px-10`}>
      <div
        ref={ref}
        className={`mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 md:grid-cols-2 ${
          !isOdd ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Text column */}
        <div
          className={`transition-all duration-700 delay-0 md:[direction:ltr] ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-xs uppercase tracking-widest text-[#9ca3af] mb-2">
            {service.number}
          </p>
          <EyebrowPill>{service.badge}</EyebrowPill>
          <h2 className="mt-4 font-heading font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-[#0f0f14] dark:text-[#f0f0f8]">
            {service.titleLine1}
            <br />
            {service.titleLine2}
          </h2>
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
            {service.description}
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500" />
                <span className="font-body text-sm text-[#374151] dark:text-[#d1d5db]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-body text-xs text-[#9ca3af]">
            {service.count} with this service
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400"
          >
            {service.cta}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Visual card column */}
        <div
          className={`transition-all duration-700 delay-150 md:[direction:ltr] ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {service.visual}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SECTION 3 — BOTTOM CTA
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
          Not Sure Which Service
          <br />
          Is Right for You?
        </h2>

        <p className="mx-auto mt-5 max-w-md font-body text-lg text-[#6b7280] dark:text-[#9494b0]">
          Get on a call. We'll audit your operations and tell you exactly which
          system would have the biggest impact on your business.
        </p>

        <div className="mt-8">
          <CtaButton>Book a Free Discovery Call</CtaButton>
        </div>

        <p className="mt-3 font-body text-xs text-[#9ca3af]">
          45 minutes. No pitch. Just strategy.
        </p>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════ */
const Services = () => (
  <main>
    <PageHero />
    {services.map((s, i) => (
      <ServicePanel key={s.number} service={s} index={i} />
    ))}
    <BottomCTA />
  </main>
);

export default Services;
