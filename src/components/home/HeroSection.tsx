import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <Container className="flex flex-col items-start gap-8 py-20 sm:py-28 lg:py-36">
        <h1 className="max-w-3xl text-display font-semibold text-foreground text-balance">
          사업을 이해하고,
          <br />
          성장을 설계하는 웹.
        </h1>
        <p className="max-w-xl text-body text-muted-foreground">
          AJERO는 홈페이지 제작뿐 아니라 디자인, 개발, 검색 노출, 콘텐츠,
          유지보수, 예약, CRM, AI까지 사업에 필요한 웹 서비스를 연결합니다.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            상담하기
          </Link>
          <Link
            href="/services"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            서비스 보기
          </Link>
        </div>
      </Container>
    </section>
  );
}
