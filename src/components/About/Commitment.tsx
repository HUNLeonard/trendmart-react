import { useEffect, useRef, useState } from "react"
import { useAnimation } from "../../hooks/useAnimation"

const Commitment = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [elements, setElements] = useState<Element[] | null>(null)

  useEffect(() => {
    // Set the elements array once the ref is populated
    if (sectionRef.current) {
      setElements([sectionRef.current])
    }
  }, [])

  useAnimation({
    element: elements,
    animation: "floatUp"
  })

  return (
    <section ref={sectionRef} className="mx-auto max-w-4xl py-8 px-4 mb-12">
      <div className="bg-neutral-dark rounded-xl p-8 text-white shadow-md">
        <h2 className="font-outfit text-2xl font-bold mb-4 text-center">Our Commitment to Sustainability</h2>
        <p className="mb-6 text-center max-w-2xl mx-auto">
          At TrendMart, we believe that fashion should never come at the expense of our planet.
          That's why we're committed to sustainable practices across our entire business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Eco-Friendly Materials', desc: 'We prioritize recycled and sustainable materials in our products.' },
            { title: 'Ethical Manufacturing', desc: 'All our partner factories meet strict ethical and labor standards.' },
            { title: 'Reduced Carbon Footprint', desc: "We're constantly working to minimize our environmental impact." }
          ].map((item, index) => (
            <div key={index} className="bg-neutral-medium/8 p-4 rounded-lg border border-neutral-medium/20">
              <h3 className="font-outfit text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-neutral-medium/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Commitment