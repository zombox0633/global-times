import { createAsyncThunk } from "@reduxjs/toolkit";
import createGenericSlice from "../createGenericSlice";
import getCityByCityName, {
  GetCityByCityNameData,
  GetCityByCityNamePropsType,
} from "../../service/city/getCityByCityName";
import { createCancellableSource } from "../cancellation";
import { checkErrorMessage } from "../../helper/errorStatus";

export const fetchCityByCityName = createAsyncThunk(
  "getCityByCityNameSlice/fetchCityByCityName",
  async ({ cityName }: GetCityByCityNamePropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchCityByCityName");

    try {
      const [success, error] = await getCityByCityName({ cityName, cancelToken: source });
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

export const getCityByCityNameSlice = createGenericSlice<
  GetCityByCityNameData,
  GetCityByCityNamePropsType
>({
  name: "getCityByCityName",
  fetchThunk: fetchCityByCityName,
});

export default getCityByCityNameSlice;
