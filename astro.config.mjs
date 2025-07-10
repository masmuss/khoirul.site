// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";
import UnoCSS from "unocss/astro";
import { presetIcons } from "unocss";
import remarkGfm from "remark-gfm";
import astroMermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
	site: "https://khoirul.site",
	integrations: [
		mdx({
			gfm: true,
			remarkPlugins: [remarkGfm],
		}),
		sitemap(),
		UnoCSS({
			injectReset: true,
			presets: [
				presetIcons({
					extraProperties: {
						display: "inline-block",
						height: "10em",
						width: "10em",
						"vertical-align": "text-bottom",
					},
					mode: "mask",
				}),
			],
		}),
		svelte(),
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
});
