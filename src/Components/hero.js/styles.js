import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--primary-color);
  min-height: 100vh;
  position: relative;
  .hero {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;
      @media screen and (max-width: 1600px) {
        width: 90%;
      }
      @media screen and (max-width: 964px) {
        padding-left: 80px;
      }
      @media screen and (max-width: 700px) {
        width: 100%;
        padding-right: 80px;
      }
      @media screen and (max-width: 375px) {
        padding-inline: 24px;
      }

      .title {
        h1 {
          transform: translateX(-4px);
          font-size: 5rem;
          @media screen and (max-width: 816px) {
            font-size: 36px;
          }
        }
      }
      .subtitle {
        p {
          margin-bottom: 2rem;
          width: 70%;
          @media screen and (max-width: 700px) {
            width: 100%;
          }
        }
      }
    }
  }
  .info {
    position: relative;
    left: 50%;
    width: 50%;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      @media screen and (max-width: 575px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      @media screen and (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
      }
    }
    @media screen and (max-width: 1500px) {
      width: 100%;
      left: 0;
    }
    @media screen and (max-width: 827px) {
      margin-top: 48px;
      padding-inline: 16px;
    }
  }
`;

// Animations
export const heroAnimations = {
  hidden: { x: -400, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const heroInfoAnimations = {
  hidden: { x: 100, y: "25%", opacity: 0 },
  show: { x: 0, y: "25%", opacity: 1 },
};
