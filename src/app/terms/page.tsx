import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | BuyOps",
  description: "The terms governing use of the BuyOps platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
          Terms of Use
        </h1>
        <p className="mt-4 text-slate-600">
          This page will contain the official BuyOps terms of use. It is
          provided as a placeholder pending publication of the approved legal
          document.
        </p>
        <p className="mt-4 text-slate-600">
          Use of the BuyOps platform is subject to the applicable terms provided
          through the sales application.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center text-brand-blue font-semibold hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
