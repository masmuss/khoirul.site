import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			coverImage: z
				.object({
					src: z.union([image(), z.string().url()]),
					alt: z.string(),
				})
				.optional(),
			date: z
				.string()
				.or(z.date())
				.transform((val: string | number | Date) => new Date(val)),
			draft: z.boolean().default(false).optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		}),
});

export const collections = { post };
