import { useRef } from "react";
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

      <div className="flex flex-col h-full w-full justify-center items-center px-5">
        <div className="max-w-[700px] flex flex-col mx-auto w-full gap-5">
          {/* header-container */}
          <div>
            <h2
              style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
              className="text-4xl tracking-wider font-semibold text-center"
            >
              Let's <span className="text-sky-700">Connect.</span>
            </h2>
          </div>

          {/* form-container */}
          <form
            className="flex flex-col flex-1 w-full mx-auto gap-6"
                      >
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-1 border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
              <input
                type="text"
                placeholder="email"
                className="w-full p-1 border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="p-1 border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            />
            <textarea
              name=""
              placeholder="message"
              rows="5"
              className="p-2 border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            ></textarea>
            <button className="bg-sky-800 hover:bg-sky-700 py-3 px-8 rounded-lg shadow-md transition duration-150">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </Transition>
  );
}
