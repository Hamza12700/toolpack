<script lang="ts">
  import Icon from "@iconify/svelte";
  export let link: string
  export let title: string
  export let description: string
  export let icon_name: string
</script>

<a class="border-2 border-white/20 rounded-md" data-sveltekit-preload-data href={link}>
  <div class="w-96 h-44 px-4 py-3 rounded-md bg-white/10">
    <div class="flex items-center justify-between">
      <Icon class="text-3xl" icon={icon_name}/>
      <button on:click|preventDefault>
        <Icon id="like" class="text-lg text-gray-500 hover:text-red-400" icon="mdi:heart" />
      </button>
    </div>
    <hgroup class="mt-2">
      <h2 class="font-semibold text-xl pb-2">{title}</h2>
      <p>{description}</p>
    </hgroup>
  </div>
</a>
