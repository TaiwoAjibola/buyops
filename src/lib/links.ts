// Centralised CTA destinations for the public landing page.
// All URLs are environment-overridable so the real sales application
// routes can be wired in without code changes.
//
// NOTE: The exact authentication/registration sub-paths on the existing
// sales application could not be verified against a running instance.
// They fall back to the most common Next.js / conventional routes and
// should be confirmed against the live application before launch.

const SALES_PORTAL =
  process.env.NEXT_PUBLIC_SALES_PORTAL_URL ?? "https://sales.buyops.ng";

export const links = {
  // The existing authenticated sales application.
  salesPortal: SALES_PORTAL,

  // Existing members sign in here.
  signIn: process.env.NEXT_PUBLIC_SIGN_IN_URL ?? `${SALES_PORTAL}/login`,

  // New sales participants (agents, freelancers, cluster leads) register here.
  register:
    process.env.NEXT_PUBLIC_REGISTER_URL ?? `${SALES_PORTAL}/register`,

  // Public asset catalogue, if the platform exposes one. Falls back to the
  // sales portal where listings live behind authentication.
  exploreAssets:
    process.env.NEXT_PUBLIC_EXPLORE_URL ?? `${SALES_PORTAL}/assets`,

  privacy: "/privacy",
  terms: "/terms",

  // Support lives inside the existing application.
  contact: process.env.NEXT_PUBLIC_CONTACT_URL ?? SALES_PORTAL,
} as const;
