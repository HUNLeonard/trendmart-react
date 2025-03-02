import ProductCard from './ProductCard'
import { Product } from '../../types/product'
import { cn } from '../../../utils/cn'
import ProductCardSkeleton from '../../skeletons/ProductCardSkeleton'

interface ProductListProp {
  products?: Product[],
  className?: string,
  skeleton?: boolean,
  skeletonArray?: number[]
}


const ProductList = ({ products, className = "", skeleton = false, skeletonArray = [] }: ProductListProp) => {
  return (
    <div className={cn('grid gap-2 xs:gap-4 my-6', className)}>
      {skeleton
        ? skeletonArray.map(product => <ProductCardSkeleton key={product} />)
        : products?.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}

export default ProductList