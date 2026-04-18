import type { Experience } from "@/types";
import { getContentEntryData } from "./loader";

export async function getAllExperiences(): Promise<Experience[]> {
	return getContentEntryData<Experience[]>("experiences");
}
