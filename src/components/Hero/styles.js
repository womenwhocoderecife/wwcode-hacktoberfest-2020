import styled from 'styled-components/macro';
import { colors } from '../../assets/styles/colors';
import { fonts } from '../../assets/styles/typography';
import { Section } from '../../shared-ui/Layout';
import { Subtitle, Pink, Text } from '../../shared-ui/Typography';

export const HeroSection = styled(Section)`
  padding-top: 100px;
  background-color: ${colors.primaryLighter};
`;

export const Top = styled.img`
  margin-top: 30px;
  width: 100%;
  max-width: 240px;
  object-fit: contain;

  @media (min-width: 540px) {
    margin-top: 60px;
  }
`;

export const Logo = styled.img`
  max-width: 650px;
  width: 100%;
  object-fit: contain;
  padding: 2rem 0 1rem 0;
`;

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  font-size: 2rem;
  line-height: 40px;
  text-align: center;
  max-width: 870px;
  width: 100%;
  padding: 1rem 0;

  @media (min-width: 780px) {
    font-size: 3rem;
    line-height: 60px;
  }
`;

export const Context = styled(Text)`
  max-width: 870px;
  width: 100%;
  font-family: ${fonts.base};
  text-align: center;
  line-height: 1.4rem;
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
