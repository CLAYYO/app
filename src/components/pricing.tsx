import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
  return (
    <section className="container flex flex-col items-center gap-6 sm:gap-7 pt-24 pb-40">
      <div className="flex flex-col gap-3 items-center">
        <span className="font-bold text-primary text-left italic font-heading">Pricing</span>
        <h2 className="font-heading text-3xl tracking-tight sm:text-4xl text-balance text-left font-bold">
          Simple pricing
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing
        praesent velit viverra sit.
      </p>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-2">
        <PricingCard
          name="Custom Build"
          price={249}
          feature1="Unlimited Ongoing Updates + Blog Integration"
          feature2="Strong Secure Web Hosting"
          feature3="Design & Build + Client Control ( easy updates you control)"
          feature4="Upto 10 Pages Included ( Local Pages for SEO Purposes)"
          feature5="Strong SEO Setup"
          description="For growing companies "
          isMostPopular={false}
        />
        <PricingCard
          name="Business Startup"
          price={139}
          feature1="Unlimited Ongoing Updates"
          feature2="Strong Secure Web Hosting"
          feature3="Design & Build"
          feature4="5 Pages Included"
          feature5="SEO Friendly Designs"
          description="For small companies "
          isMostPopular
        />
      </div>
    </section>
  );
}
