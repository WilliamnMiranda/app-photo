import styled from "styled-components";

export const ContainerHome = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerOptions = styled.div`
  display: flex;
  gap:20px;
`

export const Option = styled.div`
  width: 200px;
  height: 200px;
  background-color: grey;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: white;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size:1.2em;
  div {
    font-size: 2.0em;
  }
`