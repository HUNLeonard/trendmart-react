import { useQuery } from "@tanstack/react-query";
import getAllCategories from "../services/category/getAll";

export const useCategories = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const categories = data || [];

  return { categories, isPending, isError };
};
