import Preact from "preact";
import useFetch, { Checkboxdatadata } from "../../utils/useFetch";
import { extendedtypes } from "../../types";
import { tw } from "twind";

function Checkbox({
  value,
  handleChange,
  handleremovexcesschild,
  handleQuestionState,
}: extendedtypes) {
  function checkCheckboxDefault(eventValue: string) {
    let val = value.checkbox.find((val: string) => val === eventValue);
    if (val) {
      return true;
    }
    return false;
  }

  // handleChecbox

  function handleChecbox(e: Preact.JSX.TargetedEvent<HTMLInputElement, Event>) {
    const target = e.target as HTMLInputElement;
    const eventValue = target.value;

    let isChecked = value.checkbox.find((val: string) => val === eventValue);

    if (isChecked) {
      handleremovexcesschild("checkbox", eventValue);
      return;
    }
    handleChange({ checkbox: [...value.checkbox, eventValue] });
  }

  return (
    <>
      <div className={tw`   `}>
        <h1> Tell your stylist about fabrics you prefer ? </h1>
        {handleQuestionState?.("checkbox")?.map(
          (e: { id: string; value: string }) => {
            return (
              <div
                className={tw` ml-4 border-2 border-black my-4 p-2 relative ${
                  checkCheckboxDefault(e.value) ? ` bg-black text-white ` : ``
                } `}
              >
                <input
                  type="checkbox"
                  id={e.id}
                  name={e.id}
                  value={e.value}
                  defaultChecked={checkCheckboxDefault(e.value)}
                  onInput={(e) => handleChecbox(e)}
                  className={tw` opacity-0 absolute top-0 bottom-0 w-full z-10`}
                />
                <label className={tw`w-full px-2 `} htmlFor={e.id}>
                  {e.value}
                </label>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}

export default Checkbox;
