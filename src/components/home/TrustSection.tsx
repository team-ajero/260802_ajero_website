import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const trustPoints = [
  "명확한 제작 프로세스",
  "검증된 기술 스택",
  "투명한 진행 방식",
  "빠른 커뮤니케이션",
  "제작 이후 유지보수",
  "반응형 웹 기본 적용",
  "SEO 기본 적용",
  "웹 접근성 고려",
  "성능 최적화",
  "보안 및 배포 관리",
];

export function TrustSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Trust"
          title="포트폴리오 숫자보다 일하는 방식으로 신뢰를 만듭니다"
          description="허위 인증이나 부풀린 수치 대신, 실제로 지키는 기준을 보여드립니다."
        />

        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 text-body text-foreground"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
