import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import { Subtitle, Container, Text } from '../../shared-ui/Typography';

export const Session = styled(Container)`
  background-color: transparent;
  padding: 3rem 0;
  align-items: center;
`;

export const Top = styled.img`
  padding: 8rem 0 0 0;
`;

export const Logo = styled.img`
  padding: 4rem 0 1rem 0;
  width: 45rem;
`;

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  font-size: 2.7rem;
  line-height: 3rem;
  text-align: center;
  max-width: 43rem;
  padding: 0;
`;

export const Context = styled(Text)`
  font-family: ${fonts.base};
  text-align: center;
  line-height: 1.4rem;
  max-width: 55rem;
  padding: 0;
  margin: 0;
`;

export const Alert = styled(Subtitle)`
  font-family: ${fonts.base};
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  margin: 3rem 0 0 0;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 17rem;
`;

export const Contact = styled.img`
  padding: 2rem 0 1rem 0;
  width: 4.7rem;
`;

export const Button = styled.img`
  padding: 2rem 0 1rem 0;
  width: 17.5rem;
`;
