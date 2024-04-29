import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCancellableSource } from "../cancellation";
import getCountryWithSearch, {
  GetCountryWithSearchPropsType,
} from "../../service/country/getCountryWithSearch";
import { checkErrorMessage } from "../../helper/errorStatus";
import createGenericSlice from "../createGenericSlice";
import { GetCityWithSearchReturnDataType } from "../../service/city/getCityWithSearch.type";

export const fetchCountryWithSearch = createAsyncThunk(
  "getCountryWithSearchSlice/fetchCountryWithSearch",
  async (
    { countryName, page, size }: GetCountryWithSearchPropsType,
    { rejectWithValue, signal },
  ) => {
    const source = createCancellableSource(signal, "fetchCountryWithSearch");

    try {
      const [success, error] = await getCountryWithSearch({
        countryName,
        page,
        size,
        cancelToken: source,
      });
      if (success) {
        return success;
      } else {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(checkErrorMessage(error));
    }
  },
);

export const getCountryWithSearchSlice = createGenericSlice<
  GetCityWithSearchReturnDataType,
  GetCountryWithSearchPropsType
>({
  name: "getCountryWithSearch",
  fetchThunk: fetchCountryWithSearch,
});

export default getCountryWithSearchSlice;
