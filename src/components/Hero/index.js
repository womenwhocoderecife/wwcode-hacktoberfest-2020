import React from "react";
import Hacktoberfest from "../../assets/images/hacktoberfest2020.svg";
import CommingSoon from "../../assets/images/commingSoon.svg";
import { Pink, Social } from "../../shared-ui/Typography";
import { Statement, Session, Logo, Top, Context, PinkStrong } from "./styles";

const Hero = () => (
  <Session>
    <Top src={CommingSoon} />
    <Social href="https://hacktoberfest.digitalocean.com/" target="_blank">
    <Logo src={Hacktoberfest} />
    </Social>
    <Statement>
      O código aberto está mudando o mundo - <Pink>um pull request</Pink> por
      vez.
    </Statement>
    <Context>
      O Hacktoberfest incentiva a participação na comunidade de código aberto,
      que cresce a cada ano. Complete o desafio 2020 e ganhe uma camiseta de
      edição limitada.
    </Context>
    <Context>
    <Social href="https://hacktoberfest.digitalocean.com/" target="_blank">
      <PinkStrong>
        Confira o site oficial do Hacktoberfest 2020 e participe!
      </PinkStrong>
      </Social>
    </Context>
  </Session>
);

export default Hero;
