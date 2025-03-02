import { cn } from '../../utils/cn'

const ProductCardSkeleton = () => {
  return (
    <article className={cn("w-full bg-white h-auto text-neutral-dark",
      "shadow-md border-2 border-neutral-medium rounded-lg relative h-64")}
    >
      <div className='relative w-full overflow-hidden rounded-t-lg group'>
        <div className='bg-gray-400 w-full aspect-square animate-pulse'></div>
        <div className='p-4 w-full aspect-6/2 space-y-4'>
          <div className='bg-gray-400 w-full h-2/4 animate-pulse'></div>
          <div className='bg-gray-400 mr-auto w-1/3 h-2/4 animate-pulse'></div>
        </div>
      </div>
    </article>
  )
}

export default ProductCardSkeleton