import Image from "next/image";

import { StatItem } from "@/components/stat-item";

export function FeaturesSection2() {
  return (
    <section className="container flex flex-col py-24 md:flex-row md:items-center gap-8 gap-20 max-w-6xl">
      <div className="relative flex-1 pt-10 rounded-tl-[2.5rem] rounded-tr-[2.5rem] rounded-br-[5rem] overflow-hidden bg-gradient-to-br from-accent to-primary order-1 md:order-none">
        <Image
          alt="SaaS Dashboard"
          src="/images/web-designer-cheshire-uk.svg"
          width={500}
          height={0}
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-primary text-left italic font-heading">
            Updates Incuded
          </span>
          <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-left font-bold">
            Want to change images, text or logos?
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          We are here to help you succeed, running a business is hard enough without worrying about
          your website being out-of-date!
        </p>
        <div className="flex grid-cols-2 grid gap-4">
          <StatItem label="Free To Start" value="100%" />
          <StatItem label="No Worries" value="100%" />
        </div>
      </div>
    </section>
  );
}
