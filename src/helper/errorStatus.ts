export const checkErrorMessage = (error: unknown): string => {
  return error instanceof Error ? error.message : "Unknown error";
};

export const statusMessageError: {
  [key: number]: { message: string };
} = {
  400: {
    message: "Bad Request",
  },
  401: {
    message: "Unauthorized",
  },
  403: {
    message: "Forbidden",
  },
  404: {
    message: "Not Found",
  },
  500: {
    message: "Internal Server Error",
  },
  503:{
    message: "Service Unavailable"
  },
  504:{
    message: "Gateway Timeout"
  },
};
