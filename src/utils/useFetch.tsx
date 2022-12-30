import { useEffect, useState } from "preact/hooks";
import data from "../data/fakedata.json";
import { Apiinterface } from "../types";
const baseURL = "https://api.jsonbin.io/v3/b/63ade7b815ab31599e279989";

function useFetch() {
  const [value, setval] = useState<Apiinterface>({});
  async function Fetchquestion() {
    try {
      const data = await fetch(baseURL);
      const val = await data.json();
      if (typeof value === "object") setval(val);
    } catch (error) {}
  }

  useEffect(() => {
    Fetchquestion();
  }, []);

  return value;
}

export default useFetch;
