import { tw } from "twind";
import Name from "../Name/Nameinput";
import Preact, { createContext } from "preact";
import useMultistepForm from "../../hooks/useMultiStepForm";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio";
import { useContext, useEffect, useState } from "preact/hooks";
import { InitialContextData } from "../../types";
import useFetch from "../../utils/useFetch";
import { FormdataContext } from "../../context/PluginContext";
import { typeapiData, Record } from "../../types/index";
import Step from "../Step/Step";
function Mainmodal({ handleModal }: { handleModal: () => void }) {
  const context = useContext(FormdataContext);

  // let questions: typeapiData | any = useFetch();

  // const [questionData, setquestionData] = useState<Record | any>({});

  // const [formData, setFormData] = useState(
  //   () => JSON.parse(localStorage.getItem("items")!) || context
  // );

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(formData));
  // }, [formData]);

  // const { step, currentStepindex, next, cmpComponentsLength } =
  //   useMultistepForm([
  //     <Name value={formData} handleChange={handleFormdetailsChange} />,
  //     <Checkbox
  //       value={formData}
  //       handleChange={handleFormdetailsChange}
  //       handleremovexcesschild={handleremovexcesschild}
  //       handleQuestionState={handleQuestionState}
  //     />,
  //     <Radio
  //       value={formData}
  //       handleChange={handleFormdetailsChange}
  //       handleQuestionState={handleQuestionState}
  //     />,
  //   ]);

  // // functions

  // function handleQuestionState(id: keyof Record) {
  //   if (Object.keys(questionData).length === 0) {
  //     setquestionData(questions.record);
  //   }

  //   if (!questionData) return;
  //   return questionData[id];
  // }

  // function handleremovexcesschild(
  //   property: keyof InitialContextData,
  //   id: string
  // ) {
  //   console.log(id, "sahi");

  //   setFormData((prev: InitialContextData) => {
  //     let prevdata: string | string[] = prev[property];
  //     if (typeof prevdata === "string") return;
  //     return {
  //       ...prev,
  //       [property]: prevdata.filter((e: String) => {
  //         return e !== id;
  //       }),
  //     };
  //   });
  // }

  // function handleSubmit(e: Preact.JSX.TargetedEvent<HTMLFormElement, Event>) {
  //   e.preventDefault();
  //   if (currentStepindex === cmpComponentsLength - 1) return;
  //   next();
  // }

  // function handleFormdetailsChange(fields: {}) {
  //   setFormData((prev: InitialContextData) => {
  //     return { ...prev, ...fields };
  //   });
  // }

  // function Buttontext() {
  //   if (currentStepindex === 0) {
  //     return (
  //       <button className={tw` w-full bg-pink-400 p-2 text-white `}>
  //         Start Quiz
  //       </button>
  //     );
  //   } else if (currentStepindex === cmpComponentsLength - 1) {
  //     return (
  //       <button
  //         className={tw`w-full bg-red-400 p-2 text-white font-extrabold `}
  //         onClick={handleModal}
  //       >
  //         Finish
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button
  //         className={tw`w-full bg-blue-400 p-2 text-white font-extrabold `}
  //       >
  //         Next
  //       </button>
  //     );
  //   }
  // }
  return (
    // <form onSubmit={handleSubmit}>
    //   {step}
    //   {Buttontext()}
    // </form>
    <Step handleModal={handleModal} />
  );
}

export default Mainmodal;

// [{

//   heading: "",
//   "quetstion" : "",
//   "type": "checkbox" | "radio" ...,
//   options: [{

//   }]
// }]
