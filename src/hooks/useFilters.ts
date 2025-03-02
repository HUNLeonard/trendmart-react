import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterType } from "../components/types/filters";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const priceMin = Number(searchParams.get("priceMin") || "0");
  const priceMax = Number(searchParams.get("priceMax") || "0");
  const sortBy = searchParams.get("sortBy") || "newest";

  const setURLFilters = useCallback((filters: FilterType) => {
    setSearchParams(
      (prev) => {
        if (filters.category.length > 0) {
          prev.set("category", filters.category);
        } else {
          prev.delete("category");
        }
        if (filters.priceMin > 0) {
          prev.set("priceMin", filters.priceMin.toString());
        } else {
          prev.delete("priceMin");
        }
        if (filters.priceMax > 0) {
          prev.set("priceMax", filters.priceMax.toString());
        } else {
          prev.delete("priceMax");
        }
        if (filters.sortBy.length > 0 && filters.sortBy !== "newest") {
          prev.set("sortBy", filters.sortBy);
        } else {
          prev.delete("sortBy");
        }
        return prev;
      },
      { replace: true },
    );
  }, []);

  return {
    category,
    priceMin,
    priceMax,
    sortBy,
    setURLFilters,
  };
};
