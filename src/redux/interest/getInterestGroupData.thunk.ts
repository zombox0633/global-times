import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkErrorMessage } from "../../helper/errorStatus";
import getInterestGroupData, {
  GetInterestGroupDataPropsType,
} from "../../service/interest/getInterestGroupData";
import { createCancellableSource } from "../cancellation";

export const fetchInterestGroupData = createAsyncThunk(
  "getInterestGroupDataSlice/fetchInterestGroup",
  async ({ page, size }: GetInterestGroupDataPropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchInterestGroup");

    try {
      const [success, error] = await getInterestGroupData({ page, size, cancelToken: source });
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
