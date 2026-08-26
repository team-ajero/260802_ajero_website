import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

export function ServiceSection() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Services"
          title="AJERO가 제공하는 서비스"
          description="홈페이지 제작부터 이후의 운영까지, 사업에 필요한 웹 서비스를 연결합니다."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services#${service.slug}`}>
              <Card className="h-full border border-border transition-colors hover:border-primary">
                <CardContent className="flex flex-col gap-2">
                  <h3 className="text-h3 font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-small text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
