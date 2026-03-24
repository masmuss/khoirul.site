import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "Tools",
		description:
			"Explore the tools and software I use daily to enhance my productivity and creativity.",
	});
}
