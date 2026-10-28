import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { Container } from "@/components/ui/container";
import { getSiteConfig } from "@/lib/content";

/**
 * Sticky site header. Height is bound to --header-height so section
 * scroll-margin stays correct (see app/globals.css).
 */
export function Header() {
  const site = getSiteConfig();

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/75"
      style={{ height: "var(--header-height)" }}
    >
      <Container className="relative flex h-full items-center justify-between gap-4">
        <Link
          href="/#hero"
          className="group flex items-center gap-2.5 truncate text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-xs font-bold text-accent-foreground shadow-[0_4px_12px_rgb(63_163_107_/_0.35)] transition-transform group-hover:scale-105"
            aria-hidden
          >
            {site.name
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase() ?? "")
              .join("")}
          </span>
          <span className="truncate transition-colors group-hover:text-accent">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-border/80 bg-white/90 p-1 shadow-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
