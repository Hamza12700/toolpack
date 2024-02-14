<script lang="ts">
  let encode_input = "Hello World";
  let decode_input = "Hello%20World";
  let encoded_output = "";
  let decoded_output = "";

  function encodedURI(input: string) {
    encoded_output = encodeURIComponent(input);
  }

  function decodedURI(input: string) {
    decoded_output = decodeURIComponent(input);
    decoded_output = decodeURIComponent(input);
  }

  $: encodedURI(encode_input);
  $: decodedURI(decode_input);
</script>

<h1 class="mb-3 text-lg font-semibold">Encode</h1>
<h2>Your string :</h2>
<textarea
  bind:value={encode_input}
  placeholder="Input"
  class="mb-3 mt-2"
  name="input"
  id="input"
></textarea>

<h2 class="mb-2 text-lg">Your string encoded :</h2>
<textarea
  readonly
  placeholder="Output"
  bind:value={encoded_output}
  class="mb-3 mt-2"
  name="output"
  id="output"
></textarea>

<h1 class="my-3 border-t-2 border-white/10 pt-2 text-lg font-semibold">
  Decode
</h1>
<h2>Your string :</h2>
<textarea
  placeholder="Input"
  bind:value={decode_input}
  class="mb-3 mt-2"
  name="input"
  id="input"
></textarea>

<h2 class="mb-2 text-lg">Your string encoded :</h2>
<textarea
  placeholder="Output"
  readonly
  bind:value={decoded_output}
  class="mb-3 mt-2"
  name="output"
  id="output"
></textarea>
