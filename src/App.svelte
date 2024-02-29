<script lang="ts">
  import Chart from "./lib/Chart.svelte";
  import SetInput from "./lib/SetInput.svelte";
  import SetsList from "./lib/SetsList.svelte";
  import type { UniqueSetsArray } from "./types/SetTypes";
  import { Chart as CJS } from "chart.js/auto";

  let sets: UniqueSetsArray<number> = new Set();
  let chart: CJS;
  let chartC: Chart;

  function handleModifySets() {
    sets = sets;
    chartC.updateChartFn();
  }
</script>

<main>
  <div id="container">
    <div id="content">
      <Chart {sets} {chart} bind:this={chartC} />
      <SetInput {sets} {chart} {handleModifySets} />
    </div>
    <div id="sidebar">
      <SetsList {sets} {handleModifySets} />
    </div>
  </div>
</main>
