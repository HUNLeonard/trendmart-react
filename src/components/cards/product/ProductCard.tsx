import { Link } from 'react-router-dom'
import { cn } from '../../../utils/cn'
import { Product } from '../../types/product'
import AddToCartButton from '../../common/AddToCartButton'
import { useContext, useMemo, useState } from 'react'
import { MobilProviderContext } from '../../context/MobilProvider'
import OnSaleBadge from '../../common/OnSaleBadge'
import ProductCardHover from './ProductCardHover'
import ProductPrice from '../../common/ProductPrice'

const ProductCard = ({ product }: { product: Product }) => {
  const context = useContext(MobilProviderContext);
  const [isHovered, setIsHovered] = useState(false);

  const isOnSale = useMemo(() => {
    return !!(product.originalPrice && product.price < product.originalPrice);
  }, [product.price, product.originalPrice]);

  // Calculate discount percentage for sale items
  const discountPercentage = useMemo(() => {
    if (isOnSale && product.originalPrice) {
      return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    }
    return 0;
  }, [isOnSale, product.price, product.originalPrice]);

  return (
    <article
      className={cn(
        "w-full bg-white h-auto text-neutral-dark transition-all duration-300",
        "shadow-md border-2 border-neutral-medium rounded-lg relative",
        "hover:shadow-lg hover:border-primary/30",
        "flex flex-col"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isOnSale && (
        <OnSaleBadge text={`${discountPercentage}% OFF`} />
      )}

      <div className='relative w-full overflow-hidden rounded-t-lg group'>
        <Link to={`/products/${product.id}`} className="block">
          <div className="w-full aspect-square overflow-hidden">
            <img
              src={product.src}
              alt={`Image of ${product.name}`}
              className={cn(
                'bg-neutral-dark object-cover object-center w-full h-full',
                'transition-transform duration-700 ease-out',
                isHovered ? 'scale-110' : 'scale-100'
              )}
            />
          </div>
        </Link>
        <ProductCardHover productId={product.id} show={context?.isMobil ?? false} />

        {/* Quick view overlay on hover for desktop */}
        {!context?.isMobil && isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-2 
                        transition-all duration-300 flex justify-center">
            <Link
              to={`/products/${product.id}`}
              className="text-sm font-medium text-neutral-dark hover:text-primary transition-colors"
            >
              Quick View
            </Link>
          </div>
        )}
      </div>

      <div className='p-3 xs:p-4 gap-2 flex flex-col xs:gap-3 w-full flex-grow'>
        {/* Category tag */}
        {product.category && (
          <span className="text-xs text-neutral-dark/60 font-medium">
            {product.category}
          </span>
        )}

        <Link
          to={`/products/${product.id}`}
          title={product.name}
          className={cn(
            'font-medium max-xs:text-sm sm:text-lg text-neutral-dark/80',
            'hover:text-primary hover:font-semibold transition-all line-clamp-2 h-12'
          )}
        >
          {product.name}
        </Link>

        <div className="mt-auto">
          <ProductPrice
            price={product.price}
            className="xs:text-lg sm:text-xl font-semibold"
            onSale={isOnSale}
            oldPrice={product.originalPrice}
          />

          {context?.isMobil && (
            <div className="mt-3">
              <AddToCartButton
                productId={product.id}
                className="w-full justify-center text-sm py-1.5"
              />
            </div>
          )}
        </div>
      </div>


    </article>
  )
}

export default ProductCard