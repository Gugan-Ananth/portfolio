/**
 * Portfolio content types — see docs/portfolio-design.md
 * Site origin is NOT on SiteConfig; use getSiteUrl() only.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** Default true: target=_blank + rel=noopener noreferrer */
  external?: boolean;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  locale: string;
  email: string;
  /** Optional public phone (E.164 or local display form) */
  phone?: string;
  socials: SocialLink[];
  resumeUrl?: string;
  /** Path relative to site root, e.g. /og.png */
  ogImage?: string;
};

export type ProjectMediaKind = "phone" | "phone-multi" | "browser" | "plain";

export type ProjectPlatform =
  | "ios"
  | "android"
  | "mobile"
  | "web"
  | "backend"
  | "fullstack";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  role?: string;
  stack: string[];
  highlights?: string[];
  links?: { label: string; href: string }[];
  image?: ProjectImage;
  images?: ProjectImage[];
  mediaKind?: ProjectMediaKind;
  platforms?: ProjectPlatform[];
  featured?: boolean;
  year?: number;
  order?: number;
};

export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  /** Prefer YYYY-MM for sortability */
  start: string;
  end?: string;
  isCurrent?: boolean;
  summary?: string;
  highlights: string[];
  stack?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  location?: string;
  /** Display score, e.g. "CGPA 9.24/10" */
  score?: string;
  start?: string;
  end?: string;
};

export type Profile = {
  headline: string;
  subheadline?: string;
  about: string[];
  location?: string;
  availability?: string;
  avatar?: ProjectImage;
  focusAreas?: string[];
};
