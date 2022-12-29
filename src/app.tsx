import { tw } from "twind";
import { useState } from "preact/hooks";
import Mainmodal from "./component/Mainmodal";
import Modal from "./component/Modal";

function App() {
  const [modal, setmodal] = useState<boolean>(false);

  function handleModal() {
    setmodal((prev) => !prev);
  }

  return (
    <div>
      <h1
        className={tw` absolute bottom-5 right-5 w-12 h-12 rounded-full bg-black  text-lg  text-white text-center flex items-center justify-center  cursor-pointer z-0 `}
        onClick={handleModal}
      >
        <div> +</div>
      </h1>
      {modal ? (
        <Modal handleModal={handleModal}>
          <Mainmodal handleModal={handleModal} />{" "}
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
