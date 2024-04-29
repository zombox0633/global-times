import { createAsyncThunk } from "@reduxjs/toolkit";
import createGenericSlice from "../createGenericSlice";
import { createCancellableSource } from "../cancellation";
import { checkErrorMessage } from "../../helper/errorStatus";
import getCountryDataByName, {
  GetCountryDataByNamePropsType,
} from "../../service/country/getCountryDataByName";
import { GlobalTimePageableReturnDataType } from "../../service/GlobalTimeService.type";

export const fetchCountryDataByName = createAsyncThunk(
  "getCountryDataByNameSlice/fetchCountryDataByName",
  async (
    { countryName, page, size }: GetCountryDataByNamePropsType,
    { rejectWithValue, signal },
  ) => {
    const source = createCancellableSource(signal, "fetchCountryDataByName");

    try {
      const [success, error] = await getCountryDataByName({
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

export const getCountryDataByNameSlice = createGenericSlice<
  GlobalTimePageableReturnDataType,
  GetCountryDataByNamePropsType
>({
  name: "getCountryDataByName",
  fetchThunk: fetchCountryDataByName,
});

export default getCountryDataByNameSlice;
