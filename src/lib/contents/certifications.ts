import { getEntry } from "astro:content";
import type { Certification } from "@/types";

export async function getAllCertifications(): Promise<Certification[]> {
	const certificationsEntry = await getEntry("certifications", "index");

	if (!certificationsEntry) {
		throw new Error("Missing certifications content at src/content/certifications/index.json");
	}

	return certificationsEntry.data;
}
