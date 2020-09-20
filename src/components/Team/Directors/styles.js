import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #48484C;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 600;
  padding-left: 9rem;
  color: #FFFFFF;
  letter-spacing: 1px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 9rem;
  color: #FFFFFF;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Collection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cards = styled.section`
  width: 90%;
  max-width: 380px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  color: #00707A;
`;
