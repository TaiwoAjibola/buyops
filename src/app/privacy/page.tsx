import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuyOps",
  description: "How BuyOps handles your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container-custom py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-600">
          This page will contain the official BuyOps privacy policy. It is
          provided as a placeholder pending publication of the approved legal
          document.
        </p>
        <p className="mt-4 text-slate-600">
          For questions about how your information is handled, please contact
          the BuyOps team through the sales application.
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
