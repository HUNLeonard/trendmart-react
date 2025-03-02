const CartListSkeleton = ({ ammount = 5 }: { ammount: number }) => {
  return (
    <>
      {[...Array(ammount).keys()].map(row =>
        <tr className="border-b border-neutral-dark/10" key={row}>
          <td className='p-4'>
            <div className="flex gap-4">
              <div className='bg-gray-400 w-24 aspect-square animate-pulse max-lg:hidden' ></div>
              <div className="flex flex-col gap-2">
                <div className="bg-gray-400 w-24 xs:w-40 h-6 animate-pulse"></div>
                <div className="bg-gray-400 w-12 xs:w-24 h-6 animate-pulse"></div>
              </div>
            </div>
          </td>
          <td className="h-auto">
            <div className="bg-gray-400 w-16 h-6 mx-auto animate-pulse"></div>
          </td>
          <td className="h-full">
            <div className="bg-gray-400 w-12 xs:w-20 h-6 mx-auto animate-pulse"></div>
          </td>
        </tr>
      )}
    </>

  )
}

export default CartListSkeleton