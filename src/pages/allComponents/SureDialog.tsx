import React from "react";
import ISureDialog from "../../interfaces/ISureDialog";

interface IProps {
  data: ISureDialog;
}

export default function SureDialog(props: IProps) {
  return (
    <dialog
      id={`sureDialog${props.data.counterID}`}
      className="dialog max-w-3xl p-[40px] rounded-2xl"
    >
      <h2 className="text-[3vh] lg:text-[6vh] text-ssp font-bold">
        {props.data.title}
      </h2>
      <h3 className="mb-[40px] text-[1vh] lg:text-[2vh] text-raleway opacity-80">
        {props.data.text}
      </h3>
      <div className="flex gap-[20px]">
        <button
          onClick={props.data.yesFunction}
          className="px-8 py-2 bg-emerald-300 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
        >
          {props.data.yesText}
        </button>
        <button
          onClick={props.data.noFunction}
          className="px-8 py-2 bg-rose-300 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
        >
          {props.data.noText}
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute top-[20px] right-[20px] w-[30px] cursor-pointer"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>(
              `#sureDialog${props.data.counterID}`
            )!
            .close();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </dialog>
  );
}
