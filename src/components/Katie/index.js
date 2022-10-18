import React from 'react';
import LogoKatie from '../../assets/images/logo-katie-2.png';
import { Section } from '../../shared-ui/Layout';
// import { Pink, Social } from '../../shared-ui/Typography';
import {
  Statement,
  LogoLink,
  Logo,
  Context,
  PinkStrong,
  Article,
  Explanation,
} from './styles';

const KatieUfal = () => (
  <Section id="KatieUfal">
    <Article>
      <LogoLink href="https://ic.ufal.br/extensao/katie/" target="_blank">
        <Logo src={LogoKatie} />
      </LogoLink>
      <Context>
      Katie é um grupo formado por mulheres do Instituto de Computação da UFAL. 
      Nosso objetivo é promover ações de apoio e incentivo às estudantes.
      </Context>
    </Article>
    {/* <Statement>
      <Pink>Uma cidade</Pink> por vez. Women Who Code se espalhou pelo mundo,
      alcançando mais de 20 países.
    </Statement>
    <Explanation>
      Faça parte da comunidade, acompanhe os eventos e oportunidades!
      <Social href="https://www.KatieUfal.com/" target="_blank">
        <PinkStrong> Conheça o site oficial do Katie Ufal! </PinkStrong>
      </Social>
      Cada cidade tem sua própria cultura única e líderes locais que se tornaram
      líderes do nosso movimento, abrindo caminho para a nova face da
      tecnologia.
    </Explanation> */}
  </Section>
);

export default KatieUfal;