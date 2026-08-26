import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AJERO가 제공하는 Website, Maintenance, SEO, Content, Marketing, AI, Reservation, CRM 서비스를 소개합니다.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-border pb-12 sm:pb-16">
        <Container className="flex flex-col gap-4">
          <span className="text-small font-medium text-primary">Services</span>
          <h1 className="max-w-2xl text-h1 font-semibold text-foreground text-balance">
            홈페이지 제작을 넘어, 사업 성장에 필요한 웹 서비스를 연결합니다.
          </h1>
        </Container>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          muted={index % 2 === 1}
          className="scroll-mt-16 border-b border-border last:border-b-0"
        >
          <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-small font-medium text-primary">
                0{index + 1}
              </span>
              <h2 className="text-h2 font-semibold text-foreground">
                {service.name}
              </h2>
              <p className="text-body text-muted-foreground">
                {service.shortDescription}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-body text-foreground">{service.description}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-small text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-h2 font-semibold text-foreground">
            어떤 서비스가 필요한지 잘 모르겠다면
          </h2>
          <p className="text-body text-muted-foreground">
            현재 상황을 알려주시면 필요한 서비스를 함께 찾아드립니다.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            상담하기
          </Link>
        </Container>
      </Section>
    </>
  );
}
