// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import astroMermaid from "astro-mermaid";
import remarkGfm from "remark-gfm";

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
		expressiveCode({
			themes: ["github-dark"],
			shiki: {
				bundledLangs: ["mermaid"],
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
		syntaxHighlight: {
			type: "shiki",
			excludeLangs: ["mermaid", "math"],
		},
		shikiConfig: {
			themes: {
				light: "github-dark-default",
				dark: "github-dark-default",
			},
			wrap: true,
		},
		remarkPlugins: [remarkGfm],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
