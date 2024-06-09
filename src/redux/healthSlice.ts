import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getHealthCheck from "../service/getHealthCheck";
import { initialStateType } from "./redux.type";

const initialState: initialStateType<string> = {
  data: null,
  loading: false,
  error: null,
};

export const fetchHealthCheck = createAsyncThunk(
  "healthSlice/fetchHealthCheck",
  async (_, { rejectWithValue }) => {
    try {
      const [success, error] = await getHealthCheck();
      if (success) {
        return success;
      } else {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const healthSlice = createSlice({
  name: "getHealthCheck",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHealthCheck.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchHealthCheck.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchHealthCheck.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload as string;
    });
  },
});

export default healthSlice;
