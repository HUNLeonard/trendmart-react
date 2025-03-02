import { NavLink } from 'react-router-dom';
import { useMobilSidebar } from '../../../hooks/useMobilSidebar';
import DesktopNav from './DesktopNav';
import MobilNav from './MobilNav';
import MobilSidebar from './MobilSideBar';
import { cn } from '../../../utils/cn';

const navPages: navigationLink[] = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "products",
    text: "Shop"
  },
  {
    to: "about",
    text: "About"
  }
];

export type navigationLink = {
  to: string,
  text: string,
}

const Header = () => {
  const { isOpen, toggleOpen, isDesktopView } = useMobilSidebar();

  return (
    <header className="relative z-50">
      <div className="fixed top-0 left-0 right-0 min-h-[var(--header-h)] bg-neutral-light/95 backdrop-blur-sm border-b-2 border-neutral-dark z-20 flex items-center">
        <div className="max-w-[var(--cotanier-w)] mx-auto w-full flex flex-row justify-between items-center px-2 md:px-4 h-full">
          <NavLink to={"/"} className={cn("text-3xl font-bold font-outfit",
            "after:content-['.'] after:text-secondary"
          )}>
            TrendMart
          </NavLink>
          <DesktopNav navPages={navPages} />
          {
            !isDesktopView &&
            <MobilNav isOpen={isOpen} toggleOpen={toggleOpen} />
          }
        </div>
      </div>
      {
        !isDesktopView &&
        <MobilSidebar navPages={navPages} isOpen={isOpen} toggleOpen={toggleOpen} />
      }

    </header>
  );
};

export default Header;