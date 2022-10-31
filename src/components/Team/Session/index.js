import React from 'react';
import GitHub from '../../../assets/images/gitHub.svg';
import Linkedin from '../../../assets/images/linkedIn.svg';
import {
  Content,
  Title,
  Function,
  Cards,
  Card,
  Photo,
  Name,
  Participation,
  Description,
  SocialContext,
  Social,
  Icon,
} from '../../../shared-ui/Typography';

const OCCUPATION = {
  'Diretoras': 'Diretora',
  'Voluntárias(os)': 'Voluntária(o)',
  'Membras(os)': 'Membra(o)',
}

const Session = ({ data, title = 'Diretora', subtitle }) => (
  <Content>
    <Title>{title}</Title>
    <Function>{subtitle}</Function>
    <Cards>
      {data &&
        data.map(user => (
          <Card key={Math.random()}>
            <Photo src={user.photo} alt={user.name} />
            <Name>{user.name}</Name>
            <Participation>{OCCUPATION[title]}</Participation>
            <Description>{user.description}</Description>
            <SocialContext>
              <Social href={user.gitHub} target="_blank">
                <Icon src={GitHub} alt="Icon GitHub" />
              </Social>
              <Social href={user.linkedIn} target="_blank">
                <Icon src={Linkedin} alt="Icon LinkedIn" />
              </Social>
            </SocialContext>
          </Card>
        ))}
    </Cards>
  </Content>
);

export default Session;
