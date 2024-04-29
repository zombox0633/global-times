import { configureStore } from "@reduxjs/toolkit";
import getInterestGroupDataSlice from "./interest/getInterestGroupData.slice";
import getCityByCityNameSlice from "./city/getCityByCityNameSlice";
import getCityWithSearchCitySlice from "./city/getCityWithSearchSlice";
import getCountryDataByNameSlice from "./country/getCountryDataByNameSlice";
import getCountryWithSearchSlice from "./country/getCountryWithSearchSlice";
import getContinentDataByNameSlice from "./continent/getContinentDataByNameSlice";

export const store = configureStore({
  reducer: {
    getInterestGroupData: getInterestGroupDataSlice.reducer,
    getCityByCityName: getCityByCityNameSlice.reducer,
    getCityWithSearch: getCityWithSearchCitySlice.reducer,
    getCountryDataByName: getCountryDataByNameSlice.reducer,
    getCountryWithSearch: getCountryWithSearchSlice.reducer,
    getContinentDataByName: getContinentDataByNameSlice.reducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
