import React, { useEffect } from "react";
import IInfoDialog from "../../interfaces/IInfoDialog";
import SInfoDialog from "../../store/SInfoDialog";

export default function InfoDialog() {
  const dialogElementData: IInfoDialog = SInfoDialog.infoDialogData[0];
  useEffect(() => {
    if (
      !document.querySelector<HTMLDialogElement>("#" + dialogElementData.id)!
        .open
    ) {
      document
        .querySelector<HTMLDialogElement>("#" + dialogElementData.id)!
        .showModal();
    }
  }, []);
  return (
    <dialog
      id={dialogElementData.id}
      className="dialog mx-[20px] md:mx-auto md:max-w-2xl w-full dialog-padding rounded-2xl"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.title}</h2>
        <h3 className="subtitle">{dialogElementData.description}</h3>
      </div>
      <div className="flex flex-col gap-[10px]">
        {SInfoDialog.infoDialogData[0].text.map((item) => {
          return (
            <p
              key={item}
              className="dialog-text p-[10px] odd:bg-neutral-200 odd:dark:bg-neutral-800 odd:rounded-2xl"
            >
              {item}
            </p>
          );
        })}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
          SInfoDialog.deleteDialog();
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
