import { Card, CardContent } from "@/components/ui/card";
import { PricingFeatureItem2 } from "@/components/pricing-feature-item2";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCard2Props {
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  feature5: string;
  className?: string;
}

export function PricingCard2({
  name,
  description,
  price,
  isMostPopular,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  className,
}: PricingCard2Props) {
  return (
    <Card className={cn("relative shadow-lg", className)}>
      <CardContent className="flex flex-col items-start p-7">
        <h4 className="font-heading text-2xl font-semibold text-foreground">{name}</h4>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-5">
          <span className="font-heading text-5xl font-semibold">£{price}</span>
          <span className="text-sm"> /month</span>
        </div>
        <ul className="space-y-2 mt-9">
          <PricingFeatureItem2 text={feature1} />
          <PricingFeatureItem2 text={feature2} />
          <PricingFeatureItem2 text={feature3} />
          <PricingFeatureItem2 text={feature4} />
          <PricingFeatureItem2 text={feature5} />
        </ul>
        <Button size="lg" asChild className="mt-10 w-full">
          <a href="#">View Demo</a>
        </Button>
      </CardContent>
      {isMostPopular === true && (
        <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
          Most popular
        </span>
      )}
    </Card>
  );
}
