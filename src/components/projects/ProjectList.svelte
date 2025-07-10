<script lang="ts">
  import type { ProjectsListProps } from "./types";

  export let projects: ProjectsListProps[];
</script>

<div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each projects as project (project.href)}
      <a
        href={project.href}
        target="_blank"
        class="container-link w-full flex items-center rd-2"
      >
        <div class="ml-2 mr-4 pt-2">
          <i class="text-4xl inline-block {project.icon ?? 'i-carbon-unknown'}"
          ></i>
        </div>
        <div class="font-normal lh-tight">
          <h3 class="text-lg hover:text-main">{project.text}</h3>
          {#if project.description}
            <p class="opacity-50 text-sm">{project.description}</p>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>
