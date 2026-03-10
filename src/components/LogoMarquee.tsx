const logos = [
  "TechFlow", "Nexara", "Orbitra", "Synthos", "Lumivox",
  "Aetheris", "Covalent", "Helicore", "Zenvolt", "Prismiq",
];

const LogoMarquee = () => (
  <section className="overflow-hidden border-y border-border/40 bg-muted/30 py-5">
    <div className="relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee flex w-max items-center gap-12">
        {[...logos, ...logos].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-heading text-[15px] font-bold tracking-wide text-muted-foreground/50"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default LogoMarquee;
