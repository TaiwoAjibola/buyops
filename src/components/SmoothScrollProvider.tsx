"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// lenis@1.3.x ships a `.d.ts` with an internal error that corrupts the
// `Lenis` class type, hiding its instance methods under `skipLibCheck`.
// This minimal structural type keeps the runtime API we use fully typed.
type LenisInstance = {
  raf: (time: number) => void;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number }
  ) => void;
  destroy: () => void;
};

// Lightweight smooth scrolling via Lenis. Disabled entirely when the user
// prefers reduced motion, falling back to the browser's native scrolling.
// In-page anchor links (href="#id") are intercepted and scrolled to with a
// small offset for the fixed header.
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    }) as unknown as LenisInstance;

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - 80;
      lenis.scrollTo(top, { offset: 0 });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
