import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  muted?: boolean;
};

/**
 * 공통 Section. 섹션 간 수직 여백과 배경을 통일한다.
 * Page > Container > Section > Content 구조를 따른다. (CLAUDE.md 8. Layout)
 */
export function Section({ className, muted = false, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-28", muted && "bg-muted", className)}
      {...props}
    />
  );
}
