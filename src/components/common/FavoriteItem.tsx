import { Heart } from 'lucide-react'

const FavoriteItem = ({ productId, isFavorite }: { productId: string, isFavorite?: boolean }) => {
  return (
    <button
      onClick={() => console.log("Fav:" + productId)}
      title='Toggle Favorite'
      className='cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-error hover:text-white transition-colors'>
      <Heart size={20}
        className={isFavorite ? 'fill-white hover:fill-neutral-dark' : ' '} />
    </button>
  )
}

export default FavoriteItem