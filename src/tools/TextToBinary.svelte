<script lang="ts">
  let text_input = "";
  let text_ouput = "";

  let binary_input = "";
  let binary_output = "";

  function textToBinary(text: string) {
    var binaryOutput = [];
    for (var i = 0; i < text.length; i++) {
      var charCode = text[i].charCodeAt(0);
      var binaryStr = charCode.toString(2);
      binaryOutput.push(binaryStr.padStart(8, "0"));
    }
    text_ouput = binaryOutput.join(" ");
  }

  function binaryToText(binary: string) {
    var text = "";
    var binary_array = binary.split(" ");
    for (let i = 0; i < binary_array.length; i++) {
      text += String.fromCharCode(parseInt(binary_array[i], 2));
    }

    binary_output = text;

    console.log(binary_output);
  }

  $: textToBinary(text_input);
  $: binaryToText(binary_input);
</script>

<hgroup>
  <h1 class="mb-3">Text to ASCII Binary</h1>
  <p class="my-2">Enter text to convert to binary</p>
  <textarea bind:value={text_input} placeholder="e.g: Hello World"></textarea>
  <p class="mb-2 mt-3">Binary from your text</p>
  <textarea placeholder="Binary: 01101000" bind:value={text_ouput}></textarea>
</hgroup>

<hgroup class="mt-3 pt-2 border-t-2 border-white/10">
  <h1 class="mb-3">Binary to text</h1>
  <p class="my-2">Enter binary to convert to text</p>
  <textarea bind:value={binary_input} placeholder="e.g: 01101000"></textarea>
  <p class="mb-2 mt-3">Text from your binary</p>
  <textarea placeholder="Binary: 01101000" bind:value={binary_output}
  ></textarea>
</hgroup>
