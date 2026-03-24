import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	return createOgImageResponse({
		title: "Series",
		description: "Daftar seri tulisan yang dikelompokkan berdasarkan topik tertentu.",
	});
}
