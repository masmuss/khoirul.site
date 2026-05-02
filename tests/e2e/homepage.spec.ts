import { expect, test } from "@playwright/test";

test("homepage has correct title and brand", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(/pictogrammmer/);

	const bodyText = await page.textContent("body");
	expect(bodyText).toContain("Khoirul");
});

test("navigation to blog works", async ({ page }) => {
	await page.goto("/");
	await page.click("nav >> text=Blog");
	await expect(page).toHaveURL(/\/blog/);
});

test("404 page shows correct content", async ({ page }) => {
	await page.goto("/non-existent-page");

	await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
	await expect(page.locator("text=Back to home")).toBeVisible();
});

test("theme toggle changes mode", async ({ page }) => {
	await page.goto("/");

	const html = page.locator("html");

	const toggle = page.locator('button[aria-label="Toggle Dark Mode"]').first();

	const isInitiallyDark = await html.evaluate((el) =>
		el.classList.contains("dark")
	);

	await toggle.click();

	if (isInitiallyDark) {
		await expect(html).not.toHaveClass(/dark/);
	} else {
		await expect(html).toHaveClass(/dark/);
	}
});
