<script lang="ts">
  import { getReadTimeCount } from "@/lib/utils/posts";
  import type { CollectionPosts } from "@/types";

  // biome-ignore lint/style/useConst: <explanation>
  export let posts: CollectionPosts[] = [];

  function getDate(date: string): string {
    return new Date(date).toISOString();
  }

  function getHref(post: CollectionPosts): string {
    if (post.data.redirect) return post.data.redirect;
    return `/posts/${post.data.slug}`;
  }

  function getTarget(post: CollectionPosts): string {
    if (post.data.redirect) return "_blank";
    return "_self";
  }

  function isSameYear(
    a: Date | string | number,
    b: Date | string | number
  ): boolean {
    return !!(a && b && getYear(a) === getYear(b));
  }

  function getYear(date: Date | string | number): number {
    return new Date(date).getFullYear();
  }
</script>

<ul class="sm: min-h-38 min-h-28 mb-18 space-y-lg interactive-list">
  {#if posts.length === 0}
    <div class="my-12 opacity-50">nothing here yet.</div>
  {:else}
    {#each posts as post, index (post.data.slug)}
      {#if !isSameYear(post.data.date, posts[index - 1]?.data.date)}
        <div class="select-none relative h-18 pointer-events-none">
          <span
            class="text-7em color-transparent font-bold text-stroke-2 text-stroke-hex-aaa op14 absolute top--0.05em"
          >
            {getYear(post.data.date)}
          </span>
        </div>
      {/if}
      <li>
        <a
          class="text-lg lh-tight flex flex-col gap-2"
          aria-label={post.data.title}
          target={getTarget(post)}
          href={getHref(post)}
        >
          <div class="flex flex-col md:flex-row gap-2 md:items-center">
            <div class="flex gap-2 items-center text-wrap">
              <span class="lh-normal">
                {#if post.data.draft}
                  <i class="text-base vertical-mid i-ri-draft-line"></i>
                {/if}
                {post.data.title}
              </span>
            </div>
            <div class="opacity-50 text-sm ws-nowrap flex gap-2 items-center">
              {#if post.data.redirect}
                <i class="text-base i-ri-external-link-line"></i>
              {/if}
              {#if post.data.date}
                <time datetime={getDate(post.data.date)}>
                  {post.data.date.split(",")[0]}
                </time>
              {/if}
              <span>·&nbsp;&nbsp;{getReadTimeCount(post.body!)} min read</span>
            </div>
          </div>
        </a>
      </li>
    {/each}
  {/if}
</ul>

<style>
  .interactive-list li {
    opacity: 100;
    transition: opacity 0.2s ease-in-out;
  }

  .interactive-list:has(li:hover) li:not(:hover) {
    opacity: 0.3;
  }

  .interactive-list li:hover {
    opacity: 1;
  }
</style>
