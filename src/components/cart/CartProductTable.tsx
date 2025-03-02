
import { useCartContext } from "../../hooks/useCartContext";
import CartListSkeleton from "../skeletons/CartListSkeleton";
import CartProductList from "./CartProductList";


export default function CartProductTable() {
  const params = useCartContext();

  return (<section className='w-full md:w-3/5 bg-black/10 border-neutral-dark/10 border-2 rounded-lg'>
    <table className='w-full'>
      <thead className='bg-neutral-medium'>
        <tr className='*:font-semibold *:text-lg *:xs:text-xl*:text-neutral-dark *:py-4'>
          <th className='w-1/3 md:w-2/4'>Product</th>
          <th className='w-1/3 md:w-1/4'>Quantity</th>
          <th className='w-1/3 md:w-1/4'>Total</th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        {(params.isLoading && params.cart.length !== params.products.length)
          ? <CartListSkeleton ammount={5} />
          : params.cart.length === 0
            ? <tr>
              <td className="p-8 text-center">Your cart</td>
              <td className="p-8 text-center">is</td>
              <td className="p-8 text-center">empty</td>
            </tr>
            : <CartProductList params={params} />
        }
      </tbody>
    </table>
  </section>);
}