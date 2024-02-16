<script lang="ts">
  let input_html = "<h1>Hello World</h1>";
  let output_html = "";

  let escape_html = "&lt;h1&gt;Hello World&lt;/h1&gt;";
  let unescape_html = "";

  async function escapeHTMLEntities(html: string) {
    const data = await fetch(
      `https://cryptos.up.railway.app/html-entities-escape?text=${html}`,
    );
    const result = await data.json();
    output_html = result;
  }

  async function unescapeHTMLEntities(escaped_html_string: string) {
    let encode_to_base64 = btoa(escaped_html_string);
    const data = await fetch(
      `https://cryptos.up.railway.app/unescape-html-entities?text=${encode_to_base64}&base64=true`,
    );
    const encoded_base64 = await data.json();
    const result = atob(encoded_base64);
    unescape_html = result
  }

  $: escapeHTMLEntities(input_html);
  $: unescapeHTMLEntities(escape_html);
</script>

<hgroup>
  <h1 class="mb-3">Escape HTML entities</h1>
  <p class="mb-2">Your string</p>
  <textarea placeholder="<h1>Something>" bind:value={input_html}></textarea>
  <p class="mb-2 mt-3">Your string escaped</p>
  <textarea bind:value={output_html}></textarea>
</hgroup>

<hgroup>
  <h1 class="mb-3">Unescape HTML entities</h1>
  <p class="mb-2">Your escaped string</p>
  <textarea placeholder="<h1>Something>" bind:value={escape_html}></textarea>
  <p class="mb-2 mt-3">Your string escaped</p>
  <textarea bind:value={unescape_html}></textarea>
</hgroup>
