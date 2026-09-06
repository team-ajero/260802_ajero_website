import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navEntries, isNavGroup } from "@/data/nav";
import { SITE_CONTACT } from "@/lib/constants";

const linkClass = "text-small text-muted-foreground hover:text-foreground";
const headingClass = "text-caption font-medium text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-x-8 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div className="flex flex-col gap-3">
          <span className="text-h3 font-semibold text-foreground">AJERO</span>
          <p className="max-w-xs text-small text-muted-foreground">
            홈페이지가 아니라 사업의 문제부터 함께 고민하는 웹 에이전시입니다.
          </p>
        </div>

        {navEntries.map((entry) =>
          isNavGroup(entry) ? (
            <nav
              key={entry.label}
              className="flex flex-col gap-3"
              aria-label={`${entry.label} 메뉴`}
            >
              <span className={headingClass}>{entry.label}</span>
              {entry.items.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : (
            <nav
              key={entry.href}
              className="flex flex-col gap-3"
              aria-label={`${entry.label} 메뉴`}
            >
              <span className={headingClass}>{entry.label}</span>
              <Link href={entry.href} className={linkClass}>
                {entry.label}
              </Link>
              <Link href="/contact" className={linkClass}>
                상담하기
              </Link>
            </nav>
          )
        )}

        <div className="flex flex-col gap-3">
          <span className={headingClass}>문의</span>
          <a href={`mailto:${SITE_CONTACT.email}`} className={linkClass}>
            {SITE_CONTACT.email}
          </a>
          <a
            href={SITE_CONTACT.kmongUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            크몽
          </a>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-caption text-muted-foreground">
          © 2026 AJERO. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
