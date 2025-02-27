
import { useQuery } from "@tanstack/react-query"
import ProductList from "../shop/ProductList"
import SectionTitle from "../common/SectionTitle"
import getAllProducts from "../../services/product/getAll"

const MAXPOPULARPRODUCT = 4;

const PopularProducts = () => {
  const { data: products, isPending, isError } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: getAllProducts
  })

  return (
    <section className="mb-16">
      <SectionTitle title="Popular Products" />
      <div className="overflow-x-auto fancy-scrollbar">
        {
          isError
            ? "Something went wrong"
            : isPending
              ? "Loading..."
              : <ProductList products={products.slice(0, MAXPOPULARPRODUCT)} className="[grid-template-columns:repeat(4,minmax(250px,300px));]  my-6" />
        }

      </div>
    </section>
  )
}

export default PopularProducts