import { cn } from '../../../utils/cn'
import FavoriteItem from '../../common/FavoriteItem'
import BubbleIcon from '../../common/BubbleIcon'
import AddToCartButton from '../../common/AddToCartButton'
import { Eye } from 'lucide-react'

const ProductCardHover = ({ productId, show }: { productId: string, show: boolean }) => {
  return (
    <>

      {
        !show &&
        <div className={cn('absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 overflow-hidden',
          'group-hover:bg-white/10 group-hover:backdrop-blur-xs grid place-content-center transition-opacity duration-200 ease-in')}>
          <AddToCartButton productId={productId} />
          {
            !show &&
            <div className='absolute top-0 right-0 m-1 gap-1 flex flex-row'>
              <FavoriteItem productId={productId} />
              <BubbleIcon to={`/products/${productId}`} icon={Eye} bgColor={"bg-primary"} title='To Product' />
            </div>
          }
        </div>
      }
      {show &&
        <div className='absolute top-0 right-0 m-1'>
          <FavoriteItem productId={productId} />
        </div>
      }
    </>
  )
}

export default ProductCardHover