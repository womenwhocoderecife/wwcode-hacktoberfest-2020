import React from 'react';
import Directors from './Directors';
import Evangelists from './Evangelists';
import Leads from './Leads';
import Volunteers from './Volunteers';
import Members from './Members';
import TeamNav from './TeamNav';
import { TeamContainer } from './styles';

const Team = () => (
  <TeamContainer>
    <TeamNav />
    <Directors />
    <Evangelists/>
    <Leads/>
    <Volunteers/>
    <Members/>
  </TeamContainer>
);

export default Team;
