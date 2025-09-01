import type { CollectionEntry } from "astro:content";

export type PostKey = "post";

export type CollectionPosts = CollectionEntry<PostKey>;

export type Education = {
	period: string;
	institution: string;
	degree: string;
	gpa?: string;
	coursework: string[];
};

export type Project = {
	text: string;
	description?: string;
	thumbnail?: string;
	href: string;
};

export type ProjectCollection = {
	title: string;
	projects: Project[];
};

export type Experience = {
	period: string;
	title: string;
	company: string;
	location?: string;
	highlights: string[];
};

export type SkillCollection = {
	title: string;
	description: string;
};

export type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";
