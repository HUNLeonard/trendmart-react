import { create } from "zustand";

import { persist } from "zustand/middleware";
import { Product } from "../components/types/product";

interface CartItem {
  productId: Product["id"];
  ammount: number;
}

interface CartStore {
  cart: CartItem[];

  increaseItem: (param: CartItem["productId"]) => void;
  decreaseItem: (param: CartItem["productId"]) => void;
  removeItem: (param: CartItem["productId"]) => void;
}
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      increaseItem: (param) => {
        set((store) => {
          const itemExists = store.cart.some(
            (item) => item.productId === param,
          );
          if (itemExists) {
            // If the item exists, increase its amount
            return {
              cart: store.cart.map((item) =>
                item.productId === param
                  ? { ...item, ammount: item.ammount + 1 }
                  : item,
              ),
            };
          } else {
            // If the item doesn't exist, add it with amount 1
            return {
              cart: [...store.cart, { productId: param, ammount: 1 }],
            };
          }
        });
      },
      decreaseItem: (param) =>
        set((store) => ({
          cart: store.cart
            .map((item) =>
              item.productId === param
                ? { ...item, ammount: item.ammount - 1 }
                : item,
            )
            .filter((item) => item.ammount !== 0),
        })),
      removeItem: (param) =>
        set((store) => ({
          cart: store.cart.filter((item) => item.productId !== param),
        })),
    }),
    { name: "cart" },
  ),
);
