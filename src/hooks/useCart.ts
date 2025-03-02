import { useCallback, useEffect, useState } from "react";
import { CartItem } from "../components/types/cartItem";
import { getCart } from "../services/cart/get";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postCart } from "../services/cart/post";
import { useCartStore } from "../store/cart.store";

export interface CartActions {
  increaseItem: (productId: string) => void;
  decreaseItem: (productId: string) => void;
  deleteCart: () => void;
  removeItem: (productId: string) => void;
}

export const useCart = (cartId: string) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const setIsLoading = useCartStore((store) => store.setIsLoading);
  const isLoading = useCartStore((store) => store.isLoading);

  const { data, isError: fetchError } = useQuery({
    queryKey: ["cart", cartId],
    queryFn: () => getCart(cartId),
  });

  useEffect(() => {
    if (data) setCart(data);
  }, [data]);

  const queryClient = useQueryClient();

  const { mutateAsync, isError: updateError } = useMutation({
    mutationKey: ["cart", cartId],
    mutationFn: (newCart: CartItem[]) => postCart(cartId, newCart),
    onSuccess: (data) => {
      queryClient.setQueryData(["cart", cartId], data);
      queryClient.invalidateQueries({
        queryKey: ["cart", cartId],
      });
    },
  });

  const increaseItem = useCallback(
    async (itemId: CartItem["productId"], ammount?: number) => {
      if (isLoading) return;
      setIsLoading(true);
      const itemExists = cart.some((item) => item.productId === itemId);
      let newCart;

      if (itemExists) {
        newCart = cart.map((item) =>
          item.productId === itemId
            ? { ...item, ammount: item.ammount + (ammount ?? 1) }
            : item,
        );
      } else {
        newCart = [...cart, { productId: itemId, ammount: ammount ?? 1 }];
      }

      setCart(newCart); // Update local state immediately
      await mutateAsync(newCart); // Wait for the server update
      setIsLoading(false);
    },
    [cart, mutateAsync, cartId, isLoading, setIsLoading],
  );

  const decreaseItem = useCallback(
    async (itemId: CartItem["productId"], ammount?: number) => {
      if (isLoading) return;
      setIsLoading(true);
      const newCart = cart
        .map((item) =>
          item.productId === itemId
            ? { ...item, ammount: item.ammount - (ammount ?? 1) }
            : item,
        )
        .filter((item) => item.ammount !== 0);

      setCart(newCart); // Update local state immediately
      await mutateAsync(newCart); // Wait for the server update
      setIsLoading(false);
    },
    [cart, mutateAsync, cartId, isLoading, setIsLoading],
  );

  const removeItem = useCallback(
    async (itemId: CartItem["productId"]) => {
      if (isLoading) return;
      setIsLoading(true);
      const newCart = cart.filter((item) => item.productId !== itemId);
      setCart(newCart); // Update local state immediately
      await mutateAsync(newCart); // Wait for the server update
      setIsLoading(false);
    },
    [cart, mutateAsync, cartId, isLoading, setIsLoading],
  );

  const deleteCart = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const newCart: CartItem[] = [];
    setCart(newCart); // Update local state immediately
    await mutateAsync(newCart); // Wait for the server update
    setIsLoading(false);
  }, [cart, mutateAsync, cartId, isLoading, setIsLoading]);

  return {
    cart,
    isLoading,
    fetchError,
    updateError,
    increaseItem,
    decreaseItem,
    removeItem,
    deleteCart,
  };
};
