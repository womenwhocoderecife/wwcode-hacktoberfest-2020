import React from "react";
import WWCode from "../../assets/images/WomenWhoCode.png";
import { Pink, Social } from "../../shared-ui/Typography";
import {
  Statement,
  Session,
  LogoLink,
  Logo,
  Context,
  PinkStrong,
  Article,
  Explanation,
} from "./styles";

const WomenWhoCode = () => (
  <Session id="womenWhoCode">
    <Article>
      <LogoLink href="https://www.womenwhocode.com/" target="_blank">
        <Logo src={WWCode} />
      </LogoLink>
      <Context>
        O Women Who Code começou como um grupo comunitário em 2011, quando
        algumas tecnólogas decidiram que queriam mudar a experiência da
        indústria para as engenheiras.Desde então, tornou-se uma organização
        global sem fins lucrativos e a maior e mais ativa comunidade do mundo
        dedicada a inspirar mulheres a se destacarem em carreiras em tecnologia.
      </Context>
    </Article>
    <Statement>
      <Pink>Uma cidade</Pink> por vez. Women Who Code se espalhou pelo mundo,
      alcançando mais de 20 países.
    </Statement>
    <Explanation>
      Faça parte da comunidade, acompanhe os eventos e oportunidades!
      <Social href="https://www.womenwhocode.com/" target="_blank">
        <PinkStrong> Conheça o site oficial do WWCODE! </PinkStrong>
      </Social>
      Cada cidade tem sua própria cultura única e líderes locais que se tornaram
      líderes do nosso movimento, abrindo caminho para a nova face da
      tecnologia.
    </Explanation>
    <Context></Context>
  </Session>
);

export default WomenWhoCode;
