import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <Div>
      <h1>Services</h1>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-47%) translateY(20vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 100;
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }
`;

export default Title;
