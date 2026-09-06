"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function FloatingActions() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, ratio)));
      setShowTop(window.scrollY > 480);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      >
        <div
          className="h-full origin-left bg-accent-blue transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-opacity hover:bg-muted",
            showTop ? "opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <ArrowUp aria-hidden="true" className="size-4" />
        </button>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 gap-2 rounded-full px-5 text-sm shadow-sm"
          )}
        >
          <MessageSquare aria-hidden="true" className="size-4" />
          상담하기
        </Link>
      </div>
    </>
  );
}
