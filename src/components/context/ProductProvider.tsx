import React, { createContext } from "react";
import { Product } from "../types/product";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import ProductSkeleton from "../skeletons/ProductSkeleton";

interface ProductContext {
  product: Product | undefined,
  isPending: boolean,
  isError: boolean
}

export const ProductContext = createContext<ProductContext | null>(null);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const { productId } = useParams();

  const { product, isPending, isError } = useFetchProduct(productId || "");

  return (
    <ProductContext.Provider value={{ product: product, isPending, isError }}>
      {isError
        ? "Something went wrong"
        : isPending
          ? <ProductSkeleton />
          : !product
            ? "Something went wrong"
            : children
      }
    </ProductContext.Provider>
  );
};

export default ProductProvider;
