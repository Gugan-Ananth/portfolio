import type { ExperienceItem } from "@/lib/types/content";

export const experience: ExperienceItem[] = [
  {
    company: "RootQuotient Technologies Private Limited",
    title: "Software Development Engineer II",
    location: "Chennai",
    start: "2025-06",
    isCurrent: true,
    summary:
      "Backend services and features with Node.js / NestJS; mentoring and architecture across mobile projects.",
    highlights: [
      "Actively developing backend services and features using Node.js with the NestJS framework, using AI-assisted tooling (Claude) for scaffolding, implementation, debugging, and iterative refinement while maintaining code quality and best practices.",
      "Supporting team growth through detailed pull request reviews, technical clarifications for junior developers, and mentorship initiatives.",
      "Contributing to common architecture patterns, reusable modules, crash reduction, performance improvements, and overall app stability across projects.",
      "Collaborating in Agile cross-functional teams (backend, QA, design).",
    ],
    stack: ["NestJS", "Node.js", "REST APIs", "Flutter", "React Native"],
  },
  {
    company: "RootQuotient Technologies Private Limited",
    title: "Software Development Engineer I",
    location: "Chennai",
    start: "2023-06",
    end: "2025-06",
    summary:
      "Cross-platform mobile delivery across geo-fencing, learning, sales pricing, shipping, and fintech products.",
    highlights: [
      "Geo-fencing work tracking: geofencing, foreground services for continuous background location with persistent notifications, and a geospatial work-hour calculation engine in Flutter; improved location accuracy via field testing; complex Android/iOS permission flows.",
      "Game-based learning: rapidly upskilled in React Native and delivered production features including Unity integration via native bridges, OTP auth/onboarding, and real-time gameplay tracking with API sync.",
      "Dynamic sales pricing: built the complete application with a teammate—dynamic pricing engine with Bloc, Microsoft SSO (OAuth), ObjectBox for large local datasets, and rendering optimizations (~30% improvement for data-intensive operations).",
      "Shipping container app: Flutter version migrations (including null safety) and CI/CD improvements.",
      "Fintech platform (mutual funds, loans, KYC, goals, EMI) and offline loan processing: modular financial workflows, CleverTap, Cashfree, DigiTap KYC, Firebase; ~25% API latency improvement; offline-first with background sync; UX facelift; structured debugging reduced defects ~35%.",
    ],
    stack: [
      "Flutter",
      "React Native",
      "Bloc",
      "ObjectBox",
      "Firebase",
      "Unity",
      "OAuth",
      "CleverTap",
      "Cashfree",
    ],
  },
  {
    company: "RootQuotient Technologies Private Limited",
    title: "Software Development Engineer Intern",
    location: "Chennai",
    start: "2022-12",
    end: "2023-06",
    summary:
      "Flutter fintech and offline-first loan processing with KYC and payment integrations.",
    highlights: [
      "Contributed to Flutter development for offline-first loan processing with KYC verification and payment gateway integrations.",
      "Built reusable UI components and modular systems; implemented core workflows.",
      "Improved overall development turnaround time by ~20%.",
    ],
    stack: ["Flutter", "KYC integrations", "Payment gateways"],
  },
];
