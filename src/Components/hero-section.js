import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";

function HeroSection() {
  return (
    <Section id="hero">
      <Navbar />
      <div className="hero">
        <div className="content">
          <div className="title">
            <h1>Digital crafters</h1>
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
        <div className="info">
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
        </div>
      </div>
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
      .title {
        h1 {
          transform: translateX(-4px);
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subtitle {
        p {
          margin-bottom: 2rem;
          width: 70%;
        }
      }
    }

    .info {
      position: absolute;
      bottom: -6rem;
      right: 0;
      background-color: var(--secondary-color);
      color: white;
      padding: 4rem;
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
      }
    }
  }
`;

export default HeroSection;
