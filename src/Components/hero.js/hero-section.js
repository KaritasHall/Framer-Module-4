import React from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { Section, heroAnimations, heroInfoAnimations } from "./styles";

function HeroSection() {
  return (
    <Section id="hero">
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={heroAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="hero"
      >
        <div className="content">
          <div className="title">
            <h1>Digital Crafters</h1>
          </div>
          <div className="subtitle">
            <p>
              In alteration insipidity impression by travelling reasonable up
              motionless. Of regard warmth by unable sudden garden ladies. No
              kept hung am size spot no. Likewise led and dissuade rejoiced
              welcomed husbands boy. Do listening on he suspected resembled.
              Water would still if to. Position boy required law moderate was
              may.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={heroInfoAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        className="info"
      >
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>Digital Crafters</p>
          </div>

          <div className="col">
            <strong>Email</strong>
            <p>contact@fakemail.com</p>
          </div>

          <div className="col">
            <strong>Phone</strong>
            <p>+365 12345</p>
          </div>

          <div className="col">
            <strong>Address</strong>
            <p>Hvergistræti 21</p>
            <p>101 Reykjavík</p>
          </div>

          <div className="col">
            <strong>Services</strong>
            <p>Web developement</p>
            <p>UX research and design</p>
            <p>UI design</p>
          </div>

          <div className="col">
            <strong>Office hours</strong>
            <p>Monday to Friday</p>
            <p>09:00 - 17:00</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

export default HeroSection;
