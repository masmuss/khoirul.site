import { expect, test } from "@playwright/test";

/**
 * Visual Regression Tests (Snapshot Testing).
 * Compares the current page render against stored master images.
 * Snapshots are OS-specific (e.g., -linux, -darwin).
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

			// Wait for everything to settle
			await page.waitForLoadState("networkidle");

			// Take a full page screenshot and compare it
			// Playwright will automatically append the OS name to the snapshot
			await expect(page).toHaveScreenshot({
				fullPage: true
			});
		});
	}
});
