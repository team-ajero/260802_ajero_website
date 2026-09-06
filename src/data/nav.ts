export type NavLeaf = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  items: NavLeaf[];
};

export type NavEntry = NavLeaf | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

/**
 * Header / Footer 공통 내비게이션.
 * 상위 항목은 그룹(드롭다운) 또는 단일 링크이며, Contact는 CTA로만 노출한다.
 */
export const navEntries: NavEntry[] = [
  {
    label: "서비스",
    items: [
      { label: "홈페이지 제작", href: "/services#website" },
      { label: "유지보수", href: "/services#maintenance" },
      { label: "SEO", href: "/services#seo" },
      { label: "비즈니스 기능", href: "/services#reservation" },
      { label: "AI & 자동화", href: "/services#ai" },
    ],
  },
  { label: "포트폴리오", href: "/portfolio" },
  {
    label: "회사소개",
    items: [
      { label: "회사 소개", href: "/about" },
      { label: "진행 방식", href: "/process" },
    ],
  },
];

/** 평면 링크 목록이 필요한 곳(모바일 메뉴 등)에서 사용한다. */
export const navLinks: NavLeaf[] = navEntries.flatMap((entry) =>
  isNavGroup(entry) ? entry.items : [entry]
);
