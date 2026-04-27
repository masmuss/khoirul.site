import { getEntry } from "astro:content";

type SupportedCollection = "certifications" | "educations" | "experiences";

export async function getContentEntryData<T>(
	collection: SupportedCollection,
	id = "index"
): Promise<T> {
	const entry = await getEntry(collection, id);

	if (!entry) {
		throw new Error(
			`Missing ${collection} content at src/content/${collection}/${id}.json`
		);
	}

	return entry.data as T;
}
