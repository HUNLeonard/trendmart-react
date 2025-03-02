import LinkLister from '../../common/LinkLister'

const FooterCategories = () => {
  const categories = [
    {
      to: "/products?category=men",
      text: "Men's Collection"
    },
    {
      to: "/products?category=woman",
      text: "Woman's Collection"
    },
    {
      to: "/products?category=accessories",
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