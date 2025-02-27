import LinkLister from '../../common/LinkLister'

const FooterCategories = () => {
  const categories = [
    {
      to: "/shop?category=men",
      text: "Men's Collection"
    },
    {
      to: "/shop?category=women",
      text: "Women's Collection"
    },
    {
      to: "/shop?category=accessories",
      text: "Acessories"
    }
  ]

  return (
    <ul>
      <li className="font-outfit text-base xs:text-lg text-white font-semibold whitespace-nowrap">Categories</li>
      <LinkLister links={categories} />
    </ul>
  )
}

export default FooterCategories