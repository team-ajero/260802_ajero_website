import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getPublishedPortfolios } from "@/lib/portfolio";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_CATEGORY_LABEL,
  type PortfolioCategory,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "AJERO가 실제로 제작한 프로젝트와 Demo Project를 소개합니다.",
};

const filters: { label: string; value: PortfolioCategory | undefined }[] = [
  { label: "All", value: undefined },
  ...PORTFOLIO_CATEGORIES.map((category) => ({
    label: PORTFOLIO_CATEGORY_LABEL[category],
    value: category,
  })),
];

function isPortfolioCategory(value: string): value is PortfolioCategory {
  return (PORTFOLIO_CATEGORIES as readonly string[]).includes(value);
}

export default async function PortfolioPage({
  searchParams,
}: PageProps<"/portfolio">) {
  const params = await searchParams;
  const rawCategory = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const activeCategory =
    rawCategory && isPortfolioCategory(rawCategory) ? rawCategory : undefined;

  const portfolios = await getPublishedPortfolios(activeCategory);

  return (
    <>
      <Section className="border-b border-border pb-10 sm:pb-14">
        <Container className="flex flex-col gap-4">
          <span className="text-small font-medium text-primary">Portfolio</span>
          <h1 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
            AJERO가 만든 프로젝트
          </h1>
          <p className="max-w-2xl text-body text-muted-foreground">
            포트폴리오 수보다 완성도와 설명의 질을 우선합니다. 실제 고객
            프로젝트가 아닌 경우 Demo Project로 명확히 구분해 표시합니다.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-10">
          <nav className="flex flex-wrap gap-2" aria-label="포트폴리오 카테고리 필터">
            {filters.map((filter) => {
              const isActive = filter.value === activeCategory;
              const href = filter.value ? `/portfolio?category=${filter.value}` : "/portfolio";

              return (
                <Badge
                  key={filter.label}
                  render={<Link href={href} />}
                  variant={isActive ? "default" : "outline"}
                  className="h-auto rounded-full px-4 py-2 text-small"
                >
                  {filter.label}
                </Badge>
              );
            })}
          </nav>

          {portfolios.length > 0 ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {portfolios.map((portfolio) => (
                <PortfolioCard key={portfolio.id} portfolio={portfolio} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-body text-muted-foreground">
              아직 등록된 프로젝트가 없습니다.
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
