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

const Directors = () => {
  const datas = [
    {
      photo:
        "https://avatars1.githubusercontent.com/u/6514093?s=400&u=68d4c28fd83f8c6929a63d75d44cd8da17bd478f&v=4",
      name: "Karina Machado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/karinamachado",
      linkedIn: "https://www.linkedin.com/in/karinamachado/",
    },
    {
      photo:
        "https://avatars0.githubusercontent.com/u/6129899?s=400&v=4",
      name: "Andreza Leite",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/andrezaleite",
      linkedIn: "https://www.linkedin.com/in/andrezaleite/",
    },
    {
      photo:
        "https://avatars2.githubusercontent.com/u/7841344?s=400&u=7160c0fcc3c851f0b521d151bbe535300165a6c6&v=4",
      name: "Simone Amorim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/simoneas02",
      linkedIn: "https://www.linkedin.com/in/simoneas02/",
    },
    {
      photo:
        "https://avatars2.githubusercontent.com/u/11897614?s=400&u=7a8341c2b97e26c854515421e046326198879860&v=4",
      name: "Anna Gabriela ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      gitHub: "https://github.com/AnnaGabriela",
      linkedIn: "https://www.linkedin.com/in/annagabrielac/",
    }
  ];

  return (
    <Container>
      <Title>Directors</Title>
      <Function>
        Organiza eventos | Desenvolve Líderes | Colabora com o aumento do número
        de membros | Representa WWCode
      </Function>
      <Cards>
        {datas.map((data) => (
          <Card key={Math.random()}>
            <Photo src={data.photo} alt={data.name} />
            <Name>{data.name}</Name>
            <Participation>Director</Participation>
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

export default Directors;
