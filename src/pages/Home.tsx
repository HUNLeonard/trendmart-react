import Hero from '../components/home/Hero'
import FeauteredCategories from '../components/home/FeauteredCategories'
import PopularProducts from '../components/home/PopularProducts'

const Home = () => {
  return (
    <>
      <Hero
        title='Discover the Latest Fashion Trends'
        desc="Explore our curated collection of season's hottest items"
        buttonText='Shop Now'
        buttonTo='shop'
      />
      <FeauteredCategories />
      <PopularProducts />
    </>
  )
}

export default Home