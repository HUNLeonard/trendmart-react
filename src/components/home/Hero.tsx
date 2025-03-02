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
      <div className={cn('relative w-full bg-gradient-to-r from-primary to-secondary rounded-xl aspect-16/10 sm:aspect-16/8',
        "flex flex-col justify-between p-6 sm:p-12 md:p-16 gap-4 shadow-2xl overflow-hidden *:z-10"
      )}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/4 z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full filter blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <h1 className='font-outfit text-2xl xs:text-4xl xs:text-[2.5rem] font-bold sm:max-w-2/3'>
          {title}
        </h1>
        <p className='font-outfit text-neutral-medium'>{desc}</p>
        {buttonText &&
          <button className={cn
            ('px-6 py-2 bg-primary hover:bg-secondary transition-all cursor-pointer w-fit rounded-lg text-base xs:text-lg font-semibold',
              'hover:scale-105 active:scale-95 transition-all ease-in-out duration-300'
            )}>
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