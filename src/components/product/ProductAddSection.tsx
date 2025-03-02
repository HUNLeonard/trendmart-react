import { useCallback, useState } from 'react';
import { useProductContext } from '../../hooks/useProductContext';
import { cn } from '../../utils/cn';
import AddToCartButton from '../common/AddToCartButton'


const ProductAddSection = () => {
  const { product } = useProductContext();
  const [count, setCount] = useState(1)

  const increase = useCallback(() => {
    setCount(p => p + 1)
  }, []);

  const decrease = useCallback(() => {
    if (count > 1) {
      setCount(p => p - 1)
    }
  }, [count]);

  return (
    <div className='flex justify-end items-end flex-wrap gap-2 h-fit mt-auto'>

      <div className={cn('flex flex-row flex-nowrap items-center border-neutral-dark/70 h-full ',
        '*:border-neutral-dark/70 *:not-first:border-l-2 border-2 rounded-md ',
        '*:aspect-square font-semibold *:flex *:items-center *:justify-center text-xl *:size-11')}
      >
        <button onClick={increase}
          className='relative bg-neutral-medium cursor-pointer hover:bg-accent active:bg-neutral-dark/70 rounded-l'>+
        </button>

        <p className='bg-white'>{count}</p>

        <button onClick={decrease}
          className='relative bg-neutral-medium cursor-pointer hover:bg-error active:bg-neutral-dark/70 rounded-r'>-

        </button>
      </div>
      <AddToCartButton productId={product.id} className='!text-2xl' ammount={count} />

    </div>
  )
}

export default ProductAddSection