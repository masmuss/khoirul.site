import { getEntry } from "astro:content";
import type { Experience } from "@/types";

export async function getAllExperiences(): Promise<Experience[]> {
	const experiencesEntry = await getEntry("experiences", "index");

	if (!experiencesEntry) {
		throw new Error("Missing experiences content at src/content/experiences/index.json");
	}

	return experiencesEntry.data;
}
