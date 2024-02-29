<script lang="ts" type="module">
  import {
    Chart,
    LinearScale,
    type ChartItem,
    type ChartTypeRegistry,
  } from "chart.js";
  import { Chart as ChartA } from "chart.js/auto";
  import {
    ArcSlice,
    VennDiagramChart,
    VennDiagramController,
    extractSets,
    type IRawSet,
  } from "chartjs-chart-venn";
  import { onMount } from "svelte";
  import { Chart as CJS } from "chart.js/auto";
  import type { UniqueSetsArray } from "../types/SetTypes";

  export let chart: CJS;
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

  // const ctx = (document.getElementById("chart") as HTMLCanvasElement);
  /*
  Chart.register(VennDiagramController, ArcSlice, LinearScale);

  new Chart(ctx, {
    type: 'bar',
    data: extractSets([
      { label: "A", values: [1, 3, 4] },
      { label: "B", values: [8, 3, 2] },
    ]), 
  });*/

  /*
  new VennDiagramChart(ctx, {
    data: extractSets([
      { label: "A", values: [1, 3, 4] },
      { label: "B", values: [8, 3, 2] },
    ]),
  });
  */
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

  /*const objProxy = new Proxy(sets, {
  set: function (target, key, value) {
    console.log("update")
    const s = Array.from(sets);
    chart.data.datasets[0].data.pop();
    chart.data.datasets[0].data.push(s);
    chart.update();
   return true;
 },
});
*/

  onMount(() => {
    ctx = canvas.getContext("2d");
    /*var chart = new ChartA(ctx!, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Unit Sales',
                        data: data
                    }
                ]
            }
        });*/
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
