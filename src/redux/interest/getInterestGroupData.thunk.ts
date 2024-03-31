import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkErrorMessage } from "../../helper/errorStatus";
import getInterestGroupData, {
  GetInterestGroupDataPropsType,
} from "../../service/interest/getInterestGroupData";

export const fetchInterestGroupData = createAsyncThunk(
  "getInterestGroupDataSlice/fetchInterestGroup",
  async ({ page, size }: GetInterestGroupDataPropsType, { rejectWithValue }) => {
    try {
      const [success, error] = await getInterestGroupData({ page, size });
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
