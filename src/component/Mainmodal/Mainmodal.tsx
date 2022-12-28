import { tw } from "twind";
import { mainmodalprops } from "../../types/Preacttwind";
import Name from "../Name";
import Preact from "preact";
import usemultistepForm from "../../utils/hooks/useMultiStepForm";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio";
import { useEffect, useState } from "preact/hooks";
import { useFormdataDispatch } from "../../context/PluginContext";
import { interfaceforcontextvalueINITIAL_DATA } from "../../types/Preacttwind";

function Mainmodal({ handleChange }: mainmodalprops) {
  const context = useFormdataDispatch();

  //  may have to cnvert this into custom hook
  const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem("items")!) || context
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(formData));
  }, [formData]);

  const { step, currentStepindex, next, cmpComponentsLength } =
    usemultistepForm([
      <Name value={formData} handleChange={handleFormdetailsChange} />,
      <Checkbox
        value={formData}
        handleChange={handleFormdetailsChange}
        handleremovexcesschild={handleremovexcesschild}
      />,
      <Radio value={formData} handleChange={handleFormdetailsChange} />,
    ]);

  // functions
  function handleremovexcesschild(
    property: keyof interfaceforcontextvalueINITIAL_DATA,
    id: string
  ) {
    console.log(id, "sahi");

    setFormData((prev: interfaceforcontextvalueINITIAL_DATA) => {
      return {
        ...prev,
        [property]: prev[property].filter((e: String) => {
          return e !== id;
        }),
      };
    });
  }

  function handleSubmit(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();

    if (currentStepindex === cmpComponentsLength - 1) return handleChange();
    next();
  }

  function handleFormdetailsChange(fields: {}) {
    setFormData((prev: interfaceforcontextvalueINITIAL_DATA) => {
      return { ...prev, ...fields };
    });
  }

  function Buttontext() {
    if (currentStepindex === 0) {
      return "start";
    } else if (currentStepindex === cmpComponentsLength - 1) {
      return "finish";
    } else {
      return "next";
    }
  }
  return (
    <div
      className={tw`  w-screen h-screen bg-[#0f172acc]   absolute z-10 `}
      onClick={() => handleChange()}
    >
      <div
        className={tw` shadow-md p-4 top-2/4 left-2/4 translate-x-1/2 translate-x-[-50%] translate-y-[-50%] absolute bg-white rounded-lg  z-50 `}
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          {step}
          <button>{Buttontext()}</button>
        </form>
      </div>
    </div>
  );
}

export default Mainmodal;
