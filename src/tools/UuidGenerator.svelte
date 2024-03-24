<script lang="ts">
  let input = "Hello World";
  let fromStringUUID = "";
  let randomlyGenUUID = "";

  async function getUUIDFromString(text: string) {
    const data = await fetch(
      `https://cryptos.up.railway.app/uuid/${text}`,
    );

    const result = await data.json();
    fromStringUUID = result;
  }

  async function randomUUID() {
    const data = await fetch("https://cryptos.up.railway.app/uuid/random");
    const resutl = await data.json();
    randomlyGenUUID = resutl;
  }

  $: getUUIDFromString(input);
  randomUUID();
</script>

<hgroup>
  <h1 class="mb-3 font-semibold">Generate UUID from a string:</h1>
  <textarea
    bind:value={input}
    class="h-20 w-full rounded-md bg-white/10 px-2 py-1 font-mono"
    name="input"
    id="input"
  ></textarea>
  <p class="mt-3 text-center">
    <span class="font-mono text-lg font-semibold">UUID:</span>
    {fromStringUUID}
  </p>
</hgroup>

<hgroup>
  <h1 class="my-3 border-t-2 border-white/10 pt-2 font-semibold">
    Generate Random UUID:
  </h1>
  <p>{randomlyGenUUID}</p>
  <button
    on:click={randomUUID}
    type="button"
    class="mt-4 rounded-sm bg-white/10 px-4 py-2">Generate</button
  >
</hgroup>
