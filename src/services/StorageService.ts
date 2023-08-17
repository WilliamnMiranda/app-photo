import api from "../infra/api";

const StorageService = {
  async enterWithCodePin() {
    return await (
      await api.post("/storage")
    ).data;
  },
};

export default StorageService;
