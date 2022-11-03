import React from "react";

export default function InfoDialog() {
  return (
    <dialog
      id="settingsDialog"
      className="dialog mx-[20px] md:mx-auto md:max-w-6xl w-full dialog-padding rounded-2xl"
    >
      <div className="dialog-header">
        <h2 className="title">Настройки</h2>
        <h3 className="subtitle">
          Настройки приложения... Ожидаемо, наверное.
        </h3>
      </div>
      <div></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dialog-close"
        onClick={() => {
          document.querySelector<HTMLDialogElement>("#settingsDialog")?.close();
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
