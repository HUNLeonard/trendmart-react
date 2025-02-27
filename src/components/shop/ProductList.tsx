import ProductCard from './ProductCard'
import { Product } from '../types/product'
import { cn } from '../../utils/cn'

const ProductList = ({ products, className = "" }: { products: Product[], className?: string }) => {
  return (
    <div className={cn('grid gap-4', className)}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductList