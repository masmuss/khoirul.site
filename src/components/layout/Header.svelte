<script lang="ts">
  import siteConfig from "@/config/site-config";
  import { getLinkTarget } from "@/lib/utils/link";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import ThemeToggle from "../ThemeToggle.svelte";
  import Logo from "@/assets/Logo.svelte";

  const navLinks = siteConfig.header.navLinks || [];

  $: socialLinks = siteConfig.socialLinks.filter((link) => {
    if (link.header && typeof link.header === "boolean") {
      return link;
    }
    if (link.header && typeof link.header === "string") {
      // @ts-ignore
      link.icon = link.header.includes("i-") ? link.header : link.icon;
      return link;
    }
    return false;
  });

  // biome-ignore lint/style/useConst: <explanation>
  let scrollY = 0;
  let oldScrollY = 0;
  let isHeaderHidden = false;

  $: {
    if (scrollY < 150) {
      isHeaderHidden = false;
    } else if (scrollY > oldScrollY && scrollY - oldScrollY > 50) {
      isHeaderHidden = true;
      oldScrollY = scrollY;
    } else if (scrollY < oldScrollY && oldScrollY - scrollY > 50) {
      isHeaderHidden = false;
      oldScrollY = scrollY;
    }
  }

  onMount(() => {
    const navMask = document.querySelector(".nav-drawer-mask") as HTMLElement;
    navMask?.addEventListener("touchmove", (event) => {
      event.preventDefault();
    });
  });
</script>

<svelte:window bind:scrollY />

<header
  id="header"
  class="!fixed bg-transparent z-899 w-screen py-7 px-6 flex justify-between items-center"
  class:header-bg-blur={scrollY > 20}
  class:header-hide={isHeaderHidden}
>
  <div class="flex items-center md:justify-between h-full md:w-full md:pr-6">
    <a aria-label="Header Logo Image" href="/" class="mr-6 md:hidden">
      <Logo />
    </a>
    <nav
      class="w-full sm:flex justify-end hidden flex-wrap gap-x-6 position-initial flex-row"
    >
      {#each navLinks as link (link.text)}
        <a
          aria-label={link.text}
          href={link.href}
          target={getLinkTarget(link.href)}
          class="nav-link"
        >
          {link.text}
        </a>
      {/each}
    </nav>
  </div>

  <div class="flex items-center justify-end w-full gap-x-4 md:w-auto">
    <nav class="flex gap-x-4 items-center justify-end md:hidden">
      {#each navLinks as link (link.text)}
        <a
          aria-label={link.text}
          href={link.href}
          target={getLinkTarget(link.href)}
          class="nav-link"
        >
          <Icon icon={link.icon} class="text-xl" />
        </a>
      {/each}
    </nav>

    <div class="flex gap-x-4">
      {#each socialLinks as link (link.text)}
        <a
          aria-label={link.text}
          class="nav-link"
          href={link.href}
          target={getLinkTarget(link.href)}
        >
          <Icon icon={link.icon} class="text-xl" />
        </a>
      {/each}
      <a aria-label="RSS" href="/rss.xml" class=" nav-link" target="_blank">
        <Icon icon="ri:rss-line" class="text-xl" />
      </a>
      <ThemeToggle />
    </div>
  </div>
</header>

<style>
  .header-hide {
    transform: translateY(-100%);
    transition: transform 0.4s ease;
  }

  .header-bg-blur {
    backdrop-filter: blur(10px);
    transition:
      background-color 0.3s ease,
      backdrop-filter 0.3s ease;
  }
</style>
