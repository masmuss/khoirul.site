import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "Reflective",
		description: "Personal thoughts, reflections, and life experiences.",
	});
}
