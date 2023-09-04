import React, { useState, useEffect, useRef } from "react";
import * as C from "./styles";
import useCodePin from "../../hooks/useCodePin";
const PinCode = () => {
  const PIN_COUNT = 10;
  const [inputValues, setInputValues] = useState(Array(PIN_COUNT).fill(""));
  const inputRefs = useRef(Array(PIN_COUNT).fill(null));
  const { enterToStorage } = useCodePin();
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInput = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;

    setInputValues(newInputValues);

    if (value && index < PIN_COUNT - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const submit = () => {
    const pinString = inputValues.join(""); // Transforma o array em uma string
    enterToStorage(pinString);
  };

  return (
    <C.ContainerPin>
      {Array.from({ length: PIN_COUNT }, (_, index) => (
        <C.Pin
          key={index}
          type="text"
          maxLength={1}
          value={inputValues[index]}
          onChange={(e) => handleInput(index, e)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && index > 0) {
              inputRefs.current[index]?.focus();
            }
          }}
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
      <C.ButtonPin onClick={submit}>ENTRAR</C.ButtonPin>
    </C.ContainerPin>
  );
};

export default PinCode;
