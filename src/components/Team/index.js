import React from 'react';

import Directors from './Directors/index';
import TeamNav from './TeamNav';
import { TeamContainer } from './styles';

const Team = () => (
  <TeamContainer>
    <TeamNav />
    <Directors />
  </TeamContainer>
);

export default Team;
