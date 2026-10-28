/** First focusable control in body — jumps past chrome to main content. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="bg-accent text-accent-foreground focus:outline-none sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-md"
    >
      Skip to main content
    </a>
  );
}
