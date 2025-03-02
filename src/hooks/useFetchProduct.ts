import { useQuery } from "@tanstack/react-query";
import { Product } from "../components/types/product";
import getProductById from "../services/product/get";

export const useFetchProduct = (id: Product["id"]) => {
  const {
    data: product,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  return { product, isPending, isError };
};
