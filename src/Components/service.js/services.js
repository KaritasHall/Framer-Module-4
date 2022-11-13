import React from "react";
import { TfiRulerPencil } from "react-icons/tfi";
import { BsCodeSlash } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";
import Title from "./title";
import { useScroll } from "../use-scroll";
import {
  Section,
  ServiceWrapper,
  ServiceTypes,
  Heading,
  servicesAnimations,
  Description,
  Icon,
} from "./styles";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Design",
      text: "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the.",
      icon: <TfiRulerPencil color="#7056ff" size={64} />,
    },
    {
      type: "Code",
      text: "Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved.",
      icon: <BsCodeSlash color="#7056ff" size={64} />,
    },
    {
      type: "UX",
      text: "Ham pretty our people moment put excuse narrow. Spite mirth money six above get going great own. Started now shortly had for assured hearing expense.",
      icon: <RiUserHeartLine color="#7056ff" size={64} />,
    },
  ];

  return (
    <Section id="services" ref={element}>
      <Title />
      <ServiceWrapper>
        {data.map(({ type, text, icon }, index) => {
          return (
            <ServiceTypes
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              key={index}
            >
              <Icon>{icon}</Icon>
              <Heading>
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </Heading>
              <Description> {text}</Description>
            </ServiceTypes>
          );
        })}
      </ServiceWrapper>
    </Section>
  );
}

export default Services;
