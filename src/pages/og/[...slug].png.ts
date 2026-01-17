import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { APIContext } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import siteConfig from "@/config/site-config";

export const prerender = true;

function decodeHtmlEntities(text: string) {
	if (!text) return text;
	return text.replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});/gi, (match, entity) => {
		const entities: Record<string, string> = {
			amp: "&",
			apos: "'",
			lt: "<",
			gt: ">",
			quot: '"',
			nbsp: "\u00A0",
		};
		if (entities[entity]) {
			return entities[entity];
		}
		if (entity.startsWith("#x")) {
			return String.fromCharCode(Number.parseInt(entity.slice(2), 16));
		}
		if (entity.startsWith("#")) {
			return String.fromCharCode(Number.parseInt(entity.slice(1), 10));
		}
		return match;
	});
}

export async function getStaticPaths() {
	const posts = await getCollection("post");
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: post,
	}));
}

export async function GET({ props }: APIContext) {
	const { title: rawTitle, description: rawDescription } = props.data;
	const title = decodeHtmlEntities(rawTitle);
	const description = decodeHtmlEntities(rawDescription);

	// Fetch fonts needed for Satori
	const fontNormal = await fetch(
		"https://cdn.jsdelivr.net/fontsource/fonts/ia-writer-quattro@latest/latin-400-normal.ttf",
	).then((res) => res.arrayBuffer());

	const fontBold = await fetch(
		"https://cdn.jsdelivr.net/fontsource/fonts/ia-writer-quattro@latest/latin-700-normal.ttf",
	).then((res) => res.arrayBuffer());

	// Read logo file
	const logoPath = join(process.cwd(), "src", "assets", "images", "logo-dark.svg");
	const logoBuffer = await readFile(logoPath);
	const logoBase64 = `data:image/svg+xml;base64,${logoBuffer.toString("base64")}`;

	const markup = html`
		<div
			style="
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #18181b;
        color: #f4f4f5;
        font-family: 'iA Writer Quattro';
        padding: 80px;
        position: relative;
      "
		>
			<div
				style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          background-image: radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%);
          background-size: 100px 100px;
          opacity: 0.2;
        "
			></div>

			<div style="display: flex; flex-direction: row; align-items: center;">
				<img src="${logoBase64}" style="width: 48px; height: 48px; margin-right: 16px;" />
				<span style="font-size: 24px; font-weight: 400; opacity: 0.8;">${siteConfig.title}</span>
			</div>

			<div
				style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; width: 100%;"
			>
				<h1
					style="
            font-size: 60px;
            font-weight: 700;
            line-height: 1.1;
            margin: 0 0 24px 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          "
				>
					${title}
				</h1>

				<div
					style="
              font-size: 28px;
              line-height: 1.5;
              opacity: 0.7;
              margin: 0;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              text-overflow: ellipsis;
          "
				>
					${description ? description.slice(0, 200) + (description.length > 200 ? "..." : "") : ""}
				</div>
			</div>

			<div style="display: flex; flex-direction: row; align-items: center;">
				<span style="font-size: 24px; opacity: 0.6;">by ${siteConfig.author}</span>
			</div>
		</div>
	`;

	return await satoriAstroOG({
		template: markup,
		width: 1200,
		height: 630,
	}).toResponse({
		satori: {
			fonts: [
				{
					name: "iA Writer Quattro",
					data: fontNormal,
					weight: 400,
					style: "normal",
				},
				{
					name: "iA Writer Quattro",
					data: fontBold,
					weight: 700,
					style: "normal",
				},
			],
		},
	});
}
