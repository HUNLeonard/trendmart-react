import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='mt-[var(--header-h)] max-w-[var(--cotanier-w)] mx-auto min-h-screen px-2 md:px-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout