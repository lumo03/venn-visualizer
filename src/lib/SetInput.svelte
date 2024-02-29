<script lang="ts">
  import { setsStore } from "../stores";

  let label: string;
  let values: string;

  function addSetUsingForm() {
    if (label == null || values == null || label == "" || values.length < 3) {
      alert("Label and/or values field is empty!");
      return;
    }
    const valuesSet = values.split(",").map((i) => parseInt(i));
    setsStore.addSet({ label, values: valuesSet });
    label = "";
    values = "";
  }
</script>

<div>
  <label for="label">Label: </label>
  <input bind:value={label} id="label" placeholder="Label..." />
</div>
<div>
  <label for="values">Values: </label>
  <input bind:value={values} id="values" placeholder="Values..." />
</div>
<div>
  <button on:click={addSetUsingForm}>Add Set</button>
</div>
