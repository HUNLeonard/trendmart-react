import { Link } from "react-router-dom"
import { Category } from "../../types/category"
import { cn } from "../../../utils/cn"

const CategoryCard = ({ category }: { category: Category }) => {


  return (
    <article className={cn('bg-white w-full h-auto aspect-12/16 border-2 border-neutral-medium shadow-md rounded-lg',
      'hover:shadow-lg hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 group'
    )} >
      <Link to={`products?category=${category.slug}`} className="">
        <div className="w-full aspect-square overflow-hidden rounded-t-md relative">
          <div className="absolute -inset-10 z-10 group-hover:bg-linear-0 from-black/10 to-transparent"></div>
          <img
            src={category.src}
            alt={`Image of ${category.name}`}
            className={cn(
              'bg-neutral-dark object-cover object-center w-full h-full transform-gpu',
              'transition-transform duration-700 ease-out group-hover:scale-110',
            )}
          />
        </div>
      </Link>
      <div className='px-4 py-4 space-y-4 flex flex-col justify-between *:line-clamp-2 border-t border-neutral-dark/20'>
        <p className='text-base sm:text-lg font-semibold font-outfit text-neutral-dark'>
          <Link to={`products?category=${category.slug}`} className="hover:text-primary transition-colors">
            {category.name}
          </Link>
        </p>
        <p className='text-sm text-neutral-500 '>{category.amount} item{category.amount > 0 && "s"}</p>
      </div>
    </article>
  )
}

export default CategoryCard