import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="text-h3 font-semibold text-foreground">AJERO</span>
          <p className="max-w-sm text-small text-muted-foreground">
            고객의 사업을 이해하고, 성장을 설계하는 웹 파트너.
            <br />
            홈페이지 제작부터 유지보수까지 함께합니다.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-8 gap-y-3"
          aria-label="Footer 메뉴"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-caption text-muted-foreground">
          © {new Date().getFullYear()} AJERO. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
