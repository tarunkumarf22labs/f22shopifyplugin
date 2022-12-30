import { tw } from "twind";

export function Select() {
  return (
    <div>
      <select
        name="cars"
        id="cars"
        className={tw`w-96 border-2 border-black mb-4 p-1 `}
      >
        <option _ngcontent-dss-c150="" selected={true} disabled={true}>
          Select height
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      {/*  */}
      <br />

      <select
        name="cars"
        id="cars"
        className={tw`w-96 p-1 border-2 border-black  `}
      >
        <option _ngcontent-dss-c150="" selected={true} disabled={true}>
          Select height
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
