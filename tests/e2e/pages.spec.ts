import { expect, test } from "@playwright/test";

// Table-Driven Test Data
const mainPages = [
	{ name: "About", path: "/about", expectedHeading: "About" },
	{ name: "Projects", path: "/projects", expectedHeading: "Projects" },
	{ name: "Tools", path: "/tools", expectedHeading: "Tools" },
	{ name: "Blog Index", path: "/blog", expectedHeading: "Blog" },
	{ name: "Notes", path: "/blog/notes", expectedHeading: "Notes" },
	{
		name: "Reflective",
		path: "/blog/reflective",
		expectedHeading: "Reflective"
	},
	{ name: "Tags Index", path: "/tags", expectedHeading: "Tags" }
];

test.describe("Main Pages Sanity Check", () => {
	for (const pageInfo of mainPages) {
		test(`page "${pageInfo.name}" should load and display heading`, async ({
			page
		}) => {
			await page.goto(pageInfo.path);

			await expect(page.locator("header")).toBeVisible();

			const heading = page.locator("h1, h2").first();
			await expect(heading).toContainText(
				new RegExp(pageInfo.expectedHeading, "i")
			);

			await expect(page.locator("footer")).toBeVisible();
		});
	}
});

test("individual tag page should load", async ({ page }) => {
	await page.goto("/tags");

	const firstTag = page.locator('main a[href^="/tags/"]').first();
	if (await firstTag.isVisible()) {
		const rawTagName = await firstTag.textContent();

		const cleanTagName = rawTagName?.replace(/[#\d]/g, "").trim();

		await firstTag.click();

		const heading = page.locator("h1, h2").first();
		await expect(heading).toContainText(new RegExp(cleanTagName || "", "i"));
	}
});
