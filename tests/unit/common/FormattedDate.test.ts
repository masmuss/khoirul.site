import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import FormattedDate from "@/components/common/FormattedDate.astro";

test("FormattedDate component renders correctly", async () => {
	const container = await AstroContainer.create();
	const testDate = new Date("2024-05-20");

	// Render component to string
	const result = await container.renderToString(FormattedDate, {
		props: {
			date: testDate
		}
	});

	// Check if <time> tag exists and datetime attribute is correct
	expect(result).toContain('datetime="2024-05-20T00:00:00.000Z"');

	// Check if formatted date text appears (May)
	expect(result).toContain("Mei");
	expect(result).toContain("2024");
});

test("FormattedDate component accepts custom options", async () => {
	const container = await AstroContainer.create();
	const testDate = new Date("2024-05-20");

	const result = await container.renderToString(FormattedDate, {
		props: {
			date: testDate,
			dateTimeOptions: { month: "long" }
		}
	});

	// Check long month format
	expect(result).toContain("Mei");
});
