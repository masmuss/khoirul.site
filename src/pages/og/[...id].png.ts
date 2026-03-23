import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { APIContext } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import siteConfig from "@/config/site-config";

export const prerender = true;

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const DESCRIPTION_MAX_LENGTH = 200;
const OG_FONT_NAME = "iA Writer Quattro";

const FONT_URLS = {
	normal: "https://cdn.jsdelivr.net/fontsource/fonts/ia-writer-quattro@latest/latin-400-normal.ttf",
	bold: "https://cdn.jsdelivr.net/fontsource/fonts/ia-writer-quattro@latest/latin-700-normal.ttf",
} as const;

const LOGO_PATH = join(process.cwd(), "src", "assets", "images", "logo-dark.svg");

const fontNormalPromise = fetch(FONT_URLS.normal).then((res) => res.arrayBuffer());
const fontBoldPromise = fetch(FONT_URLS.bold).then((res) => res.arrayBuffer());
const logoBase64Promise = readFile(LOGO_PATH).then(
	(logoBuffer) => `data:image/svg+xml;base64,${logoBuffer.toString("base64")}`,
);

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

function truncateText(text: string | undefined, maxLength: number) {
	if (!text) return "";
	return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function buildOgMarkup({
	title,
	description,
	logoBase64,
}: {
	title: string;
	description: string;
	logoBase64: string;
}) {
	return html`
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
				font-family: '${OG_FONT_NAME}';
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
					${truncateText(description, DESCRIPTION_MAX_LENGTH)}
				</div>
			</div>

			<div style="display: flex; flex-direction: row; align-items: center;">
				<span style="font-size: 24px; opacity: 0.6;">by ${siteConfig.author}</span>
			</div>
		</div>
	`;
}

export async function getStaticPaths() {
	const posts = await getCollection("post");
	return posts.map((post) => ({
		params: { id: post.id },
		props: post,
	}));
}

export async function GET({ props }: APIContext) {
	const { title: rawTitle, description: rawDescription } = props.data;
	const title = decodeHtmlEntities(rawTitle);
	const description = decodeHtmlEntities(rawDescription);

	const [fontNormal, fontBold, logoBase64] = await Promise.all([
		fontNormalPromise,
		fontBoldPromise,
		logoBase64Promise,
	]);

	const markup = buildOgMarkup({ title, description, logoBase64 });

	return await satoriAstroOG({
		template: markup,
		width: OG_WIDTH,
		height: OG_HEIGHT,
	}).toResponse({
		satori: {
			fonts: [
				{
					name: OG_FONT_NAME,
					data: fontNormal,
					weight: 400,
					style: "normal",
				},
				{
					name: OG_FONT_NAME,
					data: fontBold,
					weight: 700,
					style: "normal",
				},
			],
		},
	});
}
