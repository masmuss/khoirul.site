import { expect, test } from "@playwright/test";

test("homepage has correct title and brand", async ({ page }) => {
	await page.goto("/");

	// Cek title tag
	await expect(page).toHaveTitle(/pictogrammmer/);

	// Cek apakah nama author muncul (About section atau footer)
	const bodyText = await page.textContent("body");
	expect(bodyText).toContain("Khoirul");
});

test("navigation to blog works", async ({ page }) => {
	await page.goto("/");

	// Klik link ke Blog
	await page.click("nav >> text=Blog");

	// Cek apakah URL berubah
	await expect(page).toHaveURL(/\/blog/);
});
