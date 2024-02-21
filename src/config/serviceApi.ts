import axios from "axios";
import { APIResponseErrorType } from "./serviceApi.type";
import { statusMessageError } from "../helper/errorStatus";

export const onHandleErrorFromAPI = (error: unknown): [null, string] => {
  if (axios.isCancel(error)) {
    return [null, "Request was cancelled"];
  }
  if (axios.isAxiosError<APIResponseErrorType>(error)) {
    const status = error.response?.status ?? 0;

    if (status in statusMessageError) {
      return [null, statusMessageError[status].message];
    } else {
      const defaultMessage = "An unexpected error occurred. Please try again later";
      const responseMessage = error.response?.data.error?.message ?? defaultMessage;
      return [null, responseMessage];
    }
  } else {
    return [null, (error as Error).message];
  }
};
