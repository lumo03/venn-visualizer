import { type IRawSet } from "chartjs-chart-venn";
import { writable } from "svelte/store";

export const setsStore = (() => {
  const { subscribe, update } = writable<IRawSet<number>[]>([]);

  return {
    subscribe,
    addSet: (set: IRawSet<number>) => {
      if (new Set(set.values).size != Array.from(set.values).length) {
        alert("Duplicates are not allowed!");
        return;
      }
      let allSets: IRawSet<number>[];
      subscribe((sets) => (allSets = sets));
      const setIsNew =
        allSets!.find((s) => s.label == set.label) == undefined;
      if (setIsNew) {
        update((allSets) => [...allSets, set]);
      } else {
        alert(`A Set with the label ${set.label} was already created!`);
      }
    },
    removeSet: (label: string) => {
      update((sets) => [...sets.filter((set) => set.label != label)]);
    },
  };
})();
