<script lang="ts">
  import type { SetType, UniqueSetsArray } from "../types/SetTypes";

  export let sets: UniqueSetsArray<number>;
  export let handleModifySets: () => void;

  function setsModified(set: SetType<number>) {
    sets.delete(set);
    handleModifySets();
  }
</script>

<div id="sets-list">
  <h2>List:</h2>
  {#if sets.size == 0}
    There are currently no sets.
  {/if}
  {#each sets as set}
    <div>
      {set.label}: {"{"}{Array.from(set.values)}{"}"}
      <button on:click={() => setsModified(set)}>Remove</button>
    </div>
  {/each}
</div>
