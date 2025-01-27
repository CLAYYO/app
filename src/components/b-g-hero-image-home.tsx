import { cn } from "@/lib/utils";

interface BGHeroImageHomeProps {
  className?: string;
}

export function BGHeroImageHome({ className }: BGHeroImageHomeProps) {
  return <img src="/images/header-section-bg.jpg" className={className} />;
}
