import styled from "styled-components/macro";
import { fonts } from "../../assets/styles/typography";
import {
  Subtitle,
  Container,
  Pink,
  Text,
  Social,
} from "../../shared-ui/Typography";

export const Session = styled(Container)`
  background-color: transparent;
  padding: 4rem 0;
  align-items: center;
  padding-top: 10%;

  @media (max-width: 890px) {
    padding-top: 18%;
  }

  @media (max-width: 420px) {
    padding-top: 28%;
  }
`;

export const LogoLink = styled(Social)`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  padding: 2rem 0 1rem 0;
  width: 90%;
  display: flex;
  margin: 0 auto;
`;

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  font-size: 2.5rem;
  line-height: 2.8rem;
  font-weight: 700;
  text-align: center;
  max-width: 67rem;
  padding: 3rem 0 0 0;
`;

export const Context = styled(Text)`
  font-family: ${fonts.base};
  text-align: center;
  width: 50%;
  text-align: justify;
  padding: 3rem 0 0 0;
  margin: 0;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.2rem;
  letter-spacing: 0.01em;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Explanation = styled(Text)`
  font-family: ${fonts.base};
  text-align: center;
  max-width: 58.5rem;
  text-align: center;
  padding: 0;
  margin: 0;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: 0.01em;
`;

export const PinkStrong = styled(Pink)`
  font-family: ${fonts.base};
  text-align: center;
  padding: 0;
  margin: 0;
  font-weight: 700;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    display: grid;
  }
`;
