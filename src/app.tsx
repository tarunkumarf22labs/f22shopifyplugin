import { tw } from "twind";
import { useState } from "preact/hooks";
import Mainmodal from "./component/Mainmodal";
import Modal from "./component/Modal";
import { Pill } from "./component/pill";

function App() {
  const [modal, setmodal] = useState<boolean>(false);

  function handleModal() {
    setmodal((prev) => !prev);
  }

  return (
    <div>
      <Pill
        text="+"
        type="circle"
        onClick={handleModal}
        className=" bg-black "
      />

      {modal ? (
        <Modal handleModal={handleModal}>
          <Mainmodal handleModal={handleModal} />{" "}
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
