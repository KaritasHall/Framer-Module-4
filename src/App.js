import "./App.css";
import React from "react";
import HeroSection from "./Components/hero.js/hero-section";
import Services from "./Components/service.js/services";
import Testimonials from "./Components/testimonial";
import Footer from "./Components/footer";
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
