import React, { useState } from 'react';
// library
import CountUp from 'react-countup';

// component
import Transition from '../../components/Transition';
import Circles from '../../components/Circles';
import Avatar from '../../components/Avatar';
import ParticlesContainer from '../../components/ParticlesContainer';

// framer-motion custom variant
import { fadeIn } from '../../variants';
// framer-motion
import { motion } from 'framer-motion';

// Updated data
const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          'icons/icons8-html-5.svg',
          'icons/icons8-css.svg',
          'icons/icons8-javascript.svg',
          'icons/icon-mongodb.svg',
          'icons/icons8-mysql.svg',
          'icons/icons8-express-js.svg',
          'icons/icons8-react-js.svg',
          'icons/icons8-nodejs.svg',
          'icons/icons8-solidity.svg',
        ],
      },
      {
        title: 'Additional Web Skills',
        icons: [
          'icons/icons8-firebase.svg',
          'icons/redux-logo.svg',
          'icons/icons8-tailwind-css.svg',
          'icons/material-ui.svg',
          'icons/framer-motion.svg',
        ],
      },
    ],
  },
  {
    title: 'Web3',
    info: [
      {
        title: 'Smart Contracts & DApps',
        desc: 'Built decentralized apps using Solidity, Ethereum, and smart contracts with tools like Hardhat and MetaMask.',
      },
      {
        title: 'Web3 Frontend',
        desc: 'Integrated blockchain features into React apps using Ethers.js and Web3.js for wallet interaction and contract calls.',
      },
    ],
  },
  {
    title: 'Team',
    info: [
      {
        title: 'Website Development',
        desc: 'Collaborated on full-stack and Web3 projects, contributing to both UI and server-side logic.',
      },
      {
        title: 'Graphic Design',
        desc: 'Created engaging designs and visuals for both Web2 and Web3 product interfaces.',
      },
    ],
  },
  {
    title: 'Professional',
    info: [
      {
        title: 'Project-Based Courses',
        desc: 'Completed real-world projects using React, Node.js, MongoDB, Tailwind CSS, and Solidity.',
      },
      {
        title: 'Collaboration with Software Engineers',
        desc: 'Worked on full-stack and blockchain-based projects alongside experienced developers.',
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title:
          'Engineering - Addis Ababa Science and Technology University (AASTU)',
        desc: 'Studying Engineering since 2021 with focus on software systems and emerging tech like Web3.',
      },
    ],
  },
];

const About = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const PF = process.env.PUBLIC_URL;

  return (
    <Transition>
      <section className="main-container" aria-label="About Section">
        {/* particle */}
        <div className="h-full top-0" aria-hidden="true">
          <ParticlesContainer />
        </div>

        {/* all content here*/}
        <div className="absolute flex h-full">
          {/* avatar image */}
          <motion.div
            className="absolute -right-[15.5rem] bottom-0 hidden xl:flex"
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            aria-hidden="true"
          >
            <Avatar />
          </motion.div>

          {/* text content */}
          <div className="flex flex-col xl:flex-row justify-center w-screen h-full gap-y-2 md:gap-y-5 px-3 xl:px-28 md:px-24 items-center">
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" xl:h-full w-full flex flex-col justify-center items-center gap-2 md:gap-5 "
            >
              <h1
                style={{ textShadow: '2px 2px 7px rgba(0, 0, 0, 0.2)' }}
                className="text-base md:text-2xl xl:text-4xl text-center font-semibold"
              >
                Compelling<span className="text-sky-700"> journeys </span>
                inspire remarkable designs.
              </h1>
              <p className="text-white/85 text-xs md:text-sm max-w-xl">
                I started learning how to code back in high school. At first, I
                was just curious about how websites work, but that curiosity
                quickly turned into something more. Over time, I learned how to
                build full web applications using the MERN stack. More recently,
                I’ve been diving into blockchain and smart contracts. Exploring
                how Web3 works has opened a whole new world for me. It's not
                always easy, but I love the process and I’m always excited to
                learn something new.
              </p>

              {/* Counter */}
              <div
                className="container flex justify-center text-center gap-2 text-sm md:text-xl xl:text-2xl"
                role="list"
                aria-label="Experience statistics"
              >
                {/* experience */}
                <article role="listitem" aria-label="Years of experience">
                  <div className="counter-container font-semibold text-sky-700">
                    <CountUp start={0.1} end={5} duration={10} />+
                  </div>
                  <span>Years of experience</span>
                </article>

                {/*Project */}
                <article
                  role="listitem"
                  aria-label="Finished projects"
                  className="relative px-3"
                >
                  <div className="before:absolute before:bg-gray-800 before:w-[1px] before:h-full before:left-0 after:absolute after:bg-gray-800 after:w-[1px] after:h-full after:right-0 after:top-0">
                    <div className="counter-container font-semibold text-sky-700">
                      <CountUp start={1} end={50} duration={10} />+
                    </div>
                    <span>Finished Projects</span>
                  </div>
                </article>
                {/* worked with */}
                <article role="listitem" aria-label="Collaborated developers">
                  <div className="counter-container font-semibold text-sky-700">
                    <CountUp start={0.1} end={30} duration={10} />+
                  </div>
                  <span>Collaborated Developers</span>
                </article>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="data-container flex flex-col gap-3  xl:h-full w-screen justify-center items-center"
            >
              <nav
                aria-label="About categories"
                className="flex gap-4 mb-4"
                role="tablist"
              >
                {aboutData.map((item, index) => (
                  <button
                    key={index}
                    className={`relative capitalize text-sm xl:text-lg font-semibold cursor-pointer before:absolute before:h-[2px] before:bottom-0 after:absolute after:h-[2px]  after:left-0 after:top-0 hover:after:w-[100%] hover:before:w-[100%] before:transition-all before:duration-500 after:transition-all after:duration-500 
                      ${
                        index === itemIndex
                          ? 'before:bg-sky-700 before:w-[100%] after:w-[100%] after:bg-sky-700 text-sky-700'
                          : 'after:bg-white before:bg-white after:w-[5%]  before:w-[5%]'
                      } `}
                    onClick={() => setItemIndex(index)}
                    role="tab"
                    aria-selected={index === itemIndex}
                    tabIndex={index === itemIndex ? 0 : -1}
                    id={`tab-${index}`}
                    aria-controls={`tabpanel-${index}`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              {/* Details panel */}
              <section
                role="tabpanel"
                id={`tabpanel-${itemIndex}`}
                aria-labelledby={`tab-${itemIndex}`}
                className="flex flex-col gap-1 md:gap-4 text-center items-center max-w-3xl"
              >
                {aboutData[itemIndex].info.map((item, index) => (
                  <article key={index} className="mb-6">
                    <h3 className="text-sm md:text-base lg:text-lg text-sky-700">
                      {item.title}
                    </h3>

                    <div className="subtitle flex flex-wrap gap-2 md:gap-4 items-center justify-center z-20 text-center">
                      {item.icons &&
                        item.icons.map((icon, iconIndex) => (
                          <img
                            src={`${PF}/${icon}`}
                            key={iconIndex}
                            alt={`${item.title} icon ${iconIndex + 1}`}
                            className="w-[35px] md:w-[50px] xl:w-[55px] border p-1 rounded-md shadow-md hover:p-0 transition-all duration-300 z-50"
                          />
                        ))}

                      {item.desc && (
                        <p className="text-gray-600 w-full mt-2 text-[11px] md:text-[15px]">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </section>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0" aria-hidden="true">
          <Circles />
        </div>
      </section>
    </Transition>
  );
};

export default About;
