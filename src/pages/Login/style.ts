import styled from "styled-components";

export const ContainerLogin = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerForm = styled.div`
  width: 520px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Tittle = styled.h1`
  text-transform: uppercase;
  font-size: 1.6em;
  margin-bottom: 10px;
`;

export const ButtonLogin = styled.button`
  height: 40px;
  width: 100%;
`;
