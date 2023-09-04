import React, { useState, useEffect, useRef } from "react";
import * as C from "./styles";
import useCodePin from "../../hooks/useCodePin";
const PinCode = () => {
  const { enterToStorage,inputValues,setInputValues,PIN_COUNT,handleInput,inputRefs} = useCodePin();
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
          check={!!inputValues[index]}
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
