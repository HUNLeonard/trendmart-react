import { CartItem } from "../../components/types/cartItem";

export const postCart = async (cartId: string = "cart-1", cart: CartItem[]) => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
  try {
    localStorage.setItem(`${cartId}`, JSON.stringify(cart));
    return cart;
  } catch (error) {
    console.error(`An error occurred during setting data: ${error}`);
    throw error;
  }
};
