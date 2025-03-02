import { cn } from '../../utils/cn'
import { priceFormatter } from '../../utils/priceFormatter'

interface ProductPriceProp {
  price: number,
  className?: string
  onSale?: boolean,
  oldPrice?: number,
}

const ProductPrice = ({ className = "", price, oldPrice, onSale = false }: ProductPriceProp) => {
  return (
    <>
      {onSale && oldPrice
        ? <div className={cn('font-bold font-outfit space-x-2 space-y-2 w-full flex flex-wrap', className)}>
          <span title={priceFormatter(price)} className='text-error drop-shadow-md'>{priceFormatter(price)}</span>
          <span title={priceFormatter(oldPrice)} className='line-through text-neutral-500/80 truncate drop-shadow-md'>{priceFormatter(oldPrice)}</span>
        </div>
        : <p className={cn('font-bold font-outfit drop-shadow-md', className)}
          title={priceFormatter(price)}
        >
          {priceFormatter(price)}
        </p>
      }
    </>

  )
}

export default ProductPrice