import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  PORTFOLIO_CATEGORY_LABEL,
  type PortfolioCategory,
} from "@/lib/constants";

export type PortfolioCardData = {
  slug: string;
  title: string;
  category: string;
  description: string;
  isDemo: boolean;
  coverImageUrl: string | null;
};

export function PortfolioCard({ portfolio }: { portfolio: PortfolioCardData }) {
  const categoryLabel =
    PORTFOLIO_CATEGORY_LABEL[portfolio.category as PortfolioCategory] ??
    portfolio.category;

  return (
    <Link
      href={`/portfolio/${portfolio.slug}`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
        {portfolio.coverImageUrl && (
          <Image
            src={portfolio.coverImageUrl}
            alt={portfolio.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{categoryLabel}</Badge>
          {portfolio.isDemo && <Badge variant="secondary">Demo Project</Badge>}
        </div>
        <h3 className="text-h3 font-semibold text-foreground">
          {portfolio.title}
        </h3>
        <p className="text-small text-muted-foreground line-clamp-2">
          {portfolio.description}
        </p>
      </div>
    </Link>
  );
}
