import type { Certification } from "@/types";
import { getContentEntryData } from "./loader";

export async function getAllCertifications(): Promise<Certification[]> {
	return getContentEntryData<Certification[]>("certifications");
}
