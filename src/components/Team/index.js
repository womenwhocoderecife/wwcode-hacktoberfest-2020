import React, { useState } from 'react';
import team from '../../data/team';
import Session from './Session';
import { TeamContainer, TeamNav, TeamLink } from './styles';

const Team = () => {
  const [index, setIndex] = useState(0);

  return (
    <TeamContainer>
      <TeamNav>
        {team.map(({ title }, index) => (
          <TeamLink onClick={() => setIndex(index)} key={index}>
            {title}
          </TeamLink>
        ))}
      </TeamNav>
      <Session
        data={team[index].data}
        title={team[index].title}
        subtitle={team[index].subtitle}
      />
    </TeamContainer>
  );
};

export default Team;
