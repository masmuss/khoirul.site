import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { createOgImageResponse } from "@/lib/utils/og-image";
import { getPostRouteId } from "@/lib/utils/post-route";

export const prerender = true;

export async function getStaticPaths() {
	const posts = await getCollection("post");
	return posts.map((post) => ({
		params: { id: getPostRouteId(post) },
		props: post,
	}));
}

export async function GET({ props }: APIContext) {
	const { title, description } = props.data;

	return createOgImageResponse({
		title,
		description,
		decodeEntities: true,
	});
}
