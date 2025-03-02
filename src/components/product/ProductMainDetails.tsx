import ProductPrice from '../common/ProductPrice';
import { Product } from '../types/product';
import { useState } from 'react';
import ProductAddSection from './ProductAddSection';
import ProductBenefits from './ProductBenefits';
import ReviewStars from '../common/ReviewStars';
import ProductDescription from './ProductDescription';
import ProductOptionSelector from './ProductOptionSelector';


const ProductMainDetails = ({ product, isOnSale }: { product: Product, isOnSale: boolean }) => {

  // These in a real application would be "product.options"
  // [key as string]: { string, string, sstribng...}
  // But now im gonna use dummy
  const colors = ['Black', 'White', 'Blue', 'Red'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  return (
    <div className='flex flex-col w-full gap-6'>
      {/* Product title and ratings */}
      <div>
        {product.category && (
          <div className='text-primary font-medium mb-1'>{product.category}</div>
        )}
        <h1 className='font-outfit text-2xl xs:text-3xl sm:text-4xl font-bold text-neutral-dark mb-3'>{product.name}</h1>

        <ReviewStars rate={product.rate} reviewCount={product.reviewCount} />
      </div>

      {/* Price and sale info */}
      <div>
        <ProductPrice price={product.price} oldPrice={product.originalPrice} onSale={isOnSale} className='text-2xl md:text-3xl' />
        {isOnSale && (
          <div className='mt-1 text-secondary font-medium'>
            Save ${((product.originalPrice || 0) - product.price).toFixed(2)} ({Math.round((1 - product.price / (product.originalPrice || 1)) * 100)}% off)
          </div>
        )}
      </div>

      {/* Product description */}
      <ProductDescription description={product.description} />

      {/* Color selection */}
      <ProductOptionSelector values={colors} selected={selectedColor} setSelected={setSelectedColor} name="Color" />

      {/* Size selection */}
      <ProductOptionSelector values={sizes} selected={selectedSize} setSelected={setSelectedSize} name='Size'>
        <button className='text-primary text-sm hover:underline'>Size Guide</button>
      </ProductOptionSelector>

      {/* Add to cart button with enhanced positioning */}
      <div className='mt-2'>
        <ProductAddSection />
      </div>

      {/* Benefits */}
      <ProductBenefits />
    </div>
  );
};

export default ProductMainDetails;