import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: "AJERO가 어떤 회사인지, 무엇을 중요하게 생각하는지 소개합니다.",
};

const values = [
  {
    title: "사업 이해가 먼저입니다",
    description: "디자인과 개발에 앞서 고객의 사업과 고객 흐름을 이해하는 것을 우선합니다.",
  },
  {
    title: "필요한 만큼만 만듭니다",
    description: "불필요한 기능과 과도한 기술을 더하지 않고, 실제로 필요한 것을 중심으로 설계합니다.",
  },
  {
    title: "만든 이후를 함께합니다",
    description: "홈페이지를 완성하는 것으로 끝내지 않고, 운영과 유지보수를 함께 고려합니다.",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Drizzle ORM",
];

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border pb-12 sm:pb-16">
        <Container className="flex flex-col gap-4">
          <span className="text-small font-medium text-primary">About</span>
          <h1 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
            작기 때문에 빠르게 소통하고, 필요한 것에 집중할 수 있습니다.
          </h1>
          <p className="max-w-2xl text-body text-muted-foreground">
            AJERO는 아직 큰 회사가 아닙니다. 그 대신 프로젝트 하나하나에
            집중하고, 담당자와 직접 소통하며 사업을 이해한 뒤 웹을
            설계합니다.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-10">
          <h2 className="text-h2 font-semibold text-foreground">
            우리가 중요하게 생각하는 것
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-2">
                <h3 className="text-h3 font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-small text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container className="flex flex-col gap-6">
          <h2 className="text-h2 font-semibold text-foreground">업무 방식</h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            상담을 통해 사업과 문제를 파악하고, 요구사항을 정리해 설계한
            뒤에만 디자인과 개발을 시작합니다. 프로젝트 진행 상황은 고객이
            언제든 확인할 수 있도록 투명하게 공유합니다.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-6">
          <h2 className="text-h2 font-semibold text-foreground">기술 스택</h2>
          <ul className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-4 py-2 text-small text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section muted>
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-h2 font-semibold text-foreground text-balance">
            AJERO와 함께 사업에 필요한 웹을 만들어보세요.
          </h2>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            상담하기
          </Link>
        </Container>
      </Section>
    </>
  );
}
