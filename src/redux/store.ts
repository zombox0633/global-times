import { configureStore } from "@reduxjs/toolkit";
import getInterestGroupDataSlice from "./interest/getInterestGroupData.slice";
import getCityByCityNameSlice from "./city/getCityByCityNameSlice";
import getCityWithSearchCitySlice from "./city/getCityWithSearchSlice";
import getCountryDataByNameSlice from "./country/getCountryDataByNameSlice";
import getCountryWithSearchSlice from "./country/getCountryWithSearchSlice";
import getContinentDataByNameSlice from "./continent/getContinentDataByNameSlice";
import authenticateSlice from "./authentication/authenticateSlice";
import getRegisterSlice from "./authentication/getRegisterSlice";
import authDataSlice from "./authentication/authDataSlice";
import { authMiddleware } from "./middleware/authMiddleware";

export const store = configureStore({
  reducer: {
    authData: authDataSlice.reducer,
    getInterestGroupData: getInterestGroupDataSlice.reducer,
    getCityByCityName: getCityByCityNameSlice.reducer,
    getCityWithSearch: getCityWithSearchCitySlice.reducer,
    getCountryDataByName: getCountryDataByNameSlice.reducer,
    getCountryWithSearch: getCountryWithSearchSlice.reducer,
    getContinentDataByName: getContinentDataByNameSlice.reducer,
    getRegister: getRegisterSlice.reducer,
    authenticate: authenticateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
