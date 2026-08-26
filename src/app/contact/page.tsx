import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "AJERO에 프로젝트를 상담하고 문의를 남겨보세요.",
};

export default function ContactPage() {
  return (
    <Section className="pb-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="flex flex-col gap-4">
          <span className="text-small font-medium text-primary">Contact</span>
          <h1 className="text-h1 font-semibold text-foreground text-balance">
            지금 필요한 웹이 무엇인지
            <br />
            함께 이야기해보세요.
          </h1>
          <p className="text-body text-muted-foreground">
            아직 구체적인 계획이 없어도 괜찮습니다. 현재 상황을 남겨주시면
            검토 후 답변드립니다.
          </p>
        </div>

        <ContactForm />
      </Container>
    </Section>
  );
}
