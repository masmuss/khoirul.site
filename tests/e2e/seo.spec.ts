import { expect, test } from "@playwright/test";

test.describe("SEO and Meta Tags", () => {
	test("homepage has correct SEO meta tags", async ({ page }) => {
		await page.goto("/");

		// Primary Meta Tags
		await expect(page).toHaveTitle(/pictogrammmer/);
		const description = page.locator('meta[name="description"]');
		await expect(description).toHaveAttribute("content", /Khoirul/);

		// Canonical URL (Astro uses the 'site' config from astro.config.ts)
		const canonical = page.locator('link[rel="canonical"]');
		await expect(canonical).toHaveAttribute("href", "https://khoirul.me/");

		// Open Graph
		await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
			"content",
			"website"
		);
		await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
			"content",
			/pictogrammmer/
		);
		await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
			"content",
			/og\.png/
		);

		// Twitter
		await expect(page.locator('meta[property="twitter:card"]')).toHaveAttribute(
			"content",
			"summary_large_image"
		);
	});

	test("favicon and manifest links are present", async ({ page }) => {
		await page.goto("/");
		await expect(page.locator('link[rel="icon"]').first()).toBeAttached();
		await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
			"href",
			"/favicon/site.webmanifest"
		);
	});

	test("RSS feed link is present", async ({ page }) => {
		await page.goto("/");
		await expect(
			page.locator('link[type="application/rss+xml"]')
		).toHaveAttribute("href", "/rss.xml");
	});
});
