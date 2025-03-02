import { CartProps, User } from '../context/CartProvider';
import { priceFormatter } from '../../utils/priceFormatter';
import { CartActions } from '../../hooks/useCart';
import { cn } from '../../utils/cn';




const CartOrderSummaryDetails = ({ params }: { params: CartProps & User & CartActions }) => {

  const { cart, products, deleteCart } = params;

  return (
    <>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{priceFormatter(products.reduce((sum, prod) => {
          const quantity = cart.find(item => item.productId === prod?.id)?.ammount || 1;
          return sum + (prod?.price || 0) * quantity;
        }, 0))}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </div>
      <div className="border-t border-neutral-dark/20 my-4"></div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{priceFormatter(products.reduce((sum, prod) => {
          const quantity = cart.find(item => item.productId === prod?.id)?.ammount || 1;
          return sum + (prod?.price || 0) * quantity;
        }, 0))}</span>
      </div>
      <button
        onClick={deleteCart}
        className={cn("w-full bg-neutral-dark text-white py-3 rounded mt-4 font-semibold cursor-pointer",
          "hover:bg-neutral-dark/90 active:bg-neutral-dark/95 active:scale-95 [transition:colors_transform] duration-200 ease-in-out")}
      >
        Proceed to Checkout
      </button>
    </>
  )
}

export default CartOrderSummaryDetails