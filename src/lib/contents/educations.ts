import type { Education } from "@/types";
import { getContentEntryData } from "./loader";

export async function getAllEducations(): Promise<Education[]> {
	return getContentEntryData<Education[]>("educations");
}
