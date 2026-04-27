import type { APIContext } from "astro";

const DEFAULT_SITE_URL = "https://khoirul.me";

export function GET(context: APIContext) {
	const site = context.site ?? DEFAULT_SITE_URL;
	const robots = `
  User-agent: *
  Allow: /
    
	Sitemap: ${new URL("sitemap-index.xml", site).href}`.trim();

	return new Response(robots, {
		headers: { "Content-Type": "text/plain; charset=utf-8" }
	});
}
