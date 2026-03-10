import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';

const accordionItems = [
  {
    id: 1,
    title: 'AI SaaS Development',
    badge: 'FLAGSHIP SERVICE',
    description: 'We design and develop fully bespoke AI-powered SaaS applications on contract. Your business logic, your workflows, your rules — engineered into production-grade software.',
    bullets: ['Full-stack custom development', 'Scalable cloud architecture', 'API integrations with your existing tools', 'Ongoing support & optimization'],
    cta: 'Start Your Build →',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Custom Chatbots',
    badge: 'CONVERSATIONAL AI',
    description: 'Not a widget. A fully trained conversational AI built on your data, integrated into your website, CRM, and support stack.',
    bullets: ['Trained on your business data', 'Multi-platform: Web, WhatsApp, Instagram', 'Voice agent integration available', 'Human handover built-in'],
    cta: 'Build My Chatbot →',
    imageUrl: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Voice Agents',
    badge: 'INBOUND & OUTBOUND',
    description: 'AI that handles your calls 24/7. Qualifies leads, books appointments, handles objections and syncs to your CRM automatically.',
    bullets: ['Inbound & outbound calls', 'Lead qualification & booking', 'CRM auto-sync', 'Call recordings & transcripts'],
    cta: 'Deploy Voice Agent →',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Workflow Automation',
    badge: 'CUSTOM SOFTWARE',
    description: 'We build fully automated workflow systems — not Zapier templates. Real software that connects your tools, processes data, and acts without human input.',
    bullets: ['End-to-end process automation', 'Multi-tool integrations', 'Error handling & monitoring', 'Custom logic & conditions'],
    cta: 'Automate My Workflow →',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'AI Consulting',
    badge: 'STRATEGY FIRST',
    description: 'Not sure where to start? We audit your operations, identify automation opportunities, and build a custom AI roadmap for your business.',
    bullets: ['Operations audit', 'AI opportunity mapping', 'Custom roadmap & ROI projections', 'Implementation support'],
    cta: 'Book a Strategy Call →',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  },
];

interface AccordionItemData {
  id: number;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  cta: string;
  imageUrl: string;
}

const AccordionItem = ({
  item,
  isActive,
}: {
  item: AccordionItemData;
  isActive: boolean;
}) => {
  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden
        transition-all duration-700 ease-in-out border
        ${isActive
          ? 'h-auto md:h-[420px] border-primary/20 dark:border-primary/30'
          : 'h-[64px] border-border hover:border-primary/20'}
      `}
    >
      {/* Background image — only visible when active */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/70 to-black/30" />
      </div>

      {/* Collapsed state — just title bar */}
      <div
        className={`
          absolute inset-0 flex items-center px-6 gap-4
          transition-opacity duration-300
          ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          bg-background
        `}
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-widest w-6">
          {String(item.id).padStart(2, '0')}
        </span>
        <span className="font-semibold text-foreground text-base">
          {item.title}
        </span>
        <span className="ml-auto text-muted-foreground text-lg">+</span>
      </div>

      {/* Expanded state — full content over image */}
      <div
        className={`
          relative md:absolute md:inset-0 flex flex-col md:flex-row md:items-center
          px-6 py-8 md:px-10 gap-6 md:gap-12
          transition-opacity duration-500 delay-200
          ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none hidden md:flex'}
        `}
      >
        {/* Left: text content */}
        <div className="md:w-1/2 z-10">
          <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-3 block">
            {item.badge}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-heading leading-tight">
            {item.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
            {item.description}
          </p>
          <ul className="space-y-2 mb-6">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3.5 6L6.5 2" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary/5 transition-colors"
          >
            {item.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.2) setActiveIndex(0);
    else if (v < 0.4) setActiveIndex(1);
    else if (v < 0.6) setActiveIndex(2);
    else if (v < 0.8) setActiveIndex(3);
    else setActiveIndex(4);
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <section className="bg-background w-full px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 font-body">
                WHAT WE BUILD
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading tracking-tight mb-4">
                Every System. Custom Built.
              </h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto font-body">
                No templates. No off-the-shelf tools. Every solution is engineered
                from scratch for your business.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-1 flex-shrink-0 rounded-full bg-border relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full rounded-full bg-primary"
                  style={{ height: progressHeight }}
                />
              </div>
              <div className="flex flex-col gap-3 flex-1">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
