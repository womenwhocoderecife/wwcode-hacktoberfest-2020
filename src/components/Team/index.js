import React from "react";

import Directors from './Directors/index';
import TeamNav from './TeamNav';
import { TeamContainer } from './styles';

export default function Team() {
  return (
    <TeamContainer>
      <TeamNav/>
      <Directors/>
    </TeamContainer>
  )
}
