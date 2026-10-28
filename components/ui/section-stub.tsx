import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type SectionStubProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Soft band vs pure white */
  band?: boolean;
};

/**
 * Polished placeholder for section bodies not yet implemented.
 */
export function SectionStub({
  id,
  eyebrow,
  title,
  description,
  band = false,
}: SectionStubProps) {
  return (
    <section
      id={id}
      tabIndex={-1}
      aria-labelledby={`${id}-heading`}
      className={
        band
          ? "section-band border-b border-border"
          : "border-b border-border bg-white"
      }
    >
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div
          className="mt-10 rounded-[var(--radius-card)] border border-dashed border-border-strong/80 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10"
          aria-hidden
        >
          <div className="flex flex-col gap-4">
            <div className="h-3 w-1/3 max-w-[12rem] rounded-full bg-accent-soft" />
            <div className="h-3 w-2/3 max-w-[22rem] rounded-full bg-background-muted" />
            <div className="h-3 w-1/2 max-w-[16rem] rounded-full bg-background-muted" />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="h-24 rounded-2xl bg-background-soft ring-1 ring-border" />
              <div className="h-24 rounded-2xl bg-background-soft ring-1 ring-border" />
              <div className="h-24 rounded-2xl bg-background-soft ring-1 ring-border" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
