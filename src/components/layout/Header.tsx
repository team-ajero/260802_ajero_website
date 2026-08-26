import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-h3 font-semibold tracking-tight text-foreground"
        >
          AJERO
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className={buttonVariants()}>
            상담하기
          </Link>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" />}
            className="lg:hidden"
            aria-label="메뉴 열기"
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-1 px-4"
              aria-label="모바일 메뉴"
            >
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-md px-2 py-3 text-body font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={<Link href="/contact" />}
                className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full")}
              >
                상담하기
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
