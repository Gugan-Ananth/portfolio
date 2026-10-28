import type { Project } from "@/lib/types/content";

/**
 * Featured work derived from employment history at RootQuotient.
 * Images: add under public/images/projects/<slug>/cover.webp and set `image`.
 * Store/GitHub links: add when you have public URLs (none on resume).
 */
export const projects: Project[] = [
  {
    slug: "geo-fencing-work-tracking",
    title: "Geo-Fencing Work Tracking",
    summary:
      "Flutter work-tracking with geofencing, background location, and geospatial work-hour calculation.",
    description:
      "Implemented geofencing and foreground services for continuous background location tracking with persistent notifications, plus a geospatial work-hour calculation engine. Improved location accuracy through field testing and calibration; handled complex Android and iOS permission flows.",
    role: "Flutter developer",
    stack: ["Flutter", "Geofencing", "Background location", "Android", "iOS"],
    highlights: [
      "Foreground services with persistent notifications for continuous tracking",
      "Geospatial work-hour calculation engine",
      "Field-tested location accuracy and permission flows on Android and iOS",
    ],
    mediaKind: "phone",
    platforms: ["mobile", "android", "ios"],
    featured: true,
    year: 2024,
    order: 1,
  },
  {
    slug: "game-based-learning",
    title: "Game-based Learning",
    summary:
      "React Native learning product with Unity native bridge, OTP auth, and real-time gameplay sync.",
    description:
      "Rapidly upskilled in React Native using AI-assisted tools and delivered production features: Unity engine integration via native bridge modules, OTP-based authentication and onboarding, and real-time gameplay tracking with API synchronization.",
    role: "React Native developer",
    stack: ["React Native", "Unity", "Native bridge", "OTP auth", "REST APIs"],
    highlights: [
      "Unity integration through native bridge modules",
      "OTP authentication and onboarding workflows",
      "Real-time gameplay tracking with API synchronization",
    ],
    mediaKind: "phone",
    platforms: ["mobile"],
    featured: true,
    year: 2024,
    order: 2,
  },
  {
    slug: "dynamic-sales-pricing",
    title: "Dynamic Sales Pricing",
    summary:
      "End-to-end sales pricing app with Bloc, Microsoft SSO, ObjectBox, and large-dataset UI performance.",
    description:
      "Collaborated with one teammate to build the complete application from scratch: dynamic pricing engine with Bloc state management, Microsoft SSO (OAuth) for enterprise authentication, ObjectBox for large local datasets, and rendering optimizations achieving ~30% improvement for data-intensive operations.",
    role: "Mobile developer",
    stack: ["Flutter", "Bloc", "ObjectBox", "Microsoft SSO", "OAuth"],
    highlights: [
      "Built complete app from scratch with a two-person team",
      "Enterprise Microsoft SSO (OAuth)",
      "ObjectBox for efficient local handling of large datasets",
      "~30% rendering improvement for data-intensive operations",
    ],
    mediaKind: "phone",
    platforms: ["mobile"],
    featured: true,
    year: 2024,
    order: 3,
  },
  {
    slug: "fintech-offline-loans",
    title: "Fintech & Offline Loan Processing",
    summary:
      "Mutual funds, loans, KYC, goals, and EMI—plus offline-first loan workflows with major third-party integrations.",
    description:
      "Enhanced a fintech platform (mutual funds, loans, KYC, goals, EMI) and an offline loan processing app with modular financial workflows and integrations (CleverTap, Cashfree, DigiTap KYC, Firebase). Delivered API latency optimizations (~25%), performance work for large datasets, offline-first architecture with background sync, UX facelift, and debugging practices that reduced defects by ~35%.",
    role: "Flutter developer",
    stack: [
      "Flutter",
      "Firebase",
      "CleverTap",
      "Cashfree",
      "DigiTap KYC",
      "Offline-first",
    ],
    highlights: [
      "Offline-first architecture with background sync",
      "Third-party stack: CleverTap, Cashfree, DigiTap KYC, Firebase",
      "~25% API latency improvement; ~35% defect reduction via structured debugging",
      "Analytics-driven user segmentation and engagement campaigns",
    ],
    mediaKind: "phone",
    platforms: ["mobile"],
    featured: true,
    year: 2023,
    order: 4,
  },
  {
    slug: "shipping-container-app",
    title: "Shipping Container App",
    summary:
      "Flutter version migrations (including null safety) and CI/CD improvements for a shipping container product.",
    role: "Flutter developer",
    stack: ["Flutter", "Null safety migration", "CI/CD"],
    highlights: [
      "Supported critical Flutter version migrations including null safety",
      "CI/CD pipeline improvements",
    ],
    mediaKind: "phone",
    platforms: ["mobile"],
    featured: false,
    year: 2024,
    order: 5,
  },
];
