import styled from "styled-components";
import { colors } from '../../../assets/styles/colors';
import { fonts } from '../../../assets/styles/typography';

export const TeamNav = styled.div`
  width: 90%;
  height: 180px !important;
  background-color: ${colors.primary};
  text-align: center;
  margin-top: -2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TeamLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.neutral};
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${fonts.alpha};
`;