import { createContext } from "preact";
import { InitialContextData } from "../types";

export const FormdataContext = createContext<InitialContextData | null>({
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
});






// function PluginContext({ children }: PluginContextprops) {
//   const INITIAL_DATA = {
//     firstName: "",
//     lastName: "",
//     age: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     email: "",
//     password: "",
//     radioval: "",
//     checkbox: [],
//   };

//   return (
//     <FormdataContext.Provider value={INITIAL_DATA}>
//       {children}
//     </FormdataContext.Provider>
//   );
// }

// export function useFormdataDispatch() {
//   const context = useContext(FormdataContext);
//   if (!context) {
//     throw new Error("useCounterDispatch must be within  PluginContextProvider");
//   }
//   return context;
// }

// export default PluginContext;
