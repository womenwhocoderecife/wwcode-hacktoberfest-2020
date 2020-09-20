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
