import { tw } from "twind";
import Name from "../Name/Nameinput";
import Preact, { createContext } from "preact";
import useMultistepForm from "../../hooks/useMultiStepForm";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio";
import {
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "preact/hooks";
import { Apiinterface, InitialContextData } from "../../types";
import useFetch from "../../utils/useFetch";
import { FormdataContext } from "../../context/PluginContext";
import { Rangesliders } from "../Rangesliders";
import { Select } from "../Measurments";
import { dataWelcome } from "../../types";
// :

function Step({ handleModal }: { handleModal: () => void }) {
  const context: any = useContext(FormdataContext);
  let questions = useFetch();
  const [formData, setFormData] = useState(
    () => JSON.parse(localStorage.getItem("items")!) || context
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(formData));
  }, [formData]);

  const { step, currentStepindex, next, cmpComponentsLength } =
    useMultistepForm([
      <Name value={formData} handleChange={handleFormdetailsChange} />,
      <Checkbox
        value={formData}
        handleChange={handleFormdetailsChange}
        handleremovexcesschild={handleremovexcesschild}
        handleQuestionState={handleQuestionState}
        questiontype="What products will you NEVER wear"

      />,
      <Radio
        value={formData}
        handleChange={handleFormdetailsChange}
        handleQuestionState={handleQuestionState}
        questiontype="Tell your stylist about fabrics you prefer"
      />,
      <Checkbox
        value={formData}
        handleChange={handleFormdetailsChange}
        handleremovexcesschild={handleremovexcesschild}
        handleQuestionState={handleQuestionState}
        questiontype="Sleeve styles that you wear"
      />,

      <Checkbox
        value={formData}
        handleChange={handleFormdetailsChange}
        handleremovexcesschild={handleremovexcesschild}
        handleQuestionState={handleQuestionState}
        questiontype="Tell your stylist prints that you AVOID"
                inputbox={true}
        placheoldertext="Enter the text"
      />,
      <Rangesliders />,
      <Select />,
    ]);

  // functions

  function handleQuestionState(id: string) {
    return questions.record.find((e: dataWelcome) => e.question === id)!;
  }

  function handleremovexcesschild(
    property: keyof InitialContextData,
    id: string
  ) {
    setFormData((prev: InitialContextData) => {
      let prevdata: string | string[] = prev[property];
      if (typeof prevdata === "string") return;
      return {
        ...prev,
        [property]: prevdata.filter((e: String) => {
          return e !== id;
        }),
      };
    });
  }

  function handleSubmit(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>) {
    e.preventDefault();
    if (currentStepindex === cmpComponentsLength - 1) return;
    next();
  }

  function handleFormdetailsChange(fields: {}) {
    setFormData((prev: InitialContextData) => {
      return { ...prev, ...fields };
    });
  }

  function Buttontext() {
    if (currentStepindex === 0) {
      return (
        <button className={tw` w-full bg-pink-400 p-2 text-white `}>
          Start Quiz
        </button>
      );
    } else if (currentStepindex === cmpComponentsLength - 1) {
      return (
        <button
          className={tw`w-full bg-red-400 p-2 text-white font-extrabold `}
          onClick={handleModal}
        >
          Finish
        </button>
      );
    } else {
      return (
        <button
          className={tw`w-full bg-blue-400 p-2 text-white font-extrabold `}
        >
          Next
        </button>
      );
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {step}
        {Buttontext()}
      </form>
    </div>
  );
}

export default Step;
