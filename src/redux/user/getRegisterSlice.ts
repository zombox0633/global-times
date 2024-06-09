import { createAsyncThunk } from "@reduxjs/toolkit";
import getRegister, { GetRegisterPropsType } from "../../service/user/getRegister";
import { createCancellableSource } from "../cancellation";
import { checkErrorMessage } from "../../helper/errorStatus";
import createGenericSlice from "../createGenericSlice";
import { UserType } from "../../service/user/user.type";

export const fetchGetRegister = createAsyncThunk(
  "getRegisterSlice/fetchGetRegister",
  async ({ email, jwt }: GetRegisterPropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchGetRegister");

    try {
      const [success, error] = await getRegister({ email, jwt, cancelToken: source });
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

export const getRegisterSlice = createGenericSlice<UserType, GetRegisterPropsType>({
  name: "getRegister",
  fetchThunk: fetchGetRegister,
});

//เพิ่ม clearData ใน export และเปลี่ยนชื่อเพื่อระบุบและไม่ให้ชื่อซ้ำกัน
export const { clearData: clearRegisterData } = getRegisterSlice.actions;
export default getRegisterSlice;
