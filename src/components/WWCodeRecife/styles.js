import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import {
  Subtitle, 
  Container
} from "../../shared-ui/Typography";

export const Session = styled(Container)`
  background-color: transparent;
  padding: 4rem 0;
  align-items: center;
`;

export const Logo = styled.img`
  padding: 4rem 0 1rem 0;
  width: 47rem;
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
