import { expect, test } from "@playwright/test";

/**
 * Visual Regression Tests (Snapshot Testing).
 * Compares the current page render against stored master images.
 */
test.describe("Visual Regression", () => {
	const pagesToSnapshot = [
		{ name: "Homepage", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Blog Index", path: "/blog" },
		{ name: "Projects", path: "/projects" }
	];

	for (const pageInfo of pagesToSnapshot) {
		test(`page "${pageInfo.name}" should match stored snapshot`, async ({
			page
		}) => {
			await page.goto(pageInfo.path);

			// Wait for font and images to settle
			await page.waitForLoadState("networkidle");

			// Take a full page screenshot and compare it
			// Note: First run will fail and create the base snapshots
			await expect(page).toHaveScreenshot(
				`${pageInfo.name.toLowerCase()}.png`,
				{
					fullPage: true,
					maxDiffPixelRatio: 0.05 // Allow small variations for minor rendering differences
				}
			);
		});
	}
});
