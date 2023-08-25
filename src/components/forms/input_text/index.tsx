import React from "react";

interface IProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const InputText = ({ value, onChange }: IProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <input value={value} onChange={handleInputChange} />;
};

export default InputText;
