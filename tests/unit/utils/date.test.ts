import { describe, expect, it } from "vitest";
import { getFormattedDate } from "@/lib/utils";

describe("getFormattedDate", () => {
	it("should format date correctly with default ID locale", () => {
		const date = new Date("2024-05-20");
		const formatted = getFormattedDate(date);
		// Locale id-ID usually formats to "20 Mei 2024"
		expect(formatted).toContain("Mei");
		expect(formatted).toContain("2024");
	});

	it("should format date with custom options", () => {
		const date = new Date("2024-05-20");
		const formatted = getFormattedDate(date, { month: "long" });
		expect(formatted).toBe("20 Mei 2024");
	});
});
