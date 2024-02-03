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
</div>
