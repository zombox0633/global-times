import { configureStore } from "@reduxjs/toolkit";
import getInterestGroupDataSlice from "./interest/getInterestGroupData.slice";

export const store = configureStore({
  reducer: {
    getInterestGroupData: getInterestGroupDataSlice.reducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
