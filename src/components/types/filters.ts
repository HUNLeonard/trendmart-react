export const sortValues = [
  "rateAsc",
  "rateDesc",
  "reviewCountAsc",
  "reviewCountDesc",
  "priceAsc",
  "priceDesc",
  "nameAsc",
  "nameDesc",
  "newest",
] as const;

export type FilterType = {
  category: string;
  priceMin: number;
  priceMax: number;
  sortBy: (typeof sortValues)[number];
};
