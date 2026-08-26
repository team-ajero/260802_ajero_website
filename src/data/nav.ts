export type NavLink = {
  label: string;
  href: string;
};

/**
 * Header 내비게이션.
 * Blog는 MVP 2차 구현 범위라 페이지가 아직 없으므로, 실제로 만들어질 때 추가한다.
 */
export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
