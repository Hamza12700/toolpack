<script lang="ts">
  let input = "";
  const hashes = {
    sha1: "",
    sha256: "",
    md5: "",
  };

  async function getHashes(hashType: string) {
    const data = await fetch(
      `http://localhost:2323/${hashType}?text=${input}`,
      { credentials: "same-origin" },
    );
    const result = await data.json();
    hashes[hashType] = result;
  }

  $: {
    if (!input) {
      input = "testing text";
    }
    getHashes("md5");
    getHashes("sha1");
    getHashes("sha256");
  }
</script>

<main class="rounded-md bg-black/20 p-4">
  <form class="border-b-2 pb-4">
    <label class="font-mono" for="hashtext"> Your text to hash: </label>
    <textarea
      bind:value={input}
      class="mt-1 h-40 w-full rounded-sm bg-black/20 p-2 font-mono"
    ></textarea>
  </form>

  <div class="mt-4 flex flex-col justify-start">
    <div class="flex items-center">
      <span class="mr-3 w-20 rounded-sm bg-black/30 p-1 font-bold">MD5</span>
      <p class="w-full overflow-scroll rounded-sm bg-black/30 p-1 font-mono">
        {hashes.md5}
      </p>
    </div>
    <div class="mt-2 flex items-center">
      <span class="mr-3 w-20 rounded-sm bg-black/30 p-1 font-bold">SHA1</span>
      <p class="w-full overflow-scroll rounded-sm bg-black/30 p-1 font-mono">
        {hashes.sha1}
      </p>
    </div>
    <div class="mt-2 flex items-center">
      <span class="mr-3 w-20 rounded-sm bg-black/30 p-1 font-bold">SHA256</span>
      <p class="w-full overflow-scroll rounded-sm bg-black/30 p-1 font-mono">
        {hashes.sha256}
      </p>
    </div>
  </div>
</main>
