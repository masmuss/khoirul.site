<script lang="ts">
  import { theme } from "@/lib/stores/theme";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  function setDarkMode(doc: Document) {
    if ($theme === "dark") {
      doc.documentElement.classList.add("dark");
    } else {
      doc.documentElement.classList.remove("dark");
    }
  }

  onMount(() => {
    document.addEventListener("astro:before-swap", (event) => {
      setDarkMode(event.newDocument);
    });
  });

  function handleToggle(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    if (!document.startViewTransition) {
      theme.toggle();
      return;
    }

    const transition = document.startViewTransition(async () => {
      theme.toggle();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: $theme === "light" ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 400,
          easing: "ease-out",
          pseudoElement:
            $theme === "light"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        }
      );
    });
  }
</script>

<button
  aria-label={$theme === "dark" ? "Dark Theme" : "Light Theme"}
  class="nav-link"
  on:click={handleToggle}
>
  <Icon
    icon={$theme === "dark" ? "ri:sun-line" : "ri:moon-line"}
    class="text-xl"
  />
</button>
