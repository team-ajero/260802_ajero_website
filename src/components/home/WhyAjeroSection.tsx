import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const points = [
  {
    order: "01",
    title: "사업부터 이해합니다",
    description: "웹사이트를 만들기 전에 고객의 사업과 고객 흐름을 먼저 이해합니다.",
  },
  {
    order: "02",
    title: "필요한 것만 만듭니다",
    description: "불필요한 기능을 넣기보다 실제 사업에 필요한 기능을 중심으로 설계합니다.",
  },
  {
    order: "03",
    title: "제작 이후까지 생각합니다",
    description: "홈페이지를 완성하는 것으로 끝내지 않고 유지보수와 지속적인 개선을 고려합니다.",
  },
  {
    order: "04",
    title: "웹을 하나의 시스템으로 봅니다",
    description:
      "홈페이지뿐 아니라 SEO, 콘텐츠, 예약, CRM, AI 등을 연결하여 운영할 수 있도록 설계합니다.",
  },
];

export function WhyAjeroSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow="Why AJERO" title="AJERO를 선택해야 하는 이유" />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.order} className="flex flex-col gap-2">
              <span className="text-small font-medium text-primary">
                {point.order}
              </span>
              <h3 className="text-h3 font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
