import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MoreLink } from "@/components/home/MoreLink";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { no: "01", label: "상담" },
  { no: "02", label: "문제 / 목표 파악" },
  { no: "03", label: "기획 및 구조 설계" },
  { no: "04", label: "디자인" },
  { no: "05", label: "개발" },
  { no: "06", label: "검수 및 배포" },
  { no: "07", label: "운영 / 유지보수" },
];

export function ProcessSummary() {
  return (
    <Section size="lg">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionTitle
            eyebrow="PROCESS"
            title="실제 프로젝트는 이렇게 진행됩니다."
          />
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.no}
              order={Math.min(index, 4) + 1}
              className="flex flex-col gap-2 bg-background p-6"
            >
              <span className="font-mono text-small text-accent-blue">
                {step.no}
              </span>
              <span className="text-h3 font-semibold text-foreground">
                {step.label}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal order={6}>
          <MoreLink href="/process">전체 프로세스 보기</MoreLink>
        </Reveal>
      </Container>
    </Section>
  );
}
