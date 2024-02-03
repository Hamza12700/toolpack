<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData;

  let Component: ConstructorOfATypedSvelteComponent;

  onMount(async () => {
    Component = (await import(`../../lib/${data.component}.svelte`)).default;
  });
</script>

<main class="mx-auto w-[44rem]">
  <hgroup class="mb-4">
    <div class="flex items-center justify-between">
      <h1 class="pb-2 text-4xl font-semibold">{data.title}</h1>
      <Icon class="text-gray-400 hover:text-red-400" icon="mdi:heart" />
    </div>
    <p>{data.description}</p>
  </hgroup>

  <svelte:component this={Component} />
</main>
