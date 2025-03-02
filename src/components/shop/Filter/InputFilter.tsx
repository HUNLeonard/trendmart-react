import React from 'react'

interface InputFilterProps {
  placeholder: string,
  value: number,
  execute: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFilter = ({ placeholder, value, execute }: InputFilterProps) => {
  return (
    <input
      type="number"
      value={value || ''}
      min={0.00}
      step={0.01}
      onChange={execute}
      className="w-full border border-neutral-medium/80 rounded-lg p-2.5 bg-white hover:bg-neutral-medium/20 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
      placeholder={placeholder}
    />
  )
}

export default InputFilter;