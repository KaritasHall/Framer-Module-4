import React, { useState } from "react";
import { useScroll } from "../../hooks/use-scroll";
import {
  testimonalsSectionAnimation,
  testimonialsAnimation,
  MotionContainer,
  Section,
  Button,
  Controls,
  TestimonialsContainer,
} from "./styles";
import Testimonial from "./testimonial";

function Testimonials() {
  const [element, controls] = useScroll();
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
    <Section
      ref={element}
      variants={testimonalsSectionAnimation}
      animate={controls}
    >
      <MotionContainer
        variants={testimonialsAnimation}
        animate={controls}
        transition={{
          delay: 0.2,
          type: "tween",
          duration: 0.8,
        }}
      >
        <TestimonialsContainer>
          {testimonials.map(({ designation, name, review }, index) => {
            return (
              <Testimonial
                key={index}
                selected={selected}
                index={index}
                designation={designation}
                name={name}
                review={review}
              />
            );
          })}
        </TestimonialsContainer>
        <Controls>
          <Button
            className={selected === 0 ? "active" : ""}
            onClick={() => setSelected(0)}
          ></Button>
          <Button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></Button>
          <Button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></Button>
        </Controls>
      </MotionContainer>
    </Section>
  );
}

export default Testimonials;
