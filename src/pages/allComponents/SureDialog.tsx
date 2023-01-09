// react, router, mobx
import React, { useEffect } from "react";

// stores
import SDialog from "../../store/SDialog";

// interfaces
import ISureDialog from "../../interfaces/ISureDialog";

export default function SureDialog() {
  const dialogElementData: ISureDialog = SDialog.sureDialogData[0];

  useEffect(() => {
    if (
      !document.querySelector<HTMLDialogElement>(
        "#SureDialog-" + dialogElementData.id
      )!.open
    ) {
      const dialog = document.querySelector<HTMLDialogElement>(
        "#SureDialog-" + dialogElementData.id
      )!;
      dialog.showModal();
      dialog.classList.toggle("anim-y");
    }
  }, []);

  return (
    <dialog
      id={`SureDialog-${dialogElementData.id}`}
      className="dialog anim-y mx-[20px] md:mx-auto md:max-w-2xl w-full dialog-padding rounded-2xl duration-200"
    >
      <div className="dialog-header">
        <h2 className="title">{dialogElementData.title}</h2>
        <p
          className={`subtitle ${
            !dialogElementData.isNoFunc && !dialogElementData.isYesFunc
              ? "mb-0"
              : ""
          }`}
        >
          {dialogElementData.text}
        </p>
      </div>
      <div className="flex gap-[10px] md:gap-[20px]">
        {dialogElementData.isYesFunc && (
          <button
            onClick={() => {
              document
                .querySelector<HTMLDialogElement>(
                  `#SureDialog-${dialogElementData.id}`
                )!
                .classList.toggle("anim-y");

              setTimeout(() => {
                dialogElementData.yesFunction!();
              }, 200);
            }}
            className="button bg-emerald-300 dark:bg-emerald-600"
            aria-label={dialogElementData.yesText}
          >
            {dialogElementData.yesText}
          </button>
        )}
        {dialogElementData.isNoFunc && (
          <button
            onClick={() => {
              document
                .querySelector<HTMLDialogElement>(
                  `#SureDialog-${dialogElementData.id}`
                )!
                .classList.toggle("anim-y");

              setTimeout(() => {
                dialogElementData.noFunction!();
              }, 200);
            }}
            className="button bg-rose-300 dark:bg-rose-600"
            aria-label={dialogElementData.noText}
          >
            {dialogElementData.noText}
          </button>
        )}
      </div>
      {dialogElementData.canClose && (
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
                `#SureDialog-${dialogElementData.id}`
              )!
              .classList.toggle("anim-y");

            setTimeout(() => {
              SDialog.deleteDialog();
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
      )}
    </dialog>
  );
}
