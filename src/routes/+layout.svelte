<script>
  import "../app.pcss";
  import Icon from "@iconify/svelte";
</script>

<title>ToolPack</title>
<nav class="flex items-center gap-2 px-8 py-4">
  <Icon class="text-4xl" icon="solar:box-bold" />
  <a class="text-4xl font-bold" href="/">ToolPack</a>
</nav>

<main class="px-8">
  <slot />
</main>
