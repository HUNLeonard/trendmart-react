
import LinkLister from '../../common/LinkLister'

const FooterQuickLinks = () => {
  const quickLinks = [
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
    },
    {
      to: "#",
      text: "Contact"
    }
  ]

  return (
    <ul>
      <li className="font-outfit text-base xs:text-lg text-white font-semibold whitespace-nowrap">Quick Links</li>
      <LinkLister links={quickLinks} />
    </ul>
  )
}

export default FooterQuickLinks