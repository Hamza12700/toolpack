<script lang="ts">
  import ToolCard from "$lib/ToolCard.svelte";
  import { tools } from "../ToolsList";
</script>

<div class="mt-4 flex flex-wrap gap-5">
  {#each tools as tool}
    <ToolCard
      title={tool.title}
      icon_name={tool.icon_name}
      link={tool.link}
      description={tool.description}
    />
  {/each}
</div>
