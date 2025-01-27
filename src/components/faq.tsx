import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="pb-28 pt-20 bg-gradient-to-b from-background via-70% via-secondary to-background">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col gap-3 items-center">
          <span className="font-bold text-primary text-left italic font-heading">Faq</span>
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-center font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-6 w-full max-w-3xl flex flex-col gap-4">
          <FaqItem
            answer="Our websites are built using pure HTML and CSS, ensuring maximum security with no databases or complex systems that could be vulnerable to cyber threats. With this streamlined approach, there's nothing to hack, giving you total peace of mind and a hassle-free online presence."
            question="100% Secure? Can You Explain?"
          />
          <FaqItem
            answer="Our websites are designed with no unnecessary extras, no wasted code – just pure efficiency. Built with precision and purpose, they consistently achieve near-perfect 98-100/100 PageSpeed scores on Google, ensuring lightning-fast performance and an exceptional user experience."
            question="How Fast is Fast Loading?"
          />
          <FaqItem
            answer="Our dedicated in-house design team gives us the flexibility to create anything you envision. With complete creative control, we tailor every website to meet your unique needs, ensuring a bespoke design that perfectly represents your brand."
            question="Proudly Made In The UK!!"
          />
          <FaqItem
            answer="Text us anytime – you’ll always liaise directly with me, the owner and developer. No automated systems, just personal, hands-on support whenever you need it."
            question="Are You Real or Ai ?"
          />
        </Accordion>
        <undefined href="#" text="Get Started" className="mt-4" />
      </div>
    </section>
  );
}
