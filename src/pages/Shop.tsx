import PageTitle from "../components/common/PageTitle"
import FilteredProductsSection from "../components/shop/Filter/FilteredProductsSection"
import ShoppingFilter from "../components/shop/Filter/ShoppingFilter"

const Shop = () => {
  return (
    <>
      <PageTitle title="Shop Products" />
      <ShoppingFilter />
      <FilteredProductsSection />
    </>
  )
}

export default Shop