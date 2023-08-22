import api from "../infra/api";

const StorageService = {
  async createStorage() {
    return await (
      await api.post("/storage")
    ).data;
  },
  async enterToStorage(code: string) {
    return await (
      await api.get(`/storage/${code}`)
    ).data;
  },
};

export default StorageService;
