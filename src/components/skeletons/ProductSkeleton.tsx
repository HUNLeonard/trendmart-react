const ProductSkeleton = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto md:px-4 p-2 md:py-6'>
      {/* Product Image + thumbnials*/}
      <div className='md:w-2/5 space-y-4 md:sticky top-[calc(var(--header-h)+1rem)] h-fit'>
        {/* Main Image */}
        <div className='relative bg-gray-400 rounded-xl w-full max-h-128 aspect-square md:aspect-[4/5]'></div>
        {/* Thumbnail Images */}
        <div className='flex w-full gap-2 overflow-auto p-2 fancy-scrollbar'>
          {[...Array(4).keys()].map(item =>
            <div key={item} className="bg-gray-400 w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"></div>
          )}
        </div>
      </div>
      {/* Product Description*/}
      <div className='md:w-3/5'>
        {/* Main Description */}
        <div className='bg-white rounded-xl p-6 shadow-sm border border-neutral-medium/20'>
          <div className='flex flex-col w-full gap-6'>
            {/* Title + Category */}
            <div className='bg-gray-400 mb-1 w-12 h-6'></div>
            <div className='bg-gray-400 mb-3 w-40 h-10'></div>
            {/*Review Stars */}
            <div className='flex items-center'>
              <div className='flex items-center mr-3'>
                {[...Array(5).keys()].map(item =>
                  <div key={item} className="bg-gray-400 size-5 mr-1" ></div>
                )}
              </div>
              <div className="bg-gray-400 h-5 w-32" ></div>
            </div>

            {/* Price and sale info */}
            <div className="bg-gray-400 h-11 w-60"> </div>
            <div className="bg-gray-400 h-6 w-48"></div>

            {/* Details */}
            <div className="h-16 w-full space-y-1">
              <div className="bg-gray-400 h-1/3 w-full"></div>
              <div className="bg-gray-400 h-1/3 w-2/3"></div>
              <div className="bg-gray-400 h-1/3 w-24"></div>
            </div>

            {/* selection */}
            <div className="h-12 w-full space-y-1">
              <div className="bg-gray-400 h-1/2 w-16"></div>
              <div className="h-1/2 w-full gap-2 flex flex-row flex-wrap">
                {[...Array(4).keys()].map(item =>
                  <div key={item} className="bg-gray-400 h-full w-1/8"> </div>
                )}
              </div>
            </div>
            {/* Buy Button */}
            <div className="h-12 w-full flex flex-row justify-end gap-4">
              <div className="bg-gray-400 h-full w-1/3"></div>
              <div className="bg-gray-400 h-full w-1/3"></div>
            </div>

            {/* Extra */}
            <div className="h-5 w-full flex flex-row justify-between gap-4">
              <div className="bg-gray-400 h-full w-1/4"></div>
              <div className="bg-gray-400 h-full w-1/4"></div>
              <div className="bg-gray-400 h-full w-1/4"></div>
            </div>
          </div>
        </div>

        {/* Additional Description */}
        <div className='mt-6 bg-white rounded-xl p-6 shadow-sm border border-neutral-medium/20'>
          <div className='bg-gray-400 mb-4 w-1/3 h-7'></div>
          {/*Features */}
          <div className='mb-4 w-full h-6 grid grid-cols-2'>
            <div className='bg-gray-400 w-1/2 h-full'></div>
            <div className='bg-gray-400 w-1/2 h-full'></div>
          </div>
          <div className='mb-4 w-full h-24 grid grid-cols-2'>
            <div className='bg-gray-400 w-3/4 h-full'></div>
            <div className='w-full h-1/2 grid grid-cols-2'>
              <div className='bg-gray-400 w-4/5 h-full'></div>
              <div className='bg-gray-400 w-4/5 h-full'></div>
            </div>
          </div>
          {/* Shipping Info */}
          <div className='mt-6 pt-4 border-t border-neutral-medium/30 space-y-4'>
            <div className='bg-gray-400 h-6 w-2/5 mb-2'></div>
            <div className='h-12 w-full mb-2 space-y-0.5'>
              <div className='bg-gray-400 h-1/2 w-full'></div>
              <div className='bg-gray-400 h-1/2 w-1/3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton