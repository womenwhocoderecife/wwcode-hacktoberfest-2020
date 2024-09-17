import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import { Subtitle } from '../../shared-ui/Typography';

export const Statement = styled(Subtitle)`
  max-width: 1020px;
  width: 100%;
  margin-top: 3rem;
  padding: 2rem 0 0 0;
  font-family: ${fonts.base};
  word-break: break-word;
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Logo = styled.img`
  display: flex;
  max-width: 650px;
  width: 100%;
  margin: 0 0 3rem 0;
  padding: 2rem 0 1rem 0;
  object-fit: contain;
`;