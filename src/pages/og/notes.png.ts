import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "Notes",
		description: "Learning notes, tutorials, and project documentation.",
	});
}
