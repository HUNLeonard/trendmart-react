import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { priceFormatter } from '../../utils/priceFormatter'
import { Product } from '../types/product'
import AddToCardButton from './AddToCardButton'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={cn("w-full bg-white h-auto text-neutral-dark aspect-12/16",
      "shadow-md border-2 border-neutral-medium rounded-lg")}>
      <Link to={product.id} className='w-full overflow-hidden rounded-t-lg inline-block'>
        <img
          src={product.src}
          alt={`Image of ${product.name}`}
          className={cn('bg-neutral-dark object-cover object-center w-full aspect-square',
            'hover:scale-105 transition-all'
          )} />
      </Link>
      <div className='h-fit p-4 space-y-4'>
        <Link to={product.id} className='inline-block group w-full'>
          <h3 className={cn('font-medium sm:text-lg text-neutral-dark/70 group-hover:font-bold',
            'transition-all truncate'

          )}>
            {product.name}
          </h3>
        </Link>

        <p className='font-bold font-outfit text-lg sm:text-xl'>{priceFormatter(product.price)}</p>
        <AddToCardButton productId={product.id} />

      </div>
    </div>
  )
}

export default ProductCard