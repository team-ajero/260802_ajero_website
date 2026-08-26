import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FinalCtaSection() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-h1 font-semibold text-foreground text-balance">
          지금 필요한 웹이 무엇인지
          <br />
          함께 이야기해보세요.
        </h2>
        <p className="text-body text-muted-foreground">
          아직 구체적인 계획이 없어도 괜찮습니다.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          프로젝트 상담하기
        </Link>
      </Container>
    </Section>
  );
}
