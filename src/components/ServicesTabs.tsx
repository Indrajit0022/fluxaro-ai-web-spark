import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MessageSquare, Phone, Zap, Lightbulb, Code2 } from "lucide-react";

const tabs = [
  "AI SaaS Development",
  "Custom Chatbots",
  "Voice Agents",
  "Workflow Automation",
  "AI Consulting",
];

/* ── Visual cards for each tab ── */
const SaaSCard = () => {
  const features = [
    { icon: Code2, name: "Custom Dashboard" },
    { icon: Zap, name: "API Integrations" },
    { icon: MessageSquare, name: "AI Chat Module" },
    { icon: Phone, name: "Voice Pipeline" },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121c]">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#6b7280] dark:text-[#9494b0]">
        Included Features
      </p>
      <div className="flex flex-col gap-3">
        {features.map((f) => (
          <div key={f.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <f.icon size={16} className="text-indigo-500" />
              <span className="text-[13px] font-medium text-[#0f0f14] dark:text-[#f0f0f8]">{f.name}</span>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-medium text-emerald-500">
              Included
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatCard = () => {
  const msgs = [
    { from: "bot", text: "Hi! How can I help you today?" },
    { from: "user", text: "I need pricing for enterprise plan" },
    { from: "bot", text: "Sure! Our enterprise plan starts at $499/mo with custom integrations." },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121c]">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#6b7280] dark:text-[#9494b0]">
        Live Chat Preview
      </p>
      <div className="flex flex-col gap-3">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-2.5 text-[12px] ${
                m.from === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-[#0f0f14] dark:bg-white/[0.06] dark:text-[#f0f0f8]"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VoiceCard = () => {
  const calls = [
    { name: "Sarah Chen", status: "Qualified", duration: "2:34", color: "text-emerald-500 bg-emerald-500/15" },
    { name: "Marcus Webb", status: "Booked", duration: "1:48", color: "text-indigo-500 bg-indigo-500/15" },
    { name: "Lina Patel", status: "Follow-up", duration: "3:12", color: "text-amber-500 bg-amber-500/15" },
    { name: "James Okoro", status: "Qualified", duration: "1:05", color: "text-emerald-500 bg-emerald-500/15" },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121c]">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#6b7280] dark:text-[#9494b0]">
        Recent Calls
      </p>
      <div className="flex flex-col gap-2">
        {calls.map((c) => (
          <div key={c.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5 dark:bg-white/[0.04]">
            <span className="text-[12px] font-medium text-[#0f0f14] dark:text-[#f0f0f8]">{c.name}</span>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${c.color}`}>{c.status}</span>
              <span className="text-[11px] text-[#6b7280]">{c.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkflowCard = () => {
  const nodes = ["Trigger", "Process", "Integrate", "Output"];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121c]">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#6b7280] dark:text-[#9494b0]">
        Workflow Pipeline
      </p>
      <div className="flex items-center justify-between gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-[10px] font-bold text-white md:h-14 md:w-14 md:text-[11px]">
                {node.slice(0, 3)}
              </div>
              <span className="text-[10px] text-[#6b7280] dark:text-[#9494b0]">{node}</span>
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight size={14} className="mb-4 text-indigo-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ConsultingCard = () => {
  const steps = [
    { label: "Audit", time: "Week 1" },
    { label: "Roadmap", time: "Week 2" },
    { label: "Implementation", time: "Week 3–8" },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121c]">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-[#6b7280] dark:text-[#9494b0]">
        Engagement Timeline
      </p>
      <div className="relative flex flex-col gap-6 pl-6">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-[2px] bg-indigo-200 dark:bg-indigo-500/30" />
        {steps.map((s) => (
          <div key={s.label} className="relative flex items-center gap-4">
            <div className="absolute -left-6 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#0f0f14] dark:text-[#f0f0f8]">{s.label}</p>
              <p className="text-[11px] text-[#6b7280] dark:text-[#9494b0]">{s.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const visualCards = [SaaSCard, ChatCard, VoiceCard, WorkflowCard, ConsultingCard];

/* ── Tab content data ── */
interface TabContent {
  badge?: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
}

const tabContents: TabContent[] = [
  {
    badge: "FLAGSHIP SERVICE",
    title: "Custom AI Software, Built for Your Business",
    description:
      "We design and develop fully bespoke AI-powered SaaS applications on contract. Your business logic, your workflows, your rules — engineered into production-grade software.",
    bullets: [
      "Full-stack custom development",
      "Scalable cloud architecture",
      "API integrations with your existing tools",
      "Ongoing support & optimization",
    ],
    cta: "Start Your Build →",
  },
  {
    title: "Intelligent Chatbots That Convert",
    description:
      "Not a widget. A fully trained conversational AI built on your data, integrated into your website, CRM, and support stack.",
    bullets: [
      "Trained on your business data",
      "Multi-platform: Web, WhatsApp, Instagram",
      "Voice agent integration available",
      "Human handover built-in",
    ],
    cta: "Build My Chatbot →",
  },
  {
    title: "AI That Handles Your Calls 24/7",
    description:
      "Inbound and outbound voice agents that qualify leads, book appointments, handle objections, and sync to your CRM — automatically.",
    bullets: [
      "Inbound & outbound calls",
      "Lead qualification & booking",
      "CRM auto-sync",
      "Call recordings & transcripts",
    ],
    cta: "Deploy Voice Agent →",
  },
  {
    title: "Replace Manual Processes With AI Workflows",
    description:
      "We build fully automated workflow systems — not Zapier templates. Real software that connects your tools, processes data, and acts without human input.",
    bullets: [
      "End-to-end process automation",
      "Multi-tool integrations",
      "Error handling & monitoring",
      "Custom logic & conditions",
    ],
    cta: "Automate My Workflow →",
  },
  {
    title: "Strategy Before Software",
    description:
      "Not sure where to start? We audit your operations, identify automation opportunities, and build a custom AI roadmap for your business.",
    bullets: [
      "Operations audit",
      "AI opportunity mapping",
      "Custom roadmap & ROI projections",
      "Implementation support",
    ],
    cta: "Book a Strategy Call →",
  },
];

const ServicesTabs = () => {
  const [active, setActive] = useState(0);
  const VisualCard = visualCards[active];

  return (
    <section className="bg-gray-50 dark:bg-[#0d0d12]" style={{ padding: "80px 40px" }}>
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 font-body text-[12px] font-medium uppercase tracking-widest text-indigo-500">
            WHAT WE BUILD
          </p>
          <h2 className="font-heading text-[32px] font-extrabold text-[#0f0f14] dark:text-[#f0f0f8] md:text-[40px]" style={{ lineHeight: 1.15 }}>
            Every System. Custom Built.
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-body text-[16px] leading-relaxed text-[#6b7280]">
            No templates. No off-the-shelf tools. Every solution is engineered from scratch for your business.
          </p>
        </div>

        {/* Tab pills */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[13px] font-medium transition-all ${
                i === active
                  ? "bg-[#4f46e5] text-white shadow-md"
                  : "border border-gray-200 bg-white text-[#6b7280] hover:border-indigo-300 dark:border-white/10 dark:bg-[#12121c]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <div
          key={active}
          className="grid items-start gap-10 md:grid-cols-2"
          style={{ animation: "fadeTabIn 200ms ease-out" }}
        >
          {/* Left: text */}
          <div>
            {tabContents[active].badge && (
              <span className="mb-4 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-indigo-500">
                {tabContents[active].badge}
              </span>
            )}
            <h3 className="font-heading text-[24px] font-bold text-[#0f0f14] dark:text-[#f0f0f8] md:text-[28px]" style={{ lineHeight: 1.2 }}>
              {tabContents[active].title}
            </h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-[#6b7280]">
              {tabContents[active].description}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {tabContents[active].bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-indigo-500" />
                  <span className="text-[14px] text-[#0f0f14] dark:text-[#f0f0f8]">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#4f46e5] px-7 py-3 text-[14px] font-medium text-white shadow-md transition-colors hover:bg-[#4338ca]"
            >
              {tabContents[active].cta}
            </Link>
          </div>

          {/* Right: visual card */}
          <div>
            <VisualCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
