import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * 섹션 상단에 반복되는 eyebrow / 제목 / 설명 레이아웃을 통일한다.
 */
export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-small font-medium tracking-wide text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 font-semibold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-body text-muted-foreground max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
