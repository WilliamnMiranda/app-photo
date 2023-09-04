import styled from "styled-components";

export const ContainerStorage = styled.div`
  padding: 20px;
  background-color: rgb(29, 29, 29, 0.9);
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 190px);
  grid-gap: 20px;
`;

export const GridItem = styled.div`
  background-color: black;
  border-radius: 10px;
`;

export const ImageItem = styled.img`
  height: 100%;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
`;
