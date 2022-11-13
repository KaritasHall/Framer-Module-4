import React from "react";

import { Bubble, TestimonialContainer, Designation } from "./styles";
import Lottie from "react-lottie-player";
import talkBubble from "../../assets/talk-bubble.json";

function Testimonial({ selected, index, designation, name, review }) {
  return (
    <TestimonialContainer
      className={selected === index ? "active" : ""}
      key={index}
    >
      <Bubble>
        <Lottie
          loop
          animationData={talkBubble}
          play
          style={{ width: 250, height: 250 }}
        />
      </Bubble>
      <Designation>{designation}</Designation>
      <h3>{name}</h3>
      <p>{review}</p>
    </TestimonialContainer>
  );
}

export default Testimonial;
