import styled from "styled-components";
import { motion } from "framer-motion";

export const Bubble = styled.div`
  position: relative;
`;

export const Designation = styled.span`
  color: var(--accent-color);
`;

export const TestimonialContainer = styled.div`
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  color: white;
  display: none;
  &.active {
    display: flex;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  border: 0.1rem solid transparent;
  cursor: pointer;
  &.active {
    background-color: transparent;
    border-color: var(--secondary-color);
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  width: 30%;
`;

export const MotionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;
`;

export const Section = styled(motion.section)`
  overflow: hidden;
  transition: 400ms;
  transition-delay: 300ms;
  transition-timing-function: ease-out;
  padding-top: 64px;
`;

// animation

export const testimonialsAnimation = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const testimonalsSectionAnimation = {
  hidden: { backgroundColor: "#7056ff" },
  show: { backgroundColor: "tomato" },
};
