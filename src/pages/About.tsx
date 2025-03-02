import Commitment from '../components/About/Commitment';
import Members from '../components/About/Members';
import WhoWeAre from '../components/About/WhoWeAre';
import Hero from '../components/home/Hero';

const About = () => {
  return (
    <>
      <Hero
        title='Our Story'
        desc="Discover the people and passion behind TrendMart"
        buttonText='Contact Us'
        buttonTo='contact'
      />

      <WhoWeAre />

      <Members />

      <Commitment />
    </>
  );
};

export default About;