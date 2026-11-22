import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = (
    process.env.SITE_URL || "https://jeszapanta.vercel.app"
).replace(/\/+$/, "");

const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

const dist = path.resolve("dist");
await mkdir(dist, { recursive: true });
await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

console.log(`sitemap.xml written for ${siteUrl} (lastmod ${lastmod})`);
