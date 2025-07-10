<script>
  import siteConfig from "@/config/site-config";

  const socialLinks = siteConfig.socialLinks.filter((link) => {
    if (link.text !== "GitHub" && link.text !== "LinkedIn") {
      return link;
    }
    return false;
  });
</script>

<div class="mx-0">
  <div class="decoration-none align-middle">
    <span class="font-mono op50 text-xl">></span>
    <span class="op50">comment on </span>
    <span>
      {#each socialLinks as links, index (links.text)}
        <a
          class="nav-link underline"
          href={links.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {links.text}
        </a>
        {#if index < socialLinks.length - 1}
          <span class="op50">&nbsp;/&nbsp;</span>
        {/if}
      {/each}
    </span>
  </div>
</div>
