import { useRef, useEffect, useState, useMemo } from "react"
import { useAnimation } from "../../hooks/useAnimation"

const Members = () => {
  const memberRefs = useRef<Array<HTMLDivElement | null>>([])
  const [elements, setElements] = useState<Element[] | null>(null)

  const members = useMemo(() => {
    return [
      { name: 'John Doe', role: 'Founder & CEO', bg: 'bg-primary/20' },
      { name: 'Sam Wilson', role: 'Head of Design', bg: 'bg-secondary/20' },
      { name: 'Jamie Rivera', role: 'Lead Buyer', bg: 'bg-accent/20' }
    ]
  }, [])

  useEffect(() => {
    // Filter out null refs and set elements
    const validRefs = memberRefs.current.filter(Boolean) as Element[]
    if (validRefs.length > 0) {
      setElements(validRefs)
    }
  }, [])

  useAnimation({
    element: elements,
    animation: "floatUp"
  })

  return (
    <section className="mx-auto max-w-4xl py-8 px-4">
      <h2 className="font-outfit text-2xl font-bold text-neutral-dark mb-6 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div key={index} ref={el => { memberRefs.current[index] = el }}
            className={`${member.bg} rounded-xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out`}>
            <div className="w-24 h-24 rounded-full bg-neutral-dark mx-auto mb-4">
              {/* This would be replaced with actual team member photos */}
              <div className="w-full h-full flex items-center justify-center text-neutral-medium overflow-hidden rounded-full">
                <img src='https://placehold.co/50x50/1F2937/FFFFFF?font=open-sans&text=photo'
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-outfit text-lg font-bold text-neutral-dark">{member.name}</h3>
            <p className="text-neutral-dark">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Members