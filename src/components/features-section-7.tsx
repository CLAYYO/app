import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function FeaturesSection4() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">
            Stop Scrolling - Start The Ball Rolling
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Designed to build fast
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          I have been building websites in one way or another now since 1996. Yes, I know for some
          of you that seems like way back in the stone age. In those days, we had to code all the
          pages by hand, it was a very slow and laborious affair.{" "}
        </p>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Now, we have many more tools in our arsenal, enabling us to make fast loading, pixel
          perfect websites that are light years away from 1996!
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Get started quickly </span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Fast Deployment</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Export code for full customization.</span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button size="lg" asChild variant="outline">
            <Link href="/demos" className="h-12 cursor-pointer border-border text-base md:px-9">
              See Demos
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/contact" className="h-12 cursor-pointer text-base md:px-9">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="Area 82 Start Up Websites"
          src="/images/header-section-bg.jpg"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
    </section>
  );
}
