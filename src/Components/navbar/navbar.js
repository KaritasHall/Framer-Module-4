import React from "react";
import { useScroll } from "../use-scroll";
import logo from "../assets/logo.png";
import {
  Nav,
  Logo,
  navAnimation,
  BrandContainer,
  NavigationLink,
} from "./styles";

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
      <BrandContainer href="#">
        <Logo src={logo} />
      </BrandContainer>

      <NavigationLink href="#services">What Do We Offer?</NavigationLink>
    </Nav>
  );
}

export default Navbar;
