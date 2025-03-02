import { Link } from "react-router-dom"
import { Category } from "../../types/category"
import { cn } from "../../../utils/cn"

const CategoryCard = ({ category }: { category: Category }) => {


  return (
    <article className={cn('w-full h-auto aspect-12/16 border-2 border-neutral-medium shadow-md rounded-lg',
      'hover:shadow-lg hover:border-primary/30 transition-all duration-300 group'
    )} >
      <Link to={`products?category=${category.slug}`}>
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={category.src}
            alt={`Image of ${category.name}`}
            className={cn(
              'bg-neutral-dark object-cover object-center w-full h-full',
              'transition-transform duration-700 ease-out group-hover:scale-110',
            )}
          />
        </div>
      </Link>
      <div className='px-4 py-4 space-y-4 flex flex-col justify-between *:line-clamp-2'>
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