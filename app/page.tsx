import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WhyInsuranceSection } from "@/components/why-insurance-section";
import { WhatIsMelonSection } from "@/components/what-is-melon-section";
import { WhyChooseBenefitsSection } from "@/components/why-choose-benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WeBuiltMelonForSection } from "@/components/we-built-melon-for-section";
import { OurModelSection } from "@/components/our-model-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HomePage() {
  return (
    <ScrollArea className="min-h-screen">
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <WhatIsMelonSection />
        <WhyInsuranceSection />
        <WhyChooseBenefitsSection />
        <WeBuiltMelonForSection />
        <HowItWorksSection />
        <OurModelSection />
        <PartnersSection />
        <Footer />
      </div>
    </ScrollArea>
  );
}
