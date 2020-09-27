import React from 'react';

import { Section } from '../../shared-ui/Layout';
import { Pink, Social } from '../../shared-ui/Typography';
import { Statement, Logo } from './styles';

import CodeRecife from '../../assets/images/WWCodeRecife.png';

const WWCodeRecife = () => (
  <Section id="WWCodeRecife">
    <Statement>
      Conheça a nossa comunidade em <Pink>Recife</Pink>, que tem como objetivo
      inspirar e colaborar para a insersão e o desenvolvimento de{' '}
      <Pink>mulheres na tecnologia da informação.</Pink>
    </Statement>
    <Social href="https://linktr.ee/wwcoderecife" target="_blank">
      <Logo src={CodeRecife} />
    </Social>
  </Section>
);

export default WWCodeRecife;
