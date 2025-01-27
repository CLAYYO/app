import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeatureItem2Props {
  text: string;
  className?: string;
}

export function PricingFeatureItem2({ text, className }: PricingFeatureItem2Props) {
  return (
    <li className={cn("flex items-center gap-2", className)}>
      <Check size={20} className="text-primary" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </li>
  );
}
