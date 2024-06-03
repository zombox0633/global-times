import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthDataStateType = {
  email: string;
  jwt: string;
};

const initialState: AuthDataStateType = {
  email: "",
  jwt: "",
};

const authDataSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthDataStateType>) => {
      state.email = action.payload.email;
      state.jwt = action.payload.jwt;
    },
    clearAuthData: (state) => {
      state.email = "";
      state.jwt = "";
    },
  },
});

export const { setAuthData, clearAuthData } = authDataSlice.actions;
export default authDataSlice;
