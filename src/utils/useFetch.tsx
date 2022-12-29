import { useEffect, useState } from "preact/hooks";
import data from "../data/fakedata.json";

export function Checkboxdatadata() {
  return data.checkbox;
}

const baseURL = "https://api.jsonbin.io/v3/b/63ac8f6715ab31599e26db1d";

function useFetch() {
  const [value, setval] = useState({});
  async function Fetchquestion() {
    try {
      const data = await fetch(baseURL);
      const val = await data.json();
      setval(val);
    } catch (error) {}
  }

  useEffect(() => {
    Fetchquestion();
  }, []);

  return value;
}

export default useFetch;
