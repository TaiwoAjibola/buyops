"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/media/logo/Buyops Logo.svg";
import { links } from "@/lib/links";

const navItems = [
  { label: "Explore Assets", href: "#assets" },
  { label: "How It Works", href: "#how" },
  { label: "Sell with BuyOps", href: "#sell" },
  { label: "About Us", href: "#about" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={reduce ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled || mobileOpen
          ? "bg-white/85 backdrop-blur-lg border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            className="flex items-center shrink-0"
            aria-label="BuyOps home"
          >
            <Image
              src={logo}
              alt="BuyOps"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.signIn}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors"
            >
              Sign In
            </a>
            <a
              href={links.register}
              className="px-5 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-dark transition-colors"
            >
              Join the Network
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={
              reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }
            }
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 px-1">
                <a
                  href={links.signIn}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-center rounded-lg border border-slate-200 text-slate-700 font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  Sign In
                </a>
                <a
                  href={links.register}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-center rounded-lg bg-brand-blue text-white font-semibold hover:bg-brand-blue-dark transition-colors"
                >
                  Join the Network
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
