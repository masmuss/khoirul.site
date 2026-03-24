import siteConfig from "@/config/site-config";
import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: siteConfig.title,
		description: siteConfig.description,
	});
}
