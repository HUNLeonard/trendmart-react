import { useCart } from '../../../hooks/useCart';
import { useAuthStore } from '../../../store/auth.store';
import PulsingBubble from '../../common/PulsingBubble';

const ShoppingCartCounter = () => {
  const userId = useAuthStore(store => store.userId);
  if (!userId) {
    return;
  }
  const { cart } = useCart(userId);

  return (
    <>
      {userId && cart.length > 0 &&
        <div className='absolute -top-3 -right-3 z-10'>
          <PulsingBubble ammount={cart.length} />
        </div>
      }
    </>
  )
}

export default ShoppingCartCounter