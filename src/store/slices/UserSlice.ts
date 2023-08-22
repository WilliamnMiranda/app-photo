import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  _id: string;
  authenticate: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  _id: "",
  authenticate: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login(
      state: UserState,
      { payload }: PayloadAction<{ token: string; email: string; _id: string }>
    ) {
      localStorage.setItem("team-token", payload.token);
      return {
        ...state,
        email: payload.email,
        token: payload.token,
        _id: payload._id,
        authenticate: true,
      };
    },
    authenticate(
      state: UserState,
      {
        payload,
      }: PayloadAction<{
        name: string;
        email: string;
        cpf: string;
        _id: string;
      }>
    ) {
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        cpf: payload.cpf,
        _id: payload._id,
        authenticate: true,
      };
    },
    logout(state: UserState) {
      localStorage.removeItem("team-token");
      return {
        ...state,
        name: "",
        cpf: "",
        token: "",
        authenticate: false,
      };
    },
  },
});

export const { login, authenticate, logout } = userSlice.actions;

export default userSlice.reducer;
