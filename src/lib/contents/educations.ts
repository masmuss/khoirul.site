import { getEntry } from "astro:content";
import type { Education } from "@/types";

export async function getAllEducations(): Promise<Education[]> {
	const educationsEntry = await getEntry("educations", "index");

	if (!educationsEntry) {
		throw new Error("Missing educations content at src/content/educations/index.json");
	}

	return educationsEntry.data;
}
