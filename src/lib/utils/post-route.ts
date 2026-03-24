type PostLike = {
	id: string;
};

export function getPostRouteId(post: PostLike): string {
	return post.id;
}

export function getPostUrl(post: PostLike): string {
	return `/blog/${getPostRouteId(post)}`;
}

export function getPostOgImagePath(post: PostLike): string {
	return `/og/${getPostRouteId(post)}.png`;
}

export function getPostDisplaySlug(post: PostLike): string {
	const parts = getPostRouteId(post).split("/");
	const lastSegment = parts.at(-1) || "";

	if (lastSegment === "index") {
		return parts.at(-2) || "index";
	}

	return lastSegment;
}
