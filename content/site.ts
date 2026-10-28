import type { SiteConfig } from "@/lib/types/content";

/**
 * Site identity + contact. No origin/url field — use getSiteUrl().
 * Add GitHub/LinkedIn to socials when you have public profile URLs.
 * Set resumeUrl to "/resume.pdf" after adding public/resume.pdf.
 */
export const site: SiteConfig = {
  name: "Gugan Ananth",
  title: "Gugan Ananth · Software Development Engineer II",
  description:
    "Software Development Engineer II specializing in Flutter and React Native cross-platform mobile apps, with NestJS backend experience. Fintech, offline-first, and geo-location products.",
  locale: "en_IN",
  email: "guganananth11@gmail.com",
  phone: "+91 96000 91478",
  socials: [
    // Add when ready, e.g.:
    // { label: "GitHub", href: "https://github.com/..." },
    // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
  ],
  // resumeUrl: "/resume.pdf",
  // ogImage: "/og.png",
};
