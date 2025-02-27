import FooterQuickLinks from "./FooterQuickLinks"
import FooterCategories from "./FooterCategories"
import FooterLogo from "./FooterLogo"
import FooterContact from "./FooterContact"
import FooterCopyright from "./FooterCopyright"
import { cn } from "../../../utils/cn"

const Footer = () => {
  return (
    <footer className="bg-neutral-dark w-full h-fit pt-4 space-y-4 *:max-w-[var(--cotanier-w)] *:mx-auto  px-4 md:px-6 mt-4 xs:mt-8">
      <div className={cn("flex flex-col sm:flex-row justify-between *:flex-1 gap-4",
        "w-full text-neutral-medium text-sm h-fit")}>
        <FooterLogo />
        <div className="flex justify-evenly gap-1/2 gap-8 shrink-0 flex-nowrap">
          <FooterQuickLinks />
          <FooterCategories />
        </div>

        <FooterContact />
      </div>
      <FooterCopyright />
    </footer>
  )
}

export default Footer