import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { processSteps, clientPreparationItems } from "@/data/process";

export const metadata: Metadata = {
  title: "Process",
  description: "AJERO가 프로젝트를 진행하는 방식을 단계별로 소개합니다.",
};

export default function ProcessPage() {
  return (
    <>
      <Section className="border-b border-border pb-12 sm:pb-16">
        <Container className="flex flex-col gap-4">
          <span className="text-small font-medium text-primary">Process</span>
          <h1 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
            AJERO는 이렇게 프로젝트를 진행합니다.
          </h1>
          <p className="max-w-2xl text-body text-muted-foreground">
            제작 업체가 알아서 다 해주는지 불안해하지 않으셔도 됩니다. 각
            단계에서 무엇을 하고, 고객이 무엇을 준비하면 되는지 명확히
            안내합니다.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <ol className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <li
                key={step.order}
                className="grid gap-4 border-b border-border pb-10 last:border-b-0 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <span className="text-h1 font-semibold text-primary">
                  {step.order}
                </span>
                <div className="flex flex-col gap-2">
                  <h2 className="text-h2 font-semibold text-foreground">
                    {step.title}
                  </h2>
                  <p className="max-w-2xl text-body text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section muted>
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-h2 font-semibold text-foreground">
              프로젝트 준비를 위해 이런 자료가 있으면 좋아요
            </h2>
            <p className="max-w-2xl text-body text-muted-foreground">
              모두 준비되지 않아도 상담은 가능합니다. 진행 과정에서 함께
              정리해나갈 수 있습니다.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clientPreparationItems.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-background px-4 py-3 text-small text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-h2 font-semibold text-foreground">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            상담하기
          </Link>
        </Container>
      </Section>
    </>
  );
}
