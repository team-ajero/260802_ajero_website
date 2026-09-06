import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  muted?: boolean;
  /** "lg" = 스크롤 애니메이션이 "숨 쉴" 여백이 필요한 메인 섹션용 넉넉한 수직 여백. */
  size?: "default" | "lg";
};

const sizeClass: Record<NonNullable<SectionProps["size"]>, string> = {
  default: "py-14 sm:py-18 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-36",
};

/**
 * 공통 Section. 섹션 간 수직 여백과 배경을 통일한다.
 * Page > Container > Section > Content 구조를 따른다. (CLAUDE.md 8. Layout)
 */
export function Section({
  className,
  muted = false,
  size = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sizeClass[size], muted && "bg-muted", className)}
      {...props}
    />
  );
}
