import { getCollection } from "astro:content";
import type { CollectionPosts, PostKey } from "@/types";

export function sortPostsByDate(
	itemA: CollectionPosts,
	itemB: CollectionPosts,
): number {
	return (
		new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
	);
}

export async function getPosts(
	path?: string,
	collection: PostKey = "blog",
): Promise<CollectionPosts[]> {
	return (
		await getCollection(collection, (post: CollectionPosts) => {
			return (
				(import.meta.env.PROD ? post.data.draft !== true : true) &&
				(path ? post.filePath?.includes(path) : true)
			);
		})
	).sort(sortPostsByDate);
}

export function getReadTimeCount(content: string): number {
	const wordsPerMinute = 200; // Average reading speed
	const words = content.split(/\s+/).filter((word) => word.length > 0);
	const readTime = words.length / wordsPerMinute; // Assuming average reading speed of 200 words per minute
	return Math.ceil(readTime);
}
