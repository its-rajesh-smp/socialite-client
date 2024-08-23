import { toast } from "react-toastify";

/**
 * Throws an error message with optional toast notification and logging.
 * @param {any} error - The error object to be thrown.
 * @param {boolean} [showToast=true] - Whether to show an error toast notification.
 * @param {boolean} [logError=true] - Whether to log the error to the console.
 */
export const throwErrorMessage = (
  error: any,
  showToast = true,
  logError = true,
) => {
  let err = error;
  let errMessage = err?.message;

  if (error.name === "ValidationError") {
    errMessage = `Validation error: ${error.message}`;
  } else if (error?.message) {
    errMessage = `An unexpected error occurred: ${error?.message}`;
  } else {
    errMessage = `Something went wrong: ${error}`;
  }

  if (showToast) {
    toast.error(errMessage);
  }

  if (logError) {
    console.log(
      `%c${errMessage}`,
      "color: white; background-color: red; padding: 5px; border-radius: 3px;",
    );
  }

  throw error;
};
