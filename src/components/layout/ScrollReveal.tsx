"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 하위 페이지(About / Services / Process 등) 전역 스크롤 리빌.
 * <main> 아래 각 <section>이 화면에 들어오면 콘텐츠를 부드럽게 나타낸다.
 * - 섹션 컨테이너: 투명도만 전환(레이아웃 흔들림 방지)
 * - [data-stagger] 목록: 항목이 위에서 아래로 순차 등장하며 시선을 유도
 * - 로드 시 이미 화면에 보이는 섹션은 애니메이션 없이 즉시 표시(읽기 방해 금지)
 * - prefers-reduced-motion이면 아무것도 하지 않는다.
 * 메인 페이지("/")는 Framer Motion / GSAP 기반의 별도 연출을 쓰므로 여기서 제외한다.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );
    if (sections.length === 0) return;

    const show = (el: HTMLElement) => {
      el.dataset.reveal = "visible";
    };

    /** 섹션과 함께 나타나야 하는 요소들: 컨테이너(투명도) + 스태거 항목(이동) */
    const targetsOf = (section: HTMLElement) => {
      const container: [HTMLElement, "hidden-fade" | "hidden"][] = Array.from(
        section.children
      )
        .filter((c): c is HTMLElement => c instanceof HTMLElement)
        .map((c) => [c, "hidden-fade"]);

      const staggered: [HTMLElement, "hidden-fade" | "hidden"][] = [];
      section.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (child instanceof HTMLElement) {
            child.style.setProperty(
              "--reveal-delay",
              `${Math.min(index, 6) * 70}ms`
            );
            staggered.push([child, "hidden"]);
          }
        });
      });

      return [...container, ...staggered];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = entry.target as HTMLElement;
          targetsOf(section).forEach(([el]) => show(el));
          observer.unobserve(section);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    const viewportH = window.innerHeight;

    for (const section of sections) {
      const targets = targetsOf(section);
      const onScreen = section.getBoundingClientRect().top < viewportH * 0.85;

      if (onScreen) {
        targets.forEach(([el]) => show(el));
      } else {
        targets.forEach(([el, state]) => {
          el.dataset.reveal = state;
        });
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
