import styled from "styled-components";
import { motion } from "framer-motion";

export const BrandContainer = styled.a`
  margin: 0 2rem;
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  @media screen and (max-width: 340px) {
    font-size: 14px;
  }
`;

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 0 12rem;
  padding-top: 2rem;

  @media screen and (max-width: 964px) {
    margin: 0 48px;
  }

  @media screen and (max-width: 500px) {
    margin: 0 24px;
  }
`;

export const Logo = styled.img`
  width: 160px;

  @media screen and (max-width: 375px) {
    width: 120px;
  }
`;

// Animation

export const navAnimation = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 1, opacity: 1 },
};
