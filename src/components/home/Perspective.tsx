import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const cases = [
  {
    label: "신뢰형",
    desc: "어떤 기업에게는 회사의 전문성과 신뢰를 보여주는 홈페이지가 필요합니다.",
  },
  {
    label: "문의형",
    desc: "어떤 기업에게는 방문자를 문의와 상담으로 이어지게 하는 홈페이지가 필요합니다.",
  },
  {
    label: "시스템형",
    desc: "어떤 기업에게는 예약과 반복 업무를 줄이는 시스템이 필요합니다.",
  },
];

export function Perspective() {
  return (
    <Section size="lg">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <span className="text-small font-medium tracking-wide text-accent-blue">
            AJERO의 관점
          </span>
          <h2 className="max-w-2xl text-h2 font-semibold text-foreground text-balance">
            홈페이지는 목적이 아니라 사업을 위한 도구입니다.
          </h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            모든 사업에 같은 홈페이지가 필요한 것은 아닙니다.
          </p>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-3">
          {cases.map((item, index) => (
            <Reveal
              as="li"
              key={item.label}
              order={index + 1}
              className="flex flex-col gap-3 border-t border-border pt-5"
            >
              <span className="text-h3 font-semibold text-foreground">
                {item.label}
              </span>
              <p className="text-small text-muted-foreground">{item.desc}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
