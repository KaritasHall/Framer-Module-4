import React from "react";
import styled from "styled-components";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <Foot>
      <span>&copy; Project by Karitas Witting Halldórsdóttir</span>
      <div className="footer-social-icons">
        <div className="social-media">
          <BsInstagram />{" "}
        </div>
        <div className="social-media">
          <BsTwitter />{" "}
        </div>
        <div className="social-media">
          <BsFacebook />{" "}
        </div>
        <div className="social-media">
          <BsLinkedin />{" "}
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;
  @media screen and (max-width: 1300px) {
    padding-inline: 24px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
  }
  span {
    font-size: 14px;
  }
  .footer-social-icons {
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 450px) {
      gap: 1rem;
    }
    .social-media {
      transition: 300ms;
      svg {
        font-size: 1.4rem;
        cursor: pointer;
        transition: 300ms ease-in-out;
        @media screen and (max-width: 700px) {
          font-size: 1rem;
        }
      }
      &:hover {
        svg {
          color: var(--accent-color);
        }
        transform: scale(1.1);
      }
    }
  }
`;

export default Footer;
