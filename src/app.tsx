import { tw } from "twind";
import { useState } from "preact/hooks";
import Mainmodal from "./component/Mainmodal/Mainmodal";
function App() {
  const [modal, setmodal] = useState<boolean>(false);

  function handleChange() {
    setmodal((prev) => !prev);
  }
  return (
    <div>
      <h1
        className={tw`absolute bottom-5 right-5 w-12 h-12 rounded-full bg-black  text-lg  text-white text-center flex items-center justify-center  cursor-pointer z-0 `}
        onClick={handleChange}
      >
        <div> +</div>
      </h1>
      {modal ? <Mainmodal handleChange={handleChange} /> : null}
    </div>
  );
}

export default App;
