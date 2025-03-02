import { priceFormatter } from "../../utils/priceFormatter";
import CartCard from "../cards/cart/CartCard";
import { CartActions } from "../../hooks/useCart";
import { CartProps, User } from "../context/CartProvider";
import { cn } from "../../utils/cn";


export default function CartProductList({ params }: { params: CartProps & User & CartActions }) {
  const { products, cart, increaseItem, decreaseItem, removeItem } = params;

  return (<>
    {products.map((prod, index) =>
      <tr key={prod?.id || index} className="border-b border-neutral-dark/10">
        <td className='p-4'>
          <CartCard product={prod} />
        </td>
        <td className="">
          <div className="w-fit mx-auto flex flex-nowrap">
            <button
              onClick={() => increaseItem(prod.id)}
              className={cn("size-9 bg-neutral-medium cursor-pointer",
                " hover:bg-accent/40 active:bg-accent/60 transition-colors ease-in")}
            >
              +
            </button>

            <span className="w-12 inline-block text-center my-auto">{cart.find(item => item.productId === prod?.id)?.ammount || 1}</span>

            <button
              onClick={() => decreaseItem(prod.id)}
              className={cn("size-9 bg-neutral-medium cursor-pointer",
                " hover:bg-error/40 active:bg-error/60 transition-colors ease-in")}>-</button>
          </div>
        </td>
        <td className="text-center font-semibold ">
          <div className="w-fit mx-auto flex flex-nowrap items-center">
            {priceFormatter((cart.find(item => item.productId === prod?.id)?.ammount || 1) * (prod?.price || 0))}
            <button
              onClick={() => removeItem(prod.id)}
              className="size-9  cursor-pointer text-error hover:text-red-500 hover:scale-110 transition ease-in">X</button>

          </div>
        </td>
      </tr>)}
  </>);
}
