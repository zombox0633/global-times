import { Middleware } from "@reduxjs/toolkit";
import { RootType } from "../store";

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state: RootType = store.getState();
  const secret = state.authData;

  localStorage.setItem("secret", JSON.stringify(secret));

  return result;
};
