import { NavLink } from "react-router-dom";
import { navigationLink } from "./Header";
import ShoppingCart from "../../cart/ShoppingCart";


const DesktopNav = ({ navPages }: { navPages: navigationLink[] }) => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex flex-row justify-between items-center text-lg font-medium gap-1">
        {navPages.map(navPage => (
          <li key={navPage.text} className="hover:scale-105 transition-[scale] transform-gpu duration-200">
            <NavLink end to={navPage.to}
              className={"px-3 rounded-xl [&.active]:bg-primary/90 [&.active]:text-white"}>
              {navPage.text}
            </NavLink>
          </li>
        ))}
        <li className="size-10 bg-primary/20 text-primary rounded-full grid place-content-center">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav