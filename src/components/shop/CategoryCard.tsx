import { Category } from "../types/category"

const CategoryCard = ({ category }: { category: Category }) => {


  return (
    <article className='w-full h-auto aspect-12/16 border-2 border-neutral-medium shadow-md'>
      <img src={category.src} alt={category.name} className='object-cover object-center aspect-square bg-neutral-800' />
      <div className='px-4 py-4 space-y-4 flex flex-col justify-between *:line-clamp-2'>
        <p className='text-base sm:text-lg font-semibold font-outfit text-neutral-dark'>{category.name}</p>
        <p className='text-sm text-neutral-500 '>{category.amount} item{category.amount > 0 && "s"}</p>
      </div>
    </article>
  )
}

export default CategoryCard