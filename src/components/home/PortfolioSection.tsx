import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getPublishedPortfolios } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export async function PortfolioSection() {
  const portfolios = (await getPublishedPortfolios()).slice(0, 3);

  if (portfolios.length === 0) {
    return null;
  }

  return (
    <Section muted>
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Portfolio"
          title="AJERO가 만든 프로젝트"
          description="실제 제작 사례와 자체 제작 Demo Project를 통해 AJERO가 만드는 결과물을 확인해보세요."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>

        <Link
          href="/portfolio"
          className={cn(buttonVariants({ variant: "outline" }), "self-start")}
        >
          포트폴리오 더보기
        </Link>
      </Container>
    </Section>
  );
}
