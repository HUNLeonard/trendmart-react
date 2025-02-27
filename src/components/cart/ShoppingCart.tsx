import { ShoppingBagIcon } from 'lucide-react'
import { useCartStore } from '../../store/cart.store'
import { NavLink } from 'react-router-dom'
import PulsingBubble from './PulsingBubble'

const ShoppingCart = () => {
  const cart = useCartStore(store => store.cart)


  return (
    <button className='relative cursor-pointer z-10 group'>
      <NavLink to="cart"><ShoppingBagIcon size={20} className='group-hover:scale-105 transition-[scale] transform-gpu duration-200' /></NavLink>
      {cart.length > 0 &&
        <div className='absolute -top-3 -right-3 z-10'>
          <PulsingBubble ammount={cart.length} />
        </div>
      }
    </button>
  )
}

export default ShoppingCart