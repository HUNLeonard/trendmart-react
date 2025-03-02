import { ArrowDownAZ, Tag } from "lucide-react";
import { FilterType, sortValues } from "../../types/filters";
import InputFilter from "./InputFilter";
import PriceWrapper from "./PriceWrapper";
import SelectFilter from "./SelectFilter";

interface FilterDropdownProps {
  searchParams: FilterType;
  updateSearchParams: (field: keyof FilterType, value: string) => void;
}

const availableCategories = ["men", "woman", "accessories"];
const availableSorts = sortValues;

const FilterDropdown = ({
  searchParams,
  updateSearchParams,
}: FilterDropdownProps) => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center gap-1 mb-1.5">
          <Tag size={16} className="text-primary" />
          <p className="font-medium text-sm text-neutral-dark/80">Category</p>
        </div>
        <SelectFilter
          name="category"
          list={availableCategories}
          value={searchParams.category}
          execute={(e) => {
            updateSearchParams("category", e.target.value);
          }}
        />
      </div>

      <PriceWrapper>
        <div className="flex flex-col w-full">
          <div className="space-y-3">
            <div>
              <p className="font-medium text-sm mb-1.5 text-neutral-dark/80">Min Price</p>
              <InputFilter
                placeholder="Min Price"
                value={searchParams.priceMin}
                execute={(e) => updateSearchParams("priceMin", e.target.value)}
              />
            </div>
            <div>
              <p className="font-medium text-sm mb-1.5 text-neutral-dark/80">Max Price</p>
              <InputFilter
                placeholder="Max Price"
                value={searchParams.priceMax}
                execute={(e) => updateSearchParams("priceMax", e.target.value)}
              />
            </div>
          </div>
        </div>
      </PriceWrapper>

      <div className="w-full">
        <div className="flex items-center gap-1 mb-1.5">
          <ArrowDownAZ size={16} className="text-primary" />
          <p className="font-medium text-sm text-neutral-dark/80">Sort By</p>
        </div>
        <SelectFilter
          name="sortBy"
          list={availableSorts}
          value={searchParams.sortBy}
          execute={(e) => {
            updateSearchParams("sortBy", e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default FilterDropdown;
