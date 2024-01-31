<script>
	import '../app.pcss';
	import Icon from "@iconify/svelte"
</script>

<title>Tooly</title>
<nav class="p-4 flex items-center gap-2">
	<Icon class="text-4xl" icon="solar:box-bold" />
	<a class="font-bold text-4xl" href="/">Tooly</a>
</nav>

<main class="px-8">
	<slot />
</main>
