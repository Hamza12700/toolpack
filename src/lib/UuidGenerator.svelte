<script lang="ts">
  let input = "Hello World";
  let fromStringUUID = "";
  let randomlyGenUUID = ""

  async function getUUIDFromString(text: string) {
    const data = await fetch(
      `https://cryptos.up.railway.app/uuid?text=${text}`,
      { credentials: "same-origin" },
    );

    const result = await data.json();
    fromStringUUID = result;
  }

  async function randomUUID() {
    const data = await fetch("https://cryptos.up.railway.app/random-uuid", { credentials: "same-origin"})
    const resutl = await data.json()
    randomlyGenUUID = resutl
  }

  $: getUUIDFromString(input);

  randomUUID()

  $: {
    if (!input) {
      input = "Hello World";
    }
  }
</script>

<hgroup>
  <h1 class="mb-3 font-semibold">Generate UUID from a string:</h1>
  <textarea
    bind:value={input}
    class="h-20 w-full rounded-md bg-white/10 px-2 py-1 font-mono"
    name="input"
    id="input"
  ></textarea>
  <p class="text-center mt-3"><span class="font-semibold text-lg font-mono">UUID:</span> {fromStringUUID}</p>
</hgroup>

<hgroup>
  <h1 class="my-3 border-t-2 border-white/10 pt-2 font-semibold">Generate Random UUID:</h1>
  <p>{randomlyGenUUID}</p>
  <button on:click={randomUUID} type="button" class="bg-white/10 mt-4 rounded-sm py-2 px-4">Generate</button>
</hgroup>
