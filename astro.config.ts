// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import astroMermaid from "astro-mermaid";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { remarkAdmonitions } from "./src/plugins/remark-admonitions";
import { remarkGithubCard } from "./src/plugins/remark-github-card";

// https://astro.build/config
export default defineConfig({
	site: "https://khoirul.site",
	integrations: [
		astroMermaid({
			theme: "default",
			autoTheme: true,
			mermaidConfig: {
				flowchart: {
					htmlLabels: true,
					curve: "basis",
				},
			},
		}),
		mdx({
			gfm: true,
			remarkPlugins: [remarkGfm],
		}),
		sitemap(),
		icon(),
	],
	markdown: {
		gfm: true,
		shikiConfig: {
			theme: "vitesse-dark",
			wrap: true,
		},
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					rel: ["noreferrer", "noopener"],
					target: "_blank",
				},
			],
		],
		remarkPlugins: [remarkGfm, remarkDirective, remarkGithubCard, remarkAdmonitions],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
