import styled from 'styled-components/macro';
import { colors } from '../../assets/styles/colors';
import { fonts } from '../../assets/styles/typography';

export const TeamContainer = styled.div`
  background-color: ${colors.primaryLight};
  padding: 1rem 1rem 5rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1020px;
  width: 100%;
  height: 100%;
`;

export const TeamNav = styled.div`
  width: 95%;
  height: 84px;
  background-color: ${colors.primary};
  text-align: center;
  margin-top: -2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const TeamLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.neutral};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${fonts.alpha};
  cursor: pointer;
`;
