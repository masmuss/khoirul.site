import { fontData } from "astro:assets";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import siteConfig from "@/config/site-config";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const DESCRIPTION_MAX_LENGTH = 200;
const OG_FONT_NAME = "iA Writer Quattro";
const OG_FONT_CSS_VARIABLE = "--font-ia-writer-quattro";
const OG_FONT_STYLE = "normal";

const FONT_WEIGHTS = {
	normal: 400,
	bold: 700,
} as const;

const LOGO_PATH = join(process.cwd(), "src", "assets", "images", "logo-dark.svg");

type FontSource = {
	weight?: number | string;
	style?: string;
	src?: Array<{ url?: string }>;
};

const ogFontSources = (fontData[OG_FONT_CSS_VARIABLE] ?? []) as FontSource[];
const fontPromiseByOrigin = new Map<string, Promise<{ normal: ArrayBuffer; bold: ArrayBuffer }>>();

async function fetchArrayBuffer(url: string) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch font from ${url} (${response.status})`);
	}
	return response.arrayBuffer();
}

function resolveFontUrl({ origin, weight }: { origin: string; weight: number }) {
	if (!ogFontSources.length) {
		throw new Error(`No font sources found for ${OG_FONT_CSS_VARIABLE}`);
	}

	const exactMatch = ogFontSources.find(
		(fontSource) => Number(fontSource.weight) === weight && fontSource.style === OG_FONT_STYLE,
	);
	const weightMatch = ogFontSources.find((fontSource) => Number(fontSource.weight) === weight);
	const fallbackMatch = ogFontSources.find((fontSource) => fontSource.style === OG_FONT_STYLE);
	const selected = exactMatch ?? weightMatch ?? fallbackMatch ?? ogFontSources[0];
	const relativeUrl = selected?.src?.[0]?.url;

	if (!relativeUrl) {
		throw new Error(`No usable source URL for ${OG_FONT_NAME} (${weight})`);
	}

	return new URL(relativeUrl, origin).toString();
}

function getOgFonts(origin: string) {
	const cachedPromise = fontPromiseByOrigin.get(origin);
	if (cachedPromise) return cachedPromise;

	const normalUrl = resolveFontUrl({ origin, weight: FONT_WEIGHTS.normal });
	const boldUrl = resolveFontUrl({ origin, weight: FONT_WEIGHTS.bold });

	const newPromise = Promise.all([fetchArrayBuffer(normalUrl), fetchArrayBuffer(boldUrl)]).then(
		([normal, bold]) => ({ normal, bold }),
	);

	fontPromiseByOrigin.set(origin, newPromise);
	return newPromise;
}

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

function truncateText(text: string, maxLength: number) {
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
					${description}
				</div>
			</div>

			<div style="display: flex; flex-direction: row; align-items: center;">
				<span style="font-size: 24px; opacity: 0.6;">by ${siteConfig.author}</span>
			</div>
		</div>
	`;
}

type CreateOgImageResponseOptions = {
	title: string;
	description?: string;
	decodeEntities?: boolean;
	origin: string;
};

export async function createOgImageResponse({
	title,
	description = "",
	decodeEntities = false,
	origin,
}: CreateOgImageResponseOptions) {
	const safeTitle = decodeEntities ? decodeHtmlEntities(title) : title;
	const safeDescription = decodeEntities ? decodeHtmlEntities(description) : description;
	const clampedDescription = truncateText(safeDescription, DESCRIPTION_MAX_LENGTH);

	const [{ normal: fontNormal, bold: fontBold }, logoBase64] = await Promise.all([
		getOgFonts(origin),
		logoBase64Promise,
	]);

	const markup = buildOgMarkup({ title: safeTitle, description: clampedDescription, logoBase64 });

	return satoriAstroOG({
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
