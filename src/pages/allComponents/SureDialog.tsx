import React, { useEffect } from "react";
import ISureDialog from "../../interfaces/ISureDialog";
import SDialog from "../../store/SDialog";

export default function SureDialog() {
  const dialogElement: ISureDialog = SDialog.sureDialogData[0];
  return (
    <dialog
      id={dialogElement.id}
      className="dialog mx-[20px] md:mx-auto md:max-w-xl dialog-padding rounded-2xl"
    >
      <h2 className="title">{dialogElement.title}</h2>
      <h3 className="subtitle">{dialogElement.text}</h3>
      <div className="flex gap-[10px] md:gap-[20px]">
        <button
          onClick={dialogElement.yesFunction}
          className="button bg-emerald-300"
        >
          {dialogElement.yesText}
        </button>
        <button
          onClick={dialogElement.noFunction}
          className="button bg-rose-300"
        >
          {dialogElement.noText}
        </button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
          document
            .querySelector<HTMLDialogElement>(`#${dialogElement.id}`)!
            .close();
          SDialog.deleteDialog();
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
