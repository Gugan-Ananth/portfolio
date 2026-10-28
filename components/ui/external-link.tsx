type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  /**
   * When true (default): open in new tab with rel="noopener noreferrer".
   * Set false for same-origin paths (e.g. /resume.pdf).
   */
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function ExternalLink({
  href,
  children,
  external = true,
  className = "",
  "aria-label": ariaLabel,
}: ExternalLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
