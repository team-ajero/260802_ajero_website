"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const visual: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.45 } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : { variants: container, initial: "hidden" as const, animate: "show" as const };
  const childProps = reduce ? {} : { variants: item };

  return (
    <section className="border-b border-border">
      <Container className="grid items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24">
        <motion.div
          className="flex flex-col items-start gap-6 sm:gap-8"
          {...motionProps}
        >
          <motion.span
            className="text-caption font-medium uppercase tracking-[0.2em] text-accent-blue"
            {...childProps}
          >
            사업을 이해하는 웹 에이전시
          </motion.span>
          <motion.h1
            className="max-w-2xl text-hero font-semibold text-foreground text-balance"
            {...childProps}
          >
            홈페이지가 아니라,
            <br />
            사업의 문제부터 함께 고민합니다.
          </motion.h1>
          <motion.p
            className="max-w-md text-body text-muted-foreground"
            {...childProps}
          >
            사업을 이해하고, 홈페이지의 역할을 정의하고,
            <br className="hidden sm:inline" />
            필요한 기능과 운영까지 설계합니다.
          </motion.p>
          <motion.div className="flex flex-col gap-3 sm:flex-row" {...childProps}>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-7 text-base")}
            >
              상담하기
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-7 text-base"
              )}
            >
              포트폴리오
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          {...(reduce
            ? {}
            : { variants: visual, initial: "hidden" as const, animate: "show" as const })}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}

/** 정적 비주얼 컴포지션. 실제 프로젝트가 아니므로 추상적인 웹사이트 목업으로 표현한다. */
function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative hidden md:block">
      <div className="overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-foreground/10">
        <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <div className="h-32 rounded-lg bg-accent-blue-soft" />
          <div className="flex gap-4">
            <div className="h-20 flex-1 rounded-lg bg-secondary" />
            <div className="h-20 flex-1 rounded-lg bg-muted" />
          </div>
          <div className="h-3 w-3/4 rounded-full bg-muted" />
          <div className="h-3 w-1/2 rounded-full bg-muted" />
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-xl bg-card p-4 shadow-sm ring-1 ring-foreground/10 lg:block">
        <div className="h-2.5 w-10 rounded-full bg-accent-blue" />
        <div className="mt-3 h-2 w-full rounded-full bg-muted" />
        <div className="mt-2 h-2 w-2/3 rounded-full bg-muted" />
      </div>
    </div>
  );
}
