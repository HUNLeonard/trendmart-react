import { Truck, Shield, RefreshCw } from "lucide-react";

export default function ProductBenefits() {
  return (<div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2'>
    <div className='flex items-center gap-2 text-neutral-dark/70'>
      <Truck size={18} />
      <span className='text-sm'>Free Shipping</span>
    </div>
    <div className='flex items-center gap-2 text-neutral-dark/70'>
      <Shield size={18} />
      <span className='text-sm'>Secure Checkout</span>
    </div>
    <div className='flex items-center gap-2 text-neutral-dark/70'>
      <RefreshCw size={18} />
      <span className='text-sm'>Easy Returns</span>
    </div>
  </div>);
}