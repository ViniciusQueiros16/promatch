import About from "@layouts/components/About";
import Base from "@layouts/Baseof";
import Resources from "@layouts/components/Resources";
import Stats from "@layouts/components/Stats";
import Testimonials from "@layouts/components/Testimonials";
import Banner from "@layouts/components/Banner";

const Home = () => {
  return (
    <Base>
      <Banner />
      <About />
      <Resources />
      <Stats />
      <Testimonials />
    </Base>
  );
};

export default Home;
