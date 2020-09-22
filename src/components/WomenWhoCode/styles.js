import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import {
  Subtitle, 
  Container,
  Pink,
  Text
} from "../../shared-ui/Typography";

export const Session = styled(Container)`
  background-color: transparent;
  padding: 4rem 0;
  align-items: center;
`;

export const Logo = styled.img`
  padding: 2rem 0 1rem 0;
  width: 37rem;
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
  max-width: 28rem;
  text-align: justify;
  padding: 3rem 0 0 0;
  margin: 0;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: 0.01em;
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
  width: 105%;
`;