import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const values = [
  {
    no: "01",
    label: "사업 중심",
    desc: "홈페이지보다 먼저 사업과 고객을 이해합니다.",
  },
  {
    no: "02",
    label: "필요한 만큼",
    desc: "기능을 많이 넣는 대신 필요한 기능을 선택합니다.",
  },
  {
    no: "03",
    label: "운영까지",
    desc: "제작 이후 수정과 개선까지 고려합니다.",
  },
  {
    no: "04",
    label: "검색까지",
    desc: "홈페이지를 만드는 순간부터 SEO를 고려합니다.",
  },
];

export function WhyAjero() {
  return (
    <Section muted size="lg" className="border-b border-border">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <span className="text-small font-medium tracking-wide text-accent-blue">
            WHY AJERO
          </span>
          <h2 className="max-w-2xl text-h2 font-semibold text-foreground text-balance">
            우리가 프로젝트를 진행하는 원칙
          </h2>
        </Reveal>

        <ul className="flex flex-col">
          {values.map((value, index) => (
            <Reveal
              as="li"
              key={value.no}
              order={index + 1}
              className="grid gap-2 border-t border-border py-6 last:border-b sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-6 sm:py-7"
            >
              <span className="font-mono text-small text-accent-blue">
                {value.no}
              </span>
              <span className="text-h3 font-semibold text-foreground">
                {value.label}
              </span>
              <p className="text-body text-muted-foreground">{value.desc}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
