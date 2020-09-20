import React from 'react';
import Directors from './Directors/index';
import Evangelists from './Evangelists/index';
import TeamNav from './TeamNav';
import { TeamContainer } from './styles';

const Team = () => (
  <TeamContainer>
    <TeamNav />
    <Directors />
    <Evangelists/>
  </TeamContainer>
);

export default Team;
