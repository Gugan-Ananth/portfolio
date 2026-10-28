import type { SkillGroup } from "@/lib/types/content";

/**
 * Grouped from resume + technologies named in employment history.
 * Do not invent tools not evidenced in the resume.
 */
export const skills: SkillGroup[] = [
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Bloc", "ObjectBox", "Offline-first"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "REST API development"],
  },
  {
    category: "Integrations & platforms",
    items: [
      "Firebase",
      "Microsoft SSO / OAuth",
      "CleverTap",
      "Cashfree",
      "DigiTap KYC",
      "Unity (native bridge)",
    ],
  },
  {
    category: "Domains",
    items: [
      "Fintech (loans, KYC, EMI, mutual funds)",
      "Geo-fencing & location services",
      "Enterprise sales / pricing",
    ],
  },
  {
    category: "Practices",
    items: [
      "AI-assisted coding",
      "Code review & mentoring",
      "Agile collaboration",
      "Performance optimization",
      "CI/CD improvements",
      "Problem-solving",
    ],
  },
];
