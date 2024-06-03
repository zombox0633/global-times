import { createAsyncThunk } from "@reduxjs/toolkit";
import authenticateUser, {
  AuthenticateUserPropsType,
  AuthenticateUserReturnType,
} from "../../service/user/authenticateUser";
import { createCancellableSource } from "../cancellation";
import { checkErrorMessage } from "../../helper/errorStatus";
import createGenericSlice from "../createGenericSlice";

export const fetchAuthenticate = createAsyncThunk(
  "authenticateSlice/fetchAuthenticate",
  async ({ email, password }: AuthenticateUserPropsType, { rejectWithValue, signal }) => {
    const source = createCancellableSource(signal, "fetchAuthenticate");

    try {
      const [success, error] = await authenticateUser({ email, password, cancelToken: source });
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

export const authenticateSlice = createGenericSlice<
  AuthenticateUserReturnType,
  AuthenticateUserPropsType
>({
  name: "authenticateUser",
  fetchThunk: fetchAuthenticate,
});

export default authenticateSlice;
