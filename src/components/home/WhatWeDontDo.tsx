import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  "필요하지 않은 기능은 넣지 않습니다.",
  "기술을 보여주기 위한 기술은 사용하지 않습니다.",
  "디자인만 보고 홈페이지를 만들지 않습니다.",
  "제작했다고 끝내지 않습니다.",
];

export function WhatWeDontDo() {
  return (
    <Section size="lg">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <span className="text-small font-medium tracking-wide text-accent-blue">
            하지 않는 것
          </span>
          <h2 className="max-w-2xl text-h2 font-semibold text-foreground text-balance">
            우리는 이런 방식으로 만들지 않습니다.
          </h2>
        </Reveal>

        <ul className="flex flex-col">
          {items.map((item, index) => (
            <Reveal
              as="li"
              key={item}
              order={index + 1}
              className="border-t border-border py-5 text-body text-foreground last:border-b sm:py-6"
            >
              {item}
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          order={items.length + 1}
          className="max-w-2xl text-body text-muted-foreground text-balance"
        >
          좋아 보이는 홈페이지보다, 사업에 필요한 홈페이지를 만듭니다.
        </Reveal>
      </Container>
    </Section>
  );
}
