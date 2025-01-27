"use client";

import { motion } from "framer-motion";

import { CtaButton } from "@/components/cta-button";

export function Hero() {
  return (
    <section className="pb-28 pt-20 bg-gradient-to-b from-background via-70% via-accent/30">
      <div className="container flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 5, opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex cursor-pointer items-center gap-1 rounded-full bg-secondary hover:bg-secondary/60 text-primary px-4 font-medium py-1"
        >
          <span className="text-sm text-white">We Are Area 82</span>
        </motion.div>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0, duration: 0.4 }}
          className="text-center font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold max-width"
        >
          Websites Starting At £0 Down
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-br from-accent to-primary">
            And £139 Per Month
          </span>
        </motion.h1>
        <motion.p
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl"
        >
          If you need a new website, but just can&apos;t afford the initial outlay - we got you!
        </motion.p>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex"
        >
          <CtaButton href="#" text="Start Enquiry" />
        </motion.div>
        <motion.div
          animate={{ y: 0.4, opacity: 1 }}
          initial={{ y: 10, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />
      </div>
      <div className="container mt-14 max-w-5xl">
        <h2 className="text-center font-semibold leading-8 mb-12 text-muted-foreground sm:text-lg text-sm">
          Trusted by Local and National Companies{" "}
        </h2>
        <div className="grid w-full grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 gap-6 flex items-center justify-center bg-secondary/10 py-4 border-x-8">
          <img src="/images/TINTAGLASSlogo-stroked.svg" width={150} />
          <img src="/images/immobilser-direct.png" width={150} />
          <img src="/images/SCYCMainDustyRev-(1).svg" width={150} />
          <div className="bg-card p-2 rounded-md inline-block">
            <img src="/images/logos-tsp2.png" width={150} className="bg-white p-2 rounded-md" />
          </div>
          <img
            src="/images/affordable-funeral-company-tameside-dukinfield-stockport-manchester-85-85.png"
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
