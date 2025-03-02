import Hero from '../components/home/Hero';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Hero
        title='Our Story'
        desc="Discover the people and passion behind TrendMart"
        buttonText='Contact Us'
        buttonTo='contact'
      />

      <section className="mx-auto max-w-4xl py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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

          <div className="bg-white/65 rounded-xl p-6 h-full shadow-md">
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

      <section className="mx-auto max-w-4xl py-8 px-4">
        <h2 className="font-outfit text-2xl font-bold text-neutral-dark mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'John Doe', role: 'Founder & CEO', bg: 'bg-primary/20' },
            { name: 'Sam Wilson', role: 'Head of Design', bg: 'bg-secondary/20' },
            { name: 'Jamie Rivera', role: 'Lead Buyer', bg: 'bg-accent/20' }
          ].map((member, index) => (
            <div key={index} className={`${member.bg} rounded-xl p-6 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out`}>
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

      <section className="mx-auto max-w-4xl py-8 px-4 mb-12">
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
    </>
  );
};

export default About;