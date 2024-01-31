<script lang="ts">
  import Icon from "@iconify/svelte";
  export let link: string
  export let title: string
  export let description: string

	function add_to_favorite(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		event.preventDefault()
	}
</script>

<a href={link}>
  <div class="w-96 px-4 py-3 rounded-md bg-gray-300">
    <div class="flex items-center justify-between">
      <Icon class="text-3xl" icon="mingcute:tag-2-fill" />
      <button on:click={add_to_favorite}>
        <Icon id="like" class="text-lg text-gray-500 hover:text-red-400" icon="mdi:heart" />
      </button>
    </div>
    <hgroup class="mt-2">
      <h2 class="font-semibold text-xl pb-2">{title}</h2>
      <p>{description}</p>
    </hgroup>
  </div>
</a>
