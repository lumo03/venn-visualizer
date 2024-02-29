<script lang="ts">
  import type { IRawSet } from "chartjs-chart-venn";
  import { setsStore } from "../stores";

  function setsModified(set: IRawSet<number>) {
    setsStore.removeSet(set.label);
  }
</script>

<div id="sets-list">
  <h2>List:</h2>
  {#if $setsStore.length == 0}
    There are currently no sets.
  {/if}
  {#each $setsStore as set}
    <div>
      {set.label}: {"{"}{Array.from(set.values)}{"}"}
      <button on:click={() => setsModified(set)}>Remove</button>
    </div>
  {/each}
</div>
