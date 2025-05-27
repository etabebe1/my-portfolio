import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// framer-motion
import { motion } from 'framer-motion';
// framer-motion variant
import { fadeIn } from '../../variants';
// components
import Transition from '../../components/Transition';
import ParticleContainer from '../../components/ParticlesContainer';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nqjuzog', 'template_eu17cht', form.current, {
        publicKey: 'jIQ8EPslkTVyKHXBN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message has been sent!');
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <Transition>
      <section
        aria-label="Contact form"
        className="relative flex flex-col h-full w-full justify-center items-center px-5"
      >
        {/* particles */}
        <ParticleContainer aria-hidden="true" />

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[700px] w-full flex flex-col gap-5 mx-auto"
        >
          {/* Header */}
          <header>
            <h2
              style={{ textShadow: '2px 2px 7px rgba(0, 0, 0, 0.2)' }}
              className="text-xl sm:text-4xl tracking-wider font-semibold text-center"
            >
              Let's <span className="text-sky-700">Connect.</span>
            </h2>
          </header>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-6"
            ref={form}
            onSubmit={sendEmail}
            aria-describedby="contact-info"
          >
            <div className="flex gap-6 flex-wrap">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                required
                aria-label="Your Name"
                className="flex-1 min-w-[150px] sm:p-1 px-1 text-sm sm:text-base border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
                aria-label="Your Email"
                className="flex-1 min-w-[150px] sm:p-1 px-1 text-sm sm:text-base border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              aria-label="Subject"
              className="sm:p-1 px-1 text-sm sm:text-base border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              aria-label="Your Message"
              className="sm:p-2 px-1 text-sm sm:text-base border rounded-md bg-white/60 text-slate-700 backdrop-blur-sm drop-shadow-md"
            ></textarea>

            <button
              type="submit"
              className="text-sm sm:text-base bg-sky-800 hover:bg-sky-700 py-3 px-8 rounded-lg shadow-md transition duration-150"
            >
              Let's talk <span>now!</span>
            </button>
          </form>

          {/* Contact Info */}
          <address
            id="contact-info"
            className="flex flex-col items-end not-italic text-gray-700 mt-6 space-y-1"
          >
            <div>
              <span className="text-sky-800 text-sm sm:text-base font-semibold">
                E-mail:
              </span>{' '}
              <a href="mailto:etabebe1@gmail.com" className="underline">
                etabebe1@gmail.com
              </a>
            </div>
            <div>
              <span className="text-sky-800 text-sm sm:text-base font-semibold">
                Tel:
              </span>{' '}
              <a href="tel:+251939681965" className="underline">
                +251939681965
              </a>
            </div>
          </address>
        </motion.div>
      </section>
    </Transition>
  );
}
