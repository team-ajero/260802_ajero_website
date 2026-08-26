/**
 * ERD.md에 정의된 enum 성격의 값들.
 * DB 컬럼은 VARCHAR이므로 값 검증은 애플리케이션 레이어(Zod)에서 담당한다.
 */

export const PORTFOLIO_CATEGORIES = [
  "CORPORATE",
  "INTERIOR",
  "CONSTRUCTION",
  "SERVICE",
  "DEMO",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const PORTFOLIO_CATEGORY_LABEL: Record<PortfolioCategory, string> = {
  CORPORATE: "기업",
  INTERIOR: "인테리어",
  CONSTRUCTION: "건설/시공",
  SERVICE: "서비스",
  DEMO: "Demo",
};

export const PROJECT_TYPES = ["NEW", "REDESIGN", "MAINTENANCE", "DEMO"] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABEL: Record<ProjectType, string> = {
  NEW: "신규 제작",
  REDESIGN: "리뉴얼",
  MAINTENANCE: "유지보수",
  DEMO: "Demo Project",
};

export const CONTACT_SERVICES = [
  "WEBSITE",
  "REDESIGN",
  "MAINTENANCE",
  "SEO",
  "MARKETING",
  "RESERVATION",
  "CRM",
  "AI",
  "OTHER",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

export const CONTACT_SERVICE_LABEL: Record<ContactService, string> = {
  WEBSITE: "홈페이지 제작",
  REDESIGN: "홈페이지 리뉴얼",
  MAINTENANCE: "유지보수",
  SEO: "SEO",
  MARKETING: "마케팅",
  RESERVATION: "예약 시스템",
  CRM: "CRM",
  AI: "AI",
  OTHER: "기타",
};

export const CONTACT_INQUIRY_STATUSES = [
  "NEW",
  "IN_PROGRESS",
  "COMPLETED",
  "CLOSED",
] as const;

export type ContactInquiryStatus = (typeof CONTACT_INQUIRY_STATUSES)[number];
