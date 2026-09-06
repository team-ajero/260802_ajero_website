"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

type RevealTag = "div" | "li" | "ol" | "ul" | "p" | "span" | "section";

type RevealProps = {
  children: ReactNode;
  /** 같은 그룹 안에서 등장 순서. 0 = 먼저, 1·2·3… 순으로 조금씩 늦게 나타난다. */
  order?: number;
  /** 슬라이드업 시작 거리(px). */
  distance?: number;
  as?: RevealTag;
  className?: string;
};

/**
 * 스크롤 연동 리빌 (Framer Motion useScroll + useTransform).
 * 요소가 뷰포트 하단에서 중앙으로 올라오는 짧은 구간 동안 페이드인 + 슬라이드업 되고,
 * 그 뒤로는 값이 고정되어 "나타난 뒤 멈춰서 읽히는" 느낌을 준다. (애플 제품 상세페이지 스타일)
 * order로 텍스트 → 이미지/카드 순차 등장을 만든다.
 * prefers-reduced-motion이면 애니메이션 없이 바로 표시한다.
 */
export function Reveal({
  children,
  order = 0,
  distance = 24,
  as = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // 순서가 뒤일수록 리빌 구간을 살짝 더 아래(늦게)로 민다.
  const shift = Math.min(order, 5) * 0.06;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${0.92 - shift}`, `start ${0.64 - shift}`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [distance, 0]);

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      style={reduce ? undefined : { opacity, y }}
    >
      {children}
    </MotionTag>
  );
}
