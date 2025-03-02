import { ShoppingBagIcon } from 'lucide-react'
import ShoppingCartCounter from './ShoppingCartCounter'

const ShoppingCart = () => {
  return (
    <button className='relative cursor-pointer z-10 group'>
      <ShoppingBagIcon size={20} className='group-hover:scale-105 transition-[scale] transform-gpu duration-200' />
      <ShoppingCartCounter />
    </button>
  )
}

export default ShoppingCart