import { useRef } from "react"

const AddToCardBubble = ({ animationLength }: { animationLength: number }) => {
  const xOffset = useRef(Math.random() * 100)

  return (
    <div
      className='disapear-top absolute -top-1/2 right-0 bg-accent text-white size-6 font-bold grid place-content-center leading-4 rounded-full'
      style={{
        animationDuration: animationLength + "s",
        right: xOffset.current + "px",
      }}
    >
      +
    </div>
  )
}

export default AddToCardBubble