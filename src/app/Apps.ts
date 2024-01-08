import { waitFor } from "./waitFor";

const error = (error: unknown) => {
  console.error(error);
};

export const Apps = {
  error,
  waitFor,
};
