import { tw } from "twind";

export function Pill({
  onClick,
  type = "circle",
  text,
  className,
}: {
  onClick: () => void;
  type: "circle" | "box";
  text: string;
  className?: string;
}) {
  return (
    <div>
      <h1
        className={tw` absolute bottom-5 right-5 w-12 h-12  bg-black  text-lg  text-white text-center flex items-center justify-center  cursor-pointer z-0  
        ${type === "circle" ? "rounded-full" : " "}
         ${className}
        `}
        onClick={onClick}
      >
        <div>{text}</div>
      </h1>
    </div>
  );
}
