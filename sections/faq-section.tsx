import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Les questions que vos clients posent avant de commander."
            description="Reponses courtes, rassurantes et compatibles avec une experience premium."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[1.5rem] border border-blue-100 bg-white px-6 shadow-premium">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
