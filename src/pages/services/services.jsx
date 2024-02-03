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
      <div className="flex h-full items-center py-36">
        {/* particles */}
        <ParticleContainer />

        {/* Circle */}
        <div className="absolute bottom-0 right-0">
          <Circles />
        </div>

        {/* All content */}
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center gap-3 md:px-[5rem] text-center xl:text-left">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <h1 className="text-4xl font-semibold">My services</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                repudiandae, enim aliquid dicta magni expedita dignissimos quod
                rem. Maiores, rerum eveniet sit voluptatem sint officia. Cumque
                maxime consequatur rerum! Sunt?
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
