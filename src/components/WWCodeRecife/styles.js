import styled from "styled-components/macro";
import { fonts } from "../../assets/styles/typography";
import { Subtitle, Container } from "../../shared-ui/Typography";

export const Session = styled(Container)`
  background-color: transparent;
  padding: 4rem 0;
  align-items: center;
  padding-top: 12%;

  @media (max-width: 890px) {
    padding-top: 18%;
  }

  @media (max-width: 420px) {
    padding-top: 28%;
  }
`;

export const Logo = styled.img`
  width: 60%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 600;
  text-align: center;
  max-width: 75rem;
  padding: 0;
`;
