import { cn } from "../../utils/cn";

interface ProductThumbnailImagesProps {
  images: string[],
  productName?: string
  value: number;
  setter: (arg: number) => void;
}

export default function ProductThumbnailImages({ images, productName, value, setter }: ProductThumbnailImagesProps) {

  return (<div className='flex w-full gap-2 overflow-auto p-2 fancy-scrollbar bg-white rounded-md'>
    {images.map((img, index) =>
      <button key={index}
        onClick={() => setter(index)}
        className={cn('w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer',
          value === index ? 'border-primary scale-105' : 'border-neutral-dark/50 opacity-50 hover:opacity-100 ')}>
        <img src={img} alt={`${productName} view ${index + 1}`} className='w-full h-full object-cover object-center' />
      </button>)}
  </div>);
}