import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { useEffect } from 'react';

import CartContent from '../components/cart/CartContent';
import CartProvider from '../components/context/CartProvider';
import CheckoutPopup from '../components/cart/CheckoutPopup';



// Create a wrapper component to handle authentication
const Cart = () => {
  const userId = useAuthStore(store => store.userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  if (!userId) {
    return null;
  }

  return (
    <CartProvider userId={userId}>
      <CartContent />
      <CheckoutPopup />
    </CartProvider>
  );
};

export default Cart;