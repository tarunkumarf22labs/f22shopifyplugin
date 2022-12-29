import { createContext } from "preact";
import { tw } from "twind";
import { mainmodalprops } from "../../types";

function Modal({ children, handleModal }: mainmodalprops) {
  return (
    <div
      className={tw`  w-screen h-screen bg-[#0f172acc]   absolute z-10 `}
      onClick={() => handleModal()}
    >
      <div
        className={tw` shadow-md p-4 top-2/4 left-2/4 translate-x-1/2 translate-x-[-50%] translate-y-[-50%] absolute bg-white rounded-lg  z-50  `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
