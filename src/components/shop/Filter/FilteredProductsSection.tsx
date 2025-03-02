import ProductList from '../../cards/product/ProductList'
import { useQuery } from '@tanstack/react-query'
import getAllProducts from '../../../services/product/getAll'
import { useFilters } from '../../../hooks/useFilters'
import { sortArray } from '../../../utils/sortArray'
import { Product } from '../../types/product'
import { useMemo } from 'react'

const FilteredProductsSection = () => {
  const { data: products, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
  })
  const { category, priceMin, priceMax, sortBy } = useFilters();

  //const { category, priceMin, priceMax } = useFilters();
  const filteredProducts = useMemo(() => {
    return products?.filter(product =>
      product.category.includes(category || "") &&
      (priceMin ?? 0) <= product.price &&
      product.price <= (priceMax > 0 ? priceMax : product.price)) || [];
  }, [products, priceMin, priceMax, category])

  const correctSortBy = sortBy === "newest" ? "" : sortBy
  const sortedProducts = useMemo(() => { return sortArray<Product>(filteredProducts, correctSortBy) }, [filteredProducts, correctSortBy]);

  return (
    <section>
      {
        isError
          ? "Something went wrong"
          : isPending
            ? <ProductList skeletonArray={[...Array(20).keys()]} skeleton={true} className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6" />
            : <ProductList products={sortedProducts} className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6" />
      }

    </section>
  )
}

export default FilteredProductsSection