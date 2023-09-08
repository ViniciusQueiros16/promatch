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
    aboutUs: (
      <p>
        This is the About Us content. ProMatch is the perfect solution to
        connect contractors to a service simply and efficiently. Whether you're
        a company looking for talent or a freelancer looking for opportunities,
        ProMatch is here to help.
      </p>
    ),
    ourMission: (
      <p>
        This is the Our Mission content. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
    ),
    ourVision: (
      <p>
        This is the Our Vision content. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    ),
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
          <p className="m-auto max-w-xl text-center text-white">
            ProMatch is the perfect solution to connect contractors to a service
            simply and efficiently. Whether you're a company looking for talent
            or a freelancer looking for opportunities, ProMatch is here to help.
          </p>
        </div>

        {/* Tabs */}

        <ul class="flex border-b border-gray-200 bg-transparent text-center text-lg font-bold text-gray-500 dark:text-gray-400">
          <li className="w-full flex-1">
            <a
              className={`tabs-about block ${
                activeTab === "aboutUs" ? "border-b-2 border-gray-600" : ""
              }`}
              onClick={() => handleTabClick("aboutUs")}
            >
              About Us
            </a>
          </li>
          <li className="w-full flex-1">
            <a
              className={`tabs-about block ${
                activeTab === "ourMission" ? "border-b-2 border-gray-600" : ""
              }`}
              onClick={() => handleTabClick("ourMission")}
            >
              Our Mission
            </a>
          </li>
          <li className="w-full flex-1">
            <a
              className={`tabs-about block ${
                activeTab === "ourVision" ? "border-b-2 border-gray-600" : ""
              }`}
              onClick={() => handleTabClick("ourVision")}
            >
              Our Vision
            </a>
          </li>
        </ul>
        <div className="tab-content">{tabContents[activeTab]}</div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}

export default About;
