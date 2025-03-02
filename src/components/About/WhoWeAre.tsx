import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnimation } from '../../hooks/useAnimation'

const WhoWeAre = () => {
  const whoWeAre = useRef<HTMLDivElement | null>(null)
  const valuesRefs = useRef<HTMLDivElement | null>(null)
  const [whoWeAreelements, setwhoWeAreelements] = useState<Element[] | null>(null)
  const [valuesRefselements, setvaluesRefselements] = useState<Element[] | null>(null)

  useEffect(() => {
    if (whoWeAre.current) {
      setwhoWeAreelements([whoWeAre.current])
    }
    if (valuesRefs.current) {
      setvaluesRefselements([valuesRefs.current])
    }
  }, [])

  useAnimation({
    element: valuesRefselements,
    animation: "floatLeft",
  })
  useAnimation({
    element: whoWeAreelements,
    animation: "floatRight",
  })

  return (
    <section className="mx-auto max-w-4xl py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div ref={whoWeAre}>
          <h2 className="font-outfit text-2xl font-bold text-neutral-dark mb-4">Who We Are</h2>
          <p className="text-neutral-dark mb-4">
            TrendMart was founded in 2022 with a simple mission: to make fashion accessible, affordable, and sustainable for everyone.
            What started as a small online boutique has grown into a destination for fashion-forward individuals looking for the latest trends.
          </p>
          <p className="text-neutral-dark mb-4">
            Our team of passionate fashion experts curates collections from around the world, ensuring that our customers always have access to the most current styles and timeless classics.
          </p>
          <div className="mt-6">
            <Link to="/products" className="px-6 py-2 bg-primary hover:bg-secondary transition-all cursor-pointer rounded-lg text-white font-semibold shadow-md hover:shadow-lg">
              Explore Our Collections
            </Link>
          </div>
        </div>

        <div ref={valuesRefs} className="bg-white/65 rounded-xl p-6 h-full shadow-md">
          <div className="w-full h-48 md:h-64 bg-neutral-dark rounded-lg mb-4 shadow-lg">
            {/* This would be replaced with an actual image */}
            <div className="w-full h-full flex items-center justify-center text-neutral-medium overflow-hidden rounded-lg">
              <img src='https://placehold.co/600x400/1F2937/FFFFFF?font=open-sans&text=Our%20Store%20Image'
                className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out font-outfit text-lg"
              />
            </div>
          </div>
          <h3 className="font-outfit text-xl font-bold text-neutral-dark mb-2">Our Values</h3>
          <ul className="list-disc pl-5 text-neutral-dark">
            <li className="mb-2">Quality products at fair prices</li>
            <li className="mb-2">Sustainable and ethical sourcing</li>
            <li className="mb-2">Exceptional customer experience</li>
            <li className="mb-2">Inclusive fashion for all</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre