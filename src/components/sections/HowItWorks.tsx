"use client";

import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "Discover assets",
    description:
      "Explore the available buildings, properties, and other approved assets listed through BuyOps.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    ),
  },
  {
    title: "Connect with BuyOps",
    description:
      "Submit an enquiry as a prospective buyer, or join the sales network if you want to sell assets.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 12h8m-8 0a4 4 0 100-8 4 4 0 000 8zm8 0a4 4 0 100 8 4 4 0 000-8zm-8 0v.01M16 12v.01"
      />
    ),
  },
  {
    title: "Move the sale forward",
    description:
      "Buyers receive appropriate follow-up, while registered sales personnel manage prospects in the sales application.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-anchor section-padding bg-slate-50">
      <div className="container-custom">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            How BuyOps works
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            Three simple steps
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether you want to buy or sell, the path through BuyOps is clear
            and straightforward.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative card-modern p-7 h-full bg-white">
                <span className="absolute top-7 right-7 text-5xl font-bold text-slate-100">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {step.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-semibold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
