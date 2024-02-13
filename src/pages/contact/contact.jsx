import React from "react";

// framer-motion
import { motion } from "framer-motion";

// framer-motion variant
import { fadeIn } from "../../variants";

// component
import Transition from "../../components/Transition";
import ParticleContainer from "../../components/ParticlesContainer";
import Circles from "../../components/Circles";
import TestimonialSlider from "../../components/TestimonialSlider";

export default function services() {
  return (
    <Transition>
      {/* particles */}
      <ParticleContainer />

      <div className="flex flex-col h-full justify-center items-center">
        {/* header-container */}
        <div>
          <h2
            style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
            className="text-4xl tracking-wider font-semibold text-center"
          >
            What clients <span className="text-sky-700">say.</span>
          </h2>
        </div>

        {/* input-container */}
        <div className="xl:w-[60%] w-[95%] h-[40%] p-3 ">input</div>
      </div>
    </Transition>
  );
}
