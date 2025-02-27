import ShoppingCart from "../../cart/ShoppingCart";
import BurgerMenu from "../../common/BurgerMenu";


interface MobilNavProp {
  isOpen: boolean;
  toggleOpen: () => void;
}

const MobilNav = ({ isOpen, toggleOpen }: MobilNavProp) => {
  return (
    <nav className="md:hidden">
      <ul className="flex flex-row items-center justify-stretch text-lg font-medium gap-2">
        <li className="size-10 bg-primary/20 text-primary rounded-full grid place-content-center">
          <ShoppingCart />
        </li>
        <li className="grid place-content-center">
          <BurgerMenu isOpen={isOpen} toggleOpen={toggleOpen} />
        </li>
      </ul>
    </nav>
  );
};

export default MobilNav;
