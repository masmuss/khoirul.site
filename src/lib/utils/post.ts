import { type CollectionEntry, getCollection } from "astro:content";
import type { CollectionPosts, PostKey } from "@/types";

export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts): number {
	return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime();
}

export async function getAllPosts() {
	return await getCollection("post", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
}

export async function getRelatedPosts(
	tags: string[],
	title: string,
	limit = 3,
): Promise<CollectionPosts[]> {
	return await getCollection("post", (post) => {
		return (
			(import.meta.env.PROD ? post.data.draft !== true : true) &&
			post.data.tags.some((tag) => tags.includes(tag) && post.data.title !== title)
		);
	}).then((posts) => sortMDByDate(posts).slice(0, limit));
}

export function sortMDByDate(posts: Array<CollectionEntry<"post">>) {
	return posts.sort((a, b) => {
		const aDate = new Date(a.data.date).valueOf();
		const bDate = new Date(b.data.date).valueOf();
		return bDate - aDate;
	});
}

export async function getPosts(
	path?: string,
	collection: PostKey = "post",
	maxPostsCount = 100,
): Promise<CollectionPosts[]> {
	return (
		await getCollection(collection, (post: CollectionPosts) => {
			return (
				(import.meta.env.PROD ? post.data.draft !== true : true) &&
				(path ? post.filePath?.includes(path) : true)
			);
		})
	)
		.sort(sortPostsByDate)
		.slice(0, maxPostsCount);
}

export async function getPostsByPath(path?: string): Promise<CollectionPosts[]> {
	return (
		await getCollection("post", (post: CollectionPosts) => {
			const notDraft = import.meta.env.PROD ? post.data.draft !== true : true;
			if (!path) return notDraft;
			return notDraft && post.filePath?.includes(`/post/${path}/`);
		})
	).sort(sortPostsByDate);
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
