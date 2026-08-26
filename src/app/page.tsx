import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { WhyAjeroSection } from "@/components/home/WhyAjeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustSection } from "@/components/home/TrustSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <PortfolioSection />
      <WhyAjeroSection />
      <ProcessSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
