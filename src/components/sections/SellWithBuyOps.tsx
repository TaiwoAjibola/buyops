"use client";

import Reveal from "@/components/Reveal";
import { links } from "@/lib/links";

const roles = [
  {
    title: "Sales Agents",
    description:
      "Participate in asset sales and manage prospective buyers through the BuyOps sales application.",
  },
  {
    title: "Freelancers",
    description:
      "Take part in sales through the applicable BuyOps arrangements and earn on completed transactions.",
  },
  {
    title: "Cluster & Team Leads",
    description:
      "Coordinate your assigned group of sellers and may qualify for leadership bonuses under the applicable rules.",
  },
];

export default function SellWithBuyOps() {
  return (
    <section id="sell" className="scroll-anchor section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Sell with BuyOps
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
              Join a nationwide sales network
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              BuyOps works with different kinds of sales participants. Each
              plays a distinct role in connecting approved assets with
              prospective buyers.
            </p>

            <div className="mt-8 space-y-4">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="flex gap-4 rounded-xl border border-gray-100 p-5 bg-slate-50"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-dark">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {role.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-modern p-7 md:p-9 bg-gradient-to-br from-brand-dark to-brand-navy text-white">
              <h3 className="text-2xl font-semibold">
                Ready to start selling?
              </h3>
              <p className="mt-3 text-slate-300">
                Commission arrangements depend on the asset and the applicable
                sales terms. Registration does not automatically grant
                leadership privileges or guarantee earnings.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={links.register}
                  className="px-6 py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-center hover:bg-brand-blue-dark transition-colors"
                >
                  Join the Network
                </a>
                <a
                  href={links.signIn}
                  className="px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-center hover:bg-white/10 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
