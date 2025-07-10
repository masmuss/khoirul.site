import { writable } from "svelte/store";

const browser = !import.meta.env.SSR;

type Theme = "light" | "dark";

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>("dark");

	if (browser) {
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

		document.documentElement.classList.toggle("dark", initialTheme === "dark");
		document.documentElement.setAttribute("data-theme", initialTheme);
		set(initialTheme);
	}

	return {
		subscribe,
		toggle: () => {
			update((currentTheme: Theme): Theme => {
				const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
				if (browser) {
					localStorage.setItem("theme", newTheme);
					document.documentElement.setAttribute("data-theme", newTheme);
					document.documentElement.classList.toggle(
						"dark",
						newTheme === "dark",
					);
				}
				return newTheme;
			});
		},
		setTheme: (theme: Theme) => {
			if (browser) {
				document.documentElement.classList.toggle("dark", theme === "dark");
				document.documentElement.setAttribute("data-theme", theme);
			}
			set(theme);
		},
	};
}

export const theme = createThemeStore();
