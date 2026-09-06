import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Perspective } from "@/components/home/Perspective";
import { Approach } from "@/components/home/Approach";
import { Services } from "@/components/home/Services";
import { CaseStudy } from "@/components/home/CaseStudy";
import { WhatWeDontDo } from "@/components/home/WhatWeDontDo";
import { WhyAjero } from "@/components/home/WhyAjero";
import { ProcessSummary } from "@/components/home/ProcessSummary";
import { FaqPreview } from "@/components/home/FaqPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Perspective />
      <Approach />
      <Services />
      <CaseStudy />
      <WhatWeDontDo />
      <WhyAjero />
      <ProcessSummary />
      <FaqPreview />
    </>
  );
}
