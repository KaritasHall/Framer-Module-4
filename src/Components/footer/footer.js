import React from "react";
import {
  FooterContainer,
  ReallyCoolCopyrightText,
  FooterSocialIcons,
  SocialMediaIcon,
} from "./styles";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <FooterContainer>
      <ReallyCoolCopyrightText title="❤️">
        &copy; Project by Karitas Witting Halldórsdóttir
      </ReallyCoolCopyrightText>
      <FooterSocialIcons>
        {/* Instagram */}
        <SocialMediaIcon>
          <BsInstagram />
        </SocialMediaIcon>
        {/* Twitter */}
        <SocialMediaIcon>
          <BsTwitter />
        </SocialMediaIcon>
        {/* Facebook */}
        <SocialMediaIcon>
          <BsFacebook />
        </SocialMediaIcon>
        {/* Linkedin */}
        <SocialMediaIcon>
          <BsLinkedin />
        </SocialMediaIcon>
      </FooterSocialIcons>
    </FooterContainer>
  );
}

export default Footer;
