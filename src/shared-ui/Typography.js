import styled from 'styled-components/macro';
import { fonts } from '../assets/styles/typography';
import { colors } from '../assets/styles/colors';

export const Subtitle = styled.h2`
  font-family: ${fonts.alpha};
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.01em;
  margin: 16px 0;
  color: ${colors?.neutral};
  width: 100%;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.neutralLight};
  font-family: ${fonts.alpha};
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${colors.primaryLight};
  display: flex;
  flex-direction: column;
  padding: 5rem 0 0 0;
`;

export const Title = styled(Subtitle)`
  padding-left: 2rem;
  color: ${colors.neutral};
`;

export const Function = styled(Text)`
  padding-left: 2rem;
  color: ${colors.neutral};
`;

export const Cards = styled.section`
  max-width: 1000px;
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.neutral};
  color: ${colors.primary};
  width: 20rem;
  height: 37rem;
  padding: 2rem; 
`;

export const Photo = styled.img`
  width: 10.5rem;
  height: 11.3rem;
`;

export const Name = styled.h3`
  font-family: ${fonts.alpha};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  margin: 16px 0 0 0;
  color: ${colors.primary};
  text-align: center;
`;

export const Participation = styled(Name)`
  color: ${colors.primaryClear};
  font-weight: 600;
  margin-top: -1rem;
`;

export const Description = styled(Text)`
  color: ${colors.primaryLight};
  text-align: justify;
  margin: 1rem 0;
`;

export const SocialContext = styled.div`
  display: flex;
  margin: 0;
  bottom: 0
`;

export const Social = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem;
`;

export const Pink = styled.span`
  color: ${colors?.primaryHighLight};
`;