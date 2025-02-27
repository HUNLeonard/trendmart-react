import { create } from "zustand";

interface FilterStore {
  yourState: any;
  yourAction: (val: any) => void;
}
export const useFilterStore = create<FilterStore>((set) => ({
  yourState: "VALUE",
  yourAction: (_val) => set((state) => ({ yourState: state.yourState })),
}));
