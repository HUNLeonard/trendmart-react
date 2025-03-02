import { useCallback, useState } from "react";
import { cn } from "../../utils/cn";
import { Product } from "../types/product";
import AddToCartBubble from "./AddToCartBubble";
import { useAuthStore } from "../../store/auth.store";
import { useCart } from "../../hooks/useCart";

const ANIMATION_LENGTH = 2000;

type Bubble = {
  id: string;
};

const AddToCartButton = ({ productId, className = "", ammount }: { productId: Product["id"], className?: string, ammount?: number }) => {
  const userId = useAuthStore(store => store.userId);
  if (!userId) {
    // if the user is not logged in, he cannot add an item to cart
    // OBV he will be loggedi in this example project, but ye
    return;
  }
  const { increaseItem, isLoading } = useCart(userId)
  const [bubbles, setBubbles] = useState<Bubble[]>([]);


  const handleAddToCart = useCallback(() => {
    if (!productId) return;
    increaseItem(productId, ammount);

    const newBubble = {
      id: crypto.randomUUID()
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    // Remove animation after it completes
    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.id !== newBubble.id),
      );
    }, ANIMATION_LENGTH);
  }, [productId, increaseItem, ammount]);

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={cn(
        "relative px-4 py-2 bg-primary not-disabled:hover:bg-secondary  text-white max-xs:text-sm sm:text-lg rounded-lg",
        "cursor-pointer transition-all  w-fit h-fit", className
      )}
    >
      Add to Cart
      {bubbles.map((bubble) => (
        <AddToCartBubble
          key={bubble.id}
          animationLength={ANIMATION_LENGTH / 1000}
        />
      ))}
    </button>
  );
};

export default AddToCartButton;
