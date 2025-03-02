import { Share2, ZoomIn } from "lucide-react";
import FavoriteItem from "../common/FavoriteItem";
import OnSaleBadge from "../common/OnSaleBadge";
import BubbleIcon from "../common/BubbleIcon";

interface ProductMainImageProps {
  mainImage: string,
  productId: string,
  productName?: string,
  isOnSale?: boolean
}


export default function ProductMainImage({ mainImage, productName, productId, isOnSale }: ProductMainImageProps) {
  return (<div className='relative bg-neutral-medium/20 '>
    <div className='overflow-hidden group border-2 border-neutral-dark/20 rounded-xl shadow-md'>
      <img src={mainImage} alt={productName}
        className='w-full max-h-128 aspect-square md:aspect-[4/5] object-cover object-center transition-transform duration-500 group-hover:scale-105' />
    </div>

    { /* Action buttons */}
    <div className='absolute top-4 right-4 flex flex-col gap-2'>
      <FavoriteItem productId={productId} />
      <BubbleIcon to={`#`} icon={Share2} bgColor={"bg-secondary"} title='Share Page' />
      <button className='bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition-colors'>
        <ZoomIn size={20} className='cursor-pointer' />
      </button>
    </div>

    {/* Sale badge */}
    {isOnSale && <OnSaleBadge />}
  </div>);
}