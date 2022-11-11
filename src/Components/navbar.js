import React, { useState } from "react";
import styled from "styled-components";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Nav>
      <div className="brand-container">
        <a href="#" className="brand" />
        <h1>A Cool Brand</h1>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li className="active">
            <a href="#services">Services</a>
          </li>
          <li className="active">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="active">
            <a href="#blog">Blog</a>
          </li>
          <li className="active">
            <a href="#skills">Skills</a>
          </li>
          <li className="active">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
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
          font-size: 1.1;
        }
      }
    }
  }
`;

export default Navbar;
