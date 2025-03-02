import { NavLink } from "react-router-dom";
import { navigationLink } from "./Header";
import ShoppingCart from "./ShoppingCart";


const DesktopNav = ({ navPages }: { navPages: navigationLink[] }) => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex flex-row justify-between items-center text-lg font-medium gap-1">
        {navPages.map((navPage, index) => (
          <li key={navPage.text + "-" + index} className="hover:scale-105 transition-[scale] transform-gpu duration-200">
            <NavLink end to={navPage.to}
              className={"px-3 rounded-xl [&.active]:bg-primary/90 [&.active]:text-white [&.active]:hover:bg-secondary transition-all"}>
              {navPage.text}
            </NavLink>
          </li>
        ))}
        <NavLink to="cart" className="size-10 bg-primary/20 text-primary rounded-full grid place-content-center [&.active]:**:fill-secondary">
          <ShoppingCart />
        </NavLink>
      </ul>
    </nav>
  );
};

export default DesktopNav