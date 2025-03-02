import React from 'react'
import { textFormatter } from '../../../utils/textFormatter'
import { ChevronDown } from 'lucide-react';

interface SelectFilterProp {
  name: string,
  list: string[] | readonly string[],
  value: string,
  execute: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectFilter = ({ name, list, value, execute }: SelectFilterProp) => {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={execute}
        className="appearance-none w-full border border-neutral-medium/80 rounded-lg p-2.5 bg-white hover:bg-neutral-medium/20 transition-colors duration-300 pr-8 cursor-pointer"
      >
        <option value="" className="text-neutral-dark/60">Select {textFormatter(name)}</option>
        {list.map((item) => (
          <option key={item} value={item} className={`${value === item && "bg-primary"}`}>
            {textFormatter(item)}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary" />
    </div>
  )
}

export default SelectFilter;