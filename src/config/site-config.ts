import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
	author: "Khoirul",
	title: "pictogrammmer",
	subtitle: "Khoirul's Personal Website",
	description:
		"Fullstack wizard with a camera, weaving elegant websites while capturing the world through a lens. Transforming visions into digital and visual masterpieces.",
	email: "ahmusafir.khoirul@gmail.com",
	image: {
		src: "https://khoirul.site/og.jpg",
		alt: "Open Graph",
	},
	date: {
		locale: "id-ID",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	socialLinks: [
		{
			text: "GitHub",
			href: "https://github.com/masmuss",
			icon: "ri--github-line",
			header: "ri--github-line",
		},
		{
			text: "Twitter",
			href: "https://x.com/rexbocho",
			icon: "ri--twitter-x-line",
			header: "ri--twitter-x-line",
		},
		{
			text: "LinkedIn",
			href: "https://www.linkedin.com/in/masmuss",
			icon: "ri--linkedin-box-line",
		},
		{
			text: "Instagram",
			href: "https://www.instagram.com/pictogrammmer",
			icon: "ri--instagram-line",
		},
		{
			text: "Threads",
			href: "https://www.threads.net/@khoe__rul",
			icon: "ri--threads-line",
		},
	],
	header: {
		logo: {
			src: "/logo.svg",
			alt: "Website Logo",
		},
		navLinks: [
			{
				text: "Blog",
				href: "/blog",
				icon: "ri--article-line",
			},
			{
				text: "Projects",
				href: "/projects",
				icon: "ri--lightbulb-line",
			},
		],
	},
	page: {
		blogLinks: [
			{
				text: "Blog",
				href: "/blog",
			},
		],
	},
};

export default siteConfig;

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["github-dark", "github-light"],
	useThemedScrollbars: false,
};
