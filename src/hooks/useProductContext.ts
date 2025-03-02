import { useContext } from "react";
import { ProductContext } from "../components/context/ProductProvider";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context || !context.product) {
    throw new Error("Context was not provided");
  }

  //Typescript kept saying context.product could be undefiend
  const contextValue = {
    product: context.product,
    isPending: context.isPending,
    isError: context.isError,
  };

  return contextValue;
};
