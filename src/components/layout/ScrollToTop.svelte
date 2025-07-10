<script lang="ts">
  import Icon from "@iconify/svelte";

  // biome-ignore lint/style/useConst: <explanation>
  let scrollY = 0;

  function toTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<svelte:window bind:scrollY />

<button
  aria-label="Scroll to top"
  class="fixed right-10 sm:right-30 bottom-24 w-12 h-12 text-lg hover:op100 rounded-full flex items-center justify-center bg-hex-8883 transition duration-200 z-100 print:hidden op0"
  class:op75={scrollY > 300}
  class:pointer-events-none={scrollY <= 300}
  on:click={toTop}
>
  <Icon icon="carbon:arrow-up" />
</button>
