<script lang="ts">
  let string_input = "Hello World";
  let string_output = "";
  let base64_input = "";
  let base64_output = "";
  let incorrect_base64_string = false;

  function stringToBase64(text: Uint8Array) {
    const binStr = String.fromCodePoint(...text);
    string_output = btoa(binStr);
  }

  function base64ToString(base64_text: string) {
    try {
      if (!incorrect_base64_string) {
        setTimeout(() => {
          incorrect_base64_string = false;
        }, 3000);
      }
      const binStr = atob(base64_text);
      const uint_array = Uint8Array.from(binStr, (m) => m.codePointAt(0));
      const result = new TextDecoder().decode(uint_array);
      base64_output = result;
    } catch (error) {
      console.error("Incorrect base64 string!");
      incorrect_base64_string = true;
    }
  }

  $: stringToBase64(new TextEncoder().encode(string_input));
  $: base64ToString(base64_input);
</script>

<hgroup>
  <h1 class="mb-3 font-semibold">String to Base64:</h1>
  <h2 class="mb-1 font-mono">String to encode:</h2>
  <textarea placeholder="Put your string here" bind:value={string_input}
  ></textarea>

  <h3 class="my-2 font-mono">Base64 string:</h3>
  <textarea readonly bind:value={string_output}></textarea>
</hgroup>

<hgroup class="mt-5 border-t-2 border-white/10 pt-2">
  <h1 class="mb-3 font-semibold">Base64 to String:</h1>
  <h2 class="mb-1 font-mono">Base64 string to decode:</h2>
  <textarea placeholder="Put your base64 string here" bind:value={base64_input}
  ></textarea>
  {#if incorrect_base64_string}
    <p class="text-red-500">Please enter correct base64 string</p>
  {/if}

  <h3 class="my-2 font-mono">Decoded string:</h3>
  <textarea readonly bind:value={base64_output}></textarea>
</hgroup>
