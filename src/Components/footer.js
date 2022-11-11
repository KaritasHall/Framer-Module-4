import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";
import { BsBehance, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <Foot>
      <span>&copy; Project by Karitas Witting Halldórsdóttir</span>
    </Foot>
  );
}

const Foot = styled.footer``;

export default Footer;
