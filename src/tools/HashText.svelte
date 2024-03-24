<script lang="ts">
  let input = "Hello World";
  const hashes = {
    sha1: "",
    sha256: "",
    sha224: "",
    md5: "",
  };

  async function getHashes(text: string) {
    const [md5Hash, sha1Hash, sha256Hash, sha224Hash] = await Promise.all([
      fetch(`https://cryptos.up.railway.app/md5/${text}`),
      fetch(`https://cryptos.up.railway.app/sha1/${text}`),
      fetch(`https://cryptos.up.railway.app/sha256/${text}`),
      fetch(`https://cryptos.up.railway.app/sha224/${text}`),
    ]);

    const [md5Json, sha1Json, sha256Json, sha224Json] = await Promise.all([
      md5Hash.json(),
      sha1Hash.json(),
      sha256Hash.json(),
      sha224Hash.json(),
    ]);

    hashes.md5 = md5Json;
    hashes.sha1 = sha1Json;
    hashes.sha256 = sha256Json;
    hashes.sha224 = sha224Json;
  }

  $: getHashes(input);
</script>

<form class="border-b-2 border-white/10 pb-4">
  <label class="font-mono" for="hashtext"> Your text to hash: </label>
  <textarea
    bind:value={input}
    class="mt-1 h-40 w-full rounded-sm bg-white/10 p-2 font-mono"
  ></textarea>
</form>

<div class="mt-4 flex flex-col justify-start">
  <div class="flex items-center">
    <span class="mr-3 w-20 rounded-sm bg-white/10 p-1 font-bold">MD5</span>
    <p class="w-full overflow-scroll rounded-sm bg-white/10 p-1 font-mono">
      {hashes.md5}
    </p>
  </div>
  <div class="mt-2 flex items-center">
    <span class="mr-3 w-20 rounded-sm bg-white/10 p-1 font-bold">SHA1</span>
    <p class="w-full overflow-scroll rounded-sm bg-white/10 p-1 font-mono">
      {hashes.sha1}
    </p>
  </div>
  <div class="mt-2 flex items-center">
    <span class="mr-3 w-20 rounded-sm bg-white/10 p-1 font-bold">SHA224</span>
    <p class="w-full overflow-scroll rounded-sm bg-white/10 p-1 font-mono">
      {hashes.sha224}
    </p>
  </div>
  <div class="mt-2 flex items-center">
    <span class="mr-3 w-20 rounded-sm bg-white/10 p-1 font-bold">SHA256</span>
    <p class="w-full overflow-scroll rounded-sm bg-white/10 p-1 font-mono">
      {hashes.sha256}
    </p>
  </div>
</div>
