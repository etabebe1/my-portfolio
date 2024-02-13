import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/about";
import Work from "../pages/work/work";
import Services from "../pages/services/services";
import Testimonials from "../pages/testimonials/testimonials";
import Contact from "../pages/contact/contact";

// framer-motion
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoute() {
  const location = useLocation();

  // LOGS:
  // console.log(location);

  return (
    <AnimatePresence>
      <Layout>
        <Routes location={location} key={location.pathname}>
          {/* Home Route */}
          <Route
            path="/"
            exact
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* About Route */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* Work Route */}
          <Route
            path="/work"
            element={
              <Layout>
                <Work />
              </Layout>
            }
          />

          {/* Service Route */}
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />

          {/* Testimonials Route */}
          <Route
            path="/testimonials"
            element={
              <Layout>
                <Testimonials />
              </Layout>
            }
          />

          {/* Contact Route */}
          <Route
            path="contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}
