"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { links } from "@/lib/links";
import { showcaseAssets } from "@/lib/assets";

export default function FeaturedAssets() {
  return (
    <section
      id="assets"
      className="scroll-anchor section-padding bg-white"
    >
      <div className="container-custom">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            Featured assets
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            A selection of what BuyOps offers
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Explore the types of buildings, properties, and approved assets
            available through the BuyOps network.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseAssets.map((asset, i) => (
            <Reveal key={asset.id} delay={i * 0.08}>
              <article className="card-modern overflow-hidden h-full flex flex-col group">
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={asset.image}
                    alt={asset.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-dark shadow-sm">
                    {asset.availability}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {asset.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-brand-dark">
                    {asset.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {asset.location}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">
                      {asset.priceInfo}
                    </span>
                  </div>
                  <a
                    href={links.register}
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-blue/5 px-4 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue/10 transition-colors"
                  >
                    View Asset
                    <svg
                      className="ml-1.5 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={links.exploreAssets}
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-3.5 font-semibold text-white hover:bg-brand-blue-dark transition-colors"
          >
            View All Assets
          </a>
          <p className="text-sm text-slate-500 max-w-md">
            Full listings and approved pricing are available to members of the
            BuyOps sales application.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
