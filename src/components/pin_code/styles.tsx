import styled from "styled-components";

interface IPin {
  containValue: boolean
}
export const ContainerPin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Pin = styled.input<IPin>`
  height: 50px;
  width: 50px;
  border: 10px;
  background-color: #F0F0F0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  text-align: center;
  border:${({containValue})=> containValue ? '1px solid black' : 'none'};
`;
export const ButtonPin = styled.button`
  box-sizing: border-box;
  border:none;
  background-color: #56b6fa;
  color: white;
  outline: none;
  width: 140px;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`