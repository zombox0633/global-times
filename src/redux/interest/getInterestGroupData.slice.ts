import { createSlice } from "@reduxjs/toolkit";
import { GlobalTimePageableType } from "../../service/GlobalTimeService.type";
import { initialStateType } from "../redux.type";
import { fetchInterestGroupData } from "./getInterestGroupData.thunk";

const initialState: initialStateType<GlobalTimePageableType> = {
  data: null,
  loading: false,
  error: null,
};

const getInterestGroupDataSlice = createSlice({
  name: "getInterestGroupData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInterestGroupData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchInterestGroupData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload || null;
    });
    builder.addCase(fetchInterestGroupData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default getInterestGroupDataSlice;
