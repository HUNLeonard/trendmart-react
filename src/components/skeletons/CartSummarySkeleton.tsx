const CartSummarySkeleton = () => {
  return (
    <>
      <div className="space-y-2">
        <div className='flex flex-row justify-between'>
          <div className='bg-gray-400 w-24 h-6 animate-pulse'></div>
          <div className='bg-gray-400 w-20 h-6 animate-pulse'></div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='bg-gray-400 w-20 h-6 animate-pulse'></div>
          <div className='bg-gray-400 w-40 h-6 animate-pulse'></div>
        </div>
      </div>
      <div className="border-t border-neutral-dark/20 my-4"></div>

      <div className='flex flex-row justify-between mb-4'>
        <div className='bg-gray-400 w-12 h-6 animate-pulse'></div>
        <div className='bg-gray-400 w-22 h-6 animate-pulse'></div>
      </div>

      <div className="bg-gray-400 w-full h-12 animate-pulse"></div>
    </>
  )
}

export default CartSummarySkeleton