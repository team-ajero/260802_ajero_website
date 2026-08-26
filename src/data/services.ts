export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
};

/**
 * 서비스 소개는 정적 콘텐츠이므로 DB가 아닌 코드로 관리한다. (docs/ERD.md 8절)
 * PRD.md 6.4절(Home 서비스 카드)과 7절(Services 상세) 내용을 기준으로 작성했다.
 */
export const services: Service[] = [
  {
    slug: "website",
    name: "Website",
    shortDescription: "기업 홈페이지 제작 및 리뉴얼",
    description:
      "회사의 전문성을 제대로 전달하는 홈페이지를 새로 만들거나, 오래된 홈페이지를 리뉴얼합니다.",
    features: [
      "기업 홈페이지 / 브랜드 홈페이지",
      "홈페이지 리뉴얼",
      "반응형 웹",
      "관리자 페이지",
      "게시판",
      "문의 시스템",
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    shortDescription: "홈페이지 유지보수 및 지속적인 개선",
    description:
      "홈페이지를 완성하는 것으로 끝내지 않고, 운영 중 발생하는 수정과 개선을 함께합니다.",
    features: ["콘텐츠 수정", "페이지 수정", "기능 개선", "오류 수정", "운영 지원"],
  },
  {
    slug: "seo",
    name: "SEO",
    shortDescription: "검색엔진 최적화 및 검색 노출 개선",
    description:
      "검색했을 때 회사가 잘 보이지 않는 문제를 기술적 SEO와 구조화된 콘텐츠로 개선합니다.",
    features: [
      "검색엔진 기본 최적화",
      "메타데이터",
      "구조화된 콘텐츠",
      "검색엔진 색인",
      "성능 개선",
    ],
  },
  {
    slug: "content",
    name: "Content",
    shortDescription: "블로그 및 웹 콘텐츠 제작",
    description:
      "잠재 고객이 검색할 만한 주제로 블로그와 웹 콘텐츠를 제작해 검색 유입을 늘립니다.",
    features: ["블로그 콘텐츠 기획", "웹 콘텐츠 제작", "콘텐츠 구조 설계"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    shortDescription: "검색광고 및 온라인 마케팅",
    description:
      "홈페이지, 블로그, 광고가 따로 관리되지 않는 문제를 해결하기 위해 온라인 마케팅을 연결합니다.",
    features: ["검색광고", "콘텐츠 마케팅", "블로그", "랜딩페이지"],
  },
  {
    slug: "ai",
    name: "AI",
    shortDescription: "AI를 활용한 업무 자동화 및 고객 응대",
    description: "AI를 활용해 반복적인 고객 응대와 내부 업무를 자동화합니다.",
    features: ["AI 상담", "AI 고객 응대", "업무 자동화", "내부 업무 도구"],
  },
  {
    slug: "reservation",
    name: "Reservation",
    shortDescription: "예약 및 상담 시스템 구축",
    description:
      "전화나 메신저로만 받던 예약과 상담 신청을 홈페이지에서 바로 관리할 수 있도록 구축합니다.",
    features: ["예약 시스템", "상담 신청"],
  },
  {
    slug: "crm",
    name: "CRM",
    shortDescription: "고객 및 문의 관리 시스템 구축",
    description: "늘어나는 문의와 고객 데이터를 체계적으로 관리할 수 있도록 돕습니다.",
    features: ["고객 데이터 관리", "관리자 대시보드", "고객 상태 관리"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
