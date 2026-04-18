import type { SchemaContext } from "astro:content";
import { z } from "astro/zod";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

export const postSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string().optional(),
		coverImage: z
			.object({
				src: z.union([image(), z.url()]),
				alt: z.string(),
			})
			.optional(),
		date: z
			.string()
			.or(z.date())
			.transform((val: string | number | Date) => new Date(val)),
		updatedDate: z
			.string()
			.or(z.date())
			.transform((val: string | number | Date) => new Date(val))
			.optional(),
		draft: z.boolean().default(false).optional(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
	});

export const seriesSchema = z.object({
	title: z.string(),
	description: z.string(),
	coverImage: z
		.object({
			src: z.string(),
			alt: z.string(),
		})
		.optional(),
});

export const experiencesSchema = z.array(
	z.object({
		id: z.string(),
		period: z.string(),
		title: z.string(),
		company: z.string(),
		location: z.string().optional(),
		kind: z.enum(["professional", "campus"]).optional(),
		umbrellaOrg: z.string().optional(),
		summary: z.string().optional(),
		skills: z.array(z.string()).optional(),
		highlights: z.array(z.string()),
	}),
);
