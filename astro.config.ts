// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import astroMermaid from "astro-mermaid";
import plantuml from "astro-plantuml";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { expressiveCodeOptions } from "./src/config/site-config";
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
		plantuml(),
		expressiveCode(expressiveCodeOptions),
		mdx({
			gfm: true,
			remarkPlugins: [remarkGfm],
		}),
		sitemap(),
		icon(),
	],
	markdown: {
		gfm: true,
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
