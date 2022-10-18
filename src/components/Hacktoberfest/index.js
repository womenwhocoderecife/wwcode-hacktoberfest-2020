import React from 'react';
import Hacktoberfest from '../../assets/images/hacktoberfest2022.svg';
import ParticipationPink from '../../assets/images/participationPink.svg';
import Discord from '../../assets/images/btn.svg';
import { connections } from '../../data/links';
import { Social } from '../../shared-ui/Typography';
import { Section } from '../../shared-ui/Layout';
import { Logo } from '../Hero/styles';
import {
  Statement,
  Top,
  Context,
  Alert,
  Article,
  Contact,
  Button,
} from './styles';

const Hero = () => (
  <Section id="HacktoberFest">
    <Top src={ParticipationPink} />
    <Statement>Hacktoberfest 2022</Statement>
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