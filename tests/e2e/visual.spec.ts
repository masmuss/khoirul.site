import { expect, test } from "@playwright/test";

/**
 * Visual Regression Tests (Snapshot Testing).
 * Compares the current page render against stored master images.
 * Uses a small threshold to account for minor rendering differences between OSs.
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

			// Wait for the page to be fully loaded and settled
			await page.waitForLoadState("networkidle");

			// Take a full page screenshot and compare it.
			// We use a specific name to keep it organized.
			await expect(page).toHaveScreenshot(
				`${pageInfo.name.toLowerCase()}.png`,
				{
					fullPage: true,
					// Account for minor anti-aliasing differences between Mac and Linux
					maxDiffPixelRatio: 0.05,
					threshold: 0.2
				}
			);
		});
	}
});
