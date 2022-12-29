import { JSXInternal } from "preact/src/jsx";
import { tw } from "twind";
import { logicComponentsprops } from "../../types";

function Name({ value, handleChange }: logicComponentsprops) {
  return (
    <div>
      <section
        className={tw` flex flex-col justify-center items-center h-80 w-96 `}
      >
        <h2 className={tw``}>
          {" "}
          Hi <span class={tw` text-pink-400 `}>gorgeous!</span>{" "}
        </h2>
        <h2 className={tw`mb-1`}> I’m Priya </h2>
        <p className={tw`mb-1`}>
          {" "}
          Tell us about you and look out for my style tips
        </p>

        <input
          type="text"
          placeholder={"Enter your name "}
          required
          className={tw`w-full border-black border-1 `}
          value={value.firstName}
          onChange={(e: Event) => {
            const target = e.target as HTMLInputElement;
            handleChange({ firstName: target.value });
          }}
        />
      </section>
    </div>
  );
}

export default Name;
