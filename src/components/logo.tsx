import Link from "next/link";
import { ArrowBigRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <ArrowBigRight size={32} className="text-primary" />
      <span className="font-heading text-xl font-extrabold text-3xl">Area 82</span>
    </Link>
  );
}
