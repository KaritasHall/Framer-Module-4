import React from "react";
import { useScroll } from "../../hooks/use-scroll";
import logo from "../../assets/logo.png";
import {
  Nav,
  Logo,
  navAnimation,
  BrandContainer,
  NavigationLink,
} from "./styles";

function Navbar() {
  // This is a hook (see hooks folder)
  const [element, animationControls] = useScroll();

  /* Animation (navAnimation) on the Nav component.
  The actual animation is in the style.js, but here we have extra
  properties to tweak the animation*/
  return (
    <Nav
      ref={element}
      variants={navAnimation}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.1 }}
      animate={animationControls}
    >
      <BrandContainer href="#">
        <Logo src={logo} />
      </BrandContainer>

      <NavigationLink href="#services">What Do We Offer?</NavigationLink>
    </Nav>
  );
}

export default Navbar;
