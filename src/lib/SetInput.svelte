<script lang="ts">
  import { Chart as ChartJs } from "chart.js/auto";
  import type { SetType, UniqueSetsArray } from "../types/SetTypes";

  export let sets: UniqueSetsArray<number>;
  export let chart: ChartJs;
  export let handleModifySets: () => void;

  let label: string;
  let values: string;

  function addSet({ label, values }: SetType<number>) {
    if (!Array.from(sets).find((set) => set.label == label)) {
      sets.add({
        label,
        values,
      });
    } else {
      alert(`A Set with the label ${label} was already created!`);
    }
    chart?.update();
  }

  function addSetUsingForm() {
    if (label == null || values == null || label == "" || values.length < 3) {
      alert("Label and/or values field is empty!");
      return;
    }
    console.log("test");
    const valuesSet = new Set(values.split(",").map((i) => parseInt(i)));
    console.log("test2");
    addSet({ label, values: valuesSet });
    console.log("test3");
    label = "";
    values = "";
    console.log(sets);
    handleModifySets();
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
