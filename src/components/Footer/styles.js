import styled from 'styled-components/macro';
import { colors } from '../../assets/styles/colors';

export const Tag = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 26px;
  padding: 32px;
  margin-top: 32px;
  background: ${colors.primaryDarker};
  border-top-right-radius: 80px;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 130px;
    margin-top: 80px;
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
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MenuItem = styled.li`
  border-right: 1px solid ${colors.neutralLight};
  padding: 0 8px;

  :last-of-type {
    border-right: none;
    display: flex;
  }

  :last-of-type a {
    padding-right: 8px;
  }
`;

export const MenuItemLink = styled.a`
  padding-right: 8px;
  color: ${colors.primaryHighLight};
  text-decoration: none;
  font-weight: bold;
`;
