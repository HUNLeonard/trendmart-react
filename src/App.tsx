import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import MainLayout from './components/layout/MainLayout'
import About from './pages/About'
import Product from './pages/Product'
import ScrollToTop from './components/common/ScrollRestoration'
import NoPage from './pages/NoPage'

const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
      }
    }
  })

  return (
    <HashRouter>
      <QueryClientProvider client={client}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<Home />} />

            <Route path="cart" element={<Cart />} />
            <Route path="products" >
              <Route index element={<Shop />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  )
}

export default App