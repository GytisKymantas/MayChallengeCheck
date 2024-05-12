import { isWindowExists } from "./constants";

export const setToLocalStorage = (key: string, value: string): void => {
  try {
    if (isWindowExists) {
      window.localStorage.setItem(key, value);
    }
  } catch (e) {
    console.log(e)
  }
};