
import { useCategories } from "../../../hooks/useCategories";
import CategoryCard from "./CategoryCard";
import ProductCardSkeleton from "../../skeletons/ProductCardSkeleton";

const MAXCATEGORY = 3;

const FeatureList = () => {
  const { categories, isPending, isError } = useCategories();
  return (
    <div className="overflow-auto w-full my-8 fancy-scrollbar">

      <div className="flex lg:justify-center my-4 mx-auto w-fit gap-4 *:min-w-[250px] *:max-w-[300px] sm:w-full">
        {isError
          ? "Something went wrong"
          : isPending
            ? [...Array(MAXCATEGORY).keys()].map((val) => (<ProductCardSkeleton key={val} />))
            : categories.slice(0, MAXCATEGORY).map((cat) => (<CategoryCard key={cat.id} category={cat} />))
        }
      </div>
    </div>
  );
};

export default FeatureList;
