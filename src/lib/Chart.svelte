<script lang="ts" type="module">
  import { Chart as ChartJs } from "chart.js/auto";
  import {
    VennDiagramChart,
    extractSets,
    type IRawSet,
  } from "chartjs-chart-venn";
  import { onMount } from "svelte";
  import type { UniqueSetsArray } from "../types/SetTypes";

  export let chart: ChartJs;
  export let sets: UniqueSetsArray<number>;
  export const updateChartFn = () => {
    console.log("update0");
    chart.data = generateSetsData(sets);
    chart.update();
    console.log("update2");
  };

  function getRawSetOfSets(sets: UniqueSetsArray<number>): IRawSet<number>[] {
    const s = Array.from(sets);
    return s.map((st) => {
      const valuesA = Array.from(st.values);
      return { label: st.label, values: valuesA } as IRawSet<number>;
    });
  }

  function generateSetsData(sets: UniqueSetsArray<number>) {
    return extractSets(getRawSetOfSets(sets));
  }

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
      data: generateSetsData(sets),
      options: {},
    });
  });
</script>

<div style="width: 50vw; height: 50vh;">
  <canvas bind:this={canvas} width={32} height={32} />
</div>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
