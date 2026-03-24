import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "Projects",
		description: "Explore my projects that showcase my skills and creativity in various domains.",
	});
}
