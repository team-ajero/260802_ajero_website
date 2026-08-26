import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const problems = [
  "홈페이지가 너무 오래됐습니다.",
  "모바일에서 보기 불편합니다.",
  "홈페이지를 만들어도 문의가 늘지 않습니다.",
  "검색했을 때 우리 회사가 잘 나오지 않습니다.",
  "홈페이지 수정 하나 하려면 업체에 연락해야 합니다.",
  "홈페이지, 블로그, 광고를 따로 관리하고 있습니다.",
];

export function ProblemSection() {
  return (
    <Section muted>
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow="Problem" title="이런 문제를 겪고 있나요?" />

        <ul className="grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <li
              key={problem}
              className="rounded-md border border-border bg-background px-5 py-4 text-body text-foreground"
            >
              {problem}
            </li>
          ))}
        </ul>

        <p className="max-w-2xl text-h3 font-medium text-foreground text-balance">
          AJERO는 홈페이지 하나만 만드는 것이 아니라
          <br />
          사업에 필요한 웹 환경을 함께 설계합니다.
        </p>
      </Container>
    </Section>
  );
}
