export function getLinkTarget(link: string): string {
	return link.includes("http") ? "_blank" : "_self";
}

export function isExternalLink(link: string): boolean {
	return link.includes("http");
}
