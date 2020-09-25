import React from "react";
import Hacktoberfest from "../../assets/images/hacktoberfest2020.svg";
import CommingSoonPink from "../../assets/images/commingSoonPink.svg";
import Twitter from "../../assets/images/twitter.svg";
import Facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedln.svg";
import Discord from "../../assets/images/btn.svg";

import { Social } from "../../shared-ui/Typography";
import {
  Statement,
  Session,
  Logo,
  Top,
  Context,
  Alert,
  Article,
  Contact,
  Button,
} from "./styles";

const Hero = () => (
  <Session id="HacktoberFest">
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
      <Social href="https://ctt.ac/60V6P" target="_blank">
        <Contact src={Twitter} />
      </Social>
      <Social
        href="https://www.facebook.com/sharer/sharer.php?u=https://hacktoberfest.digitalocean.com/"
        target="_blank"
      >
        <Contact src={Facebook} />
      </Social>
      <Social
        href="https://www.linkedin.com/sharing/share-offsite/?url=https://hacktoberfest.digitalocean.com/"
        target="_blank"
      >
        <Contact src={LinkedIn} />
      </Social>
    </Article>
    <Article>
      <Social href="https://discord.gg/hacktoberfest" target="_blank">
        <Button src={Discord} />
      </Social>
    </Article>
  </Session>
);

export default Hero;
