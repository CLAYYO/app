"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          className="text-center font-heading text-4xl sm:text-5xl tracking-tight lg:text-6xl text-balance font-bold max-w-screen-lg"
        >
          Websites Starting At £0 Down{" "}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-br from-accent to-primary">
            And £
