import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
	author: "Khoirul",
	title: "Khoirul",
	subtitle: "Pixels and Progress.",
	description:
		"Fullstack wizard with a camera, weaving elegant websites while capturing the world through a lens. Transforming visions into digital and visual masterpieces.",
	email: "ahmusafir.khoirul@gmail.com",
	image: {
		src: "https://khoirul.site/og.jpg",
		alt: "Open Graph",
	},
	socialLinks: [
		{
			text: "GitHub",
			href: "https://github.com/masmuss",
			icon: "ri:github-line",
			header: "ri:github-line",
		},
		{
			text: "Twitter",
			href: "https://x.com/rexbocho",
			icon: "ri:twitter-x-line",
			header: "ri:twitter-x-line",
		},
		{
			text: "LinkedIn",
			href: "https://www.linkedin.com/in/masmuss",
			icon: "ri:linkedin-box-line",
		},
		{
			text: "Instagram",
			href: "https://www.instagram.com/pictogrammmer",
			icon: "ri-instagram-line",
		},
		{
			text: "Threads",
			href: "https://www.threads.net/@khoe__rul",
			icon: "ri-threads-line",
		}
	],
	header: {
		logo: {
			src: "/favicon.svg",
			alt: "Website Logo",
		},
		navLinks: [
			{
				text: "Blog",
				href: "/posts",
				icon: "ri:article-line",
			},
			{
				text: "Notes",
				href: "/notes",
				icon: "ri:sticky-note-line",
			},
			{
				text: "Projects",
				href: "/projects",
				icon: "ri:lightbulb-line",
			},
		],
	},
	page: {
		blogLinks: [
			{
				text: "Blog",
				href: "/posts",
			},
			{
				text: "Notes",
				href: "/notes",
			},
		],
	},
};

export default siteConfig;
