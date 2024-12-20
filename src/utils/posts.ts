import { getCollection } from 'astro:content';
import type { CollectionPosts, PostKey } from '@/types';

export function sortPostsByDate(
  itemA: CollectionPosts,
  itemB: CollectionPosts,
) {
  return (
    new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime()
  );
}

export async function getPosts(path?: string, collection: PostKey = 'blog') {
  return (
    await getCollection(collection, (post: CollectionPosts) => {
      return (
        (import.meta.env.PROD ? post.data.draft !== true : true) &&
        (path ? post.filePath!.includes(path) : true)
      );
    })
  ).sort(sortPostsByDate);
}

export function readTimeCount(text: string): number {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}
