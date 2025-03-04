import React, { createContext, useMemo, useState } from 'react'
import { CartActions, useCart } from '../../hooks/useCart';
import { useQueries } from '@tanstack/react-query';
import getProductById from '../../services/product/get';
import { Product } from '../types/product';
import { CartItem } from '../types/cartItem';

export interface CartProps {
  products: Product[],
  isLoading: boolean,
  cart: CartItem[]
}

export interface User {
  userId: string
}

export interface Checkout {
  checkout: boolean;
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartProviderContext = createContext<CartProps & User & CartActions & Checkout | null>(null);

const CartProvider = ({ children, userId }: { children: React.ReactNode, userId: string }) => {
  const { cart = [], increaseItem, decreaseItem, deleteCart, removeItem } = useCart(userId);
  const [checkout, setCheckout] = useState(false);

  const productResults = useQueries({
    queries: cart.map(item => ({
      queryKey: ['product', item.productId],
      queryFn: () => getProductById(item.productId),
      staleTime: 300000, // 5 minutes
    })),
  });

  // Check if every product loaded in
  const isLoading = useMemo(() => { return productResults.some(result => result.isLoading) }, [productResults]);

  const products = useMemo(() => {
    return isLoading
      ? []
      : productResults
        .map(result => result.data)
        .filter(Boolean) as Product[]
  }, [productResults, isLoading]);


  return (
    <CartProviderContext.Provider value={{ products, increaseItem, decreaseItem, deleteCart, removeItem, cart, isLoading: isLoading || products.length !== cart.length, userId, checkout, setCheckout }}>
      {children}
    </CartProviderContext.Provider>
  )
}

export default CartProvider