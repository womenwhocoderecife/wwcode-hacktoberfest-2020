import React from "react";
import GitHub from "../../../assets/images/gitHub.svg";
import Linkedin from "../../../assets/images/linkedIn.svg";
import {
  Container,
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
} from "../../../shared-ui/Typography";

const Leads = () => {
  const datas = [
    {
      photo:
        "https://avatars1.githubusercontent.com/u/629029?s=400&u=017559e7f320ea97881b4d317638cbb9db26d7e4&v=4",
      name: "Willany Silva",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/willany",
      linkedIn: "https://www.linkedin.com/in/willany-silva-abb14726/"
    }
  ];

  return (
    <Container>
      <Title>Leads</Title>
      <Function>
      iOS Lead | Rails Lead | Frontend Lead | Android Lead | Java Lead | Python Lead | jQuery Lead | Algo Lead | Analytics Lead
      </Function>
      <Cards>
        {datas.map((data) => (
          <Card key={Math.random()}>
            <Photo src={data.photo} alt={data.name} />
            <Name>{data.name}</Name>
            <Participation>Lead</Participation>
            <Description>{data.description}</Description>
            <SocialContext>
              <Social href={data.gitHub} target="_blank">
                <Icon src={GitHub} alt="Icon GitHub" />
              </Social>
              <Social href={data.linkedIn} target="_blank">
                <Icon src={Linkedin} alt="Icon LinkedIn" />
              </Social>
            </SocialContext>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Leads;