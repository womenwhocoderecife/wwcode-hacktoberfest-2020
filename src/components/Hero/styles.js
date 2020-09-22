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
  padding: 3rem 0;
  align-items: center;
`;

export const Top = styled.img`
  padding: 1rem 0 0 0;
`; 

export const Logo = styled.img`
  padding: 2rem 0 1rem 0;
  width: 48rem;
`; 

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  max-width: 43rem;
  padding: 1rem 0;
`;

export const Context = styled(Text)`
  font-family: ${fonts.base};
  text-align: center;
  line-height: 1.4rem;
  max-width: 48rem;
  padding: 0;
  margin: 0;
`;

export const PinkStrong = styled(Pink)`
  font-family: ${fonts.base};
  text-align: center;
  padding: 0;
  margin: 0;
  font-weight: 700;
`;