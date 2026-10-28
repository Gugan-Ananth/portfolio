import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getProfile, getSiteConfig } from "@/lib/content";

export function Hero() {
  const site = getSiteConfig();
  const profile = getProfile();

  return (
    <section
      id="hero"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="hero-mesh relative overflow-hidden border-b border-border"
    >
      {/* Soft decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--border) 70%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--border) 70%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)",
        }}
      />

      <Container className="relative flex flex-col gap-10 py-20 sm:py-24 md:py-32">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-medium text-foreground-muted shadow-sm backdrop-blur-sm">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_var(--accent-soft)]"
              aria-hidden
            />
            {profile.location ?? "Portfolio"}
            {profile.availability ? (
              <span className="text-foreground-subtle">· {profile.availability}</span>
            ) : null}
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {site.name}
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.08]"
          >
            {profile.headline}
          </h1>

          {profile.subheadline ? (
            <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl sm:leading-relaxed">
              {profile.subheadline}
            </p>
          ) : null}

          {profile.focusAreas && profile.focusAreas.length > 0 ? (
            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Focus areas">
              {profile.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-sm transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                >
                  {area}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button href="#projects" variant="primary">
            View work
            <ArrowIcon />
          </Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
          {site.resumeUrl ? (
            <Button
              href={site.resumeUrl}
              variant="ghost"
              external={site.resumeUrl.startsWith("http")}
            >
              Resume
            </Button>
          ) : null}
        </div>

        {/* Bottom accent rail */}
        <div
          className="mt-4 h-px w-full max-w-md bg-gradient-to-r from-accent via-accent/40 to-transparent"
          aria-hidden
        />
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="opacity-90"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
