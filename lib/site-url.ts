/**
 * Sole canonical site origin for metadata, sitemap, OG, and absolute URLs.
 * Never hardcode a production domain on SiteConfig.
 */
export function getSiteUrl(): string {
  const raw = process.env.SITE_URL?.trim();
  if (!raw) {
    return "http://localhost:3000";
  }
  return raw.replace(/\/$/, "");
}
