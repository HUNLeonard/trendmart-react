import { NavLink } from "react-router-dom";
import { navigationLink } from "./Header";
import { cn } from "../../../utils/cn";


interface MobilNavProp {
  navPages: navigationLink[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const MobilSidebar = ({ navPages, isOpen, toggleOpen }: MobilNavProp) => {
  return (
    <div
      className={cn(
        "fixed top-[var(--header-h)] right-0 bottom-0 w-64 bg-neutral-light border-l border-neutral-dark z-20 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <nav className="p-4">
        <ul className="flex flex-col gap-2">
          {navPages.map((navPage) => (
            <li key={navPage.text} className="hover:bg-primary/10 rounded-lg">
              <NavLink
                end
                to={navPage.to}
                className={({ isActive }) =>
                  cn(
                    "block py-2 px-4 w-full",
                    isActive ? "bg-primary/90 text-white rounded-lg" : "",
                  )
                }
                onClick={toggleOpen}
              >
                {navPage.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobilSidebar;
