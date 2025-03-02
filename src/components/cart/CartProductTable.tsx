import { useContext } from "react";
import { useCartContext } from "../../hooks/useCartContext";
import CartListSkeleton from "../skeletons/CartListSkeleton";
import CartProductListManager from "./CartProductListManager";
import { MobilProviderContext } from "../context/MobilProvider";


export default function CartProductTable() {
  const params = useCartContext();
  const mobilContext = useContext(MobilProviderContext);

  return (
    <section className='w-full md:w-3/5 bg-black/10 border-neutral-dark/10 border-2 rounded-lg'>
      {mobilContext?.isSmallView ? (
        // Mobile layout - card-based instead of table
        <div className="w-full p-2">
          {(params.isLoading && params.cart.length !== params.products.length) ? (
            <CartListSkeleton ammount={5} />
          ) : params.cart.length === 0 ? (
            <div className="p-4 text-center">Your cart is empty</div>
          ) : (
            <CartProductListManager params={params} isSmallView={true} />
          )}
        </div>
      ) : (
        // Desktop table layout
        <table className='w-full'>
          <thead className='bg-neutral-medium'>
            <tr className='*:font-semibold *:text-base sm:*:text-lg *:text-neutral-dark *:py-4'>
              <th className='w-1/2 md:w-2/4'>Product</th>
              <th className='w-1/4 md:w-1/4'>Quantity</th>
              <th className='w-1/4 md:w-1/4'>Total</th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {(params.isLoading && params.cart.length !== params.products.length) ? (
              <CartListSkeleton ammount={5} />
            ) : params.cart.length === 0 ? (
              <tr>
                <td className="p-8 text-center">Your cart</td>
                <td className="p-8 text-center">is</td>
                <td className="p-8 text-center">empty</td>
              </tr>
            ) : (
              <CartProductListManager params={params} isSmallView={false} />
            )}
          </tbody>
        </table>
      )}
    </section>)
}