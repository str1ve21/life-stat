// react, router, mobx
import React, { useEffect } from "react";

// stores
import SInfoDialog from "../../store/SInfoDialog";

// interfaces
import IInfoDialog from "../../interfaces/IInfoDialog";

export default function InfoDialog() {
  const dialogElementData: IInfoDialog = SInfoDialog.infoDialogData[0];

  useEffect(() => {
    if (
      !document.querySelector<HTMLDialogElement>(
        "#InfoDialog-" + dialogElementData.id
      )!.open
    ) {
      const dialog = document.querySelector<HTMLDialogElement>(
        "#InfoDialog-" + dialogElementData.id
      )!;
      dialog.showModal();
      dialog.classList.toggle("anim-y");
    }
  }, []);

  return (
    <dialog
      id={`InfoDialog-${dialogElementData.id}`}
      className="dialog anim-y dialog-padding md:max-w-3xl w-full mx-[20px] md:mx-auto rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.title}</h2>
        <p className="subtitle">{dialogElementData.description}</p>
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
          document
            .querySelector<HTMLDialogElement>(
              `#InfoDialog-${dialogElementData.id}`
            )!
            .classList.toggle("anim-y");

          setTimeout(() => {
            SInfoDialog.deleteDialog();
          }, 200);
        }}
        aria-label="Закрыть диалоговое окно"
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
