import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkErrorMessage } from "../../helper/errorStatus";
import getInterestGroupData, {
  GetInterestGroupDataPropsType,
} from "../../service/interest/getInterestGroupData";
import axios from "axios";
import { generateCancelMessage } from "../cancelMessage";

export const fetchInterestGroupData = createAsyncThunk(
  "getInterestGroupDataSlice/fetchInterestGroup",
  async ({ page, size }: GetInterestGroupDataPropsType, { rejectWithValue, signal }) => {
    const source = axios.CancelToken.source();

    signal.addEventListener("abort", () => {
      source.cancel(generateCancelMessage("fetchInterestGroup"));
    });

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
