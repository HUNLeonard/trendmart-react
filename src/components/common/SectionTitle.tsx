const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='relative text-2xl xs:text-3xl font-semibold font-outfit text-neutral-dark after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-primary after:rounded-full'>{title}</h2>
  )
}

export default SectionTitle