import React from "react";
import Navbar from "../navbar/navbar";
import {
  Section,
  InformationGrid,
  heroAnimations,
  heroInfoAnimations,
  Hero,
  Title,
  SubTitle,
  Info,
  Content,
} from "./styles";
import { InformationBlock } from "./information-block";

function HeroSection() {
  return (
    <Section id="hero">
      <Navbar />
      <Hero
        initial="hidden"
        whileInView="show"
        variants={heroAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <Content>
          <Title>Digital Crafters</Title>
          <SubTitle>
            In alteration insipidity impression by travelling reasonable up
            motionless. Of regard warmth by unable sudden garden ladies. No kept
            hung am size spot no. Likewise led and dissuade rejoiced welcomed
            husbands boy. Do listening on he suspected resembled. Water would
            still if to. Position boy required law moderate was may.
          </SubTitle>
        </Content>
      </Hero>
      <Info
        initial="hidden"
        whileInView="show"
        variants={heroInfoAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <InformationGrid>
          <InformationBlock title="Agency" subTitleOne="Digital Crafters" />
          <InformationBlock title="Email" subTitleOne="contact@fakemail.com" />
          <InformationBlock title="Phone" subTitleOne="+365 12345" />
          <InformationBlock
            title="Address"
            subTitleOne="Hvergistræti 21"
            subTitleTwo="101 Reykjavík"
          />
          <InformationBlock
            title="Services"
            subTitleOne="Web developement"
            subTitleTwo="UX research and design"
            subTitleThree="UI design"
          />
          <InformationBlock
            title="Office hours"
            subTitleOne="Monday to Friday"
            subTitleTwo="09:00 - 17:00"
          />
        </InformationGrid>
      </Info>
    </Section>
  );
}

export default HeroSection;
