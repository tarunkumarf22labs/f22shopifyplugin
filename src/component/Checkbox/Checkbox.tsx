import Preact from "preact";
import { extendedtypes, OptionClass } from "../../types";
import { tw } from "twind";

function Checkbox({
  value,
  handleChange,
  handleremovexcesschild,
  handleQuestionState,
  questiontype,
  inputbox,
  placheoldertext,
}: extendedtypes) {
   
  // functions
  function checkCheckboxDefault(eventValue: string) {
    let val = value.checkbox.find((val: string) => val === eventValue);
    if (val) {
      return true;
    }
    return false;
  }

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


  let val = handleQuestionState?.(questiontype!);
  if (typeof val === "undefined") return <div></div>;

  let { question, options, type } = val;
  console.log(question);

  console.log(type === "checkbox/image", type);

  return (
    <>
      <h1> {question} </h1>
      <div className={tw`grid grid-cols-4 justify-center  `}>
        {options?.map((e: OptionClass | string, i: number) => {
          if (typeof e === "string") return;
          return (
            <>
              <div
                className={tw` ml-4 border-2 border-black my-4 p-2 relative  ${
                  checkCheckboxDefault(e.value as string)
                    ? ` bg-pink-300 text-white `
                    : ``
                } `}
              >
                <input
                  type="checkbox"
                  id={e.id}
                  name={e.id}
                  value={e.value}
                  defaultChecked={checkCheckboxDefault(e.value as string)}
                  onInput={(e) => handleChecbox(e)}
                  className={tw` opacity-0 absolute top-0 bottom-0 w-full z-10`}
                />
                {type === "checkbox/image" ? (
                  <div className="">
                    <img className="p-8" src={e.imgurl} />
                  </div>
                ) : (
                  ""
                )}
                <label
                  className={tw`w-full px-2 whitespace-nowrap `}
                  htmlFor={e.id}
                >
                  {e.value}
                </label>
              </div>

              {inputbox === true && options.length === i + 1 ? (
                <div
                  className={tw` ml-4 border-2 border-black my-4 relative   `}
                >
                  <input
                    type="input"
                    placeholder={placheoldertext}
                    className={tw` outline-none p-2 absolute top-0 bottom-0 w-full z-10`}
                  />
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Checkbox;
