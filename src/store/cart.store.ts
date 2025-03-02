// store/cart.store.ts
import { create } from "zustand";

type CartStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
