import React, { useEffect } from "react";
import ISureDialog from "../../interfaces/ISureDialog";
import SDialog from "../../store/SDialog";

export default function SureDialog() {
  const dialogElementData: ISureDialog = SDialog.sureDialogData[0];
  useEffect(() => {
    document.querySelector<HTMLDialogElement>("dialog")?.close();
    document
      .querySelector<HTMLDialogElement>("#" + dialogElementData.id)!
      .showModal();
  }, []);
  return (
    <dialog
      id={dialogElementData.id}
      className="dialog mx-[20px] md:mx-auto md:max-w-xl w-full dialog-padding rounded-2xl"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.title}</h2>
        <h3
          className={`subtitle ${
            !dialogElementData.isNoFunc && !dialogElementData.isYesFunc
              ? "mb-0"
              : ""
          }`}
        >
          {dialogElementData.text}
        </h3>
      </div>
      <div className="flex gap-[10px] md:gap-[20px]">
        {dialogElementData.isYesFunc && (
          <button
            onClick={dialogElementData.yesFunction}
            className="button bg-emerald-300 dark:bg-emerald-600"
          >
            {dialogElementData.yesText}
          </button>
        )}
        {dialogElementData.isNoFunc && (
          <button
            onClick={dialogElementData.noFunction}
            className="button bg-rose-300 dark:bg-rose-600"
          >
            {dialogElementData.noText}
          </button>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
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
