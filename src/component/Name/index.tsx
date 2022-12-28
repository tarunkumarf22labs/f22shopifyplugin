import { JSXInternal } from "preact/src/jsx";
import { tw } from "twind";
import { logicComponentsprops } from "../../types/Preacttwind";

function Name({ value, handleChange }: logicComponentsprops) {
  return (
    <div>
      <section className={tw``}>
        <h2> Hi gorgeous! </h2>
        <h2> I’m Priya </h2>
        <p> Tell us about you and look out for my style tips</p>

        <input
          type="text"
          required
          className={tw`w-full`}
          value={value.firstName}
          onChange={(e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) =>
            handleChange({ firstName: e.target.value })
          }
        />
      </section>
    </div>
  );
}

export default Name;
