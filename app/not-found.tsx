import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getSiteConfig } from "@/lib/content";

export default function NotFound() {
  const site = getSiteConfig();

  return (
    <div className="hero-mesh flex flex-1 flex-col">
      <Container className="flex flex-1 flex-col items-start justify-center py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <span className="mt-4 h-1 w-12 rounded-full bg-accent" aria-hidden />
        <p className="mt-5 max-w-md text-base leading-relaxed text-foreground-muted">
          That page does not exist on {site.name}&apos;s portfolio. Head home to
          view work and contact details.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_8px_24px_rgb(63_163_107_/_0.28)] transition-all hover:bg-accent-hover hover:shadow-[0_10px_28px_rgb(63_163_107_/_0.35)]"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
