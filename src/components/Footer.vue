<script lang="ts" setup>
import siteConfig from '@/site-config';
</script>

<template>
  <footer
    class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white"
  >
    <div flex>
      <span op-70
        >{{ new Date().getFullYear() }}&nbsp;&mdash;&nbsp;{{
          siteConfig.author
        }}.</span
      >
    </div>
  </footer>
</template>
