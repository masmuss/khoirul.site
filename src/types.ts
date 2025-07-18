import type { CollectionEntry } from "astro:content";

export type PostKey = "blog";

export type CollectionPosts = CollectionEntry<PostKey>;

export type ProjectData = Array<{
	title: string;
	projects: Array<{
		text: string;
		description?: string;
		icon?: string;
		href: string;
	}>;
}>;
