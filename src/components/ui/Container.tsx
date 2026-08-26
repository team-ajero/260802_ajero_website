import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * 공통 Container. 모든 페이지는 이 컴포넌트로 좌우 폭과 여백을 통일한다.
 * 페이지마다 임의로 max-width를 바꾸지 않는다. (CLAUDE.md 8. Layout)
 */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)}
      {...props}
    />
  );
}
