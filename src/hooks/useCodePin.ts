import { useState } from "react";
import { useMutation } from "react-query";
import StorageService from "../services/StorageService";
import { useNavigate } from "react-router-dom";

const useCodePin = () => {
  const [code, setCode] = useState("");
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
        console.log("erro");
      },
    }
  );

  return {
    code,
    setCode,
    createStorage: createStorage.mutate,
    enterToStorage: enterToStorage.mutate,
  };
};

export default useCodePin;
