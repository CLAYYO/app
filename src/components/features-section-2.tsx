import Image from "next/image";

import { StatItem } from "@/components/stat-item";

export function FeaturesSection2() {
  return (
    <section className="container flex flex-col py-24 md:flex-row md:items-center gap-20 max-w-6xl">
      <div className="relative order-1 md:order-none flex-1 pt-10 overflow-hidden rounded-t-[2.5rem] rounded-br-[5rem] bg-gradient-to-br from-accent to-primary">
        <Image
          alt="SaaS Dashboard"
          src="/images/web-designer-cheshire-uk.svg"
          width={500}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-heading font-bold italic text-left text-primary">
            Updates Included
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-left">
            Want to change images, text or logos?
          </h2>
        </div>
        <p className="max-w-lg text-left text-lg text-muted-foreground">
          We are here to help you succeed, running a business is hard enough without worrying about
          your website being out-of-date!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Free To Start" value="100%" />
          <StatItem label="No Worries" value="100%" />
        </div>
      </div>
    </section>
  );
}
