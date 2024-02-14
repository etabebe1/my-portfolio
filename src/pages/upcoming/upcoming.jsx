import React from "react";

// framer-motion
import { motion } from "framer-motion";

// framer-motion variant
import { fadeIn } from "../../variants";

import Transition from "../../components/Transition";
import ParticleContainer from "../../components/ParticlesContainer";

const upcoming = () => {
  return (
    <Transition>
      <ParticleContainer />
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Upcoming Projects
        </h1>
        <p className="text-base md:text-lg text-center max-w-md mb-8">
          We're working on some exciting projects that will be revealed soon.
          Stay tuned for updates!
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-sky-900 text-white rounded-md shadow hover:bg-sky-800 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </Transition>
  );
};

export default upcoming;
