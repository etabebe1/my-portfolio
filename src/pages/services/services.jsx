import React from "react";

// framer-motion
import { motion } from "framer-motion";

// framer-motion variant
import { fadeIn } from "../../variants";

import Transition from "../../components/Transition";
import ParticleContainer from "../../components/ParticlesContainer";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

export default function services() {
  return (
    <Transition>
      <div className="flex h-screen items-center py-36">
        {/* particles */}
        <ParticleContainer />

        {/* Circle */}
        <div className="absolute bottom-0 right-0">
          <Circles />
        </div>

        {/* All content */}
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-x-4 md:px-[5rem] text-center xl:text-left">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col"
            >
              <h1
                style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
                className="text-xl md:text-4xl font-semibold"
              >
                My services
              </h1>
              <p className="text-xs sm:text-sm">
                Delivering cutting-edge solutions across the full development
                spectrum, I specialize in the MERN stack, crafting seamless
                front-end experiences, robust back-end systems, and
                comprehensive SEO strategies. As a full-stack developer, my
                services encompass end-to-end development, ensuring your project
                not only meets but exceeds expectations. Let's build something
                remarkable together.
              </p>
            </motion.div>

            {/* slider component */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full max-w-[95%] xl:w-[65%]"
            >
              <ServiceSlider></ServiceSlider>
            </motion.div>
          </div>
        </div>

        {/* Bulb */}
        <div className="bulb-container  ">
          {/* bulb 1 in xl - screen */}
          <div className="absolute bottom-0 -right-28  -rotate-12 hidden xl:block">
            <Bulb />
          </div>

          {/* bulb 2 in sm - screen */}
          <div className="absolute bottom-0 -left-24 rotate-12 xl:hidden">
            <Bulb />
          </div>
        </div>
      </div>
    </Transition>
  );
}
