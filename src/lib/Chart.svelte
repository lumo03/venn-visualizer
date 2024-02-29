<script lang="ts" type="module">
  import { Chart as ChartJs } from "chart.js/auto";
  import {
    VennDiagramChart,
    extractSets,
    type IRawSet,
  } from "chartjs-chart-venn";
  import { onMount } from "svelte";
  import { setsStore } from "../stores";

  let chart: ChartJs;

  function generateSetsData(sets: IRawSet<number>[]) {
    return extractSets(sets);
  }

  setsStore.subscribe((sets) => {
    if (chart != undefined) {
      chart.data = generateSetsData(sets);
      chart.update();
    }
  });

  let data = [20, 100, 50, 12, 20, 130, 45];
  let labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let ctx;
  let canvas: HTMLCanvasElement;

  onMount(() => {
    ctx = canvas.getContext("2d");
    chart = new VennDiagramChart(ctx!, {
      data: generateSetsData($setsStore),
      options: {},
    });
  });
</script>

<div>
  <canvas bind:this={canvas} width={32} height={32} />
</div>
