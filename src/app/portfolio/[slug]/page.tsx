import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { getPortfolioBySlug, getRelatedPortfolios } from "@/lib/portfolio";
import { parseContentSections } from "@/lib/content";
import {
  PORTFOLIO_CATEGORY_LABEL,
  PROJECT_TYPE_LABEL,
  type PortfolioCategory,
  type ProjectType,
} from "@/lib/constants";

export async function generateMetadata({
  params,
}: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPortfolioBySlug(slug);

  if (!result) {
    return { title: "Portfolio" };
  }

  return {
    title: result.portfolio.title,
    description: result.portfolio.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const result = await getPortfolioBySlug(slug);

  if (!result) {
    notFound();
  }

  const { portfolio, images } = result;
  const sections = parseContentSections(portfolio.content);
  const relatedPortfolios = await getRelatedPortfolios(
    portfolio.category,
    portfolio.id
  );

  const categoryLabel =
    PORTFOLIO_CATEGORY_LABEL[portfolio.category as PortfolioCategory] ??
    portfolio.category;
  const projectTypeLabel =
    PROJECT_TYPE_LABEL[portfolio.projectType as ProjectType] ??
    portfolio.projectType;

  return (
    <>
      <Section className="border-b border-border pb-10 sm:pb-14">
        <Container className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{categoryLabel}</Badge>
            <Badge variant="outline">{projectTypeLabel}</Badge>
            {portfolio.isDemo && <Badge variant="secondary">Demo Project</Badge>}
          </div>
          <h1 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
            {portfolio.title}
          </h1>
          <p className="max-w-2xl text-body text-muted-foreground">
            {portfolio.description}
          </p>
        </Container>
      </Section>

      {images.length > 0 && (
        <Section className="border-b border-border py-10 sm:py-14">
          <Container className="flex flex-col gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                  priority={image.sortOrder === 0}
                />
              </div>
            ))}
          </Container>
        </Section>
      )}

      <Section>
        <Container className="mx-auto flex max-w-3xl flex-col gap-12">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-h2 font-semibold text-foreground">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="whitespace-pre-line text-body text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </Container>
      </Section>

      {relatedPortfolios.length > 0 && (
        <Section muted>
          <Container className="flex flex-col gap-8">
            <h2 className="text-h2 font-semibold text-foreground">
              관련 프로젝트
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPortfolios.map((related) => (
                <PortfolioCard key={related.id} portfolio={related} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-h2 font-semibold text-foreground">
            비슷한 프로젝트를 계획하고 계신가요?
          </h2>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            상담하기
          </Link>
        </Container>
      </Section>
    </>
  );
}
