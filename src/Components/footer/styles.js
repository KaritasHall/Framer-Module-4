import styled from "styled-components";

export const ReallyCoolCopyrightText = styled.span`
  font-size: 14px;
`;

export const SocialMediaIcon = styled.div`
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
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 450px) {
    gap: 1rem;
  }
`;

export const FooterContainer = styled.footer`
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
`;
