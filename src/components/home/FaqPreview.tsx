import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/motion/Reveal";

/** 메인에서는 상담 전 자주 나오는 질문 위주로 일부만 노출한다. */
const previewFaqs = faqItems.slice(0, 7);

export function FaqPreview() {
  return (
    <Section muted className="border-b border-border">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionTitle eyebrow="FAQ" title="궁금한 점을 해결합니다." />
        </Reveal>

        <Reveal order={1}>
          <Accordion className="border-t border-border">
            {previewFaqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-body">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-small text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
