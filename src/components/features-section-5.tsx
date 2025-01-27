"use client";

import { motion } from "framer-motion";
import { Sparkles, Rabbit, Download, Code } from "lucide-react";
import Image from "next/image";

import { Card } from "@/components/ui/card";

export function Features2() {
  return (
    <section className="container py-24 flex flex-col items-center gap-6 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Build fast and stay flexible
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Reweb brings the best of two worlds together: the speed of development of no-code tools, and
        the flexibility of code customization.
      </p>
      <div className="grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-3 md:flex-row md:items-center mt-6 auto-rows-[18rem]">
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2 lg:col-span-1">
          <motion.div
            initial="initial"
            whileHover="animate"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2"
          >
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
              <div className="h-4 w-full rounded-full bg-gray-100" />
            </motion.div>
            <motion.div
              variants={{
                animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="h-4 w-full rounded-full bg-gray-100" />
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
            </motion.div>
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-primary" />
              <div className="h-4 w-full rounded-full bg-gray-100" />
            </motion.div>
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Sparkles size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg">Amazing feature</h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              You can create a website in minutes
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2">
          <motion.div
            animate="animate"
            initial="initial"
            whileHover="hover"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2"
          >
            <motion.div
              style={{ maxWidth: "98.56438981990384%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "99.26734471480448%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "65.04257991489733%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "77.52326878133675%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "47.92136372199287%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
            <motion.div
              style={{ maxWidth: "67.45361774138331%" }}
              variants={{
                hover: { width: ["0%", "100%"], transition: { duration: 2 } },
                animate: { width: "100%", transition: { duration: 0.2 } },
                initial: { width: 0 },
              }}
              className="flex h-4 w-full flex-row items-center space-x-2 rounded-full bg-gradient-to-r from-pink-400 to-primary p-2"
            />
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Rabbit size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg">
              This one even better
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              Creating a website has never been easier
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2">
          <motion.div
            style={{
              background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
              backgroundSize: "400% 400%",
            }}
            animate="animate"
            initial="initial"
            variants={{
              animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
              initial: { backgroundPosition: "0 50%" },
            }}
            transition={{ duration: 5, repeatType: "reverse" }}
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2 rounded-lg"
          >
            <motion.div className="size-full rounded-lg" />
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Download size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg">
              Can&apos;t believe this is real
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              And you can export all your code!
            </p>
          </div>
        </Card>
        <Card className="row-span-1 flex flex-col space-y-4 p-4 transition shadow-md duration-200 hover:shadow-xl h-full md:col-span-2 lg:col-span-1">
          <motion.div
            initial="initial"
            whileHover="animate"
            className="bg-dot-black/[0.2] flex size-full min-h-24 flex-1 flex-col space-y-2 rounded-lg"
          >
            <motion.div
              variants={{
                animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2"
            >
              <Image
                alt="avatar"
                src="/images/user-picture.jpeg"
                width="100"
                height="100"
                className="size-10 rounded-full"
              />
              <p className="text-xs text-neutral-500">
                There are a lot of cool framerworks out there like Angular, Vue, Svelte that can
                make your life ....
              </p>
            </motion.div>
            <motion.div
              variants={{
                animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
                initial: { x: 0 },
              }}
              className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2"
            >
              <p className="text-xs text-neutral-500">I love Next.js and Reweb!</p>
              <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
            </motion.div>
          </motion.div>
          <div className="transition duration-200 group-hover:translate-x-2">
            <Code size={24} className="text-primary" />
            <h3 className="my-2 font-sans font-bold text-foreground text-lg">
              WOW! This is the best
            </h3>
            <p className="font-sans font-normal text-muted-foreground text-md">
              You can import your own components!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
