import { useContext } from "react";
import { CartProviderContext } from "../components/context/CartProvider";

export const useCartContext = () => {
  const context = useContext(CartProviderContext);
  if (!context) {
    throw new Error("Context was not provided");
  }

  return { ...context };
};
