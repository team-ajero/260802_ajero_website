import "dotenv/config";
import { db } from "@/index";
import { portfolioImageTable, portfolioTable } from "@/db/schema";

/**
 * AJERO는 아직 공개 가능한 실제 고객 사례가 많지 않으므로,
 * 초기 Portfolio는 업종별 Demo Project로 채운다.
 * 실제 고객 프로젝트가 아님을 isDemo=true로 명확히 구분한다. (PRD.md 3, 8절)
 *
 * 실행: pnpm tsx src/db/seed.ts
 */

const demoPortfolios = [
  {
    title: "그린테라스 인테리어",
    slug: "green-terrace-interior",
    category: "INTERIOR",
    projectType: "DEMO",
    description:
      "인테리어 시공 사례와 상담 신청 흐름을 중심으로 설계한 인테리어 업체용 홈페이지 Demo.",
    clientName: null,
    isDemo: true,
    content: `## Project Overview
인테리어 업체가 시공 사례를 효과적으로 보여주고, 방문자가 부담 없이 상담을 신청할 수 있도록 설계한 Demo Project입니다.

## Client Problem
인테리어 업체는 시공 사례 사진이 많지만, 이를 체계적으로 분류해서 보여주는 홈페이지가 없는 경우가 많습니다. 또한 방문자가 상담까지 이어지는 경로가 불명확합니다.

## Solution
시공 사례를 공간별/스타일별로 분류하고, 각 페이지마다 상담 신청 CTA를 자연스럽게 배치했습니다.

## Design
넓은 여백과 큰 이미지를 활용해 시공 사례의 완성도를 강조하는 방향으로 디자인했습니다.

## Development
Next.js 기반 반응형 웹으로 구현했으며, 이미지 최적화와 지연 로딩을 적용해 모바일에서도 빠르게 로드되도록 했습니다.

## Result
실제 운영 데이터가 없는 Demo Project이므로 임의의 성과 수치는 작성하지 않습니다.

## 사용 기술
Next.js, TypeScript, Tailwind CSS`,
    published: true,
    publishedAt: new Date(),
    images: [
      { imageUrl: "https://picsum.photos/id/1080/1200/800", alt: "그린테라스 인테리어 메인 화면", sortOrder: 0 },
      { imageUrl: "https://picsum.photos/id/1078/1200/800", alt: "그린테라스 인테리어 시공 사례 목록", sortOrder: 1 },
    ],
  },
  {
    title: "한빛건설",
    slug: "hanbit-construction",
    category: "CONSTRUCTION",
    projectType: "DEMO",
    description:
      "건설/시공 업체의 전문성과 시공 프로세스를 신뢰감 있게 전달하는 기업 홈페이지 Demo.",
    clientName: null,
    isDemo: true,
    content: `## Project Overview
건설/시공 업체가 회사의 전문성과 시공 실적을 신뢰감 있게 전달할 수 있도록 설계한 Demo Project입니다.

## Client Problem
건설 업체 홈페이지는 정보 전달에 집중한 나머지 딱딱하게 느껴지는 경우가 많고, 모바일에서 확인하기 어려운 경우가 많습니다.

## Solution
회사 소개, 시공 프로세스, 시공 사례를 명확한 구조로 나누고 모바일 우선으로 설계했습니다.

## Design
안정감 있는 색상과 명확한 타이포그래피 계층으로 신뢰감을 전달하는 데 집중했습니다.

## Development
Next.js App Router 기반으로 구현했으며, 시맨틱 마크업과 기본 SEO를 적용했습니다.

## Result
실제 운영 데이터가 없는 Demo Project이므로 임의의 성과 수치는 작성하지 않습니다.

## 사용 기술
Next.js, TypeScript, Tailwind CSS`,
    published: true,
    publishedAt: new Date(),
    images: [
      { imageUrl: "https://picsum.photos/id/1076/1200/800", alt: "한빛건설 메인 화면", sortOrder: 0 },
    ],
  },
  {
    title: "브레드메종 베이커리",
    slug: "bread-maison-bakery",
    category: "CORPORATE",
    projectType: "DEMO",
    description:
      "소규모 베이커리 브랜드를 위한 브랜드 소개형 홈페이지 Demo.",
    clientName: null,
    isDemo: true,
    content: `## Project Overview
소규모 브랜드도 부담 없이 운영할 수 있는 브랜드 소개형 홈페이지 Demo Project입니다.

## Client Problem
작은 브랜드는 홈페이지 제작 비용과 이후 관리 부담 때문에 온라인 홍보를 미루는 경우가 많습니다.

## Solution
꼭 필요한 페이지(브랜드 소개, 메뉴, 매장 안내, 문의)만으로 구성해 제작과 관리 부담을 낮췄습니다.

## Design
따뜻한 톤과 여백을 활용해 브랜드의 분위기를 자연스럽게 전달하도록 디자인했습니다.

## Development
콘텐츠 데이터와 UI를 분리해 이후 메뉴/가격 변경에도 쉽게 대응할 수 있도록 구현했습니다.

## Result
실제 운영 데이터가 없는 Demo Project이므로 임의의 성과 수치는 작성하지 않습니다.

## 사용 기술
Next.js, TypeScript, Tailwind CSS`,
    published: true,
    publishedAt: new Date(),
    images: [
      { imageUrl: "https://picsum.photos/id/292/1200/800", alt: "브레드메종 베이커리 메인 화면", sortOrder: 0 },
    ],
  },
  {
    title: "AJERO 예약 상담 데모",
    slug: "ajero-reservation-demo",
    category: "SERVICE",
    projectType: "DEMO",
    description:
      "예약 및 상담 신청 흐름을 검증하기 위해 AJERO가 자체 제작한 서비스 Demo.",
    clientName: null,
    isDemo: true,
    content: `## Project Overview
예약/상담 신청 기능이 필요한 사업자를 위해 AJERO가 자체적으로 기획하고 제작한 Concept Project입니다.

## Client Problem
많은 소상공인이 전화나 메신저로만 예약을 받아 관리가 어렵고, 예약 현황을 한눈에 파악하기 힘듭니다.

## Solution
방문자가 원하는 날짜와 시간을 선택해 상담을 신청하고, 신청 내역이 정리되어 관리되는 흐름을 구현했습니다.

## Design
예약 절차를 최소한의 단계로 줄이는 데 집중해 설계했습니다.

## Development
Next.js Server Action과 PostgreSQL을 활용해 신청 데이터를 저장하도록 구현했습니다.

## Result
자체 Concept Project이므로 임의의 성과 수치는 작성하지 않습니다.

## 사용 기술
Next.js, TypeScript, PostgreSQL, Drizzle ORM`,
    published: true,
    publishedAt: new Date(),
    images: [
      { imageUrl: "https://picsum.photos/id/96/1200/800", alt: "AJERO 예약 상담 데모 메인 화면", sortOrder: 0 },
    ],
  },
] as const;

async function seed() {
  console.log(`[seed] inserting ${demoPortfolios.length} demo portfolios...`);

  for (const { images, ...portfolio } of demoPortfolios) {
    const [inserted] = await db
      .insert(portfolioTable)
      .values(portfolio)
      .onConflictDoNothing({ target: portfolioTable.slug })
      .returning({ id: portfolioTable.id, slug: portfolioTable.slug });

    if (!inserted) {
      console.log(`[seed] skip (already exists): ${portfolio.slug}`);
      continue;
    }

    await db.insert(portfolioImageTable).values(
      images.map((image) => ({ ...image, portfolioId: inserted.id }))
    );

    console.log(`[seed] inserted: ${inserted.slug}`);
  }

  console.log("[seed] done.");
  process.exit(0);
}

seed().catch((error) => {
  console.error("[seed] failed", error);
  process.exit(1);
});
