import { getCollection, getEntry } from "astro:content";
import type { CollectionPosts } from "@/types";
import { getAllPosts } from "./post";

export async function getAllSeries() {
	return await getCollection("series");
}

export async function getSeriesById(id: string) {
	return await getEntry("series", id);
}

export async function getPostsBySeries(seriesId: string) {
	const posts = await getAllPosts();
	return posts
		.filter((post) => post.id.startsWith(`series/${seriesId}/`))
		.sort((a, b) => {
			const dateA = new Date(a.data.date).getTime();
			const dateB = new Date(b.data.date).getTime();

			if (dateA !== dateB) {
				return dateA - dateB;
			}

			const matchA = a.data.title.match(/#(\d+)/);
			const matchB = b.data.title.match(/#(\d+)/);
			if (matchA && matchB) {
				return Number.parseInt(matchA[1]) - Number.parseInt(matchB[1]);
			}

			return 0;
		});
}

export function getSeriesForPost(post: CollectionPosts) {
	if (post.id.startsWith("series/")) {
		const parts = post.id.split("/");
		return parts[1];
	}
	return null;
}
