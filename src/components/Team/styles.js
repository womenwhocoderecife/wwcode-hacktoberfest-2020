import styled from 'styled-components/macro';
import { colors } from '../../assets/styles/colors';
import { fonts } from '../../assets/styles/typography';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1020px;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 5rem 1rem;
  background-color: ${colors.primaryLight};
`;

export const TeamNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
  height: 84px;
  margin-top: -2rem;
  background-color: ${colors.primary};
  text-align: center;
`;

export const TeamLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${fonts.alpha};
  color: ${colors.neutral};
  cursor: pointer;
`;