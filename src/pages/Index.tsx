import React, { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import StatsRow from "@/components/StatsRow";
import { ServicesAccordion } from "@/components/ui/interactive-image-accordion";
import WhyFluxaro from "@/components/WhyFluxaro";
import HowItWorks from "@/components/HowItWorks";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const ScrollDemoSection = React.lazy(() => import("@/components/ScrollDemoSection"));

const Index = () => (
  <main>
    <HeroSection />
    <LogoMarquee />
    <Suspense fallback={<div className="h-[45rem]" />}>
      <ScrollDemoSection />
    </Suspense>
    <StatsRow />
    <ServicesAccordion />
    <WhyFluxaro />
    <HowItWorks />
    <CaseStudiesSection />
    <TestimonialsSection />

    <FAQSection />
    <CTASection />
    <Footer />
  </main>
);

export default Index;
