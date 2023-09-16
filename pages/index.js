import About from "@layouts/components/home/About";
import Base from "@layouts/Baseof";
import Resources from "@layouts/components/home/Resources";
import Stats from "@layouts/components/home/Stats";
import Testimonials from "@layouts/components/home/Testimonials";
import Banner from "@layouts/components/home/Banner";

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
