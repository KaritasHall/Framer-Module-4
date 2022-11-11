import React from "react";
import styled from "styled-components";
import { HiCloudDownload } from "react-icons/hi";
import { SlControlPlay } from "react-icons/sl";
import Title from "./title";

function Services() {
  const data = [
    {
      type: "Design",
      text: "Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. How sense found our those gay again taken the.",
      icon: <HiCloudDownload color="#7056ff" size={64} />,
    },
    {
      type: "Code",
      text: "Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved.",
      icon: <HiCloudDownload color="#7056ff" size={64} />,
    },
    {
      type: "UX",
      text: "Ham pretty our people moment put excuse narrow. Spite mirth money six above get going great own. Started now shortly had for assured hearing expense.",
      icon: <HiCloudDownload color="#7056ff" size={64} />,
    },
  ];
  return (
    <Section id="services">
      <Title value="Services" />
      <div className="services">
        {data.map(({ type, text, icon }, index) => {
          return (
            <div className="services-service">
              <div className="services-service-icon">{icon}</div>
              <div className="services-service-title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services-service-description"> {text}</p>
              <SlControlPlay className="play" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 10rem 254px 0px 254px;
    gap: 5rem;
    &-service {
      padding: 2rem;
      &:nth-of-type(3) {
        background-color: var(--primary-color);
        .services-service-title {
          span {
            color: white;
          }
        }
        .services-service-description {
          color: white;
        }
      }
      .services-service-icon {
        margin-bottom: 3rem;
      }
      &-title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--accent-color);
        }
      }
      &-description {
        color: var(--accent-color);
        margin-bottom: 2rem;
      }
      .play {
        color: var(--accent-color);
      }
    }
  }
`;

export default Services;
