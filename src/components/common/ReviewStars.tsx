import { Star, StarHalfIcon } from "lucide-react";
import React, { useMemo } from "react";

export default function ReviewStars({ rate, reviewCount }: { rate: number, reviewCount: number }) {
  const wholeStar = useMemo(() => {
    return Math.floor(rate);
  }, [rate]);

  const extraStar = useMemo(() => {
    const value = rate - wholeStar;

    if (value <= 0.25) return <></>;
    else if (value < 0.75) return <StarHalfIcon size={24} className='text-yellow-300' />;
    return <Star size={24} className='text-yellow-300 fill-yellow-300' />;

  }, [wholeStar, rate]);


  return (<div className='flex items-center'>
    <div className='flex items-center mr-3'>
      {[...Array(wholeStar).keys()].map((val, index) => <Star key={val + "-" + index} size={20} className='text-yellow-300 fill-yellow-300' />)}
      {extraStar && React.cloneElement(extraStar, {
        size: 20
      })}
    </div>
    <span className='text-neutral-dark font-medium'>{rate}</span>
    <span className='mx-2 text-neutral-dark/40'>•</span>
    <span className='text-neutral-dark/70'>{reviewCount} reviews</span>
  </div>);
}