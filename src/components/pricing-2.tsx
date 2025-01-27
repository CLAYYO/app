import { PricingCard2 } from "@/components/pricing-card2";

export function Pricing2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Project Samples
        </h2>
      </div>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
        <PricingCard2
          name="Mechanic"
          price={139}
          feature1="5 Pages"
          feature2="Superfast Web Hosting"
          feature3="Strong support"
          feature4="Basic SEO Setup"
          feature5="Contact Form"
          description="Starter Site "
          isMostPopular={false}
        />
        <PricingCard2
          name="Dog Walker"
          price={139}
          feature1="5 Pages"
          feature2="Superfast Web Hosting"
          feature3="Strong support"
          feature4="Basic SEO Setup"
          feature5="Contact Form"
          description="Starter Site "
          isMostPopular={false}
        />
        <PricingCard2
          name="Plumber"
          price={139}
          feature1="5 Pages"
          feature2="Superfast Web Hosting"
          feature3="Strong support"
          feature4="Basic SEO Setup"
          feature5="Contact Form"
          description="Starter Site "
          isMostPopular={false}
        />
      </div>
    </section>
  );
}
