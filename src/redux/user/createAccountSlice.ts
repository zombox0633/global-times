import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCancellableSource } from "../cancellation";
import { checkErrorMessage } from "../../helper/errorStatus";
import createAccount, { CreateAccountPropsType } from "../../service/user/createAccount";
import createGenericSlice from "../createGenericSlice";
import { UserType } from "../../service/user/user.type";

export const fetchCreateAccount = createAsyncThunk(
  "createUserSlice/fetchCreateAccount",
  async ({ email, password }: CreateAccountPropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchCreateAccount");

    try {
      const [success, error] = await createAccount({ email, password, cancelToken: source });
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

export const createAccountSlice = createGenericSlice<UserType, CreateAccountPropsType>({
  name: "createAccount",
  fetchThunk: fetchCreateAccount,
});

export default createAccountSlice;
