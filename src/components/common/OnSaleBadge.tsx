import { cn } from "../../utils/cn"

const OnSaleBadge = ({ text = "Sale!" }: { text?: string }) => {
  return (
    <div className={cn("[--bubble-size:3rem] xs:[--bubble-size:5rem] md:[--bubble-size:4rem]",
      "absolute top-0 left-0 font-outfit font-bold text-center",
      "rounded-full size-[var(--bubble-size)] bg-error text-white z-10 p-4 grid place-content-center",
      "-translate-x-[var(--bubble-size)/5] -translate-y-[var(--bubble-size)/5] text-sm xs:text-lg"
    )}>
      {text}
    </div>
  )
}

export default OnSaleBadge