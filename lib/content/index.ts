import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import type {
  EducationItem,
  ExperienceItem,
  Profile,
  Project,
  SiteConfig,
  SkillGroup,
} from "@/lib/types/content";

export function getSiteConfig(): SiteConfig {
  return site;
}

export function getProfile(): Profile {
  return profile;
}

export function getSkills(): SkillGroup[] {
  return skills;
}

export function getEducation(): EducationItem[] {
  return education;
}

function normalizeStart(start: string): string {
  if (/^\d{4}$/.test(start)) return `${start}-01`;
  return start;
}

function compareStartDesc(a: string, b: string): number {
  return normalizeStart(b).localeCompare(normalizeStart(a));
}

/** isCurrent first, then start desc, then company */
export function getExperience(): ExperienceItem[] {
  return [...experience].sort((a, b) => {
    const current = Number(Boolean(b.isCurrent)) - Number(Boolean(a.isCurrent));
    if (current !== 0) return current;
    const byStart = compareStartDesc(a.start, b.start);
    if (byStart !== 0) return byStart;
    return a.company.localeCompare(b.company);
  });
}

function sortProjects(list: Project[]): Project[] {
  return [...list].sort((a, b) => {
    const orderA = a.order ?? 0;
    const orderB = b.order ?? 0;
    if (orderA !== orderB) return orderA - orderB;
    const yearA = a.year ?? 0;
    const yearB = b.year ?? 0;
    if (yearA !== yearB) return yearB - yearA;
    return a.title.localeCompare(b.title);
  });
}

export function getProjects(): Project[] {
  return sortProjects(projects);
}

/** Featured first set; if none flagged, all projects. Sorted by order then year. */
export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured === true);
  return sortProjects(featured.length > 0 ? featured : projects);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
