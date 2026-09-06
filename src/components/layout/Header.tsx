"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navEntries, isNavGroup } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur transition-shadow duration-300",
        scrolled && "shadow-sm"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-h3 font-semibold tracking-tight text-foreground"
        >
          AJERO
        </Link>

        <NavigationMenu className="hidden lg:flex" aria-label="주요 메뉴">
          <NavigationMenuList className="gap-1">
            {navEntries.map((entry) =>
              isNavGroup(entry) ? (
                <NavigationMenuItem key={entry.label}>
                  <NavigationMenuTrigger className="text-small text-muted-foreground data-popup-open:text-foreground">
                    {entry.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex w-56 flex-col gap-1">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink
                            render={<Link href={item.href} />}
                            className="text-small text-muted-foreground data-[active]:text-foreground"
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={entry.href}>
                  <NavigationMenuLink
                    render={<Link href={entry.href} />}
                    className="h-9 px-2.5 py-1.5 text-small font-medium text-muted-foreground hover:text-foreground"
                  >
                    {entry.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

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
          <SheetContent side="right" className="w-full">
            <SheetHeader>
              <SheetTitle>메뉴</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col gap-2 px-4"
              aria-label="모바일 메뉴"
            >
              {navEntries.map((entry) =>
                isNavGroup(entry) ? (
                  <div key={entry.label} className="flex flex-col gap-1 py-2">
                    <span className="px-2 text-caption font-medium uppercase tracking-wide text-muted-foreground">
                      {entry.label}
                    </span>
                    {entry.items.map((item) => (
                      <SheetClose
                        key={item.href}
                        nativeButton={false}
                        render={<Link href={item.href} />}
                        className="rounded-md px-2 py-2.5 text-body font-medium text-foreground hover:bg-muted"
                      >
                        {item.label}
                      </SheetClose>
                    ))}
                  </div>
                ) : (
                  <SheetClose
                    key={entry.href}
                    nativeButton={false}
                    render={<Link href={entry.href} />}
                    className="rounded-md px-2 py-3 text-h3 font-medium text-foreground hover:bg-muted"
                  >
                    {entry.label}
                  </SheetClose>
                )
              )}
              <SheetClose
                nativeButton={false}
                render={<Link href="/contact" />}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-3 h-12 w-full text-base"
                )}
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
