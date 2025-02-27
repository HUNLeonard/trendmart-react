const PulsingBubble = ({ ammount }: { ammount: number }) => {
  return (
    <>
      <div className='absolute size-full rounded-full bg-error/40 z-[-1] grow-pulse'></div>
      <div className='absolute size-full rounded-full bg-error/40 z-[-1] grow-pulse' style={{ animationDelay: "1s" }}></div>
      <div className=' bg-error/90 size-5 text-white rounded-full leading-5 text-xs'>
        <p className='z-10'>{ammount < 10 ? ammount : "9+"}</p>
      </div>
    </>
  )
}

export default PulsingBubble