"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { links } from "@/lib/links";

export default function HeroSection() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white scroll-anchor"
    >
      <div className="container-custom pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={reduce ? undefined : item}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal"
            >
              Nigeria&apos;s asset sales network
            </motion.span>

            <motion.h1
              variants={reduce ? undefined : item}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-brand-dark"
            >
              Discover and sell real assets across Nigeria.
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-5 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0"
            >
              BuyOps connects available buildings, properties, and approved
              assets with prospective buyers through a nationwide network of
              sales agents, freelancers, and cluster leads.
            </motion.p>

            <motion.div
              variants={reduce ? undefined : item}
              className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3"
            >
              <a
                href="#assets"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-center hover:bg-brand-blue-dark transition-colors"
              >
                Explore Assets
              </a>
              <a
                href="#sell"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                Sell with BuyOps
              </a>
            </motion.div>

            <motion.p
              variants={reduce ? undefined : item}
              className="mt-5 text-sm text-slate-500"
            >
              Already a member?{" "}
              <a
                href={links.signIn}
                className="font-semibold text-brand-blue hover:underline"
              >
                Sign in
              </a>
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft bg-slate-200 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70"
                alt="A modern residential property available through the BuyOps sales network"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-brand-dark">
                  Verified assets
                </p>
                <p className="text-xs text-slate-500">
                  Listed through BuyOps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
