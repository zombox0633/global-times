export const statusMessageError: { [key: number]: { message: string } } = {
  400: { message: "Bad Request. Please verify your input." },
  401: { message: "Unauthorized. Please check your credentials." },
  403: {message: "Forbidden. You do not have permission to perform this action."},
  404: {message: "Not Found. The resource you are looking for is not available."},
  500: { message: "Internal Server Error. Please try again later." },
};
