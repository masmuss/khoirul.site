import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "src/content/blog",
		generateId: (filePath) => {
			const parts = filePath.entry.split("/");
			return parts[parts.length - 1].replace(/\.md$/, "");
		},
	}),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string().optional(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		date: z
			.string()
			.or(z.date())
			.transform((val: string | number | Date) =>
				new Date(val).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
					day: "numeric",
				}),
			),
		draft: z.boolean().default(false).optional(),
		tag: z.string().optional().optional(),
		redirect: z.string().optional(),
		toc: z.boolean().default(false).optional(),
	}),
});

export const collections = { blog };
