import React from 'react';

// framer-motion
import { motion } from 'framer-motion';

// framer-motion variant
import { fadeIn } from '../../variants';

import Transition from '../../components/Transition';
import ParticleContainer from '../../components/ParticlesContainer';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import WorkSlider from '../../components/WorkSlider';

function Work() {
  return (
    <Transition>
      <section
        className="flex h-screen items-center relative"
        aria-label="My Projects Section"
      >
        {/* particles */}
        <ParticleContainer aria-hidden="true" />

        {/* Circle */}
        <div className="absolute bottom-0 right-0" aria-hidden="true">
          <Circles />
        </div>

        {/* All content */}
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-3 md:px-[5rem] w-full">
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center xl:text-left max-w-xl"
            >
              <h1
                style={{ textShadow: '2px 2px 7px rgba(0, 0, 0, 0.2)' }}
                className="text-xl md:text-4xl font-semibold"
              >
                My Projects
              </h1>
              <p className="text-xs sm:text-sm mt-3">
                Stay tuned for our upcoming projects, where innovation meets
                excellence. Exciting developments are on the horizon, promising
                to redefine the boundaries of technology and creativity. Join us
                as we embark on these ventures, shaping the future together.
              </p>
            </motion.div>

            {/* slider component */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:w-[60%] w-[110%] p-3"
              aria-label="Projects showcase slider"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>

        {/* Bulb */}
        <div className="bulb-container">
          {/* bulb 1 in xl screen */}
          <div
            className="absolute bottom-0 -right-28 -rotate-12 hidden xl:block"
            aria-hidden="true"
          >
            <Bulb />
          </div>

          {/* bulb 2 in sm screen */}
          <div
            className="absolute bottom-0 -left-24 rotate-12 xl:hidden"
            aria-hidden="true"
          >
            <Bulb />
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Work;
