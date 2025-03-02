import { Product } from "../types/product";

interface ProductAdditionalDetailsProps {
  product: Product,
  features: string[]
}

export default function ProductAdditionalDetails({ product, features }: ProductAdditionalDetailsProps) {
  return (<div className='mt-6 bg-white rounded-xl p-6 shadow-sm border border-neutral-medium/20'>
    <h3 className='font-outfit text-xl font-bold text-neutral-dark mb-4'>Product Details</h3>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='flex flex-col gap-2'>
        <h4 className='font-outfit font-semibold text-neutral-dark'>Features</h4>
        <ul className='list-disc pl-5 text-neutral-dark'>
          {features.map(feature =>
            <li key={feature}>
              {feature}
            </li>)}
        </ul>
      </div>

      <div className='flex flex-col gap-2'>
        <h4 className='font-outfit font-semibold text-neutral-dark'>Specifications</h4>
        <div className='grid grid-cols-2 gap-2 text-sm'>
          {/* 
          In real I would have done something like "product.specifics"
          [key as string]: string*/}
          <span className='text-neutral-dark/70'>Material:</span>
          <span className='font-medium'>Cotton Blend</span>

          <span className='text-neutral-dark/70'>Style:</span>
          <span className='font-medium'>Casual</span>

          <span className='text-neutral-dark/70'>SKU:</span>
          <span className='font-medium'>{product.id}</span>

          <span className='text-neutral-dark/70'>Category:</span>
          <span className='font-medium'>{product.category}</span>
        </div>
      </div>
    </div>

    <div className='mt-6 pt-4 border-t border-neutral-medium/30'>
      <h4 className='font-outfit font-semibold text-neutral-dark mb-2'>Shipping & Returns</h4>
      <p className='text-neutral-dark'>Free shipping on orders over $50. Easy returns within 30 days of purchase.</p>
    </div>
  </div>);
}