import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import MainLayout from './components/layout/MainLayout'
import About from './pages/About'
import ScrollToTop from './components/common/ScrollRestoration'

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
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  )
}

export default App