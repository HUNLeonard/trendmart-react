import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface HeroProps {
  title: string,
  desc: string,
  buttonText?: string,
  buttonTo?: string,
}

const Hero = ({ title, desc, buttonText, buttonTo }: HeroProps) => {
  return (
    <section className='mx-auto max-w-4xl py-2 sm:py-6 text-white'>
      <div className={cn('w-full bg-neutral-dark rounded-xl aspect-16/10 sm:aspect-16/8 ',
        "flex flex-col justify-between p-6 sm:p-12 md:p-16 gap-4"
      )}>
        <h1 className='font-outfit text-2xl xs:text-4xl xs:text-[2.5rem] font-bold sm:max-w-2/3'>
          {title}
        </h1>
        <p className='font-outfit text-neutral-medium'>{desc}</p>
        {buttonText &&
          <button className='px-6 py-2 bg-primary hover:bg-primary/90 cursor-pointer w-fit rounded-lg text-base xs:text-lg font-semibold'>
            {buttonTo ?
              <NavLink to={buttonTo}>
                {buttonText}
              </NavLink>
              : buttonText
            }
          </button>
        }
      </div>
    </section>
  )
}

export default Hero