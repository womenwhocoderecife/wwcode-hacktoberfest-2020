import React from 'react';
import Hacktoberfest from '../../assets/images/hacktoberfest2022.svg';
import { Pink, Social } from '../../shared-ui/Typography';
import {
  Statement,
  Logo,
  Context,
  PinkStrong,
  HeroSection,
} from './styles';

const Hero = () => (
  <HeroSection id="home">
    <Social style={{ marginTop: 20 }} href="https://hacktoberfest.digitalocean.com/" target="_blank">
      <Logo src={Hacktoberfest} />
    </Social>
    <Statement>
      O código aberto está mudando o mundo - <Pink>um pull request</Pink> por
      vez.
    </Statement>
    <Context>
      O Hacktoberfest incentiva a participação na comunidade de código aberto,
      que cresce a cada ano. Complete o desafio 2022 e ganhe uma camiseta de
      edição limitada.
    </Context>
    <Context>
      <Social href="https://hacktoberfest.digitalocean.com/" target="_blank">
        <PinkStrong>
          Confira o site oficial do Hacktoberfest 2022 e participe!
        </PinkStrong>
      </Social>
    </Context>
  </HeroSection>
);

export default Hero;