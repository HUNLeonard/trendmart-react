import { cn } from "../../utils/cn";

interface ProductOptionSelector<T> {
  values: T[],
  selected: T,
  setSelected: React.Dispatch<React.SetStateAction<T>>;
  name: string,
  children?: React.ReactNode
}


export default function ProductOptionSelector<T>({ values, selected, setSelected, name, children }: ProductOptionSelector<T>) {
  return (<div>
    <div className='flex justify-between items-center mb-2'>
      <h3 className='font-outfit font-semibold text-neutral-dark'>{name}</h3>
      {children}
    </div>
    <div className='flex gap-2'>
      {values.map((val, index) =>
        <button key={val + "-" + index}
          onClick={() => setSelected(val)}
          className={cn(`px-3 py-1 items-center justify-center rounded-lg border cursor-pointer`,
            `${selected === val
              ? 'border-primary bg-primary/10 font-semibold'
              : 'border-neutral-medium hover:border-primary/50'}`
          )}>
          {String(val)}
        </button>)}
    </div>
  </div>);
}