<script lang="ts">
  import Chart from "./lib/Chart.svelte";
  import SetInput from "./lib/SetInput.svelte";
  import SetsList from "./lib/SetsList.svelte";
</script>

<link rel="stylesheet" href="reset.css" class="style" />

<main id="main-content">
  <div id="chart">
    <Chart />
  </div>
  <div id="sets-input-view">
    <SetInput />
    <SetsList />
  </div>
</main>
