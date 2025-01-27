import {
  Frame,
  Download,
  LockKeyholeOpen,
  Sparkles,
  LayoutPanelLeft,
  MailOpen,
} from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Build fast and stay flexible
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Area 82 exploit the power and flexibility of custom coding to build small, fast websites
        without the need for databases, WordPress, or similar platforms.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 mt-10">
        <FeatureCard
          icon={Frame}
          title="Visually Appealing"
          description="Cool custom designs created to fit your niche perfectly, built from the ground up using clean, lean code."
        />
        <FeatureCard
          icon={Download}
          title="Code Control"
          description="HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It provides the basic framework for content by using elements such as headings, paragraphs, links, images, and more. "
        />
        <FeatureCard
          icon={LockKeyholeOpen}
          title="No lock-in"
          description="Our pay-as-you-go service doesn't lock you in to far into the future, if something happens to your business, you will only have commited for a 12 month period iniially."
        />
        <FeatureCard
          icon={Sparkles}
          title="Built on modern tech"
          description="Keep It Simple is our motto, build the site and deploy it,  harness the power of extra tools only if necessary."
        />
        <FeatureCard
          icon={LayoutPanelLeft}
          title="Flexible Designs"
          description="With our builds focused on a mobile first format, we aim to have your design looking great on all device sizes."
        />
        <FeatureCard
          icon={MailOpen}
          title="Functioning contact page"
          description="Prompt delivery of any enquiries will go straight to your inbox."
        />
      </div>
    </section>
  );
}
