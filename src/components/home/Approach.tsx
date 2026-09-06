"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/**
 * GSAP pin cleanup(ctx.revert())은 React가 <section>을 DOM에서 제거하기 "전에"
 * 동기적으로 실행돼야 한다. useEffect cleanup은 DOM 제거(mutation phase) 이후
 * passive phase에서 돌기 때문에, 페이지 전환 시 React가 pin-spacer로 감싸인
 * <section>을 제거하려다 "removeChild ... not a child" 에러를 낸다.
 * 브라우저에서는 useLayoutEffect(제거 전 동기 실행), 서버에서는 useEffect를 쓴다.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const steps = [
  {
    no: "01",
    title: "사업을 이해합니다",
    desc: "업종, 고객, 서비스, 현재 상황과 문제를 파악합니다.",
  },
  {
    no: "02",
    title: "홈페이지의 역할을 정의합니다",
    desc: "방문자가 무엇을 보고, 어떤 행동을 해야 하는지 정합니다.",
  },
  {
    no: "03",
    title: "필요한 구조를 설계합니다",
    desc: "페이지, 콘텐츠, 고객 동선을 설계합니다.",
  },
  {
    no: "04",
    title: "필요한 기능만 제안합니다",
    desc: "예약, 문의, CRM, AI 등 실제 사업에 필요한 기능만 선택합니다.",
  },
  {
    no: "05",
    title: "제작합니다",
    desc: "설계된 구조를 바탕으로 디자인과 개발을 진행합니다.",
  },
  {
    no: "06",
    title: "검색까지 고려합니다",
    desc: "SEO와 검색엔진이 이해하기 좋은 콘텐츠 구조를 함께 설계합니다.",
  },
  {
    no: "07",
    title: "운영합니다",
    desc: "제작이 끝난 뒤에도 수정, 유지보수, 개선을 이어갈 수 있도록 합니다.",
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    const heading = headingRef.current;
    if (!section || !list || !heading) return;

    gsap.registerPlugin(ScrollTrigger);

    /*
     * gsap.context()가 이 콜백 안에서 생성된 모든 트윈 / ScrollTrigger /
     * matchMedia를 기록한다. cleanup에서 ctx.revert()를 호출하면
     * pin으로 삽입된 pin-spacer 래퍼까지 DOM에서 제거되고 원래 구조로 복원된다.
     * useIsomorphicLayoutEffect로 실행하므로 이 cleanup은 React가 <section>을
     * DOM에서 제거하기 전에 동기적으로 돌고, GSAP가 먼저 원복하므로
     * "removeChild" 에러가 발생하지 않는다.
     */
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(list.children);
      const mm = gsap.matchMedia();

      // 헤딩: 스크롤로 섹션에 들어올 때 먼저 페이드인 (핀 이전)
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(heading, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: heading, start: "top 80%" },
        });
      });

      // 데스크톱: 섹션을 고정(pin)하고 단계가 스크롤에 맞춰 하나씩 등장 → 이전 단계는 흐려짐
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(items, { opacity: 0, y: 28 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: `+=${items.length * 34}%`,
              pin: true,
              scrub: 0.4,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          items.forEach((item, index) => {
            tl.to(item, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
            tl.to({}, { duration: 0.35 }); // 읽을 시간(정지 구간)
            if (index < items.length - 1) {
              tl.to(item, { opacity: 0.35, duration: 0.4 });
            }
          });
        }
      );

      // 모바일: 핀 없이 항목을 순차 페이드인만
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          items.forEach((item) => {
            gsap.from(item, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: { trigger: item, start: "top 88%" },
            });
          });
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section
      ref={sectionRef}
      muted
      size="lg"
      className="overflow-hidden border-b border-border"
    >
      <Container className="flex flex-col gap-12">
        <div ref={headingRef} className="flex flex-col gap-4">
          <span className="text-small font-medium tracking-wide text-accent-blue">
            해결 방식
          </span>
          <h2 className="max-w-3xl text-h2 font-semibold text-foreground text-balance">
            사업에서 시작해 운영까지, 순서대로 설계합니다.
          </h2>
          <p className="max-w-2xl text-body text-muted-foreground">
            사업 → 고객 → 홈페이지 역할 → 구조 → 기능 → 제작 → SEO → 운영
          </p>
        </div>

        <ol ref={listRef} className="flex flex-col">
          {steps.map((step) => (
            <li
              key={step.no}
              className="grid gap-2 border-t border-border py-6 last:border-b sm:grid-cols-[2.5rem_13rem_1fr] sm:gap-6 sm:py-7"
            >
              <span className="font-mono text-small text-accent-blue">
                {step.no}
              </span>
              <span className="text-h3 font-semibold text-foreground">
                {step.title}
              </span>
              <p className="text-body text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
