import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "All Tags",
		description: "A list of all the topics I've written about in my posts.",
	});
}
