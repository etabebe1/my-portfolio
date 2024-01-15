import React from "react";

// component
import Transition from "../../components/Transition";
import ProjectBtn from "../../components/ProjectBtn";
import Avatar from "../../components/Avatar";

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
        <div className="text-center xl:text-left h-full xl:max-w-xl xl:pt-40 xl:px-20">
          <h1 className="h1 text-2xl">
            Welcome to digital reality, <br /> meet
            <span className="text-red-600"> Jeremiah </span>
            <span className="text-sky-800">
              Blockchain Alchemist | Code Maestro
            </span>
          </h1>
          {/* subtitle */}
          <p className="text-white/80 text-sm">
            Pioneering blockchain landscapes with full-stack mastery, Navigating
            Forex markets, strategic trades our treasury. Crafting innovative
            solutions, a code sorcerer's feat, Your business's digital journey,
            where excellence and expertise meet.
          </p>

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
        <div className="image-container w-full h-full right-0 relative">
          <div
            className="h-full w-full mix-blend-light"
            style={{
              backgroundImage: `url(${PF}/images/bg_explosion.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* avatar */}
            <div>
              <Avatar />
            </div>
          </div>
          <div className=" text-3xl text-black"> particle</div>
          {/* particle */}
        </div>
      </div>
    </Transition>
  );
}
