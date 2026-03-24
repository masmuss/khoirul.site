import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	const title = "Blog";
	const description =
		"Read my latest blog posts on various topics including technology, programming, and personal experiences.";

	return createOgImageResponse({
		title,
		description,
	});
}
