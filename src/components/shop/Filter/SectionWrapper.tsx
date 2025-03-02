import React from 'react'
import { useMobilSidebar } from '../../../hooks/useMobilSidebar';
import { cn } from '../../../utils/cn';
import BurgerMenu from '../../common/BurgerMenu';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  //const sectionRef = useRef<HTMLDivElement | null>(null)
  const { isOpen, toggleOpen, isDesktopView } = useMobilSidebar(); // sectionRef?.current

  return (
    <section
      //ref={sectionRef}
      className={cn("z-40 p-5",
        "bg-white shadow-md transition-[translate] duration-500",
        isDesktopView
          ? "sticky top-[var(--header-h)] w-full rounded-lg border-neutral-dark/10 border"
          : `fixed left-0 top-[var(--header-h)] bottom-0 w-64 bg-neutral-light border-r border-neutral-dark -translate-x-full ${isOpen && "translate-x-0"}`,
      )}>
      {!isDesktopView &&
        <div className={cn('absolute -top-0.5 -right-[63px] size-16 text-black font-outfit text-3xl font-bold',
          'grid place-content-center rounded-br-2xl bg-neutral-light border-b border-r border-neutral-dark ',
          'transition boder-black/50 cursor-pointer',
          'hover:bg-neutral-medium'
        )}
          onClick={toggleOpen}
        >
          <BurgerMenu isOpen={isOpen} />
        </div>
      }
      {children}
    </section>
  )
}

export default SectionWrapper;