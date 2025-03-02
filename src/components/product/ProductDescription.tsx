import { useState } from "react";

export default function ProductDescription({ description }: { description: string }) {
  const [expandDescription, setExpandDescription] = useState(false);

  return (<div>
    <p className={`text-neutral-dark/80 ${expandDescription ? '' : 'line-clamp-2'}`}>
      {description}
    </p>
    <button onClick={() => setExpandDescription(!expandDescription)} className='text-primary font-medium mt-1 hover:underline'>
      {expandDescription ? 'Show less' : 'Read more'}
    </button>
  </div>);
}
