import { and, asc, desc, eq, inArray, ne } from "drizzle-orm";
import { db } from "@/index";
import { portfolioImageTable, portfolioTable } from "@/db/schema";
import type { PortfolioCategory } from "@/lib/constants";

export type PortfolioListItem = typeof portfolioTable.$inferSelect & {
  coverImageUrl: string | null;
};

/**
 * 주어진 포트폴리오 목록에 각각의 대표 이미지(sortOrder가 가장 앞선 이미지)를 붙인다.
 */
async function attachCoverImages(
  rows: (typeof portfolioTable.$inferSelect)[]
): Promise<PortfolioListItem[]> {
  if (rows.length === 0) return [];

  const images = await db
    .select()
    .from(portfolioImageTable)
    .where(
      inArray(
        portfolioImageTable.portfolioId,
        rows.map((row) => row.id)
      )
    )
    .orderBy(asc(portfolioImageTable.sortOrder));

  const coverByPortfolioId = new Map<string, string>();
  for (const image of images) {
    if (!coverByPortfolioId.has(image.portfolioId)) {
      coverByPortfolioId.set(image.portfolioId, image.imageUrl);
    }
  }

  return rows.map((row) => ({
    ...row,
    coverImageUrl: coverByPortfolioId.get(row.id) ?? null,
  }));
}

/**
 * 공개된 포트폴리오 목록을 카테고리 필터와 함께 조회한다.
 * DB에 연결할 수 없는 경우 빈 배열을 반환해 페이지 자체는 정상적으로 렌더링되게 한다.
 */
export async function getPublishedPortfolios(
  category?: PortfolioCategory
): Promise<PortfolioListItem[]> {
  try {
    const rows = await db
      .select()
      .from(portfolioTable)
      .where(
        category
          ? and(
              eq(portfolioTable.published, true),
              eq(portfolioTable.category, category)
            )
          : eq(portfolioTable.published, true)
      )
      .orderBy(desc(portfolioTable.publishedAt));

    return await attachCoverImages(rows);
  } catch (error) {
    console.error("[getPublishedPortfolios] failed to load portfolios", error);
    return [];
  }
}

/**
 * slug로 공개된 포트폴리오 상세와 이미지 목록을 조회한다.
 */
export async function getPortfolioBySlug(slug: string) {
  try {
    const [portfolio] = await db
      .select()
      .from(portfolioTable)
      .where(
        and(eq(portfolioTable.slug, slug), eq(portfolioTable.published, true))
      )
      .limit(1);

    if (!portfolio) return null;

    const images = await db
      .select()
      .from(portfolioImageTable)
      .where(eq(portfolioImageTable.portfolioId, portfolio.id))
      .orderBy(asc(portfolioImageTable.sortOrder));

    return { portfolio, images };
  } catch (error) {
    console.error("[getPortfolioBySlug] failed to load portfolio", error);
    return null;
  }
}

/**
 * 상세 페이지 하단 "관련 프로젝트"에 쓸 같은 카테고리의 다른 프로젝트를 조회한다.
 */
export async function getRelatedPortfolios(
  category: string,
  excludeId: string,
  limit = 3
): Promise<PortfolioListItem[]> {
  try {
    const rows = await db
      .select()
      .from(portfolioTable)
      .where(
        and(
          eq(portfolioTable.published, true),
          eq(portfolioTable.category, category),
          ne(portfolioTable.id, excludeId)
        )
      )
      .orderBy(desc(portfolioTable.publishedAt))
      .limit(limit);

    return await attachCoverImages(rows);
  } catch (error) {
    console.error("[getRelatedPortfolios] failed to load related portfolios", error);
    return [];
  }
}
