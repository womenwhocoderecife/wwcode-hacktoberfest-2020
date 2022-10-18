import React from 'react';
import LogoKatie from '../../assets/images/logo-katie-2.png';
import { Section } from '../../shared-ui/Layout';
import { Pink, Social } from '../../shared-ui/Typography';
import { Statement, Logo } from './styles';

const WWCodeRecife = () => (
  <Section id="WWCodeRecife">
    <Statement>
      Conheça a nossa comunidade na <Pink>Ufal</Pink>, que tem como objetivo
      inspirar e colaborar para a insersão e o desenvolvimento de{' '}
      <Pink>mulheres na tecnologia da informação.</Pink>
    </Statement>
    <Social href="https://linktr.ee/katieufal" target="_blank">
      <Logo src={LogoKatie} />
      {/* <Logo src={CodeRecife} /> */}
    </Social>
  </Section>
);

export default WWCodeRecife;