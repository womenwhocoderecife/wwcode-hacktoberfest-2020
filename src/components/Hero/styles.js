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
  width: 100%;
  max-width: 240px;
  margin-top: 30px;
  object-fit: contain;

  @media (min-width: 540px) {
    margin-top: 60px;
  }
`;

export const Logo = styled.img`
  display: flex;
  max-width: 650px;
  width: 100%;
  padding: 2rem 0 1rem 0;
  object-fit: contain;
`;

export const Statement = styled(Subtitle)`
  max-width: 870px;
  width: 100%;
  padding: 1rem 0;
  font-family: ${fonts.base};
  font-size: 2rem;
  line-height: 40px;
  text-align: center;

  @media (min-width: 780px) {
    font-size: 3rem;
    line-height: 60px;
  }
`;

export const Context = styled(Text)`
  max-width: 870px;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: ${fonts.base};
  text-align: center;
  line-height: 1.4rem;
`;

export const PinkStrong = styled(Pink)`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-family: ${fonts.base};
  text-align: center;
`;