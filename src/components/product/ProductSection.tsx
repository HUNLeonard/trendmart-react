import { useEffect, useMemo, useState } from 'react';
import ProductMainDetails from './ProductMainDetails';
import { useProductContext } from '../../hooks/useProductContext';
import ProductThumbnailImages from './ProductThumbnailImages';
import ProductMainImage from './ProductMainImage';
import ProductAdditionalDetails from './ProductAdditionalDetails';






const ProductSection = () => {
  const { product } = useProductContext();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0)
  }, [product])

  // Dummy thumbnails, but in real applicaiton would be "product.images <- array"
  const productImages = useMemo(() => [
    product.src,
    `https://placehold.co/600x400/FFCDD2/1F2937?font=open-sans&text=${product.name.replace("", "%20")}`,
    `https://placehold.co/600x400/CE93D8/1F2937?font=open-sans&text=${product.name.replace("", "%20")}`,
    `https://placehold.co/600x400/8D6E63/FFFFFF?font=open-sans&text=${product.name.replace("", "%20")}`
  ], [product]);

  // Dummy information for Product
  const features = useMemo(() => [
    "Premium quality materials",
    "Modern, timeless design",
    "Comfortable fit",
    "Easy care instructions",
  ], []);

  const isOnSale = useMemo(() => {
    return !!(product.originalPrice && product.price < product.originalPrice);
  }, [product.price, product.originalPrice]);

  return (
    <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto md:px-4 p-2 md:py-6 '>
      <div className='md:w-2/5 space-y-4 md:sticky top-[calc(var(--header-h)+1rem)] h-fit'>
        {/* Main product image */}
        <ProductMainImage productId={product.id} productName={product.name} mainImage={productImages[activeImage]} isOnSale={isOnSale} />

        {/* Thumbnail images */}
        <ProductThumbnailImages productName={product.name} images={productImages} value={activeImage} setter={setActiveImage} />
      </div>

      {/* Product details with enhanced styling */}
      <div className='md:w-3/5'>
        <div className='bg-white rounded-xl p-6 shadow-sm border border-neutral-medium/20'>
          <ProductMainDetails product={product} isOnSale={isOnSale} />
        </div>

        {/* Additional product information */}
        <ProductAdditionalDetails product={product} features={features} />
      </div>
    </div >
  );
};

export default ProductSection;