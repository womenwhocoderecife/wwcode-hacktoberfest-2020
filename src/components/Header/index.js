import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/H_hacktoberfest.svg';

import {
  HeaderStyle,
  Container,
  LogoLink,
  Logo,
  Nav,
  NavList,
  ListItem,
  ListLink,
  MenuToggle,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
} from './styles';

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(`#${id}`);
          }
        });
      });
      document
        .querySelectorAll('section[id]')
        .forEach(section => observer.observe(section));
    });
  }, []);

  return (
    <HeaderStyle scroll={scroll}>
      <Container>
        <LogoLink
          href="https://hacktoberfest.digitalocean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src={logo} alt="Hacktober fest logo" />
        </LogoLink>
        <MenuToggle
          rule="button"
          aria-label="Abrir menu"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <ToggleOne menuVisibility={menuVisibility} />
          <ToggleTwo menuVisibility={menuVisibility} />
          <ToggleThree menuVisibility={menuVisibility} />
        </MenuToggle>
        <Nav menuVisibility={menuVisibility}>
          <NavList menuVisibility={menuVisibility}>
            <ListItem>
              <ListLink
                href="#home"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Home
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#katieufal"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Katie Ufal
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#team"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Organização
              </ListLink>
            </ListItem>
            <ListItem>
              <ListLink
                href="#HacktoberFest"
                activeSection={activeSection}
                onClick={() => setMenuVisibility(false)}
              >
                Hacktoberfest 2022
              </ListLink>
            </ListItem>
          </NavList>
        </Nav>
      </Container>
    </HeaderStyle>
  );
}