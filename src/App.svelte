<script lang="ts">
  import Chart from "./lib/Chart.svelte";
  import SetInput from "./lib/SetInput.svelte";
  import SetsList from "./lib/SetsList.svelte";
</script>

<main>
  <div id="container">
    <div id="content">
      <Chart />
      <SetInput />
    </div>
    <div id="sidebar">
      <SetsList />
    </div>
  </div>
</main>
