import React from "react";
import * as C from "./style";
interface IProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputText = ({ value, onChange }: IProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <C.Input value={value} onChange={handleInputChange} />;
};

export default InputText;
