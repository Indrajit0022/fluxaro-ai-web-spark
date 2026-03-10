import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const FluxaroLogo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0" width="18" height="2" rx="1" fill="url(#grad)" />
      <rect y="6" width="12" height="2" rx="1" fill="url(#grad)" />
      <rect y="12" width="15" height="2" rx="1" fill="url(#grad)" />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
    <span className="font-heading text-[15px] font-bold text-foreground">Fluxaro</span>
  </Link>
);

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/96 backdrop-blur-md">
      <nav className="mx-auto flex h-[52px] max-w-[1100px] items-center justify-between px-5">
        <FluxaroLogo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-[13px] font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : "text-secondary-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="cta" size="sm" asChild>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[15px] font-medium text-secondary-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
