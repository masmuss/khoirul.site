import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { experiencesSchema, postSchema, seriesSchema } from "@/lib/contents/schemas";

const post = defineCollection({
	loader: glob({ pattern: "**/**/*.{md,mdx}", base: "./src/content/post" }),
	schema: postSchema,
});

const series = defineCollection({
	loader: glob({ pattern: "**/**/*.json", base: "./src/content/series" }),
	schema: seriesSchema,
});

const experiences = defineCollection({
	loader: glob({ pattern: "**/**/*.json", base: "./src/content/experiences" }),
	schema: experiencesSchema,
});

export const collections = { post, series, experiences };
