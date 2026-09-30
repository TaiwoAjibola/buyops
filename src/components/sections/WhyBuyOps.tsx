"use client";

import Reveal from "@/components/Reveal";

const benefits = [
  {
    title: "One platform for available assets",
    description:
      "Access buildings, properties, and other approved assets through a single, organised platform.",
  },
  {
    title: "A structured connection",
    description:
      "A clear way to connect prospective buyers with the right sales personnel.",
  },
  {
    title: "Lead management for sellers",
    description:
      "A central place for registered sales participants to manage prospects and follow-ups.",
  },
  {
    title: "Clear asset visibility",
    description:
      "Transparent asset information and applicable sales terms for everyone involved.",
  },
];

export default function WhyBuyOps() {
  return (
    <section id="about" className="scroll-anchor section-padding bg-slate-50">
      <div className="container-custom">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            Why BuyOps
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            A clearer way to buy and sell assets
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BuyOps is built around the practical needs of buyers and sales
            participants — verified information, a structured process, and a
            single place to manage opportunities.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.08}>
              <div className="card-modern p-6 h-full bg-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <h3 className="mt-4 font-semibold text-brand-dark">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
