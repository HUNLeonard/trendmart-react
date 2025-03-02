import { priceFormatter } from "../../utils/priceFormatter";
import CartCard from "../cards/cart/CartCard";
import { CartActions } from "../../hooks/useCart";
import { CartProps, User } from "../context/CartProvider";
import { cn } from "../../utils/cn";


function CartMobilList({ params }: { params: CartProps & User & CartActions }) {
  return (<div className="flex flex-col gap-4">
    {params.products.map((prod, index) => <div key={prod?.id || index} className="bg-white p-3 rounded border border-neutral-dark/10">
      <CartCard product={prod} />

      <div className="flex justify-between mt-3 items-center">
        <div className="flex items-center gap-1">
          <button onClick={() => params.decreaseItem(prod.id)} className={cn("size-8 bg-neutral-medium cursor-pointer rounded-l", " hover:bg-error/40 active:bg-error/60 transition-colors ease-in")}>
            -
          </button>

          <span className="w-8 inline-block text-center my-auto text-sm">
            {params.cart.find(item => item.productId === prod?.id)?.ammount || 1}
          </span>

          <button onClick={() => params.increaseItem(prod.id)} className={cn("size-8 bg-neutral-medium cursor-pointer rounded-r", " hover:bg-accent/40 active:bg-accent/60 transition-colors ease-in")}>
            +
          </button>
        </div>

        <div className="flex items-center">
          <span className="font-semibold mr-2">
            {priceFormatter((params.cart.find(item => item.productId === prod?.id)?.ammount || 1) * (prod?.price || 0))}
          </span>

          <button onClick={() => params.removeItem(prod.id)} className="size-8 cursor-pointer text-error hover:text-red-500 hover:scale-110 transition ease-in">
            X
          </button>
        </div>
      </div>
    </div>)}
  </div>);
}



function CartDesktopView({ params }: { params: CartProps & User & CartActions }) {
  return (<>
    {params.products.map((prod) => (
      <tr className="border-b border-neutral-dark/10">
        <td className='p-4'>
          <CartCard product={prod} />
        </td>
        <td className="">
          <div className="w-fit mx-auto flex flex-nowrap">
            <button onClick={() => params.increaseItem(prod.id)} className={cn("size-9 bg-neutral-medium cursor-pointer", " hover:bg-accent/40 active:bg-accent/60 transition-colors ease-in")}>
              +
            </button>

            <span className="w-12 inline-block text-center my-auto">
              {params.cart.find(item => item.productId === prod?.id)?.ammount || 1}
            </span>

            <button onClick={() => params.decreaseItem(prod.id)} className={cn("size-9 bg-neutral-medium cursor-pointer", " hover:bg-error/40 active:bg-error/60 transition-colors ease-in")}>
              -
            </button>
          </div>
        </td>
        <td className="text-center font-semibold">
          <div className="w-fit mx-auto flex flex-nowrap items-center">
            {priceFormatter((params.cart.find(item => item.productId === prod?.id)?.ammount || 1) * (prod?.price || 0))}
            <button onClick={() => params.removeItem(prod.id)} className="size-9 cursor-pointer text-error hover:text-red-500 hover:scale-110 transition ease-in ml-1">
              X
            </button>
          </div>
        </td>
      </tr>
    ))}
  </>
  );
}


export default function CartProductListManager({ params, isSmallView = false }: { params: CartProps & User & CartActions, isSmallView?: boolean }) {
  if (isSmallView) {
    return (
      <CartMobilList params={params} />
    );
  }
  return (
    <CartDesktopView params={params} />
  );
}