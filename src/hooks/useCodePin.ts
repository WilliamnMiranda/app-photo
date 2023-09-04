import { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import StorageService from "../services/StorageService";
import { useNavigate } from "react-router-dom";

const useCodePin = () => {
  const PIN_COUNT = 10;
  const [inputValues, setInputValues] = useState(Array(PIN_COUNT).fill(""));
  const navigate = useNavigate();
  const createStorage = useMutation(() => StorageService.createStorage(), {
    onSuccess: () => {},
  });

  const enterToStorage = useMutation(
    (code: string) => StorageService.enterToStorage(code),
    {
      onSuccess: (data) => {
        navigate(`/storage/${data.code}`);
      },
      onError: () => {
        
        if(inputValues.includes('')){
          alert('preencha todos os campos')
        }else{
          alert('Codigo nao encontrado')
        }
      },
    }
  );
  const inputRefs = useRef(Array(PIN_COUNT).fill(null));
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
  return {
    createStorage: createStorage.mutate,
    enterToStorage: enterToStorage.mutate,
    inputValues,
    setInputValues,
    PIN_COUNT,
    handleInput,
    inputRefs
  };
};

export default useCodePin;
