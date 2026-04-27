import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import siteConfig from "@/config/site-config";
import { getPostsByPath } from "@/lib/contents/post";
import { getPostUrl } from "@/lib/utils/post-route";

const DEFAULT_SITE_URL = "https://khoirul.me";

export async function GET(context: APIContext) {
	const posts = await getPostsByPath();
	const site = context.site ?? DEFAULT_SITE_URL;

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site,
		items: posts.map((item) => {
			return {
				...item.data,
				link: new URL(getPostUrl(item), site).toString(),
				pubDate: new Date(item.data.date),
				content: item.body,
				author: `${siteConfig.author} <${siteConfig.email}>`
			};
		})
	});
}
