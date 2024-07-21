import { throwErrorMessage } from "./throwErrorMessage";

type TypeOperation =
  | "trim"
  | "toString"
  | "lowerCase"
  | `minLength(${number})`
  | `maxLength(${number})`;

interface IValidateWithDTOOptions {
  deleteUnneededProperties?: boolean;
  returnUpdatedData?: boolean;
  showToast?: boolean;
  logError?: boolean;
}

export interface DTO {
  req?: boolean;
  operations?: TypeOperation[];
  elementRef?: React.RefObject<HTMLInputElement>;
}

/**
 * Validates data against a Data Transfer Object (DTO).
 * @param {any} dto - The DTO to validate against.
 * @param {any} data - The data to validate.
 * @param {IValidateWithDTOOptions} [options] - The options for validation.
 * @param {boolean} [options.deleteUnneededProperties] - Whether to delete unneeded properties from the data.
 * @param {boolean} [options.returnUpdatedData] - Whether to return the updated data.
 * @param {boolean} [options.showToast] - Whether to show a toast message on error.
 * @param {boolean} [options.logError] - Whether to log the error to the console.
 * @returns {boolean|any} - Returns true if the data is valid, otherwise returns false or the updated data.
 */
export const validateWithDTO = (
  dto: any,
  data: any,
  {
    deleteUnneededProperties = false,
    returnUpdatedData = true,
    showToast = true,
    logError = true,
  }: IValidateWithDTOOptions = {},
) => {
  let updatedData: any = {};

  Object.entries(data).forEach(([key, value]) => {
    if (!dto[key] && deleteUnneededProperties) {
      delete data[key];
    }

    if (dto[key]?.req && !value) {
      const error = new Error(`${key} is a required field.`);
      error.name = "ValidationError";
      throwErrorMessage(error, showToast, logError);
      throw error;
    }

    if (dto[key]?.operations) {
      let newValue = value;
      dto[key]?.operations.forEach((operation: TypeOperation) => {
        try {
          newValue = performOperation(operation, newValue);
        } catch (error) {
          throwErrorMessage(error, showToast, logError);
        }
      });
      updatedData[key] = newValue;
    }
  });

  if (returnUpdatedData) {
    return updatedData;
  }
};

/**
 * Performs the specified operation on the given value.
 * @param operation
 * @param value
 * @returns updatedValue
 */
function performOperation(operation: string, value: any) {
  if (typeof value !== "string") {
    throw new Error(`Operation ${operation} is only valid for string values.`);
  }

  if (operation === "trim") {
    return value.trim();
  } else if (operation === "toString") {
    return value.toString();
  } else if (operation === "lowerCase") {
    return value.toLowerCase();
  } else if (operation.startsWith("minLength")) {
    const minLength = parseInt(operation.match(/\d+/)?.[0] || "0", 10);
    if (value.length < minLength) {
      throw new Error(`Value must be at least ${minLength} characters long.`);
    }
    return value;
  } else if (operation.startsWith("maxLength")) {
    const maxLength = parseInt(operation.match(/\d+/)?.[0] || "0", 10);
    if (value.length > maxLength) {
      throw new Error(
        `Value must be no more than ${maxLength} characters long.`,
      );
    }
    return value;
  } else {
    throw new Error(`Invalid operation: ${operation}`);
  }
}
