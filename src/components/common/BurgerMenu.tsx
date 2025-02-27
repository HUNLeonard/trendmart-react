import { cn } from '../../utils/cn'

interface BurgerMenuProp {
  isOpen: boolean;
  toggleOpen: () => void;
}


const BurgerMenu = ({ isOpen, toggleOpen }: BurgerMenuProp) => {
  return (
    // Yeeeee, this DOES NOT look like a burger I wanna bite into, but its pretty simple just before/after took a long time to write
    <button onClick={toggleOpen}
      className={cn('relative h-6 w-8 [--line-height:4px] cursor-pointer',

        "before:absolute before:top-0 before:w-full before:h-[var(--line-height)] before:bg-black before:rounded-md",
        "before:left-0 before:transition-transform before:duration-300",

        "after:absolute after:bottom-0 after:w-full after:h-[var(--line-height)] after:bg-black after:rounded-md",
        "after:left-0  after:transition-transform after:duration-300",

        isOpen ? "after:-translate-y-2.5 after:rotate-45 before:translate-y-2.5 before:-rotate-45" : "",

      )}>
      <p className={cn('absolute w-full h-[var(--line-height)] bg-black top-1/2 -translate-y-1/2 rounded-md',
        "transition-all duration-300",
        isOpen ? "-translate-x-5 opacity-0 cursor-default select-none" : ""
      )}></p>
    </button>
  )
}

export default BurgerMenu