"use client";

import Image from "next/image";
import logo from "@/media/logo/Buyops Logo.svg";
import { links } from "@/lib/links";

const footerLinks = [
  { label: "Explore Assets", href: "#assets" },
  { label: "How It Works", href: "#how" },
  { label: "Sell with BuyOps", href: "#sell" },
  { label: "About Us", href: "#about" },
  { label: "Sign In", href: links.signIn },
];

const legalLinks = [
  { label: "Contact & Support", href: links.contact },
  { label: "Privacy Policy", href: links.privacy },
  { label: "Terms of Use", href: links.terms },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-sm">
            <Image
              src={logo}
              alt="BuyOps"
              width={120}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-slate-400">
              BuyOps connects available assets with prospective buyers through a
              nationwide network of sales agents, freelancers, and cluster
              leads.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BuyOps. All rights reserved.</p>
          <p>BuyOps is a sales platform for approved assets.</p>
        </div>
      </div>
    </footer>
  );
}
