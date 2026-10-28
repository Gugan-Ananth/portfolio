import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { getSiteConfig } from "@/lib/content";

export function Footer() {
  const site = getSiteConfig();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            {site.name}
          </p>
          <p className="text-sm text-foreground-muted">
            © {year} · Built with care
          </p>
          <p>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              {site.email}
            </a>
          </p>
        </div>

        {site.socials.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {site.socials.map((social) => (
              <li key={social.href}>
                <ExternalLink
                  href={social.href}
                  external={social.external !== false}
                  className="inline-flex rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-foreground-muted shadow-sm transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                >
                  {social.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-foreground-subtle">
            Social links coming soon
          </p>
        )}
      </Container>
    </footer>
  );
}
