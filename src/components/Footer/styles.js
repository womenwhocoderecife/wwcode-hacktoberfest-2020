import styled from 'styled-components/macro';
import Footer from '.';
import { colors } from '../../assets/styles/colors';
import { fonts } from '../../assets/styles/typography';
import { Section } from '../../shared-ui/Layout';
import { Subtitle, Pink, Text } from '../../shared-ui/Typography';

export const Tag = styled.footer`
  background: #010e28;
  width: 100%;
  height: 26px;
  border-top-right-radius: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  margin-top: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 80px;
    height: 130px;
    padding: 32px 0;
  }
`;

export const LogoDigital = styled.img`
  height: auto;
  max-width: 100%;
`;

export const LogoSocialNetworks = styled.img`
  height: auto;
  max-width: 100%;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 60px;
  }
`;

export const Copyright = styled.p`
  color: ${colors.neutralLight};

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const MenuList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-size: 16px;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MenuItem = styled.li`
  border-right: 1px solid ${colors.neutralLight};
  padding: 0 8px;

  :last-of-type {
    border-right: none !important;
    display: flex;
  }

  :last-of-type a {
    padding-right: 8px;
  }
`;

export const MenuItemLink = styled.a`
  color: ${colors.primaryHighLight};
  text-decoration: none;
  padding-right: 8px;
  font-weight: bold;
`;
