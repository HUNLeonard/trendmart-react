import { useCallback, useRef, useState } from "react";
import { useCartStore } from "../../store/cart.store";
import { cn } from "../../utils/cn";
import { Product } from "../types/product";
import AddToCardBubble from "./AddToCardBubble";

const ANIMATION_LENGTH = 2000;

type Bubble = {
  id: number;
};

const AddToCardButton = ({ productId }: { productId: Product["id"] }) => {
  const increaseItem = useCartStore((store) => store.increaseItem);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const handleAddToCart = useCallback(() => {
    increaseItem(productId);

    const newBubble = {
      id: Date.now()
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    // Remove animation after it completes
    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.id !== newBubble.id),
      );
    }, ANIMATION_LENGTH);
  }, [productId]);

  return (
    <button
      ref={buttonRef}
      onClick={handleAddToCart}
      className={cn(
        "px-4 py-2 bg-primary hover:bg-secondary active:!bg-primary/50 text-white sm:text-lg rounded-lg",
        "cursor-pointer transition-all relative",
      )}
    >
      Add to Cart
      {bubbles.map((bubble) => (
        <AddToCardBubble
          key={bubble.id}
          animationLength={ANIMATION_LENGTH / 1000}
        />
      ))}
    </button>
  );
};

export default AddToCardButton;
