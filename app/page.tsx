import { BenefitsSection } from "@/sections/benefits-section";
import { ComparisonSection } from "@/sections/comparison-section";
import { FaqSection } from "@/sections/faq-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { OrderSection } from "@/sections/order-section";
import { PackSection } from "@/sections/pack-section";
import { ScienceSection } from "@/sections/science-section";
import { StoriesSection } from "@/sections/stories-section";
import { TrustBar } from "@/sections/trust-bar";
import { WhyBreathingSection } from "@/sections/why-breathing-section";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <WhyBreathingSection />
      <ScienceSection />
      <BenefitsSection />
      <ComparisonSection />
      <PackSection />
      <StoriesSection />
      <FaqSection />
      <OrderSection />
      <FinalCtaSection />
      <Footer />
      <MobileStickyCta />
    </main>
  );
}
