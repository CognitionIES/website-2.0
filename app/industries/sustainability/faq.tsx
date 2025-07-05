import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export default function FAQ() {
    return (
      <section className="w-full py-12 md:py-16 bg-[#F5FDFF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003C46] text-sparkle">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#4A4A4A] font-light leading-relaxed">
            Quick answers about our sustainability solutions.
          </p>
          <Accordion type="single" collapsible className="text-[#4A4A4A]">
            {/* Add FAQ items here */}
            <AccordionItem value="item-1" className="border-t border-[#99D5DF]/20">
              <AccordionTrigger className="text-lg font-medium hover:text-[#00A4B4] py-4">
                What industries do you serve?
              </AccordionTrigger>
              <AccordionContent className="text-base font-light py-4">
                We serve process manufacturing, renewable energy, water treatment, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
}
