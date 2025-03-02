// ShoppingFilter.tsx
import { useEffect, useMemo, useState } from "react";
import { useFilters } from "../../../hooks/useFilters";
import { FilterType } from "../../types/filters";
import { correctMax } from "../../../utils/correctMax";
import FilterDropDown from "./FilterDropDown";
import SectionWrapper from "./SectionWrapper";
import { SlidersHorizontal } from "lucide-react";

const ShoppingFilter = () => {
  const { category, priceMin, priceMax, sortBy, setURLFilters } = useFilters();

  const initialSearchParams = useMemo(
    () => ({
      category: category || "",
      priceMin: priceMin || 0.00,
      priceMax: priceMax || 0.00,
      sortBy: (sortBy || "newest") as FilterType["sortBy"]
    }),
    [category, priceMax, priceMin, sortBy],
  );

  const [searchParams, setSearchParams] = useState<FilterType>(initialSearchParams);

  useEffect(() => {
    const correctPriceMax = correctMax(priceMin, priceMax)
    setSearchParams({ ...initialSearchParams, priceMax: correctPriceMax });
  }, [category, priceMin, priceMax, initialSearchParams]);

  const applyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const correctPriceMax = correctMax(searchParams.priceMin, searchParams.priceMax)

    setSearchParams(p => ({ ...p, priceMax: correctPriceMax }))
    setURLFilters({
      ...searchParams,
      priceMax: correctPriceMax
    });
  };

  const updateSearchParams = (field: keyof FilterType, value: string) => {
    setSearchParams(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SectionWrapper>
      <form onSubmit={applyFilters} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <SlidersHorizontal className="text-primary" size={20} />
          <h3 className="text-xl font-outfit font-semibold text-neutral-dark">Filters</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <FilterDropDown searchParams={searchParams} updateSearchParams={updateSearchParams} />
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md w-full md:w-auto whitespace-nowrap"
        >
          Apply Filters
        </button>
      </form>
    </SectionWrapper>
  );
};

export default ShoppingFilter;