import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { CheckCircle2, Mail, Globe, MapPin } from "lucide-react";

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
  <section className="services-dot-grid relative overflow-hidden bg-white pt-32 pb-16 px-10 dark:bg-[#09090b]">
    <div
      className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2"
      style={{
        width: "700px",
        height: "400px",
        background:
          "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
      }}
    />
    <div className="relative mx-auto flex max-w-[700px] flex-col items-center text-center">
      <EyebrowPill>GET STARTED</EyebrowPill>
      <h1 className="mt-7 font-heading font-extrabold text-5xl md:text-6xl tracking-tight leading-tight text-[#0f0f14] dark:text-[#f0f0f8]">
        Book Your Free
        <br />
        Discovery Call.
      </h1>
      <p className="mt-5 max-w-md mx-auto font-body text-lg leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
        Tell us about your business. We'll show you exactly what's possible — no
        pitch, no pressure, just strategy.
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 2 — FORM + WHAT TO EXPECT
   ═══════════════════════════════════════════ */

const inputClass =
  "w-full font-body text-sm bg-[#f9fafb] dark:bg-[#1a1a2e] border border-[#e5e7eb] dark:border-white/10 rounded-xl px-4 py-3.5 text-[#0f0f14] dark:text-[#f0f0f8] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-200";

const labelClass =
  "block font-body text-sm font-semibold text-[#374151] dark:text-[#d1d5db] mb-2";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    industry: "",
    challenge: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
        <h3 className="font-heading font-bold text-2xl text-[#0f0f14] dark:text-[#f0f0f8]">
          We'll Be in Touch Soon!
        </h3>
        <p className="mt-3 font-body text-[#6b7280] dark:text-[#9494b0] max-w-sm">
          Thanks for reaching out. We'll review your submission and get back to
          you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white p-10 shadow-[0_4px_24px_rgba(99,102,241,0.08)] dark:border-white/10 dark:bg-[#12121c]">
      <h3 className="mb-8 font-heading font-bold text-2xl text-[#0f0f14] dark:text-[#f0f0f8]">
        Tell Us About Your Business
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Indrajit Prasad"
            className={inputClass}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="contact-business" className={labelClass}>
            Business Name
          </label>
          <input
            id="contact-business"
            type="text"
            required
            placeholder="Fluxaro AI"
            className={inputClass}
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="contact-industry" className={labelClass}>
            Industry
          </label>
          <select
            id="contact-industry"
            required
            className={inputClass}
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
          >
            <option value="" disabled>
              Select your industry
            </option>
            <option value="Real Estate">Real Estate</option>
            <option value="Marketing">Marketing</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Consulting">Consulting</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Challenge */}
        <div>
          <label htmlFor="contact-challenge" className={labelClass}>
            What's your biggest operational challenge right now?
          </label>
          <textarea
            id="contact-challenge"
            rows={4}
            required
            placeholder="e.g. We're manually handling 200+ leads per month and losing prospects to faster competitors..."
            className={`${inputClass} resize-none`}
            value={form.challenge}
            onChange={(e) => setForm({ ...form, challenge: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#4f46e5] py-4 font-heading font-bold text-base text-white shadow-[0_4px_18px_rgba(79,70,229,0.35)] transition-colors hover:bg-[#4338ca]"
        >
          Book My Discovery Call →
        </button>

        <p className="text-center font-body text-xs text-[#9ca3af]">
          We respond to every submission within 24 hours. No spam, ever.
        </p>
      </form>
    </div>
  );
};

/* Steps */
const steps = [
  {
    num: "1",
    title: "We Review Your Submission",
    text: "Within 24 hours, our team reviews your business details and prepares relevant questions and ideas for your call.",
  },
  {
    num: "2",
    title: "45-Minute Strategy Call",
    text: "We map your operations, identify automation opportunities, and discuss exactly what we'd build for you. No pitch — just value.",
  },
  {
    num: "3",
    title: "You Receive a Custom Proposal",
    text: "Within 2–3 days of the call, we deliver a full system blueprint and proposal with scope, timeline, and cost. No obligation.",
  },
];

const contactInfo = [
  { icon: Mail, text: "hello@fluxaro.ai" },
  { icon: Globe, text: "fluxaro.ai" },
  { icon: MapPin, text: "Available Worldwide · Remote" },
];

const WhatToExpect = () => (
  <div className="md:pl-8">
    <h3 className="mb-8 font-heading font-bold text-2xl text-[#0f0f14] dark:text-[#f0f0f8]">
      What Happens Next
    </h3>

    <div className="space-y-8">
      {steps.map((s) => (
        <div key={s.num} className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-200 bg-indigo-50 font-heading text-sm font-bold text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-400">
            {s.num}
          </div>
          <div>
            <p className="font-body text-base font-semibold text-[#0f0f14] dark:text-[#f0f0f8]">
              {s.title}
            </p>
            <p className="mt-1 font-body text-sm leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
              {s.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="mt-10 border-t border-[#f0f0f0] dark:border-white/10" />

    {/* Founder block */}
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-500/30 bg-indigo-500/10 font-heading font-bold text-indigo-500">
          IP
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-[#0f0f14] dark:text-[#f0f0f8]">
            Indrajit Prasad
          </p>
          <p className="font-body text-xs text-[#9ca3af]">
            Founder &amp; CEO, Fluxaro AI
          </p>
        </div>
      </div>
      <p className="mt-4 font-body text-sm italic leading-relaxed text-[#6b7280] dark:text-[#9494b0]">
        "Every business we work with gets my personal attention. I review every
        submission myself."
      </p>
    </div>

    {/* Contact info */}
    <div className="mt-8 space-y-3">
      {contactInfo.map((c) => (
        <div key={c.text} className="flex items-center gap-3">
          <c.icon className="h-4 w-4 text-indigo-500" />
          <span className="font-body text-sm text-[#6b7280] dark:text-[#9494b0]">
            {c.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const FormSection = () => {
  const { ref, visible } = useReveal(0.08);
  return (
    <section className="bg-white pb-28 px-10 dark:bg-[#09090b]">
      <div
        ref={ref}
        className={`mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-2 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <ContactForm />
        <WhatToExpect />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
const Contact = () => (
  <main>
    <PageHero />
    <FormSection />
  </main>
);

export default Contact;
