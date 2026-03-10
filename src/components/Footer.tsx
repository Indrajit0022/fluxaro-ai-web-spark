import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const FluxaroLogo = () => (
  <Link to="/" className="flex items-center gap-2">
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0" width="18" height="2" rx="1" fill="url(#footer-grad)" />
      <rect y="6" width="12" height="2" rx="1" fill="url(#footer-grad)" />
      <rect y="12" width="15" height="2" rx="1" fill="url(#footer-grad)" />
      <defs>
        <linearGradient
          id="footer-grad"
          x1="0"
          y1="0"
          x2="28"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
    <span className="font-heading text-[15px] font-bold text-[#f0f0f8]">
      Fluxaro
    </span>
  </Link>
);

const footerLinks = {
  Company: [
    { label: "About", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "AI SaaS Development", href: "/services" },
    { label: "Custom Chatbots", href: "/services" },
    { label: "Voice Agents", href: "/services" },
    { label: "Workflow Automation", href: "/services" },
    { label: "AI Consulting", href: "/services" },
  ],
  Resources: [
    { label: "Process", href: "/#process" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a10] border-t border-white/5 pt-16 pb-8 px-4 sm:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <FluxaroLogo />
            <p className="font-body text-[13px] sm:text-sm text-[#9494b0] leading-relaxed mt-4 max-w-[280px]">
              AI-native development agency. We build custom AI systems on
              contract — chatbots, voice agents, SaaS, and workflow
              automation.
            </p>

            <div className="flex flex-col gap-2.5 mt-6">
              <a
                href="mailto:hello@fluxaro.com"
                className="inline-flex items-center gap-2 font-body text-[13px] text-[#9494b0] hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                hello@fluxaro.com
              </a>
              <span className="inline-flex items-center gap-2 font-body text-[13px] text-[#9494b0]">
                <MapPin className="w-3.5 h-3.5" />
                Remote-first · Global delivery
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-2">
              <h4 className="font-heading font-bold text-sm text-[#f0f0f8] mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-[13px] text-[#9494b0] hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div className="md:col-span-2">
            <h4 className="font-heading font-bold text-sm text-[#f0f0f8] mb-4">
              Get Started
            </h4>
            <p className="font-body text-[13px] text-[#9494b0] leading-relaxed mb-4">
              Ready to build? Let's talk about your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#4f46e5] text-white font-body text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#4338ca] transition-colors"
            >
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-[12px] text-[#6b7280]">
              © {currentYear} Fluxaro AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="font-body text-[12px] text-[#6b7280] hover:text-[#9494b0] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="font-body text-[12px] text-[#6b7280] hover:text-[#9494b0] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
