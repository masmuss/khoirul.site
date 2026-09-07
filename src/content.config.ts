import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
	certificationsSchema,
	educationsSchema,
	experiencesSchema,
	postSchema,
	projectsSchema,
	readingSchema,
	seriesSchema,
	skillsSchema,
	toolsSchema
} from "@/lib/contents/schemas";

const CONTENT_DIR = "./content";

const post = defineCollection({
	loader: glob({
		pattern: "**/**/*.{md,mdx}",
		base: `${CONTENT_DIR}/post`,
		deferRender: true
	}),
	schema: postSchema
});

const series = defineCollection({
	loader: glob({ pattern: "**/**/*.json", base: `${CONTENT_DIR}/series` }),
	schema: seriesSchema
});

const experiences = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/experiences`
	}),
	schema: experiencesSchema
});

const educations = defineCollection({
	loader: glob({ pattern: "**/**/*.json", base: `${CONTENT_DIR}/educations` }),
	schema: educationsSchema
});

const certifications = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/certifications`
	}),
	schema: certificationsSchema
});

const projects = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/projects`
	}),
	schema: projectsSchema
});

const skills = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/skills`
	}),
	schema: skillsSchema
});

const tools = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/tools`
	}),
	schema: toolsSchema
});

const reading = defineCollection({
	loader: glob({
		pattern: "**/**/*.json",
		base: `${CONTENT_DIR}/reading`
	}),
	schema: readingSchema
});

export const collections = {
	post,
	series,
	experiences,
	educations,
	certifications,
	projects,
	skills,
	tools,
	reading
};
