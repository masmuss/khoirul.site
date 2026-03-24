import { createOgImageResponse } from "@/lib/utils/og-image";

export const prerender = true;

export async function GET() {
	const title = "About";
	const description =
		"Learn more about Khoirul Fattah - a full-stack developer and photographer based in Surabaya.";

	return createOgImageResponse({
		title,
		description,
	});
}
