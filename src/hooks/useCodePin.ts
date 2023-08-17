import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import StorageService from "../services/StorageService";

const useCodePin = () => {
  const code = useState("");
  const queryClient = useQueryClient();
  const createStorage = useMutation(() => StorageService.enterWithCodePin(), {
    onSuccess: (data) => {
      console.log(data);
      console.log("sucesso" + data.code);
      queryClient.invalidateQueries({ queryKey: ["projects_recents"] });
    },
  });

  return {
    code,
    createStorage: createStorage.mutate,
  };
};

export default useCodePin;
