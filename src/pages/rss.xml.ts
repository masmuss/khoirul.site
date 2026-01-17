import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import siteConfig from "@/config/site-config";
import { getPostsByPath } from "@/lib/utils/post";

export async function GET(context: APIContext) {
	const posts = await getPostsByPath();
	const site = context.site ?? "https://khoirul.site";

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: site,
		items: posts.map((item) => {
			return {
				...item.data,
				link: new URL(`blog/${item.slug}/`, site).toString(),
				pubDate: new Date(item.data.date),
				content: item.body,
				author: `${siteConfig.author} <${siteConfig.email}>`,
			};
		}),
	});
}
