import styled from 'styled-components/macro';
import { fonts } from '../../assets/styles/typography';
import { Subtitle, Pink, Text, Social } from '../../shared-ui/Typography';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1020px;
  width: 100%;
  margin-top: 4rem;
  padding-top: 2rem;

  @media (min-width: 890px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LogoLink = styled(Social)`
  width: 100%;

  @media (min-width: 890px) {
    width: 50%;
  }
`;

export const Logo = styled.img`
  display: block;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  object-fit: contain;
`;

export const Context = styled(Text)`
  max-width: 450px;
  width: 100%;
  padding-top: 3rem;
  margin: 0;
  font-family: ${fonts.base};
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 2.2rem;
  letter-spacing: 0.01em;
  word-break: break-word;
  text-align: center;

  @media (min-width: 890px) {
    width: 50%;
    text-align: left;
    padding: 0;
  }
`;

export const Statement = styled(Subtitle)`
  max-width: 1020px;
  width: 100%;
  padding: 3rem 0 0 0;
  font-family: ${fonts.base};
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 700;
  text-align: center;
`;

export const Explanation = styled(Text)`
  max-width: 1020px;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: ${fonts.base};
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.4rem;
  letter-spacing: 0.01em;
`;

export const PinkStrong = styled(Pink)`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-family: ${fonts.base};
  text-align: center;
`;