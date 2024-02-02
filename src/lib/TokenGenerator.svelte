<script lang="ts">
  let lenght = 40;
  let is_uppercase = true;
  let randomly_generated = "";

  function random_uppercase_letters() {
    let result = "";
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let counter = 0;
    while (counter < lenght) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
      counter++;
    }
    randomly_generated = result;
    console.log(randomly_generated);
  }

  if (is_uppercase) {
    random_uppercase_letters();
  }
</script>

<div class="mt-4 rounded-md bg-black/20 p-4">
  <form>
    <fieldset class="border-2 p-2">
      <legend class="rounded-sm bg-black/10 p-1 font-semibold"
        >Choose options:</legend
      >
      <div class="mt-4 flex flex-wrap justify-between">
        <div class="flex gap-1">
          <p>UpperCase (ABC)</p>
          <input
            bind:checked={is_uppercase}
            on:change={random_uppercase_letters}
            class="w-4"
            type="checkbox"
          />
        </div>
        <div class="flex gap-1">
          <p>LowerCase (abc)</p>
          <input checked class="w-4" type="checkbox" />
        </div>
        <div class="flex gap-1">
          <p>Numbers (123)</p>
          <input checked class="w-4" type="checkbox" />
        </div>
        <div class="flex gap-1">
          <p>Symbols (#@;)</p>
          <input class="w-4" type="checkbox" />
        </div>
      </div>
    </fieldset>

    <div class="mt-4 flex items-center gap-3">
      <p class="flex gap-1">Lenght: <span>({lenght})</span></p>
      <input
        bind:value={lenght}
        on:change={random_uppercase_letters}
        min="10"
        max="512"
        class="w-full"
        type="range"
      />
    </div>
  </form>
  <textarea class="mt-2 h-20 w-full rounded-md text-center"
    >{randomly_generated}</textarea
  >
</div>
