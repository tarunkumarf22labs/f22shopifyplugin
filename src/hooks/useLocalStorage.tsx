import { useEffect, useState } from "preact/hooks";
import { InitialContextData } from "../types/index";

export const useLocalStorage = (
  key: string,
  defaultValue: InitialContextData
) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
