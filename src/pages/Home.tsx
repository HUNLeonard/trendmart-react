import Hero from '../components/home/Hero'
import FeauteredCategories from '../components/home/FeauteredCategories'
import PopularProducts from '../components/cards/product/PopularProducts'

const Home = () => {
  return (
    <>
      <Hero
        title='Discover the Latest Fashion Trends'
        desc="Explore our curated collection of season's hottest items"
        buttonText='Shop Now'
        buttonTo='products'
      />
      <FeauteredCategories />
      <PopularProducts />
    </>
  )
}

export default Home