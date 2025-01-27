import { Phone, Clock, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Section() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background p-4 md:p-8">
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" height="100%" className="fill-primary">
          <defs>
            <pattern
              id="complexPattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect fill="currentColor" width="50" height="50" opacity="0.1" />
              <circle r="10" cx="25" cy="25" fill="currentColor" opacity="0.05" />
              <path
                d="M0 50 Q25 25, 50 50"
                fill="none"
                stroke="currentColor"
                opacity="0.08"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect fill="url(#complexPattern)" width="100%" height="100%" />
        </svg>
      </div>
      <div className="container relative z-10 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with us today and let&apos;s start building something amazing. Our team is
            ready to help bring your vision to life.
          </p>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">
              <Phone className="mr-1 h-3 w-3" />
              Awesome Support
            </Badge>
            <Badge variant="secondary">
              <Clock className="mr-1 h-3 w-3" />
              Fast Response
            </Badge>
          </div>
        </div>
        <Card className="relative">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="enquiry">Enquiry</Label>
                <Textarea
                  id="enquiry"
                  placeholder="Tell us about your project"
                  className="min-h-[120px]"
                />
              </div>
              <Button size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
