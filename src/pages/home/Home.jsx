// component
import Transition from '../../components/Transition';
import ProjectBtn from '../../components/ProjectBtn';
import Avatar from '../../components/Avatar';
import ParticlesContainer from '../../components/ParticlesContainer';
import { GrResume } from 'react-icons/gr';

// framer-motion
import { motion } from 'framer-motion';

// framer-motion variant
import { fadeIn } from '../../variants';

export default function Home() {
  const PF = process.env.PUBLIC_URL;

  return (
    <Transition>
      <div className="container w-full xl:flex items-center justify-around h-full mx-auto flex ">
        {/* text */}
        <div className="text-center xl:text-left  xl:max-w-xl xl:pt-40 xl:px-20">
          <motion.h1
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-lg md:text-2xl"
          >
            Welcome to digital reality, <br /> meet
            <span className="text-red-600"> Jeremiah </span>
            <span className="text-sky-800">
              Blockchain developer | MERN stack developer
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/80 text-sm"
          >
            Pioneering blockchain landscapes with full-stack mastery, Navigating
            Forex markets, strategic trades our treasury. Crafting innovative
            solutions, a code sorcerer's feat, Your business's digital journey,
            where excellence and expertise meet.
          </motion.p>

          {/* project btn */}
          <div className="flex flex-col w-fit mx-auto xl:hidden justify-center relative">
            <ProjectBtn />
            <a
              href={`${PF}/resume.pdf`}
              download
              className="flex items-center gap-2 bg-white text-sky-700 text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-sky-100 transition-all duration-300"
            >
              <GrResume className="text-lg" />
              Download Resume
            </a>
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex justify-center items-center"
          >
            <ProjectBtn className="bg-blue-300" />
            <a
              href={`${PF}/resume.pdf`}
              download
              className="flex h-fit items-center gap-2 bg-white text-sky-700 text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-sky-100 transition-all duration-300"
            >
              <GrResume className="text-lg" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* image */}
        <div className="image-container relative h-full">
          {/* overlay */}
          <div className="absolute h-full w-full  "></div>

          {/* bg for avatar */}
          <div className="bg-image hidden xl:block ">
            <img src={`${PF}/images/bg_explosion.png`} alt="avatarImage" />
          </div>

          {/* particle */}
          <div className="absolute h-full top-0">
            <ParticlesContainer />
          </div>

          {/* avatar */}
          <motion.div
            className="absolute -bottom-2 right-6 hidden xl:block z-10"
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </Transition>
  );
}
