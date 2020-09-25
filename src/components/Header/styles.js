import styled, { keyframes } from "styled-components/macro";
import { fonts } from "../../assets/styles/typography";
import { colors } from "../../assets/styles/colors";

const puffInCenter = keyframes`
from{
    transform: scale(1.15);
    opacity: 1;
} to{
    transform: scale(1);
    opacity: 1;
  }
`;

const puffOutCenter = keyframes`
from{
    transform: scale(1);
    opacity: 1;
} to{
    transform: scale(1.15);
    opacity: 1;
  }
`;

export const HeaderStyle = styled.header`
  width: 100%;
  height: 116px;
  position: fixed;
  background-color: ${(props) =>
    props.scroll > 0 ? "#071a297a" : colors.primaryDark};

  @media (max-width: 507px) {
    height: 80px;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LogoLink = styled.a`
  width: 10%;
  z-index: 16;
  @media (max-width: 1024px) {
    width: 16%;
  }

  @media (max-width: 420px) {
    width: 24%;
  }
`;

export const Logo = styled.img`
  width: 80%;
  animation: 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s 1 normal both running
    ${puffInCenter};

  :hover {
    animation: 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s 1 normal both running
      ${puffOutCenter};
  }
`;

export const Nav = styled.nav`
  width: 100%;

  @media (max-width: 1024px) {
    display: ${(props) => (props.menuVisibility ? "flex" : "none")};
    width: 2%;

    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${colors.primaryDark};

    z-index: 10;

    justify-content: center;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding-left: 0;

  @media (max-width: 1024px) {
    text-align: center;
    display: ${(props) => (props.menuVisibility ? "flex" : "none")};
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  list-style: none;
`;

export const ListLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${colors.neutralLight};
  transition: all 250ms linear 0s;

  :hover {
    color: ${colors.primaryHighLight};
  }

  &[href="${(props) => props.activeSection}"] {
    box-shadow: ${colors.neutralLight} 0px -5px 0px 0px inset;
    color: ${colors.neutral};
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    transition-duration: 0.5s;
  }

  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
`;

export const MenuToggle = styled.div`
  @media (max-width: 1024px) {
    width: 40px;
    height: 30px;
    z-index: 16;
  }
`;

const ToggleLine = styled.div`
  @media (max-width: 1024px) {
    background-color: ${colors.neutral};
    height: 5px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
  }
`;

export const ToggleOne = styled(ToggleLine)`
  transform: ${(props) =>
    props.menuVisibility ? "rotate(45deg) translate(7px, 7px)" : ""};
`;

export const ToggleTwo = styled(ToggleLine)`
  opacity: ${(props) => (props.menuVisibility ? 0 : 1)};
`;

export const ToggleThree = styled(ToggleLine)`
  transform: ${(props) =>
    props.menuVisibility ? "rotate(-45deg) translate(8px, -9px)" : ""};
`;
