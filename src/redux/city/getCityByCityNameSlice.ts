import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createGenericSlice from "../createGenericSlice";
import getCityByCityName, {
  GetCityByCityNamePropsType,
} from "../../service/city/getCityByCityName";
import { generateCancelMessage } from "../cancelMessage";
import { checkErrorMessage } from "../../helper/errorStatus";
import { CityDataType } from "../../service/GlobalTimeService.type";

export const fetchCityByCityName = createAsyncThunk(
  "getCityByCityNameSlice/fetchCityByCityName",
  async ({ cityName }: GetCityByCityNamePropsType, { rejectWithValue, signal }) => {
    const source = axios.CancelToken.source();

    signal.addEventListener("abort", () => {
      source.cancel(generateCancelMessage("fetchCityByCityName"));
    });

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

export const getCityByCityNameSlice = createGenericSlice<CityDataType, GetCityByCityNamePropsType>({
  name: "getCityByCityName",
  fetchThunk: fetchCityByCityName,
});

export default getCityByCityNameSlice;
