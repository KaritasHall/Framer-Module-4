import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { heroAnimations, heroInfoAnimations } from "./animations";

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

const Section = styled.section`
  background-color: var(--primary-color);
  min-height: 100vh;
  position: relative;
  .hero {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;
      @media screen and (max-width: 1600px) {
        width: 90%;
      }
      @media screen and (max-width: 964px) {
        padding-left: 80px;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
        padding-right: 80px;
      }
      @media screen and (max-width: 375px) {
        padding-inline: 24px;
      }

      .title {
        h1 {
          transform: translateX(-4px);
          font-size: 5rem;
          @media screen and (max-width: 816px) {
            font-size: 36px;
          }
        }
      }
      .subtitle {
        p {
          margin-bottom: 2rem;
          width: 70%;
          @media screen and (max-width: 700px) {
            width: 100%;
          }
        }
      }
    }
  }
  .info {
    position: relative;
    left: 50%;
    width: 50%;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      @media screen and (max-width: 575px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      @media screen and (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
      }
    }
    @media screen and (max-width: 1500px) {
      width: 100%;
      left: 0;
    }
    @media screen and (max-width: 827px) {
      margin-top: 48px;
      padding-inline: 16px;
    }
  }
`;

export default HeroSection;
