import { useRef } from "react"
import { cn } from "../../utils/cn"

interface BubbleProp {
  animationLength: number
  text?: string,
  color?: "red" | "green" | "blue"
  range?: number
}

const AddToCartBubble = ({ animationLength, text = "+", color = "green", range = 100 }: BubbleProp) => {
  const xOffset = useRef(Math.random() * range)

  const bgColor = color === "green" ? "bg-accent" : color === "red" ? "bg-error" : "bg-blue-400"

  return (
    <div
      className={cn('disapear-top absolute -top-1/2 right-0',
        'text-white size-6 font-bold grid place-content-center leading-4 rounded-full',
        bgColor
      )}
      style={{
        animationDuration: animationLength + "s",
        right: xOffset.current + "px",
      }}
    >
      {text}
    </div>
  )
}

export default AddToCartBubble