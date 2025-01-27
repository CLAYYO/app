import { TextQuote, LineChart } from "lucide-react";
import Image from "next/image";

import { FeatureItem } from "@/components/feature-item";

export function FeaturesSection3() {
  return (
    <section className="container flex flex-col py-24 md:flex-row md:items-center gap-8 gap-20 max-w-6xl">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-left italic font-heading">
            Affordable Small Business Websites – Get Started with £0 Upfront!
          </span>
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-left font-bold">
            Clean Code and Design, Fast Loading &amp; Future Proof
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left hidden">
          Gain valuable insights to make informed decisions and optimize your strategy for continued
          success.
        </p>
        <div className="flex flex-col gap-8">
          <FeatureItem
            icon={TextQuote}
            title="Want To Update Your Own Content?"
            description="We have you covered with our optional Content Management System + £200.00"
          />
          <FeatureItem
            icon={LineChart}
            title="Need More Pages?"
            description="Our standard package includes a professionally designed 5-page website to help you establish your online presence effortlessly.

Need something more? We offer bespoke pricing for additional pages and custom features, tailored to your specific requirements based on the complexity of the project and the time needed to bring your vision to life."
          />
        </div>
      </div>
      <div className="relative flex-1 pt-10 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-gradient-to-br from-accent to-primary">
        <Image
          alt="Area 82 Custom HTML Websites"
          src="/images/web-designer-near-me.svg"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}
