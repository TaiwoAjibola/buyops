"use client";

import Reveal from "@/components/Reveal";
import { links } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="scroll-anchor section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-custom">
        <Reveal className="rounded-3xl bg-brand-dark px-6 py-14 md:px-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            What would you like to do?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you&apos;re looking to buy or ready to sell, BuyOps gives
            you a clear next step.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <h3 className="text-xl font-semibold text-white">
                Looking to buy?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Browse available assets and enquire about what interests you.
              </p>
              <a
                href="#assets"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-brand-blue px-6 py-3.5 font-semibold text-white hover:bg-brand-blue-dark transition-colors"
              >
                Explore Assets
              </a>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <h3 className="text-xl font-semibold text-white">
                Interested in selling?
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Join the BuyOps sales network and start connecting with buyers.
              </p>
              <a
                href={links.register}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-dark hover:bg-slate-100 transition-colors"
              >
                Join the Network
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Already a member?{" "}
            <a
              href={links.signIn}
              className="font-semibold text-white underline underline-offset-4 hover:text-brand-blue transition-colors"
            >
              Sign in
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
