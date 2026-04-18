import { type CollectionEntry, getCollection } from "astro:content";
import type { CollectionPosts } from "@/types";

export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts): number {
	return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime();
}

export async function getAllPosts(limit?: number) {
	const posts = await getCollection("post", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	const sortedPosts = posts.sort(sortPostsByDate);

	return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}

export async function getRelatedPosts(
	tags: string[],
	title: string,
	limit = 3,
): Promise<CollectionPosts[]> {
	const posts = await getAllPosts();

	return posts
		.filter((post) => {
			const hasMatchingTags = post.data.tags.some((tag) => tags.includes(tag));
			const hasMatchingTitle = post.data.title === title;
			return hasMatchingTags && !hasMatchingTitle;
		})
		.slice(0, limit);
}

export async function getPostsByPath(path?: string, limit?: number): Promise<CollectionPosts[]> {
	const posts = await getAllPosts();

	const filtered = posts.filter((post) => {
		if (!path) return !post.id.startsWith("series/");

		return post.filePath?.includes(`/post/${path}/`);
	});

	return limit ? filtered.slice(0, limit) : filtered;
}

export function groupPostsByYear(posts: CollectionPosts[]): Map<number, CollectionPosts[]> {
	const grouped = new Map<number, CollectionPosts[]>();
	for (const post of posts) {
		const year = new Date(post.data.date).getFullYear();
		if (!grouped.has(year)) {
			grouped.set(year, []);
		}
		grouped.get(year)?.push(post);
	}
	return new Map([...grouped.entries()].sort((a, b) => b[0] - a[0]));
}

export function getAllTags(posts: Array<CollectionEntry<"post">>) {
	return posts.flatMap((post) => [...post.data.tags]);
}

export function getUniqueTags(posts: Array<CollectionEntry<"post">>) {
	return [...new Set(getAllTags(posts))];
}

export function getUniqueTagsWithCount(
	posts: Array<CollectionEntry<"post">>,
): Array<[string, number]> {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}

export function getReadTimeCount(content: string): number {
	const wordsPerMinute = 200; // Average reading speed
	const words = content.split(/\s+/).filter((word) => word.length > 0);
	const readTime = words.length / wordsPerMinute; // Assuming average reading speed of 200 words per minute
	return Math.ceil(readTime);
}
