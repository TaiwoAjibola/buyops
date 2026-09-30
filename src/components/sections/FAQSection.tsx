"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "What is BuyOps?",
    a: "BuyOps is a platform for selling buildings, properties, and other approved assets through a network of sales agents, freelancers, and cluster leads. The public site helps you explore assets and understand the sales opportunity.",
  },
  {
    q: "What kinds of assets can I explore?",
    a: "BuyOps works with approved buildings, properties, and other qualifying assets. Available listings and approved pricing are shared through the BuyOps sales application.",
  },
  {
    q: "How can I enquire about an asset?",
    a: "You can explore featured assets on this site and use the View Asset link to reach the sales application, where you can register and submit an enquiry.",
  },
  {
    q: "Who can join the BuyOps sales network?",
    a: "Sales agents, freelancers, and cluster or team leads can all join, subject to the applicable BuyOps onboarding and approval process.",
  },
  {
    q: "What is the difference between an agent and a freelancer?",
    a: "Agents participate in asset sales and manage prospective buyers directly. Freelancers can take part in sales through the applicable BuyOps arrangements. Exact responsibilities follow the platform's approved role definitions.",
  },
  {
    q: "How do clusters and team leads work?",
    a: "Cluster leads coordinate their assigned groups of sellers. Under the applicable rules, they may qualify for leadership bonuses based on the performance of their cluster.",
  },
  {
    q: "How are sales commissions determined?",
    a: "Commission arrangements depend on the asset and the applicable sales terms. Specific commission details are provided through the authenticated sales application and authorised channels.",
  },
  {
    q: "How do existing members sign in?",
    a: "Existing agents, freelancers, and cluster leads sign in to the BuyOps sales application using their registered account credentials.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-brand-dark">{q}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal className="mt-10 max-w-3xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
