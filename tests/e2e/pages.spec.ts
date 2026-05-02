import { expect, test } from "@playwright/test";

// Table-Driven Test Data with SEO expectations
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

test.describe("Main Pages Sanity & SEO Check", () => {
	for (const pageInfo of mainPages) {
		test(`page "${pageInfo.name}" should have correct content and SEO`, async ({
			page
		}) => {
			await page.goto(pageInfo.path);

			// 1. Content Check
			await expect(page.locator("header")).toBeVisible();
			const heading = page.locator("h1, h2").first();
			await expect(heading).toContainText(
				new RegExp(pageInfo.expectedHeading, "i")
			);

			// 2. SEO Check (Basic)
			// Ensure title contains expected heading
			await expect(page).toHaveTitle(new RegExp(pageInfo.expectedHeading, "i"));

			// Ensure meta description exists and is not empty
			const description = page.locator('meta[name="description"]');
			await expect(description).toHaveAttribute("content", /.{30,}/);

			// Ensure Canonical URL is set correctly
			const canonical = page.locator('link[rel="canonical"]');
			await expect(canonical).toHaveAttribute("href", /https:\/\/khoirul\.me/);

			await expect(page.locator("footer")).toBeVisible();
		});
	}
});

test("individual tag page should load and have SEO", async ({ page }) => {
	await page.goto("/tags");

	const firstTag = page.locator('main a[href^="/tags/"]').first();
	if (await firstTag.isVisible()) {
		const rawTagName = await firstTag.textContent();
		const cleanTagName = rawTagName?.replace(/[#\d]/g, "").trim();

		await firstTag.click();

		const heading = page.locator("h1, h2").first();
		await expect(heading).toContainText(new RegExp(cleanTagName || "", "i"));

		// Tag page SEO
		await expect(page).toHaveTitle(new RegExp(cleanTagName || "", "i"));
		await expect(page.locator('meta[name="description"]')).toBeAttached();
	}
});
