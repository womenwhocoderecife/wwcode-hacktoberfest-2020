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

const Volunteers = () => {
  const datas = [
    {
      photo:
        "https://avatars3.githubusercontent.com/u/48742480?s=460&u=f7a57f3983986bfd66908f46ddc3214452781180&v=4",
      name: "Aline Rosa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/alinecbsr",
      linkedIn: "https://www.linkedin.com/in/alinecbsr/",
    }
  ];

  return (
    <Container>
      <Title>Volunteer</Title>
      <Function>
      Apoio para projeto ou evento
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

export default Volunteers;