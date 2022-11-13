import "./App.css";
import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import Services from "./components/service/services";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div inital="hidden" animate="show">
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}

export default App;
