import { configureStore } from "@reduxjs/toolkit";
import getInterestGroupDataSlice from "./interest/getInterestGroupData.slice";
import getCityByCityNameSlice from "./city/getCityByCityNameSlice";

export const store = configureStore({
  reducer: {
    getInterestGroupData: getInterestGroupDataSlice.reducer,
    getCityByCityName: getCityByCityNameSlice.reducer
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
