type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/**
 * Shared section title block — accent eyebrow + tight tracking + lead copy.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`.trim()}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      <span
        className={`mt-1 h-1 w-12 rounded-full bg-accent ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {description ? (
        <p className="mt-1 text-base leading-relaxed text-foreground-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
