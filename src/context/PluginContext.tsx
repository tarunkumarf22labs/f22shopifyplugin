import { createContext } from "preact";
import { useContext } from "preact/hooks";
import {
  interfaceforcontextvalueINITIAL_DATA,
  PluginContextprops,
} from "../types/Preacttwind";
export const FormdataContext =
  createContext<interfaceforcontextvalueINITIAL_DATA | null>(null);

function PluginContext({ children }: PluginContextprops) {
  const INITIAL_DATA = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
    radioval: "",
    checkbox: [],
  };

  

  return (
    <FormdataContext.Provider value={INITIAL_DATA}>
      {children}
    </FormdataContext.Provider>
  );
}

export function useFormdataDispatch() {
  const context = useContext(FormdataContext);
  if (!context) {
    throw new Error("useCounterDispatch must be within  PluginContextProvider");
  }
  return context;
}

export default PluginContext;
