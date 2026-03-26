import type { APIContext } from "astro";
import siteConfig from "@/config/site-config";
import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET({ url }: APIContext) {
	return createOgImageResponse({
		title: siteConfig.title,
		description: siteConfig.description,
		origin: url.origin,
	});
}
