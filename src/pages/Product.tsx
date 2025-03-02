
import ProductSection from '../components/product/ProductSection';
import ProductProvider from '../components/context/ProductProvider';
import { cn } from '../utils/cn';
import PopularProducts from '../components/cards/product/PopularProducts';


const Item = () => {

  return (
    <>
      <section className={cn('mt-[calc(var(--header-h)+0.5rem)] md:mt-[calc(var(--header-h)+1rem)] shadow-sm bg-accent/10',
        'my-6 p-2 md:p-6 max-w-6xl w-full mx-auto bg-neutral-white border-2 border-neutral-dark/30 rounded-md')}>
        <ProductProvider>
          <ProductSection />
        </ProductProvider>
      </section>
      <PopularProducts text="You may also Like" className="!mb-0" />
    </>
  )
}

export default Item