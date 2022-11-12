import React from "react";
import styled from "styled-components";
import { useScroll } from "./use-scroll";
import { motion } from "framer-motion";
import { navAnimation } from "./animations";
import logo from "./assets/logo.png";

function Navbar() {
  const [element, controls] = useScroll();

  return (
    <Nav
      ref={element}
      variants={navAnimation}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.1 }}
      animate={controls}
    >
      <div className="brand-container">
        <a href="#" className="brand" />
        <Logo src={logo} />
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#services">What Do We Offer?</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 0 12rem;
  padding-top: 2rem;

  .brand-container {
    margin: 0 2rem;
  }

  .toggle {
    display: none;
  }

  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      li {
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 16px;
          @media screen and (max-width: 340px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 964px) {
    margin: 0 48px;
  }

  @media screen and (max-width: 500px) {
    margin: 0 24px;
  }
`;

const Logo = styled.img`
  width: 160px;

  @media screen and (max-width: 375px) {
    width: 120px;
  }
`;

export default Navbar;
