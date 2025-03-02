import { Link } from "react-router-dom";
import { Product } from "../../types/product";
import ProductPrice from "../../common/ProductPrice";

export default function CartCard({ product: prod }: { product: Product }) {
  const onSaleCalculate = (price: number, ogPrice: number) => {
    return !!(ogPrice && price < ogPrice);
  }

  return (<div className="flex gap-4 ">
    <Link to={`/products/${prod.id}`} className="max-lg:hidden">
      <img src={prod.src} alt={prod.name} className='w-24 object-center object-cover aspect-square rounded-lg hover:scale-102 transition-transform ease-in' />
    </Link>

    <div className="w-full">
      <p className='line-clamp-1 font-outfit font-semibold text-neutral-dark'>
        <Link to={`/products/${prod.id}`} className="hover:text-primary transition-colors">
          {prod.name}
        </Link>
      </p>
      <ProductPrice price={prod.price || 0} oldPrice={prod.originalPrice || 0} onSale={onSaleCalculate(prod.price || 0, prod.originalPrice || 0)} />
    </div>
  </div>);
}