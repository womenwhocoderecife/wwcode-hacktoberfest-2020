import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import { Subtitle } from '../../shared-ui/Typography';

export const Statement = styled(Subtitle)`
  font-family: ${fonts.base};
  word-break: break-word;
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-align: center;
  padding: 0;

  max-width: 1020px;
  width: 100%;
`;

export const Logo = styled.img`
  max-width: 650px;
  width: 100%;
  display: flex;
  object-fit: contain;
  padding: 2rem 0 1rem 0;
`;
