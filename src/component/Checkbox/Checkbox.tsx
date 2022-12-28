import Preact from "preact";
import {
  interfaceforcontextvalueINITIAL_DATA,
  logicComponentsprops,
} from "../../types/Preacttwind";

type handleremovexcesschild = {
  handleremovexcesschild: (
    property: keyof interfaceforcontextvalueINITIAL_DATA,
    id: string
  ) => void;
};
type extendedtypes = handleremovexcesschild & logicComponentsprops;
function Checkbox({
  value,
  handleChange,
  handleremovexcesschild,
}: extendedtypes) {
  //

  function handleChecbox(e: Preact.JSX.TargetedEvent<HTMLInputElement, Event>) {
    const eventValue = e.target.value;
    let isChecked = value.checkbox.find((val: string) => val === eventValue);
    console.log(isChecked);

    if (isChecked) {
      handleremovexcesschild("checkbox", eventValue);
      return;
    }
    handleChange({ checkbox: [...value.checkbox, eventValue] });
  }

  function checkCheckbox(eventValue: string) {
    let val = value.checkbox.find((val: string) => val === eventValue);
    if (val) {
      return true;
    }
    return false;
  }

  return (
    <>
      <h1> {value.firstName} </h1>

      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        defaultChecked={checkCheckbox("Bike")}
        onChange={(e) => handleChecbox(e)}
      />
      <label htmlFor="vehicle1"> I have a bike</label>
      <input
        type="checkbox"
        id="vehicle2"
        name="vehicle2"
        value="Car"
        onChange={(e) => handleChecbox(e)}
        defaultChecked={checkCheckbox("Car")}
      />
      <label htmlFor="vehicle2"> I have a car</label>
      <input
        type="checkbox"
        id="vehicle3"
        name="vehicle3"
        value="Boat"
        onChange={(e) => handleChecbox(e)}
        defaultChecked={checkCheckbox("Boat")}
      />
      <label for="vehicle3"> I have a boat</label>
      <br></br>
    </>
  );
}

export default Checkbox;
