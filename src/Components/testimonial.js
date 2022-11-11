import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import talkBubble from "./assets/talk-bubble.json";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Designer",
      name: "Bob L.",
      review:
        "Absolute required of reserved in offering no. How sense found our those gay again taken the. Had mrs outweigh desirous sex overcame. Improved property reserved disposal do offering me",
    },
    {
      designation: "Developer",
      name: "María P.",
      review:
        "Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Started now shortly had for assured hearing expense. Led juvenile his laughing speedily put pleasant relation offering.",
    },
    {
      designation: "Project Manager",
      name: "Anna M.",
      review:
        "By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express no or prepare replied. Wholly formed old latter future but way she. Day her likewise smallest expenses judgment building man carriage gay.",
    },
  ];
  return (
    <Section>
      <div className="container">
        <div className="testimonials">
          {testimonials.map(({ designation, name, review }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="bubble">
                  <Lottie
                    loop
                    animationData={talkBubble}
                    play
                    style={{ width: 150, height: 150 }}
                  />
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </div>
        <div className="controls">
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .container {
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 5rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .testimonial {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        height: 360px;
        .bubble {
          position: relative;
        }
        &.hidden {
          display: none;
        }
        color: white;
        .designation {
          color: var(--accent-color);
        }
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border-color: var(--secondary-color);
      }
    }
  }
`;

export default Testimonials;
