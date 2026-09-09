const AVERAGE_READING_WORDS_PER_MINUTE = 200;

export function getReadTimeCount(content: string): number {
	const words = content.split(/\s+/).filter((word) => word.length > 0);
	return Math.ceil(words.length / AVERAGE_READING_WORDS_PER_MINUTE);
}
