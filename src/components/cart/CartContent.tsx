
import PageTitle from "../common/PageTitle";
import CartOrderSummary from "./CartOrderSummary";
import CartProductTable from "./CartProductTable";
import { useCartContext } from "../../hooks/useCartContext";

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <>
      <PageTitle title={`Your Cart (${cart.length})`} />
      <section className="flex flex-col-reverse max-md:gap-4 md:flex-row">
        <CartProductTable />
        <CartOrderSummary />
      </section>
    </>
  );
};

// Export the wrapper component
export default CartContent;