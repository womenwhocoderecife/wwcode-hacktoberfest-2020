import React from 'react';
import Hacktoberfest from '../../assets/images/hacktoberfest2020.svg';
import CommingSoonPink from '../../assets/images/commingSoonPink.svg';

import Discord from '../../assets/images/btn.svg';
import connections from '../../data/connections';

import { Social } from '../../shared-ui/Typography';
import {
  Statement,
  Top,
  Context,
  Alert,
  Article,
  Contact,
  Button,
} from './styles';

import { Logo } from '../Hero/styles';
import { Section } from '../../shared-ui/Layout';

const Hero = () => (
  <Section id="HacktoberFest">
    <Top src={CommingSoonPink} />
    <Statement>Hacktoberfest 2020</Statement>
    <Context>
      Hacktoberfest é uma celebração de um mês de software de código aberto
      organizada pela DigitalOcean.
    </Context>
    <Social href="https://hacktoberfest.digitalocean.com/" target="_blank">
      <Logo src={Hacktoberfest} />
    </Social>
    <Alert>SPREAD THE WORD</Alert>

    <Article>
      {connections.map(({ href, src }) => (
        <Social key={src} href={href} target="_blank">
          <Contact src={src} />
        </Social>
      ))}
    </Article>

    <Article>
      <Social href="https://discord.gg/hacktoberfest" target="_blank">
        <Button src={Discord} />
      </Social>
    </Article>
  </Section>
);

export default Hero;
