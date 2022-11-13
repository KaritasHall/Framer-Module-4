import styled from "styled-components";
import { motion } from "framer-motion";

// Section
export const Section = styled.section`
  min-height: 100vh;
`;

// Heading
export const Heading = styled.div`
  span {
    color: var(--primary-color);
    font-weight: bolder;
  }
  h2 {
    font-size: 3rem;
    line-height: 2.5rem;
    margin-bottom: 5rem;
    color: var(--accent-color);
  }
`;

export const Description = styled.p`
  color: var(--accent-color);
  margin-bottom: 2rem;
`;

// Service container
export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 10rem 254px 0px 254px;
  gap: 5rem;
  @media screen and (max-width: 1500px) {
    outline: 2px solid hotpink;
    margin-inline: 24px;
  }
  @media screen and (max-width: 950px) {
    gap: 2rem;
  }
  @media screen and (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 24px;
  }
`;

// Service elements
export const ServiceTypes = styled(motion.div)`
  padding: 2rem;
  &:nth-of-type(3) {
    background-color: var(--primary-color);
    ${Heading} {
      span {
        color: white;
      }
    }
    ${Description} {
      color: white;
    }
  }
`;

export const Icon = styled.div`
  margin-bottom: 3rem;
`;

// Animations
export const servicesAnimations = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1 },
};
