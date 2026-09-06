import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * 메인의 각 요약 섹션에서 해당 서브페이지로 연결하는 "자세히 보기" 링크.
 * 4개 섹션(Services / Work / Process / Pricing)에서 반복되어 공통 컴포넌트로 둔다.
 */
export function MoreLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "h-11 gap-2 self-start px-5 text-sm",
        className
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
