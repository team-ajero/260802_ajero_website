import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const problems = [
  "홈페이지는 만들었지만 문의가 늘지 않습니다.",
  "홈페이지가 오래되어 회사의 현재 모습을 제대로 보여주지 못합니다.",
  "어떤 기능이 필요한지도 모르겠는데 제작업체에서는 기능부터 이야기합니다.",
  "홈페이지를 만들고 나니 수정과 관리가 또 다른 일이 됩니다.",
];

export function Problem() {
  return (
    <Section muted size="lg" className="border-b border-border">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <span className="text-small font-medium tracking-wide text-accent-blue">
            고객의 문제
          </span>
          <h2 className="max-w-2xl text-h2 font-semibold text-foreground text-balance">
            홈페이지를 만드는 것만으로 충분할까요?
          </h2>
        </Reveal>

        <ul className="flex flex-col">
          {problems.map((problem, index) => (
            <Reveal
              as="li"
              key={problem}
              order={index + 1}
              className="grid gap-3 border-t border-border py-5 last:border-b sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-6"
            >
              <span className="font-mono text-small text-accent-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-body text-foreground">{problem}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          order={problems.length + 1}
          className="max-w-2xl text-body text-muted-foreground text-balance"
        >
          문제는 홈페이지가 없어서가 아니라, 홈페이지가 사업에서 어떤 역할을 해야
          하는지 정해지지 않았기 때문일 수 있습니다.
        </Reveal>
      </Container>
    </Section>
  );
}
