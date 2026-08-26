import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <Section muted>
      <Container className="flex flex-col gap-12">
        <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />

        <Accordion className="border-t border-border">
          {faqItems.map((item, index) => (
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
      </Container>
    </Section>
  );
}
