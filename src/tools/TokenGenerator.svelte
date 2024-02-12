<script lang="ts">
  let lenght = 40;
  let output = "";

  function random_characters() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";
    for (let i = 0; i < lenght; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    output = result;
  }

  random_characters();
</script>

<div class="mt-4 rounded-md bg-black/20 p-4">
  <div class="mt-4 flex items-center gap-3">
    <p class="flex gap-1">Lenght: <span>({lenght})</span></p>
    <input
      bind:value={lenght}
      on:change={random_characters}
      min="10"
      max="512"
      class="w-full"
      type="range"
    />
  </div>
  <textarea class="mt-2 bg-white/10 px-1 h-20 w-full rounded-md text-center">{output}</textarea>
</div>
