<script lang="ts">
  import type { MarkdownHeading } from "astro";
  import { onMount } from "svelte"; // Impor onMount

  export let headings: MarkdownHeading[];
  const filteredHeadings = headings.filter((h) => h.depth > 1 && h.depth < 4);

  let activeHeadingSlug: string | null = null;

  function scrollToHeading(event: MouseEvent, slug: string) {
    event.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Optional: update hash in URL
      history.replaceState(null, "", `#${slug}`);
    }
  }

  onMount(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeHeadingSlug = entry.target.id;
        }
      }
    };

    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const headingElements = document.querySelectorAll(
      filteredHeadings.map((h) => `#${h.slug}`).join(",")
    );
    for (const el of headingElements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  });
</script>

{#if filteredHeadings.length > 1}
  <aside class="toc p-4 md:sticky md:top-24">
    <i class="i-ri-menu-2-fill mb-2 text-lg"></i>
    <nav>
      <ul>
        {#each filteredHeadings as heading (heading.slug)}
          <li>
            <a
              href={`#${heading.slug}`}
              aria-label={heading.text}
              class="block text-sm py-1.5 text-main op-40 hover:op75 transition-opacity"
              class:pl-4={heading.depth === 3}
              class:active={activeHeadingSlug === heading.slug}
              on:click={(e) => scrollToHeading(e, heading.slug)}
            >
              {heading.text}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
{/if}

<style>
  .toc {
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
  }

  .active {
    --at-aply: op75;
  }
</style>
