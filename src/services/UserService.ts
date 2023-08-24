import api from "../infra/api";
import { IUserDataLogin } from "../interfaces/UserInterface";
const userServices = {
  login: async (data: IUserDataLogin) => {
    return await (
      await api.post("/access/login", data)
    ).data;
  },
  auth: async () => {
    return await (
      await api.post("/access/auth")
    ).data;
  },
};

export default userServices;
