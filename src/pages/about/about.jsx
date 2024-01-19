import React, { useState } from "react";

// component
import Transition from "../../components/Transition";
import Circles from "../../components/Circles";
import Avatar from "../../components/Avatar";
import ParticlesContainer from "../../components/ParticlesContainer";

// framer-motion variant
import { fadeIn } from "../../variants";

// framer-motion
import { motion } from "framer-motion";

// Updated data
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          "icons/icons8-html-5.svg",
          "icons/icons8-css.svg",
          "icons/icons8-javascript.svg",
          "icons/icon-mongodb.svg",
          "icons/icons8-express-js.svg",
          "icons/icons8-react-js.svg",
          "icons/icons8-nodejs.svg",
        ],
      },
      {
        title: "Additional Web Skills",
        icons: [
          "icons/icons8-firebase.svg",
          "icons/redux-logo.svg",
          "icons/icons8-tailwind-css.svg",
          "icons/material-ui.svg",
          "icons/icons8-solidity.svg",
          "icons/framer-motion.svg",
        ],
      },
    ],
  },
  {
    title: "Team",
    info: [
      {
        title: "Web & Mobile App Development",
        stage: "2022 - 2024",
      },
      {
        title: "Graphic Design",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "Professional",
    info: [
      {
        title: "Project-Based Courses",
        stage: "2022 - 2024",
      },
      {
        title: "Collaboration with Software Engineers",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title:
          "Engineering - Addis Ababa Science and Technology University (AASTU)",
        stage: "Started in 2021",
      },
    ],
  },
];

const About = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const PF = process.env.PUBLIC_URL;

  // LOGS:
  // console.log(itemIndex);

  return (
    <Transition>
      {/* particle */}
      <div className="absolute h-full top-0">
        <ParticlesContainer />
      </div>

      <div className="flex z-20 px-2">
        <Circles />
        {/* avatar image */}
        <motion.div
          className="absolute -right-[17rem] bottom-0 hidden xl:flex"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Avatar />
        </motion.div>

        {/* text */}
        <div className="text-container flex flex-col xl:flex-row items-center  w-full h-screen pt-20 xl:pt-0 z-20 xl:px-28 md:px-24 gap-y-5 gap-20">
          <div className=" xl:h-full w-full flex flex-col justify-center items-center gap-2">
            <h1
              style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
              className="text-2xl xl:text-4xl text-center font-semibold"
            >
              Compelling<span className="text-sky-700"> journeys </span>
              inspire remarkable designs.
            </h1>
            <p className="text-white/85 text-xs md:text-sm">
              From graduating high school to evolving into a MERN stack
              developer, my coding journey has been a captivating exploration of
              technology. Currently immersed in the world of blockchain, I'm
              navigating the intricacies of smart contract development. Each
              line of code is a step forward, and the learning journey in
              blockchain technology is a testament to my passion for innovation
              and continuous growth.
            </p>
          </div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="data-container flex flex-col gap-3  xl:h-full w-full justify-center items-center "
          >
            <div className="flex gap-4 ">
              {aboutData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`relative capitalize text-sm xl:text-lg font-semibold cursor-pointer before:absolute before:h-[2px] before:bottom-0 after:absolute after:h-[2px]  after:left-0 after:top-0 hover:after:w-[100%] hover:before:w-[100%] before:transition-all before:duration-500 after:transition-all after:duration-500 
                    ${
                      +index === +itemIndex
                        ? "before:bg-sky-700 before:w-[100%] after:w-[100%] after:bg-sky-700 text-sky-700"
                        : "after:bg-white before:bg-white after:w-[5%]  before:w-[5%]"
                    } `}
                    onClick={() => setItemIndex(index)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>

            {/* motion framer not working */}
            <div className="flex flex-col gap-4 text-center items-center">
              {aboutData[itemIndex].info.map((item, index) => {
                return (
                  <div key={index}>
                    {/* title */}
                    <span className="text-sm md:text-base lg:text-lg text-sky-700 ">
                      {item.title}
                    </span>

                    {/* sub-title */}
                    <div className="subtitle flex gap-x-4 items-center justify-center">
                      {item.icons &&
                        item.icons.map((icon, index) => {
                          return (
                            <img
                              src={`${PF}/${icon}`}
                              key={index}
                              alt=""
                              className="w-[35px] md:w-[50px] xl:w-[55px] border p-1 rounded-md shadow-md hover:p-0 transition-all duration-300"
                            />
                          );
                        })}

                      {/* stage */}
                      {item.stage && (
                        <p className="text-gray-600">{item.stage}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Transition>
  );
};

export default About;

{
  /* <div
                    key={index}
                    className={`${
                      item.title === dataItem &&
                      "before:bg-sky-700 before:w-[100%] after:w-[100%] after:bg-sky-700 text-sky-700"
                    }    z-30`}
                    onClick={() => setDataItem(item.title)}
                  >
                    <span>{item.title}</span>
                  </div> */
}
