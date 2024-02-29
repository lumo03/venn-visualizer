export type SetType<T> = {
  label: string;
  values: Set<T>;
};

export type UniqueSetsArray<T> = Set<SetType<T>>;
