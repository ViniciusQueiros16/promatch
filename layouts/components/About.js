import ScrollAnimationWrapper from "@layouts/ScrollAnimationWrapper";
import ImageFallback from "@layouts/components/ImageFallback";
import getScrollAnimation from "@lib/utils/getScrollAnimation";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function About() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeTab, setActiveTab] = useState("aboutUs"); // Defina a tab inicial

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContents = {
    aboutUs: {
      title: "Your Partner for Seamless Connections",
      image: "/images/map-handshake-2d.png",
      text: "ProMatch is the leading platform for connecting contractors with services efficiently. With a passionate team of professionals, we are committed to revolutionizing the way businesses and freelancers find opportunities. Our goal is to make the hiring process seamless and effortless for both parties.",
    },
    ourMission: {
      title: "Empowering Professionals and Businesses",
      image: "/images/international-business.png",
      text: "At ProMatch, our mission is to bridge the gap between companies and talented professionals. We strive to provide a platform that empowers businesses to find the right expertise for their projects while offering freelancers access to exciting opportunities. We believe in creating a win-win situation for all.",
    },
    ourVision: {
      title: "Transforming the Future of Work",
      image: "/images/handshake-2d.png",
      text: "Our vision is to become the go-to destination for businesses and freelancers seeking collaboration. We envision a future where ProMatch is synonymous with success, innovation, and excellence. Join us on this journey to transform the way work gets done.",
    },
  };

  return (
    <ScrollAnimationWrapper>
      <motion.div
        className="mx-auto max-w-7xl p-12 md:px-12 xl:px-6"
        variants={scrollAnimation}
      >
        <div className="mb-20 flex flex-col justify-center px-6 py-6 md:px-0 ">
          <h1 className=" text-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-4  hover:scale-110">
            <span className="about-us ">ABOUT US</span>
          </h1>
          <h1 className="company-details -mt-6">
            Know Details About
            <br />
            Our Company
          </h1>
          <p className="m-auto my-4 max-w-xl text-center text-white">
            ProMatch is the perfect solution to connect contractors to a service
            simply and efficiently. Whether you're a company looking for talent
            or a freelancer looking for opportunities, ProMatch is here to help.
          </p>
        </div>

        {/* Tabs */}

        <ul class="flex border-b border-gray-200 bg-transparent text-center text-lg font-bold text-gray-500 dark:text-gray-400">
          <li className="w-full flex-1">
            <a
              className={`tabs-about block border-b-2 p-2 hover:border-blue-600 hover:text-blue-500  ${
                activeTab === "aboutUs"
                  ? "border-b-2 border-blue-600 text-blue-500"
                  : ""
              }`}
              onClick={() => handleTabClick("aboutUs")}
            >
              About Us
            </a>
          </li>
          <li className="w-full flex-1">
            <a
              className={`tabs-about block border-b-2 p-2 hover:border-blue-600 hover:text-blue-500 ${
                activeTab === "ourMission"
                  ? "border-b-2 border-blue-600 text-blue-500"
                  : ""
              }`}
              onClick={() => handleTabClick("ourMission")}
            >
              Our Mission
            </a>
          </li>
          <li className="w-full flex-1">
            <a
              className={`tabs-about block border-b-2 p-2 hover:border-blue-600 hover:text-blue-500   ${
                activeTab === "ourVision"
                  ? "border-b-2 border-blue-600 text-blue-500"
                  : ""
              }`}
              onClick={() => handleTabClick("ourVision")}
            >
              Our Vision
            </a>
          </li>
        </ul>
        <div className="m-8 mx-auto max-w-full overflow-hidden  bg-transparent shadow-md ">
          <div className="md:flex">
            <div className="md:shrink-0">
              <ImageFallback
                className="h-full w-full object-cover md:h-full md:w-full"
                src={tabContents[activeTab].image}
                width="500"
                height="500"
                alt="Modern building architecture"
              />
            </div>
            <div className="flex  flex-col justify-end p-12">
              <div className="company-details max-w-xl">
                <h1 classNameName="">{tabContents[activeTab].title}</h1>
              </div>

              <p className="m-auto max-w-xl text-center text-white">
                {tabContents[activeTab].text}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}

export default About;
