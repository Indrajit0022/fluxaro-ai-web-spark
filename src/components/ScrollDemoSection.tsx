import {
  LayoutDashboard,
  Users,
  Phone,
  Workflow,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Leads", active: false },
  { icon: Phone, label: "Voice Calls", active: false },
  { icon: Workflow, label: "Workflows", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
];

const metrics = [
  { label: "Leads Qualified", value: "847", trend: "+23%" },
  { label: "Calls Handled by AI", value: "312", trend: "+41%" },
  { label: "Revenue Attributed", value: "$84k", trend: "+18%" },
];

const barData = [
  { day: "Mon", h: 65 },
  { day: "Tue", h: 45 },
  { day: "Wed", h: 80 },
  { day: "Thu", h: 55 },
  { day: "Fri", h: 90 },
  { day: "Sat", h: 40 },
  { day: "Sun", h: 70 },
];

const leads = [
  { name: "Sarah Chen", industry: "Fintech", status: "Hot" },
  { name: "Marcus Webb", industry: "Healthcare", status: "Warm" },
  { name: "Lina Patel", industry: "E-commerce", status: "Cold" },
  { name: "James Okoro", industry: "SaaS", status: "Hot" },
];

const calls = [
  { name: "Lead #4821 — Qualifying", duration: "2:34" },
  { name: "Lead #4819 — Follow-up", duration: "1:12" },
  { name: "Lead #4817 — Scheduling", duration: "0:48" },
];

const statusColor: Record<string, string> = {
  Hot: "bg-red-500/20 text-red-400",
  Warm: "bg-amber-500/20 text-amber-400",
  Cold: "bg-blue-500/20 text-blue-400",
};

const DashboardMockup = () => (
  <div className="flex h-full w-full overflow-hidden rounded-xl bg-[#0f0f14] text-[13px]">
    {/* Sidebar */}
    <div className="hidden w-[180px] shrink-0 flex-col border-r border-white/[0.06] bg-[#111118] p-4 md:flex">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex flex-col gap-[2px]">
          <div className="h-[2px] w-[14px] rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
          <div className="h-[2px] w-[9px] rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
          <div className="h-[2px] w-[11px] rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
        </div>
        <span className="font-heading text-[13px] font-bold text-white">Fluxaro</span>
      </div>
      <nav className="flex flex-col gap-0.5">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] font-medium ${
              item.active
                ? "bg-indigo-600 text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <item.icon size={14} />
            {item.label}
          </div>
        ))}
      </nav>
    </div>

    {/* Main */}
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 md:px-6">
        <p className="text-[12px] font-medium text-zinc-400 md:text-[13px]">
          Good morning, <span className="text-white">Indrajit</span>
        </p>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
            Active Agents: 4
          </span>
          <span className="rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-[10px] font-medium text-indigo-400">
            Leads Today: 847
          </span>
          <span className="rounded-full bg-sky-500/15 px-2.5 py-0.5 text-[10px] font-medium text-sky-400">
            Calls Handled: 312
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-5">
        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-[#1a1a24] p-3 md:p-4">
              <p className="text-[10px] text-zinc-500 md:text-[11px]">{m.label}</p>
              <p className="mt-1 font-heading text-base font-bold text-white md:text-xl">{m.value}</p>
              <div className="mt-1 flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                <TrendingUp size={10} />
                {m.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="mt-3 rounded-xl bg-[#1a1a24] p-4 md:mt-4 md:p-5">
          <p className="mb-3 text-[11px] font-medium text-zinc-500">Lead Volume (7 days)</p>
          <div className="flex items-end gap-2 md:gap-3" style={{ height: "80px" }}>
            {barData.map((bar) => (
              <div key={bar.day} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm bg-indigo-600"
                  style={{ height: `${bar.h}%` }}
                />
                <span className="text-[9px] text-zinc-600">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-3 grid gap-2 md:mt-4 md:grid-cols-2 md:gap-3">
          {/* Recent Leads */}
          <div className="rounded-xl bg-[#1a1a24] p-4">
            <p className="mb-3 text-[11px] font-medium text-zinc-500">Recent Leads</p>
            <table className="w-full text-[11px]">
              <thead>
                <tr className="text-zinc-600">
                  <th className="pb-2 text-left font-medium">Name</th>
                  <th className="pb-2 text-left font-medium">Industry</th>
                  <th className="pb-2 text-right font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.name} className="border-t border-white/[0.04]">
                    <td className="py-1.5 text-zinc-300">{l.name}</td>
                    <td className="py-1.5 text-zinc-500">{l.industry}</td>
                    <td className="py-1.5 text-right">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor[l.status]}`}>
                        {l.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Live Voice Activity */}
          <div className="rounded-xl bg-[#1a1a24] p-4">
            <p className="mb-3 text-[11px] font-medium text-zinc-500">Live Voice Activity</p>
            <div className="flex flex-col gap-2">
              {calls.map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[11px] text-zinc-300">{c.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600">{c.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScrollDemoSection = () => (
  <section className="bg-background">
    {/* Title moved above the scroll container */}
    <div className="mx-auto max-w-5xl text-center px-5 pt-12 pb-4">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary dark:text-indigo-400">
        See Fluxaro In Action
      </p>
      <h2 className="font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl" style={{ lineHeight: 1.15 }}>
        AI Systems That Work
        <br />
        <span className="text-primary">While You Sleep</span>
      </h2>
    </div>

    <ContainerScroll titleComponent={<></>}>
      <DashboardMockup />
    </ContainerScroll>
  </section>
);

export default ScrollDemoSection;
