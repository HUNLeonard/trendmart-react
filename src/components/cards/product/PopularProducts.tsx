
import { useQuery } from "@tanstack/react-query"

import SectionTitle from "../../common/SectionTitle"
import getAllProducts from "../../../services/product/getAll"
import { cn } from "../../../utils/cn";
import ProductList from "./ProductList";

const MAXPOPULARPRODUCT = 4;

const PopularProducts = ({ text = "Popular Prodducts", className = "" }: { text?: string, className?: string }) => {
  const { data: products, isPending, isError } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: getAllProducts
  })

  return (
    <section className={cn("mb-16", className)}>
      <SectionTitle title={text} />
      <div className="overflow-x-auto fancy-scrollbar">
        {
          isError
            ? "Something went wrong"
            : isPending
              ? <ProductList skeletonArray={[...Array(MAXPOPULARPRODUCT).keys()]} skeleton={true} className="[grid-template-columns:repeat(4,minmax(250px,300px));]  my-6" />
              : <ProductList products={products.slice(0, MAXPOPULARPRODUCT)} className="[grid-template-columns:repeat(4,minmax(250px,300px));]  my-6" />
        }

      </div>
    </section>
  )
}

export default PopularProducts