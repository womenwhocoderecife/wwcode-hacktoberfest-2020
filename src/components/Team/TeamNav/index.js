import React from "react";

import { TeamNav, TeamLink } from "./styles";

export default function Team() {
  return (
    <TeamNav>
      <TeamLink>directors</TeamLink>
      <TeamLink>evangelists</TeamLink>
      <TeamLink>leads</TeamLink>
      <TeamLink>volunteers</TeamLink>
      <TeamLink>members</TeamLink>
    </TeamNav>
  );
}
