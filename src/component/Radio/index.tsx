import { logicComponentsprops, OptionClass } from "../../types";
import Preact from "preact";
import { tw } from "twind";
function Radio({
  value,
  handleChange,
  handleQuestionState,
  questiontype,
}: logicComponentsprops) {
  function handleradio(e: Preact.JSX.TargetedEvent<HTMLInputElement, Event>) {
    const target = e.target as HTMLInputElement;
    handleChange({ radioval: target.value });
  }

  function checkradioDefault(id: string) {
    let val = value.radioval === id;
    if (val) {
      return true;
    } else {
      false;
    }
  }
  const questionData = handleQuestionState?.(questiontype!);
  if (!questionData) return <div></div>;
  const { question, options } = questionData;
  return (
    <div className={tw` h-80 w-96  `}>
      <h2>{question} ?</h2>
      <h4>You can select only one option</h4>
      <div className={tw`mt-4`}>
        {options?.map((e: any) => {
          return (
            <div
              className={tw` border-2  border-black my-4 p-1 relative ${
                checkradioDefault(e as string)
                  ? ` bg-pink-200  text-white `
                  : ``
              } `}
            >
              <input
                type="radio"
                id={e}
                name="fav_language"
                value={e}
                className={tw` opacity-0 absolute top-0 bottom-0 w-full z-10`}
                onChange={handleradio}
                defaultChecked={checkradioDefault(e as string)}
              />
              <label htmlFor={e} className={tw`pl-1`}>
                {e}
              </label>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Radio;
