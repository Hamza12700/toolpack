<script>
  import "../app.pcss";
  import Icon from "@iconify/svelte";
</script>

<title>ToolPack</title>
<nav class="flex items-center justify-between gap-2 px-8 py-4">
  <div class="flex gap-2 items-center">
    <Icon class="text-4xl" icon="solar:box-bold" />
    <a class="text-4xl font-bold" href="/">ToolPack</a>
  </div>
  <a href="https://github.com/Hamza12700/toolpack" class="flex gap-2 items-center">
    <Icon class="text-2xl" icon="mingcute:github-fill" />
    <span class="font-semibold text-2xl">GitHub</span>
  </a>
</nav>

<main class="px-8">
  <slot />
</main>

<style>
  :global(textarea) {
    @apply h-20 w-full rounded-md bg-white/10 px-2 py-1;
  }
</style>
