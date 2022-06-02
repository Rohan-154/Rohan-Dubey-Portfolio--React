import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Intro from "../Intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonials/Testimonial";
import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <Intro />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
