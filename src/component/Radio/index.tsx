import { logicComponentsprops } from "../../types/Preacttwind";

function Radio({ value, handleChange }: logicComponentsprops) {
  function handleradio(e) {
    handleChange({ radioval: e.target.value });
  }

  return (
    <>
      <div>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
          onChange={handleradio}
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="CSS"
          onChange={handleradio}
        />
        <label for="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="javaScript"
          onChange={handleradio}
        />
        <label for="javascript">JavaScript</label>
      </div>
    </>
  );
}

export default Radio;
