import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <Section muted>
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Process"
          title="AJERO의 제작 프로세스"
          description="숫자로만 나열하지 않고, 실제 업무가 어떻게 진행되는지 보여드립니다."
        />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li
              key={step.order}
              className="flex flex-col gap-2 rounded-lg border border-border bg-background p-6"
            >
              <span className="text-small font-medium text-primary">
                {step.order}
              </span>
              <h3 className="text-h3 font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-small text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <Link
          href="/process"
          className={cn(buttonVariants({ variant: "outline" }), "self-start")}
        >
          프로세스 자세히 보기
        </Link>
      </Container>
    </Section>
  );
}
