"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** 문의 페이지에서는 중복이므로 숨긴다. */
const HIDDEN_PATHS = ["/contact"];

export function CtaBand() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <Section className="border-y border-border bg-accent-blue-soft">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
          그럼 지금 사업의 문제부터 이야기해보세요.
        </h2>
        <p className="max-w-xl text-body text-muted-foreground">
          홈페이지를 만들기 전에 사업에서 홈페이지가 어떤 역할을 해야 하는지부터
          이야기해보세요. 현재 홈페이지의 문제부터 새 홈페이지의 방향까지 함께
          정리해드립니다.
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2 h-12 px-7 text-base"
          )}
        >
          상담하기
        </Link>
      </Container>
    </Section>
  );
}
