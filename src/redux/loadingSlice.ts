import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isLoading: boolean;
  error: string | null;
};

const initialState: initialStateType = {
  isLoading: false,
  error: null,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    stopLoading: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { startLoading, stopLoading, setError } = loadingSlice.actions;
export default loadingSlice;
