import { Server, Smartphone } from "lucide-react";
import Image from "next/image";
import { FeatureItem } from "@/components/feature-item";

export function FeaturesSection() {
  return (
    <section className="container flex flex-col py-24 md:flex-row md:items-center gap-20 max-w-6xl">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-left italic font-heading">
            Peace Of Mind
          </span>
          <h2 className="font-heading tracking-tight sm:text-4xl text-balance text-left font-bold text-2xl">
            No Wordpress/Custom Coded
            <br />
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left hidden">
          Gain valuable insights to make informed decisions and optimize your strategy for continued
          success.
        </p>
        <div className="flex flex-col gap-8">
          <FeatureItem
            icon={Server}
            title="Free Web Hosting"
            description="Superfast /  Secure / All Included"
          />
          <FeatureItem
            icon={Smartphone}
            title="Mobile First Design"
            description="Built from the ground up with mobile in mind"
          />
        </div>
      </div>
      <div className="relative flex-1 pt-10 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-gradient-to-br from-accent to-primary">
        <Image
          alt="SaaS Dashboard"
          src="/images/hand-coded-website-cheshire-uk.svg"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}
