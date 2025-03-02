import { CartItem } from "../../components/types/cartItem";

export const getCart = async (cartId: string = "cart-1") => {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  const respond = localStorage.getItem(`${cartId}`);
  const data = JSON.parse(respond || "[]");

  return data as CartItem[];
};
