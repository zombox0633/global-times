import { configureStore } from "@reduxjs/toolkit";
import getInterestGroupDataSlice from "./interest/getInterestGroupData.slice";
import getCityByCityNameSlice from "./city/getCityByCityNameSlice";
import getCityWithSearchCitySlice from "./city/getCityWithSearchSlice";
import getCountryDataByNameSlice from "./country/getCountryDataByNameSlice";
import getCountryWithSearchSlice from "./country/getCountryWithSearchSlice";
import getContinentDataByNameSlice from "./continent/getContinentDataByNameSlice";
import authenticateSlice from "./user/authenticateSlice";
import getRegisterSlice from "./user/getRegisterSlice";
import authDataSlice from "./user/authDataSlice";
import { authMiddleware } from "./middleware/authMiddleware";
import createAccountSlice from "./user/createAccountSlice";
import healthSlice from "./healthSlice";
import loadingSlice from "./loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    health: healthSlice.reducer,
    authData: authDataSlice.reducer,
    getInterestGroupData: getInterestGroupDataSlice.reducer,
    getCityByCityName: getCityByCityNameSlice.reducer,
    getCityWithSearch: getCityWithSearchCitySlice.reducer,
    getCountryDataByName: getCountryDataByNameSlice.reducer,
    getCountryWithSearch: getCountryWithSearchSlice.reducer,
    getContinentDataByName: getContinentDataByNameSlice.reducer,
    getRegister: getRegisterSlice.reducer,
    authenticate: authenticateSlice.reducer,
    createAccount: createAccountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
