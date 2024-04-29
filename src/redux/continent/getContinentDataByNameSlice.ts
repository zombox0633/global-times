import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCancellableSource } from "../cancellation";
import getContinentDataByName, {
  GetContinentDataByNamePropsType,
} from "../../service/continent/getContinentDataByName";
import { checkErrorMessage } from "../../helper/errorStatus";
import createGenericSlice from "../createGenericSlice";
import { GetContinentReturnDataType } from "../../service/continent/getContinentDataByName.type";

export const fetchContinentDataByName = createAsyncThunk(
  "getContinentDataByNameSlice/fetchContinentDataByName",
  async (
    { continentName, page, size }: GetContinentDataByNamePropsType,
    { rejectWithValue, signal },
  ) => {
    const source = createCancellableSource(signal, "fetchContinentDataByName");

    try {
      const [success, error] = await getContinentDataByName({
        continentName,
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

export const getContinentDataByNameSlice = createGenericSlice<
  GetContinentReturnDataType,
  GetContinentDataByNamePropsType
>({
  name: "getContinentDataByName",
  fetchThunk: fetchContinentDataByName,
});

export default getContinentDataByNameSlice;
