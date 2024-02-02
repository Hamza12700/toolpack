<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData;
  let Component: ConstructorOfATypedSvelteComponent;

  onMount(async () => {
    Component = (await import(`../../lib/${data.component}.svelte`)).default;
  });
</script>
