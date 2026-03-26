// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import astroMermaid from "astro-mermaid";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import { remarkAdmonitions } from "./src/plugins/remark-admonitions";
import { remarkGithubCard } from "./src/plugins/remark-github-card";

// https://astro.build/config
export default defineConfig({
	site: "https://khoirul.site",
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "iA Writer Quattro",
			cssVariable: "--font-ia-writer-quattro",
			weights: [400, 500, 600, 700],
			styles: ["normal", "italic"],
			fallbacks: ["sans-serif"],
			display: "swap",
			formats: ["woff2"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Fira Code",
			cssVariable: "--font-fira-code",
			styles: ["normal", "italic"],
			fallbacks: ["monospace"],
			display: "swap",
			formats: ["woff2"],
		},
	],
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
	],
	markdown: {
		gfm: true,
		shikiConfig: {
			theme: "dracula-soft",
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
