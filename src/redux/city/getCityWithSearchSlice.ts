import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCancellableSource } from "../cancellation";
import getCityWithSearch, {
  GetCityWithSearchPropsType,
} from "../../service/city/getCityWithSearch";
import { checkErrorMessage } from "../../helper/errorStatus";
import createGenericSlice from "../createGenericSlice";
import { GlobalTimePageableReturnDataType } from "../../service/GlobalTimeService.type";

export const fetchCityDataWithSearchCityName = createAsyncThunk(
  "getCityWithSearchCitySlice/fetchCityDataWithSearchCityName",
  async ({ cityName, page, size }: GetCityWithSearchPropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchCityDataWithSearchCityName");

    try {
      const [success, error] = await getCityWithSearch({
        cityName,
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

export const getCityWithSearchCitySlice = createGenericSlice<
  GlobalTimePageableReturnDataType,
  GetCityWithSearchPropsType
>({
  name: "getCityWithSearch",
  fetchThunk: fetchCityDataWithSearchCityName,
});

export default getCityWithSearchCitySlice;
