import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { MoreLink } from "@/components/home/MoreLink";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  {
    no: "01",
    name: "홈페이지 제작",
    desc: "기업 홈페이지부터 브랜드 / 서비스 홈페이지까지.",
  },
  {
    no: "02",
    name: "유지보수",
    desc: "제작 이후 콘텐츠 수정과 기능 개선.",
  },
  {
    no: "03",
    name: "SEO",
    desc: "검색엔진이 이해할 수 있는 구조와 콘텐츠 설계.",
  },
  {
    no: "04",
    name: "비즈니스 기능",
    desc: "예약, 문의, CRM 등 사업에 필요한 기능.",
  },
  {
    no: "05",
    name: "AI & 자동화",
    desc: "반복 업무를 줄이거나 고객 경험을 개선하는 AI / 자동화.",
  },
];

export function Services() {
  return (
    <Section size="lg">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionTitle
            eyebrow="서비스 소개"
            title="필요한 것만 만듭니다."
            description="사업에 필요한 만큼만 선택해 제작하고, 제작 이후 운영까지 연결합니다."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.no}
              order={Math.min(index, 3) + 1}
              className="h-full"
            >
              <Card className="h-full">
                <CardContent className="flex flex-col gap-3">
                  <span className="font-mono text-small text-accent-blue">
                    {service.no}
                  </span>
                  <h3 className="text-h3 font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-small text-muted-foreground">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal order={5}>
          <MoreLink href="/services">서비스 자세히 보기</MoreLink>
        </Reveal>
      </Container>
    </Section>
  );
}
