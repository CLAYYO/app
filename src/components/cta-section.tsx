import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-6 px-6 relative flex-1 rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-tr-[2.5rem] bg-gradient-to-br from-accent to-primary overflow-hidden pt-24">
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-primary-foreground text-left font-bold md:text-5xl">
          Get started for free
        </h2>
        <p className="max-w-xl text-lg text-primary-foreground/80 text-center">
          Join The Free Start Revolution Today
        </p>
        <Button
          size="lg"
          asChild
          variant="outline"
          className="cursor-pointer border-border bg-background hover:bg-bacground/90"
        >
          <Link href="#">Get Started</Link>
        </Button>
        <Image
          alt="Area 82 Web Design"
          src="/images/code-review.svg"
          width={900}
          height={698}
          priority
          className="-mt-14 mt-0 lg:-mb-40"
        />
      </div>
    </section>
  );
}
