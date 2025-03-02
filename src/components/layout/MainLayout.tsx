import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import DarkThemeProvider from '../context/DarkThemeProvider'
import MobilProvider from '../context/MobilProvider'

const MainLayout = () => {
  return (
    <DarkThemeProvider>
      <MobilProvider>
        <Header />
        <main className='relative mt-[var(--header-h)] max-w-[var(--cotanier-w)] mx-auto min-h-screen px-2 md:px-4'>
          <Outlet />
        </main>
        <Footer />
      </MobilProvider>
    </DarkThemeProvider>
  )
}

export default MainLayout