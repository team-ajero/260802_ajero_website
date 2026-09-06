import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MoreLink } from "@/components/home/MoreLink";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudy() {
  return (
    <Section muted className="border-b border-border">
      <Container className="flex flex-col gap-8">
        <Reveal>
          <SectionTitle
            eyebrow="CASE STUDY"
            title="문제 → 해결 → 결과로 정리한 사례를 준비 중입니다."
            description="AJERO가 진행한 프로젝트를 문제 정의부터 해결 방식, 결과까지 정리해 순차적으로 공개합니다."
          />
        </Reveal>

        <Reveal
          order={1}
          className="rounded-xl border border-dashed border-border bg-background p-8 text-body text-muted-foreground"
        >
          아직 공개된 Case Study가 없습니다. 자체 제작한 데모 프로젝트는
          포트폴리오에서 확인할 수 있습니다.
        </Reveal>

        <Reveal order={2}>
          <MoreLink href="/portfolio">포트폴리오 보기</MoreLink>
        </Reveal>
      </Container>
    </Section>
  );
}
