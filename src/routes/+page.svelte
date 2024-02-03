<script lang="ts">
  import ToolCard from "$lib/ToolCard.svelte";
  import { tools } from "$lib/tools";
</script>

<div class="mt-4 flex flex-wrap items-stretch gap-10">
  {#each tools as tool}
    <ToolCard
      title={tool.title}
      icon_name={tool.icon_name}
      link={tool.link}
      description={tool.description}
    />
  {/each}
</div>
