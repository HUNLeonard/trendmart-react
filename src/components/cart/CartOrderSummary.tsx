import { useCartContext } from "../../hooks/useCartContext";
import { cn } from "../../utils/cn";
import CartSummarySkeleton from "../skeletons/CartSummarySkeleton";
import CartOrderSummaryDetails from "./CartOrderSummaryDetails";


export default function CartOrderSummary() {
  const params = useCartContext();

  return (<section className={cn('md:sticky top-[calc(var(--header-h)+1rem)] w-full md:w-2/5 ml-0 md:ml-4 mt-4 md:mt-0',
    'p-4 bg-black/10 rounded-lg h-fit border-2 border-neutral-dark/20')}>
    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
    {params.isLoading
      ? <CartSummarySkeleton />
      : <CartOrderSummaryDetails params={params} />
    }


  </section>);
}