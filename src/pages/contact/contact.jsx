import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// framer-motion
import { motion } from "framer-motion";
// framer-motion variant
import { fadeIn } from "../../variants";
// component
import Transition from "../../components/Transition";
import ParticleContainer from "../../components/ParticlesContainer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nqjuzog", "template_eu17cht", form.current, {
        publicKey: "jIQ8EPslkTVyKHXBN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Transition>
      {/* particles */}
      <ParticleContainer />

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col h-full w-full justify-center items-center px-5"
      >
        <div className="max-w-[700px] flex flex-col mx-auto w-full gap-5">
          {/* header-container */}
          <div>
            <h2
              style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)" }}
              className="text-xl sm:text-4xl tracking-wider font-semibold text-center"
            >
              Let's <span className="text-sky-700">Connect.</span>
            </h2>
          </div>

          {/* form-container */}
          <form
            className="flex flex-col flex-1 w-full mx-auto gap-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="w-full  sm:p-1 px-1 text-sm sm:text-base   border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
              <input
                type="text"
                placeholder="email"
                name="user_email"
                className="w-full  sm:p-1 px-1 text-sm sm:text-base  border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className=" sm:p-1 px-1 text-sm sm:text-base  border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            />
            <textarea
              name="message"
              placeholder="message"
              rows="4"
              className="sm:p-2 px-1 text-sm sm:text-base  border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            ></textarea>
            <button className="text-sm sm:text-base bg-sky-800 hover:bg-sky-700 py-3 px-8 rounded-lg shadow-md transition duration-150">
              Let's talk <span>now!</span>
            </button>
          </form>

          <div className="flex flex-col items-end">
            <h1 className="text-gray-700">
              <span className="text-sky-800 text-sm sm:text-base font-semibold">
                E-mail:
              </span>
              etabebe1@gmail.com
            </h1>
            <h1 className="text-gray-700">
              <span className="text-sky-800 text-sm sm:text-base font-semibold">
                Tel:
              </span>
              +25139681965
            </h1>
          </div>
        </div>
      </motion.div>
    </Transition>
  );
}
