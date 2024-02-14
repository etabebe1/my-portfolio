import React from "react";

// component
import Transition from "../../components/Transition";
import ProjectBtn from "../../components/ProjectBtn";
import Avatar from "../../components/Avatar";
import ParticlesContainer from "../../components/ParticlesContainer";

// framer-motion
import { motion } from "framer-motion";

// framer-motion variant
import { fadeIn } from "../../variants";

export default function Home() {
  const PF = process.env.PUBLIC_URL;

  return (
    <Transition>
      <div className="container w-full xl:flex items-center justify-around h-full mx-auto flex ">
        {/* text */}
        <div className="text-center xl:text-left  xl:max-w-xl xl:pt-40 xl:px-20">
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-2xl"
          >
            Welcome to digital reality, <br /> meet
            <span className="text-red-600"> Jeremiah </span>
            <span className="text-sky-800">
              Blockchain developer | MERN stack developer
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
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
          <div className="flex xl:hidden justify-center relative">
            <ProjectBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block flex-col "
          >
            <ProjectBtn className="bg-blue-300" />
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
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </Transition>
  );
}
