import { useQuery } from "@tanstack/react-query";

import CategoryCard from "../shop/CategoryCard";
import getAllCategories from "../../services/category/getAll";

const MAXCATEGORY = 3;

const FeatureList = () => {
  const {
    data: categories,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <div className="overflow-auto w-full my-8 fancy-scrollbar">

      <div className="flex lg:justify-center my-4 mx-auto w-fit gap-4 *:min-w-[250px] *:max-w-[300px] sm:w-full">
        {isError ? (
          "Something went wrong"
        ) : isPending ? (
          "Loading..."
        ) : (
          <>
            {categories.slice(0, MAXCATEGORY).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FeatureList;
