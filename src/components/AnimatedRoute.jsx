import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/about";
import Work from "../pages/work/work";
import Services from "../pages/services/services";

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
          <Route
            path="/"
            exact
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/work"
            element={
              <Layout>
                <Work />
              </Layout>
            }
          />

          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}
