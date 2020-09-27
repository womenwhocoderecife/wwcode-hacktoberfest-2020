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
`;

export const LogoDigital = styled.img`
  max-width: 240.86px;
  width: 100%;
  object-fit: contain;
  padding: 2rem 0 1rem 0;
`;

export const LogoSocialNetworks = styled.img`
  height: auto;
  max-width: 100%;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Copyright = styled.p`
  color: ${colors.neutralLight};
`;

export const MenuList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-size: 16px !important;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  border-right: 1px solid ${colors.neutralLight};
  padding: 0 8px;
`;

export const MenuItemLink = styled.a`
  color: ${colors.primaryHighLight};
  text-decoration: none;
  padding-right: 8px;
  font-weight: bold;
`;
